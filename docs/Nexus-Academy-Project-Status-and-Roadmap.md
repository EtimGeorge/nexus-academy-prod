# Nexus Academy: Project Status & Definitive Roadmap

**Document Version:** 3.0
**Date:** July 30, 2024
**Status:** Pivoting to Phase 4: Admin Panel Development

---

## 1. Executive Summary

This document provides a comprehensive review of the Nexus Academy project. The public-facing website and core authentication systems are now **100% architecturally complete** within a stable Vite + Vue.js foundation. 

However, a critical **"Data Disconnect"** has been identified: the public pages are powered by static mock data, while the authenticated user dashboard is designed to read from a live Firestore database. This prevents the end-to-end user journey from functioning.

The following is the definitive strategic pivot: we will immediately proceed with **Phase 4: Admin Panel Development**. Building our own Content Management System (CMS) is the most efficient and professional solution. It will permanently solve the Data Disconnect, unlock the dashboard functionality, and provide the tools needed to manage and scale the platform's content (both courses and blog posts) as outlined in our business plan.

---

## 2. Project Status & Flow Review

### I. The Public User Flow (Marketing & Sales Funnel)

*   **Status:** **95% Complete and Structurally Sound.**
*   **What Has Been Done:**
    *   A user can navigate a complete, professionally branded public website with a persistent **Navbar** and **Footer**.
    *   All core public pages are built as Vue components: `Home`, `Courses`, `Blog`, `SinglePost`, `WhyNexus`, `About`, `Contact`, and all Legal pages.
    *   The user can select a course and proceed to a feature-rich `CourseDetailPage`.
*   **The Immediate Roadblock:**
    *   The `CoursesPage` and `BlogPage` (and their detail pages) are powered by static mock data files (`courseData.js`, `mockData.js`). This is the root cause of the **Data Disconnect**.

### II. The Authentication & Payment Flow

*   **Status:** **90% Complete and Architecturally Sound.**
*   **What Has Been Done:**
    *   A fully branded and functional user `LoginView` and `SignupView` using **Firebase Authentication**.
    *   A multi-method `PaymentModal` that correctly offers choices for enrollment.
    *   A fully functional **Simulated Enrollment** path for development.
    *   A complete architecture for **Crypto Payments** (creating a `pending_verification` status in Firestore) and **Paystack Payments** (with a secure Cloud Function webhook).
*   **What Is Left:**
    *   The final deployment of the Paystack webhook (blocked by the Firebase plan).
    *   A method for an administrator to *act upon* the `pending_verification` status of crypto payments.

### III. The Authenticated User Flow (The Dashboard Experience)

*   **Status:** **Architected but Blocked.**
*   **What Has Been Done:**
    *   A professional, responsive `DashboardView.vue` shell with sidebar navigation and nested routing.
    *   Complete, feature-rich components for the dashboard sub-pages: `MyLearning.vue`, `ProfilePage.vue`, and `SettingsPage.vue`.
*   **The Core Problem:**
    *   The Dashboard is **non-functional** due to the **Data Disconnect**. It tries to display course data based on live `enrollments` from Firestore, but the corresponding rich course details do not exist in the `courses` collection.

---

## 3. The Definitive Plan of Action: Build the Admin Panel Now

We are now officially beginning **Phase 4: The Admin Panel & Content Management System**. This is the strategic solution to all current roadblocks.

### **Step 1: Build the Core Admin Infrastructure**
*   **Objective:** Create the secure, admin-only shell for our CMS.
*   **Action Plan:**
    1.  Create a new `AdminView.vue` component to serve as the main layout for the admin section.
    2.  Update `router/index.js` with new admin routes (e.g., `/admin`, `/admin/courses`, `/admin/blog`).
    3.  Implement a **Vue Router Navigation Guard**. This is a security checkpoint that will verify a user has `role: "admin"` in their Firestore document before allowing access to any `/admin` routes.
    4.  **Your Action:** You will manually add `role: "admin"` to your user document in Firestore to grant yourself access.

### **Step 2: Build the Course Management System**
*   **Objective:** Create the tools to manage the course catalog, permanently solving the primary Data Disconnect.
*   **Action Plan:**
    1.  Create a `AdminCourseListView.vue` component to display a table of all courses from Firestore.
    2.  Create a `CourseEditorView.vue` component. This feature-rich form will allow an admin to **Create, Read, Update, and Delete (CRUD)** courses, including their modules and lessons, directly in the Firestore database.
    3.  Create the necessary new functions in `db.js` (e.g., `createOrUpdateCourse`, `deleteCourse`) to support the editor.
    4.  **Refactor** the public `CoursesView.vue` and `CourseDetailView.vue` to fetch their data **exclusively** from Firestore via `db.js`, completely removing the `courseData.js` file.

### **Step 3: Build the Blog Management System**
*   **Objective:** Create the tools to manage our content marketing engine, solving the second Data Disconnect.
*   **Action Plan:**
    1.  Create an `AdminBlogListView.vue` component to display a table of all blog posts from Firestore.
    2.  Create a `BlogPostEditorView.vue` component. This form will allow an admin to **CRUD** blog posts, including their title, category, content (with a rich text editor), and featured status, directly in the Firestore database.
    3.  Create the necessary new functions in `db.js` (e.g., `createOrUpdatePost`, `deletePost`).
    4.  **Refactor** the public `BlogView.vue` and `SinglePostView.vue` to fetch their data **exclusively** from Firestore, completely removing the `mockData.js` file.

### **Step 4: Build the Enrollment Management System**
*   **Objective:** Create the tool to manage our crypto payment flow.
*   **Action Plan:**
    1.  Create an `AdminEnrollmentView.vue` component.
    2.  This page will display a table of all `enrollments` from Firestore, with a special filter to show only those with `status: 'pending_verification'`.
    3.  The admin will be able to click a **"Confirm Payment"** button next to a pending enrollment. This action will update the document's status from `pending_verification` to `active`, officially granting the user access to the course.

---

This is the correct, professional, and scalable path forward. It solves all our current problems and provides the foundational tools we need to manage and grow Nexus Academy.

I am ready to begin. Please confirm you approve of this final, definitive plan. If so, I will provide the code for the first step: the **Admin View Shell** and the **Router Update with Navigation Guards**.