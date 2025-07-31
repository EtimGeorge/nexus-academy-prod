# Nexus Academy: The Definitive Project Roadmap

**Document Version:** 2.0
**Date:** July 30, 2024
**Status:** Phase 2 In Progress

## 1. Mission Statement & Core Vision

Our mission is to democratize AI literacy by providing an adaptive, engaging, and highly effective learning environment. We are not a passive video platform; we are an **agentic learning ecosystem** where students learn by doing, supported by a suite of custom-built AI tools.

---

## 2. Completed Milestones (Phase 1: Foundation & Public-Facing Site)

We have successfully built the complete, professional foundation for our application.

*   **✅ Professional Tech Stack:** Project fully migrated to a stable **Vite + Vue.js** foundation with **Vue Router**.
*   **✅ Complete Brand Identity:** The new "Nexus Dark" brand, logo, and design system are fully integrated.
*   **✅ Public-Facing Website:** All core public pages (Home, Courses, Blog, About, Contact, Legal) are complete and built as reusable Vue components.
*   **✅ Secure Authentication:** A fully branded and functional user authentication system is in place, supporting both email/password and Google Sign-In, powered by **Firebase Authentication**.
*   **✅ E-commerce & Payment Flow:** A multi-method payment modal is designed, and the secure payment flow using **Paystack** and a **Firebase Cloud Function** is architected and ready for deployment.

---

## 3. Current Phase (Phase 2: Activating the Live Learning Experience)

This is the phase we are currently executing. The goal is to transition from a static marketing site to a dynamic, data-driven learning platform.

### Task 2.1: Unify the Course Data Source (In Progress)
*   **Objective:** Make Firestore the single source of truth for all course data, eliminating our reliance on mock data files.
*   **Sub-Tasks:**
    *   **[Action Item]** Create and run a **one-time "seeder" script** to automatically migrate the rich curriculum data from `courseData.js` into the `courses` and `lessons` collections in Firestore.
    *   **[Action Item]** Refactor the `CoursesView.vue` and `CourseDetailView.vue` components to fetch their content exclusively from the Firestore database via our `db.js` service.

### Task 2.2: Build the Authenticated User Dashboard
*   **Objective:** Create the central hub for the student's learning journey.
*   **Sub-Tasks:**
    *   **✅ DONE:** Build the main `DashboardView.vue` shell with its responsive sidebar navigation.
    *   **✅ DONE:** Migrate all necessary backend service files (`db.js`, `auth.js`, etc.).
    *   **[Action Item]** Build the `MyLearning.vue` sub-page, which will fetch and display a user's *real* enrolled courses and progress from Firestore.
    *   **[Action Item]** Build the `ProfilePage.vue` sub-page, allowing users to view and edit their profile data, which is saved to Firestore.
    *   **[Action Item]** Build the `SettingsPage.vue` sub-page, enabling users to manage their account security.

---

## 4. Next Phase (Phase 3: The "Digital Classroom" - Core Agentic Features)

This is the most exciting phase, where we build the unique features that deliver on our agentic promise.

### Task 3.1: Build the Course Player Experience
*   **Objective:** Create the immersive, "lights-out" learning environment.
*   **Sub-Tasks:**
    *   **✅ DONE:** The UI/UX for `CoursePlayerView.vue` is complete.
    *   **[Action Item]** Integrate real video content. We will need a service like **Vimeo** or **Wistia** for secure video hosting. The `videoURL` in our `lessons` documents in Firestore will be updated with the real video links.
    *   **[Action Item]** Implement **Progress Tracking**. We will create a `completeLesson` function in `db.js`. When a user clicks a "Complete & Continue" button in the `CoursePlayerView`, this function will update their progress in the corresponding `enrollments` document in Firestore.

### Task 3.2: Implement the "AI Playground"
*   **Objective:** Create an interactive sandbox where students can practice their prompting skills in real-time, directly within the course player.
*   **Sub-Tasks:**
    *   Design and build a new, reusable `Playground.vue` component.
    *   This component will have an input area for the user's prompt and an output area for the AI's response.
    *   It will make a direct, client-side API call to an LLM provider (like OpenAI or Google's AI Platform) to get the response.
    *   The `Playground.vue` component will be embedded within specific lessons in the `CoursePlayerView`.

### Task 3.3: Launch "Aida," the AI Tutor
*   **Objective:** Connect our users to their 24/7 AI tutor via WhatsApp.
*   **Sub-Tasks:**
    *   **[Action Item]** Upgrade the Firebase project to the **Blaze Plan** to enable Cloud Functions.
    *   **[Action Item]** Set up the **WhatsApp Business API**.
    *   **[Action Item]** Build a new, dedicated Firebase Cloud Function to act as the webhook endpoint for WhatsApp messages.
    *   This function will use a **RAG (Retrieval-Augmented Generation)** system. It will take the user's question, search our Firestore `lessons` collection for the most relevant content, and then feed that content to an LLM to generate a precise, context-aware answer.
    *   Build a simple "Welcome" flow that adds a new student to the official Nexus Academy WhatsApp group upon their first enrollment.

---

## 5. Final Phase (Phase 4: The Admin Dashboard & Launch)

This phase gives us the tools to manage and scale the platform.

### Task 4.1: Build the Admin Dashboard (CMS)
*   **Objective:** Create a secure, admin-only area for managing the platform's content.
*   **Sub-Tasks:**
    *   Implement **role-based access control** in our Firestore security rules and Vue Router.
    *   Build the `AdminDashboardView.vue` shell.
    *   Build a `CourseEditor.vue` component that allows admins to create, edit, and publish new courses and lessons directly to the Firestore database, completely replacing the need for the seeder script.
    *   Build a `UserManagement.vue` component for viewing student progress and managing enrollments.
    *   Build a `CryptoVerification.vue` component where an admin can view `enrollments` with the status `pending_verification` and manually approve them, which will then grant the user access.

### Task 4.2: Final Launch Preparations
*   **Objective:** Prepare the platform for public launch.
*   **Sub-Tasks:**
    *   Switch all API keys (Paystack, Firebase, etc.) from **Test Mode** to **Live/Production Mode**.
    *   Perform final, end-to-end testing of the entire user journey, from purchase to course completion.
    *   Deploy the final, production-ready build of the application.