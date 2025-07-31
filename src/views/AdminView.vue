<!-- /src/views/AdminView.vue - FINAL, PRODUCTION-READY VERSION -->
<template>
  <div class="admin-layout">
    <!-- 
      ==========================================================================
      ADMIN SIDEBAR
      This sidebar is responsive. On desktop, it is a fixed column. On mobile,
      it is a slide-out panel controlled by the hamburger button.
      The ':class' binding dynamically adds 'is-active' to show/hide it.
      ==========================================================================
    -->
    <aside class="admin-sidebar" :class="{ 'is-active': isSidebarOpen }">
      <div class="sidebar-inner">
        <!-- Sidebar Header: Logo and Title -->
        <header class="sidebar-header">
          <RouterLink to="/" class="logo-link">
            <img src="@/assets/images/nexus-logo-light.png" alt="Nexus Academy Logo" class="logo-image">
          </RouterLink>
          <h2 class="admin-title">Admin Panel</h2>
        </header>

        <!-- Main Admin Navigation -->
        <nav class="admin-nav">
          <RouterLink to="/admin" class="admin-nav-link">Dashboard</RouterLink>
          <RouterLink to="/admin/courses" class="admin-nav-link">Courses</RouterLink>
          <RouterLink to="/admin/blog" class="admin-nav-link">Blog Posts</RouterLink>
          <RouterLink to="/admin/enrollments" class="admin-nav-link">Enrollments</RouterLink>
          <RouterLink to="/admin/users" class="admin-nav-link">Users</RouterLink>
        </nav>

        <!-- User/Session Management at the bottom of the sidebar -->
        <div class="sidebar-footer">
          <div class="admin-user-profile">
            <div class="admin-avatar">
              {{ userInitials }}
            </div>
            <span class="admin-username">{{ userDisplayName }}</span>
          </div>
          <hr class="nav-divider" />
          <a href="#" @click.prevent="handleLogout" class="admin-nav-link logout-link">Logout</a>
          <RouterLink to="/" class="admin-nav-link return-link">Return to Site</RouterLink>
        </div>
      </div>
    </aside>

    <!-- 
      ==========================================================================
      MAIN CONTENT AREA
      This area contains the mobile header and the placeholder for our sub-pages.
      ==========================================================================
    -->
    <div class="admin-content-wrapper">
      <!-- 
        Mobile Header:
        This header is only visible on mobile. It contains the hamburger button
        to toggle the sidebar.
      -->
      <header class="admin-mobile-header">
        <button class="hamburger" @click="toggleSidebar" :class="{ 'is-active': isSidebarOpen }" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      
      <!-- 
        Main Content Pane:
        The nested <RouterView> will render the component for the current
        admin sub-route (e.g., the course editor, user list, etc.).
      -->
      <main class="admin-main-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';

// We now import 'auth' from its correct source, 'firebase.js'.
// We import the 'logout' function from its correct source, 'auth.js'.
import { auth } from '../services/firebase.js'; 
import { logout } from '../services/auth.js'; 

// --- Reactive State ---
const isSidebarOpen = ref(false);
const currentUser = ref(auth.currentUser);
const router = useRouter();

// --- Methods ---
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const handleLogout = async () => {
  try {
    await logout();
    router.push('/login'); // Redirect to login page after logout
  } catch (error) {
    console.error("Logout failed:", error);
    alert("Failed to log out. Please try again.");
  }
};

// --- Computed Properties for UI ---
// Safely gets the user's display name or falls back to their email.
const userDisplayName = computed(() => {
  return currentUser.value?.displayName || currentUser.value?.email || 'Admin';
});

// Creates initials from the display name or email for the avatar.
const userInitials = computed(() => {
  const name = userDisplayName.value;
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
});

// --- Lifecycle Hooks ---
// Updates the currentUser ref if the auth state changes while the user is on the page.
onMounted(() => {
  auth.onAuthStateChanged(user => {
    currentUser.value = user;
  });
});
</script>

<style scoped>
/* 
  This CSS is now production-ready, mobile-first, and anticipates all features.
*/
.admin-layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--dark-navy);
  color: var(--text-primary-light);
}

/* --- Admin Sidebar (Mobile First) --- */
.admin-sidebar {
  position: fixed;
  top: 0;
  left: -100%; /* Start off-screen */
  width: 280px;
  height: 100%;
  z-index: 1010;
  background-color: var(--dark-blue-bg);
  border-right: 1px solid var(--dark-border);
  transition: left 0.3s ease-in-out;
  display: flex; /* For inner scrolling */
}
.admin-sidebar.is-active {
  left: 0;
}
.sidebar-inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}
.sidebar-header { margin-bottom: 2rem; text-align: center; }
.logo-link { display: inline-block; margin-bottom: 1rem; }
.logo-image { height: 40px; }
.admin-title { font-size: 1rem; font-weight: var(--font-semibold); color: var(--text-secondary-light); text-transform: uppercase; letter-spacing: 0.5px; }
.admin-nav { display: flex; flex-direction: column; gap: 0.5rem; }
.admin-nav-link { display: block; padding: 0.75rem 1rem; border-radius: 6px; font-weight: var(--font-semibold); transition: background-color 0.2s, color 0.2s; }
.admin-nav-link:hover { background-color: var(--dark-blue-card); color: white; }
.admin-nav-link.router-link-exact-active { background-color: var(--brand-aqua); color: var(--dark-navy); }
.nav-divider { border: none; border-top: 1px solid var(--dark-border); margin: 1rem 0; }
.sidebar-footer { margin-top: auto; }
.admin-user-profile { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem; }
.admin-avatar { width: 32px; height: 32px; border-radius: 50%; background-color: var(--brand-bright-blue); display: flex; justify-content: center; align-items: center; font-weight: var(--font-bold); font-size: 0.875rem; }
.admin-username { font-weight: var(--font-semibold); }
.logout-link, .return-link { color: var(--text-secondary-light); }
.logout-link:hover, .return-link:hover { background-color: var(--dark-blue-card); color: white; }

/* --- Main Content Wrapper --- */
.admin-content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* --- Mobile Header --- */
.admin-mobile-header {
  display: flex;
  align-items: center;
  padding: 1rem var(--container-padding);
  background-color: var(--dark-blue-bg);
  border-bottom: 1px solid var(--dark-border);
}

/* Hamburger Button (copied from TheNavbar) */
.hamburger {
  display: flex; flex-direction: column; justify-content: space-around;
  width: 2rem; height: 2rem; background: transparent;
  border: none; cursor: pointer; padding: 0; z-index: 10;
}
.hamburger span { width: 2rem; height: 3px; background: white; border-radius: 10px; transition: all 0.3s linear; position: relative; transform-origin: 1px; }
.hamburger.is-active span:nth-child(1) { transform: rotate(45deg); }
.hamburger.is-active span:nth-child(2) { opacity: 0; transform: translateX(20px); }
.hamburger.is-active span:nth-child(3) { transform: rotate(-45deg); }

/* --- Main Content Area --- */
.admin-main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

/* --- Desktop Styles --- */
@media (min-width: 1024px) {
  .admin-sidebar {
    position: static; /* Sidebar becomes a permanent column */
    left: 0;
  }
  .admin-content-wrapper {
    /* Adjust based on sidebar width if needed */
  }
  .admin-mobile-header {
    display: none; /* Hide mobile header on desktop */
  }
}
</style>