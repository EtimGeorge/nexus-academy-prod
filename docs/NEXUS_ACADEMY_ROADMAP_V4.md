# Nexus Academy: Definitive Roadmap & Project Charter

**Document Version:** 4.0
**Date:** July 31, 2024
**Project Status:** Phase 4 Complete. Pivoting to Phase 2 (Live Data Integration).

---

## 1.0 Executive Vision & Mission Statement

**Mission:** To democratize AI literacy by providing an adaptive, engaging, and highly effective learning environment. 

**Vision:** Nexus Academy is not a passive video platform; it is an **agentic learning ecosystem**. Our core value proposition is to close the gap between knowing and doing, transforming students into proficient, real-world builders of AI solutions. We achieve this through a project-based curriculum, a dynamic and constantly updated content library, and unparalleled, AI-powered student support via our custom tutor, "Aida".

---

## 2.0 Project Architecture & Technology Stack

This project is built on a modern, professional, and scalable technology stack designed for a production-ready Single Page Application (SPA).

*   **Frontend Framework:** **Vue.js 3** (Composition API)
*   **Build Tool & Dev Environment:** **Vite**
*   **Routing:** **Vue Router 4** (Hash Mode for deployment compatibility)
*   **Styling:** Mobile-First CSS with a "Nexus Dark" brand identity
*   **Backend Services (BaaS):** **Google Firebase**
    *   **Database:** Firestore (NoSQL)
    *   **Authentication:** Firebase Authentication (Email/Password, Google OAuth)
    *   **Serverless Functions:** Firebase Cloud Functions (for secure webhooks)
*   **Payment Gateway:** **Paystack** (for traditional payments), with a manual verification flow for Crypto.

---

## 3.0 Completed Milestones

### ✅ Phase 1: Foundation & Public-Facing Site
*   **Status:** 100% COMPLETE.
*   **Deliverables:**
    *   A stable Vite + Vue.js project foundation.
    *   A complete, professionally branded public website with a persistent `TheNavbar.vue` and `TheFooter.vue`.
    *   All core public "View" components are built and routed (`HomeView`, `CoursesView`, `BlogView`, `SinglePostView`, `WhyNexusView`, etc.).
    *   A functional, branded `LoginView` and `SignupView` are integrated with Firebase Authentication.
    *   A multi-method `PaymentModal` component is designed and implemented.

### ✅ Phase 4: The Admin Panel & Content Management System (CMS)
*   **Status:** 100% COMPLETE.
*   **Deliverables:**
    *   A secure, role-based `/admin` section protected by a Vue Router Navigation Guard.
    *   A professional, responsive `AdminView.vue` shell with dedicated sidebar navigation.
    *   **Course Management System:** A fully functional `AdminCourses.vue` list view and a rich, feature-complete `CourseEditorView.vue` for creating, updating, and deleting courses and their nested lessons directly in Firestore.
    *   **Blog Management System:** A fully functional `AdminBlog.vue` list view and a `BlogPostEditorView.vue` for creating, updating, and deleting blog posts.
    *   **Enrollment Management System:** A functional `AdminEnrollments.vue` page with filtering for "Pending Verification" enrollments, allowing admins to activate crypto payments.
    *   **User Management System:** A functional `AdminUsers.vue` page for viewing all users and securely managing `admin`/`student` roles.

---

## 4.0 Current Phase: Activating the Live Platform (Phase 2)

**Objective:** To connect all user-facing components to the live Firestore database, permanently solving the "Data Disconnect" and enabling the full, end-to-end student journey.

### **Task 2.1: Data Migration (The "Seeding" Process)**
*   **Status:** **PENDING - NEXT ACTION ITEM.**
*   **Objective:** Populate the live Firestore database with our professionally crafted curriculum and blog content using the Admin Panel we just built.
*   **Action Plan (for CEO):**
    1.  Log into the Admin Panel.
    2.  Navigate to `/admin/courses` and click "Create New Course".
    3.  Systematically copy the course and lesson data from the (now legacy) `/src/services/courseData.js` file into the Course Editor form, saving each course.
    4.  Navigate to `/admin/blog` and click "Create New Post".
    5.  Systematically copy the blog post data from the (now legacy) `/src/services/mockData.js` file into the Blog Post Editor, saving each post.
*   **Success Metric:** The `courses`, `lessons`, and `blogPosts` collections in Firestore are fully populated with our initial content.

### **Task 2.2: Refactor Public Site to Use Live Data**
*   **Status:** PENDING.
*   **Objective:** Make the public website fully dynamic by fetching all content from Firestore.
*   **Action Plan (for CPO/CTO):**
    1.  Refactor `CoursesView.vue` and `CourseDetailView.vue` to use the `getAllCourses`, `getCourseById`, and `getCourseLessons` functions from `db.js`.
    2.  Refactor `BlogView.vue` and `SinglePostView.vue` to use the `getAllBlogPosts` and `getBlogPostById` functions from `db.js`.
    3.  Refactor the "Featured Courses" section of `HomeView.vue` to fetch live data.
    4.  **Crucially:** Once the refactor is complete, the legacy `courseData.js` and `mockData.js` files will be **deleted** from the project.
*   **Success Metric:** The public website's content is 100% sourced from the Firestore database.

### **Task 2.3: Build the Authenticated User Dashboard**
*   **Status:** PENDING.
*   **Objective:** Build the complete, data-driven student dashboard experience.
*   **Action Plan (for CPO/CTO):**
    1.  Build the definitive `MyLearning.vue` component. It will call `getEnrolledCourses(currentUser.uid)` to display a personalized list of the student's courses with their real `progressPercentage`.
    2.  Implement the **"WhatsApp Onboarding"** feature within `MyLearning.vue`, which will display a one-time "Join the Tutor Group" CTA for newly enrolled students.
    3.  Build the definitive `ProfilePage.vue`, allowing users to update their `displayName`, which will be saved to Firestore via `updateUserProfileData()`.
    4.  Build the definitive `SettingsPage.vue` for managing account security (e.g., password changes).
*   **Success Metric:** A logged-in user has a fully functional dashboard where they can see their courses, manage their profile, and receive the WhatsApp invitation.

---

## 5.0 Next Phase: The "Digital Classroom" (Phase 3)

**Objective:** To build the core, immersive learning experience and deliver on our unique agentic promises.

### **Task 3.1: Build the Course Player Experience**
*   **Status:** PENDING.
*   **Action Plan (for CPO/CTO):**
    1.  Refactor `CoursePlayerView.vue` to fetch its course and lesson content **exclusively** from Firestore based on the course ID in the URL.
    2.  Integrate a secure video hosting provider (e.g., Vimeo, Wistia) and update the "Save Course" logic in the `CourseEditorView` to store real video URLs.
    3.  Implement a "Complete & Continue" button in the `CoursePlayerView`. On click, it will call a new `updateUserProgress()` function in `db.js`, which will recalculate and save the `progressPercentage` in the user's `enrollments` document.

### **Task 3.2: Implement the "AI Playground"**
*   **Status:** PENDING.
*   **Action Plan (for CPO/CTO):**
    1.  Design and build a new, reusable `Playground.vue` component.
    2.  This component will feature a client-side API call to an LLM provider.
    3.  It will be embedded within specific lessons in the `CoursePlayerView`.

### **Task 3.3: Launch "Aida," the AI Tutor**
*   **Status:** PENDING.
*   **Action Plan (for CPO/CTO):**
    1.  Set up the WhatsApp Business API.
    2.  Build a new Firebase Cloud Function to serve as the webhook endpoint.
    3.  Implement the RAG system within the function to provide context-aware answers from our Firestore `lessons` collection.

---

## 6.0 Final Phase: Launch Preparations (Phase 5)

**Objective:** To prepare the platform for public launch.

*   Switch all API keys to **Production Mode**.
*   Perform final, end-to-end testing of the complete user journey.
*   Deploy the final, production-ready build.