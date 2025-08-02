# Nexus Academy: AI Playground Implementation Guide

**Document Version:** 1.0
**Date:** August 1, 2024
**Feature Status:** Ready for Implementation

---

## 1.0 Overview & Strategic Goal

This document provides the complete, end-to-end instructions for implementing the **AI Playground** feature within Nexus Academy.

**Strategic Goal:** To deliver on our core value proposition of an "agentic learning ecosystem" by providing students with an interactive, real-time environment to practice their AI prompting skills. This feature is a paid service, and access must be securely restricted to students who are actively enrolled in a given course.

**Architecture:** We will use a secure, three-part architecture:
1.  A reusable `AIPlayground.vue` frontend component.
2.  A secure, server-side **Firebase Cloud Function** that acts as a proxy to the AI provider.
3.  A new `hasPlayground` field in our Firestore `lessons` data structure to control which lessons display the playground.

---

## 2.0 Part 1: Backend Setup (The Secure Cloud Function)

This is the most critical part of the setup. We will create a secure backend endpoint that protects our API keys and verifies student enrollment before processing any AI requests.

### **Step 2.1: Get Your Google Gemini API Key**

1.  Navigate to the [Google AI Studio](https://aistudio.google.com/).
2.  Sign in with your Google account.
3.  Click the **"Get API key"** button and then **"Create API key in new project"**.
4.  Copy the generated API key and save it to a secure temporary location.
5.  **Crucially:** Go to the [Google Cloud Console](https://console.cloud.google.com/), select your `nexus-academy-prod` Firebase project, and ensure the **"Generative Language API"** is enabled.

### **Step 2.2: Install Backend Dependencies**

1.  Open a terminal inside your `nexus-academy-prod` project.
2.  Navigate into the `functions` directory: `cd functions`
3.  Install the Google Generative AI SDK for Node.js:
    ```bash
    npm install @google/generative-ai
    ```
4.  Navigate back to the project root: `cd ..`

### **Step 2.3: Securely Configure Your API Key**

We will store your secret API key in Firebase's secure environment configuration, not in our code.

1.  In your project's root terminal, run the following command, replacing the placeholder with the Gemini API key you copied:
    ```bash
    firebase functions:config:set gemini.key="YOUR_GEMINI_API_KEY"
    ```
2.  You will see a `✔ Functions config updated.` message.



### **Step 2.4: Deploy the Backend Function
You must deploy this new and updated function for it to become active on Google's servers.

1. In your project's root terminal, run the following command:

* **Generated bash**
firebase deploy --only functions

2. Wait for the deployment to complete. You will see a ✔ Deploy complete! message.

### **Step 2.5: Implement the Cloud Function Code**

This function is our secure proxy. It will verify user enrollment before calling the Gemini API.

*   **File Location:** `nexus-academy-prod/functions/index.js`
*   **Action:** Add the following code to this file. A good place is after your existing `paystackWebhook` function.

```javascript
// Add this to the top of /functions/index.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Add this new function inside the file
exports.askAida = functions.https.onCall(async (data, context) => {
  // 1. Authentication Check
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "Authentication is required.");
  }

  // 2. Input Validation
  const { prompt, courseId } = data;
  const userId = context.auth.uid;
  if (!prompt || typeof prompt !== "string" || prompt.length > 2000) {
    throw new functions.https.HttpsError("invalid-argument", "A valid prompt is required.");
  }
  if (!courseId || typeof courseId !== "string") {
    throw new functions.https.HttpsError("invalid-argument", "A valid course ID is required.");
  }

  // 3. **CRITICAL** Enrollment Verification
  try {
    const enrollmentId = `${userId}_${courseId}`;
    const enrollmentRef = db.collection("enrollments").doc(enrollmentId);
    const enrollmentDoc = await enrollmentRef.get();
    if (!enrollmentDoc.exists || enrollmentDoc.data().status !== 'active') {
      throw new functions.https.HttpsError("permission-denied", "You must be enrolled in this course to use the AI Playground.");
    }
  } catch (error) {
    console.error("Enrollment check failed for user:", userId, "for course:", courseId, error);
    if (error.code === 'permission-denied') { throw error; }
    throw new functions.https.HttpsError("internal", "Could not verify your enrollment status.");
  }

  // 4. Call the AI Provider
  try {
    const GEMINI_API_KEY = functions.config().gemini.key;
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const fullPrompt = `You are "Aida," an expert AI engineering tutor for Nexus Academy. A student has asked the following question. Provide a helpful, concise, and encouraging response. Student's question: "${prompt}"`;
    const result = await model.generateContent(fullPrompt);
    return { response: result.response.text() };
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new functions.https.HttpsError("internal", "An error occurred with the AI. Please try again.");
  }
});