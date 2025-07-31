// /src/router/index.js - FINAL, SECURE, AND COMPLETE VERSION

import { createRouter, createWebHashHistory } from "vue-router";
import { auth } from "../services/firebase.js";
import { getUserProfile } from "../services/db.js";

// --- Import our Layout Components ---
import PublicLayout from "../layouts/PublicLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import DashboardView from "../views/DashboardView.vue";
import AdminView from "../views/AdminView.vue";

const routes = [
  // --- Route Group 1: Public Pages ---
  // All routes in this group will be rendered inside the PublicLayout.vue component.
  {
    path: "/",
    component: PublicLayout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "courses",
        name: "courses",
        component: () => import("../views/CoursesView.vue"),
      },
      {
        path: "course/:id",
        name: "course-detail",
        component: () => import("../views/CourseDetailView.vue"),
      },
      {
        path: "blog",
        name: "blog",
        component: () => import("../views/BlogView.vue"),
      },
      {
        path: "blog/:id",
        name: "single-post",
        component: () => import("../views/SinglePostView.vue"),
      },
      {
        path: "why-nexus",
        name: "why-nexus",
        component: () => import("../views/WhyNexusView.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("../views/ContactView.vue"),
      },
      {
        path: "terms-of-service",
        name: "terms",
        component: () => import("../views/TermsView.vue"),
      },
      {
        path: "privacy-policy",
        name: "privacy",
        component: () => import("../views/PrivacyView.vue"),
      },
      // { path: "login", name: "login", component: () => import("../views/LoginView.vue") },
      // { path: "signup", name: "signup", component: () => import("../views/SignupView.vue") },
    ],
  },

  // --- Route Group 2: Standalone Authentication Pages (No Navbar/Footer) ---
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
      },
      {
        path: "/signup",
        name: "signup",
        component: () => import("../views/SignupView.vue"),
      },
    ],
  },

  // --- Route Group 3: Full-screen Course Player (No Navbar/Footer) ---
  {
    path: "/learn/:id",
    name: "course-player",
    component: () => import("../views/CoursePlayerView.vue"),
    meta: { requiresAuth: true },
  },

  // --- Route Group 4: Authenticated User Dashboard ---
  // This route uses the DashboardView.vue component as its layout/shell.
  {
    path: "/dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("../views/dashboard/MyLearning.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("../views/dashboard/ProfilePage.vue"),
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("../views/dashboard/SettingsPage.vue"),
      },
    ],
  },

  // --- Route Group 5: Secure Admin Panel ---
  // This route uses the AdminView.vue component as its layout/shell.
  {
    path: "/admin",
    component: AdminView,
    meta: { requiresAuth: true, requiresAdmin: true },
    children: [
      {
        path: "",
        name: "admin-dashboard",
        component: () => import("../views/admin/AdminDashboard.vue"),
      },
      {
        path: "courses",
        name: "admin-courses",
        component: () => import("../views/admin/AdminCourses.vue"),
      },
      {
        path: "courses/new",
        name: "admin-course-new",
        component: () => import("../views/admin/CourseEditorView.vue"),
      },
      {
        path: "courses/edit/:id",
        name: "admin-course-edit",
        component: () => import("../views/admin/CourseEditorView.vue"),
      },
      {
        path: "blog",
        name: "admin-blog",
        component: () => import("../views/admin/AdminBlog.vue"),
      },
      {
        path: "blog/new",
        name: "admin-blog-new",
        component: () => import("../views/admin/BlogPostEditorView.vue"),
      },
      {
        path: "blog/edit/:id",
        name: "admin-blog-edit",
        component: () => import("../views/admin/BlogPostEditorView.vue"),
      },
      {
        path: "enrollments",
        name: "admin-enrollments",
        component: () => import("../views/admin/AdminEnrollments.vue"),
      },
      {
        path: "users",
        name: "admin-users",
        component: () => import("../views/admin/AdminUsers.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes,
});

// ===================================================================================
//  NAVIGATION GUARD (The Security Checkpoint)
// ===================================================================================
// This 'beforeEach' function runs before every single navigation attempt.
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) {
    // If the route requires a user to be logged in and they are not,
    // redirect them to the login page.
    next({ name: "login" });
  } else if (requiresAdmin && currentUser) {
    // If the route requires an admin role and the user IS logged in,
    // we must check their role in the database.
    try {
      const userProfile = await getUserProfile(currentUser.uid);
      if (userProfile && userProfile.role === "admin") {
        // If they have the 'admin' role, allow them to proceed.
        next();
      } else {
        // If they do not have the 'admin' role, send them back to the user dashboard.
        console.warn(
          `Access denied: User ${currentUser.email} is not an admin.`
        );
        next({ name: "dashboard" });
      }
    } catch (error) {
      console.error("Error fetching user profile for admin check:", error);
      next({ name: "dashboard" }); // On error, deny access for safety.
    }
  } else {
    // If the route doesn't require any special permissions, let them proceed.
    next();
  }
});

export default router;
