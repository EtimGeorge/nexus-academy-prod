<!-- /src/views/DashboardView.vue -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    This is a direct migration of your new Dashboard.html file, adapted for Vue.
  -->
  <div class="dashboard-wrapper">
    <!-- Mobile Hamburger Button -->
    <button
      class="dashboard-hamburger"
      @click="toggleSidebar"
      :class="{ 'is-active': isSidebarOpen }"
      aria-label="Toggle Dashboard Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="dashboard-layout container">
      <!-- Dashboard Sidebar -->
      <aside class="dashboard-sidebar" :class="{ 'is-active': isSidebarOpen }">
        <div class="user-profile-widget">
          <div class="user-avatar">
            <img v-if="user?.photoURL" :src="user.photoURL" alt="User Avatar" />
            <span v-else>{{ userInitials }}</span>
          </div>
          <h3>{{ user?.displayName || "Nexus Student" }}</h3>
          <p>{{ user?.email }}</p>
        </div>
        <nav class="dashboard-nav">
          <!-- 
            These are now Vue Router links. The 'active-class' will automatically
            highlight the link for the current page.
          -->
          <RouterLink
            to="/dashboard"
            class="dashboard-nav-link"
            active-class="active"
            >My Learning</RouterLink
          >
          <RouterLink
            to="/courses"
            class="dashboard-nav-link"
            active-class="active"
            >All Courses</RouterLink
          >
          <RouterLink
            to="/profile"
            class="dashboard-nav-link"
            active-class="active"
            >My Profile</RouterLink
          >
          <RouterLink
            to="/settings"
            class="dashboard-nav-link"
            active-class="active"
            >Settings</RouterLink
          >
          <!-- <a href="#" @click.prevent="handleLogout" class="dashboard-nav-link"
            >Logout</a
          > -->
        </nav>

          <!-- Footer section of the sidebar -->
        <div class="sidebar-footer">
          <hr class="nav-divider" />
          <!-- A clear link to return to the main public site -->
          <RouterLink to="/" class="dashboard-nav-link return-link">Return to Main Site</RouterLink>
          <!-- The logout link, as specified in your blueprint -->
          <a href="#" @click.prevent="handleLogout" class="dashboard-nav-link logout-link">Logout</a>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="dashboard-main-content">
        <!-- 
          The <RouterView> is Vue's placeholder for the content of the sub-page.
          When you go to /dashboard, MyLearning.vue will render here.
          When you go to /profile, ProfilePage.vue will render here.
        -->
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { RouterView, RouterLink, useRouter } from "vue-router";
import { auth } from "../services/firebase.js"; // Correct path from /src/views/
import { logout } from "../services/auth.js";
import { onAuthStateChanged } from "firebase/auth";

// --- Reactive State ---
const isSidebarOpen = ref(false);
const user = ref(auth.currentUser); // Holds the current user object
const router = useRouter();

// --- Computed Properties ---
const userInitials = computed(() => {
  if (!user.value) return "NS";
  return (user.value.displayName || user.value.email || "Nexus Student")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
});

// --- Methods ---
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const handleLogout = async () => {
  try {
    await logout();
    router.push("/login");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

// --- Lifecycle Hooks ---
onMounted(() => {
  // Set up a listener to keep the user object reactive and up-to-date.
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
    if (!currentUser) {
      // If the user logs out elsewhere, redirect them.
      router.push("/login");
    }
  });
});
</script>

<style scoped>
/* This is a direct migration of your Dashboard.css file */
.dashboard-wrapper {
  background-color: #0b0f19;
  color: #d1d5db;
  min-height: 100vh;
}
.dashboard-layout {
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 5rem;
  padding-bottom: 4rem;
}
.dashboard-hamburger {
  position: fixed;
  top: 1.5rem;
  left: var(--container-padding);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.dashboard-hamburger span {
  width: 2rem;
  height: 3px;
  background: white;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}
.dashboard-hamburger.is-active span:nth-child(1) {
  transform: rotate(45deg);
}
.dashboard-hamburger.is-active span:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}
.dashboard-hamburger.is-active span:nth-child(3) {
  transform: rotate(-45deg);
}
.dashboard-sidebar {
  background-color: #111827;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 1.5rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  z-index: 1000;
  border-radius: 0;
  transition: left 0.4s ease-in-out;
  overflow-y: auto;
}
.dashboard-sidebar.is-active {
  left: 0;
}
.user-profile-widget {
  text-align: center;
  border-bottom: 1px solid #374151;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
}
.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--brand-aqua);
  margin: 0 auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark-navy);
}
.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.user-profile-widget h3 {
  color: white;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}
.user-profile-widget p {
  color: #9ca3af;
  font-size: 0.875rem;
}
.dashboard-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.dashboard-nav-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: #d1d5db;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
}
.dashboard-nav-link:hover {
  background-color: #1d2333;
  color: white;
}
.dashboard-nav-link.active {
  background-color: var(--brand-aqua);
  color: var(--dark-navy);
}
.nav-icon {
  font-size: 1.25rem;
}
@media (min-width: 768px) {
  .my-courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .dashboard-hamburger {
    display: none;
  }
  .dashboard-layout {
    grid-template-columns: 280px 1fr;
    gap: 2rem;
    padding-top: 2rem;
  }
  .dashboard-sidebar {
    position: static;
    width: auto;
    height: auto;
    max-width: none;
    border-radius: 12px;
    transition: none;
  }
}
</style>
