// /src/router/index.js - FINAL, DEFINITIVE, AND SECURE VERSION

import { createRouter, createWebHashHistory } from "vue-router";
// We now import the auth object and our new userStore helpers.
import { auth } from "../services/firebase.js";
import { userProfile, ensureUserProfile } from "../services/userStore.js";

// --- Layout Components ---
// This is the correct, professional way to structure an app with different page layouts.
import PublicLayout from "../layouts/PublicLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import DashboardView from "../views/DashboardView.vue";
import AdminView from "../views/AdminView.vue";
import CoursePlayerView from "../views/CoursePlayerView.vue";

// ===================================================================================
//  ROUTE DEFINITIONS
//  This is the complete and final list of all routes in our application.
// ===================================================================================
const routes = [
  // --- Route Group 1: Public Pages (with Navbar/Footer) ---
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
    ],
  },

  // --- Route Group 2: Standalone Auth Pages (No Navbar/Footer) ---
  {
    path: "/auth", // A parent route for auth pages
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
    component: CoursePlayerView,
    meta: { requiresAuth: true },
  },

  // --- Route Group 4: Authenticated User Dashboard ---
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
        path: "profile",
        name: "profile",
        component: () => import("../views/dashboard/ProfilePage.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("../views/dashboard/SettingsPage.vue"),
      },
    ],
  },

  // --- Route Group 5: Secure Admin Panel ---
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
//  DEFINITIVE NAVIGATION GUARD (The Security Checkpoint)
// ===================================================================================
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  // This is the critical change: ensure we have fetched the user's profile and role
  // from Firestore before making any security decisions.
  await ensureUserProfile();

  const currentUser = auth.currentUser;
  const userRole = userProfile.value?.role; // Get the role from our new, reliable store.

  if (requiresAuth && !currentUser) {
    // If the route is protected and the user is not logged in, redirect to login.
    next({ name: "login" });
  } else if (requiresAdmin && userRole !== "admin") {
    // If the route requires admin permissions and the user's role is not 'admin',
    // deny access and send them to their own dashboard.
    console.warn(
      `Access denied: User ${currentUser?.email} does not have admin role.`
    );
    next({ name: "dashboard" });
  } else {
    // Otherwise, the user is authorized, so allow navigation.
    next();
  }
});

export default router;
