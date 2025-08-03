<!-- /src/components/TheNavbar.vue - FINAL, DEFINITIVE, AND PRODUCTION-READY VERSION -->

<template>
  <!-- 
    ==========================================================================
    MAIN HEADER ELEMENT
    The ':class' binding dynamically adds 'is-scrolled' for the glassmorphism effect.
    ==========================================================================
  -->
  <header class="main-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="container header-container">
      <!-- Logo -->
      <RouterLink to="/" class="logo-link" aria-label="Nexus Academy Home">
        <img
          src="@/assets/images/nexus-logo-light.png"
          alt="Nexus Academy Logo"
          class="logo-image"
        />
      </RouterLink>

      <!-- 
        Main Desktop & Mobile Navigation
        The ':class' binding dynamically adds 'is-active' for the mobile slide-out menu.
      -->
      <nav class="main-nav" :class="{ 'is-active': isNavOpen }">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/courses">Courses</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/why-nexus">Why Nexus</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <!-- 
        ==========================================================================
        DYNAMIC AUTHENTICATION SECTION
        This section intelligently switches between the "Sign In" button and the
        user profile dropdown based on the user's login state.
        ==========================================================================
      -->
      <div class="header-actions">
        <!-- If the user is NOT logged in, this 'Sign In' button is shown. -->
        <RouterLink v-if="!currentUser" to="/login" class="btn btn-secondary"
          >Sign In</RouterLink
        >

        <!-- 
          If the user IS logged in, this profile dropdown is shown instead.
          The '@click.stop' prevents the window click listener from immediately closing it.
        -->
        <div v-else class="user-profile-dropdown" @click.stop="toggleDropdown">
          <div class="user-avatar">
            <span>{{ userInitials }}</span>
          </div>

          <!-- The Dropdown Menu (conditionally rendered with 'v-if') -->
          <div v-if="isDropdownOpen" class="dropdown-menu">
            <div class="dropdown-header">
              <p class="dropdown-username">{{ userDisplayName }}</p>
              <p class="dropdown-email">{{ currentUser.email }}</p>
            </div>
            <hr class="dropdown-divider" />
            <RouterLink to="/dashboard" class="dropdown-item"
              >My Dashboard</RouterLink
            >

            <!-- 
              *** THE CRITICAL SECURITY FEATURE ***
              This 'v-if' directive ensures the "Admin Panel" link is ONLY
              rendered if the logged-in user's role (from userStore.js) is 'admin'.
            -->
            <RouterLink
              v-if="userProfile?.role === 'admin'"
              to="/admin"
              class="dropdown-item"
            >
              Admin Panel
            </RouterLink>

            <hr class="dropdown-divider" />
            <a
              href="#"
              @click.prevent="handleLogout"
              class="dropdown-item logout-item"
              >Logout</a
            >
          </div>
        </div>
      </div>

      <!-- Hamburger Button (for mobile) -->
      <button
        class="hamburger"
        @click="toggleNav"
        :class="{ 'is-active': isNavOpen }"
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
// We import the auth object for logout and the userProfile store for role-checking.
import { auth } from '../services/firebase.js';
import { logout } from '../services/auth.js';
import { userProfile } from '../services/userStore.js';

// --- Reactive State ---
const isNavOpen = ref(false);
const isScrolled = ref(false);
const currentUser = ref(auth.currentUser);
const isDropdownOpen = ref(false);
const router = useRouter();

// --- Methods ---
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// This method handles closing the dropdown if the user clicks anywhere else on the page.
const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const handleLogout = async () => {
  await logout();
  isDropdownOpen.value = false; // Ensure dropdown is closed
  router.push("/"); // Redirect to home page after logout
};

// --- Computed Properties ---
const userDisplayName = computed(
  () => userProfile.value?.displayName || currentUser.value?.email || ""
);
const userInitials = computed(() => {
  const name = userDisplayName.value;
  if (!name) return "??";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
});

// --- Lifecycle Hooks ---
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // This listener adds the ability to close the dropdown by clicking outside of it.
  window.addEventListener("click", closeDropdown);

  // This listener keeps the local 'currentUser' ref in sync with the global auth state.
  auth.onAuthStateChanged((user) => {
    currentUser.value = user;
    if (!user) {
      isDropdownOpen.value = false;
    } // Close dropdown on logout
  });
});

onUnmounted(() => {
  // These cleanup steps are critical to prevent memory leaks.
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("click", closeDropdown);
});
</script>

<style scoped>
/* All styles from our previous, definitive Navbar are preserved here, */
/* with the addition of the new styles for the profile dropdown. */
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  transition: background-color 0.4s ease, border-color 0.4s ease;
}
.main-header.is-scrolled {
  background-color: rgba(11, 15, 25, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--dark-border);
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.logo-link {
  display: flex;
  align-items: center;
}
.logo-image {
  height: 40px;
  width: auto;
}

/* --- Mobile Navigation --- */
.main-nav {
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  background-color: var(--dark-navy);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: left 0.4s ease-in-out;
}
.main-nav.is-active {
  left: 0;
}
.main-nav a {
  color: var(--text-primary-light);
  font-size: 1.75rem;
  font-weight: var(--font-semibold);
  padding: 1.5rem;
}

/* --- Hamburger Button --- */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}
.hamburger span {
  width: 2rem;
  height: 3px;
  background: white;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}
.hamburger.is-active span:nth-child(1) {
  transform: rotate(45deg);
}
.hamburger.is-active span:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}
.hamburger.is-active span:nth-child(3) {
  transform: rotate(-45deg);
}

/* --- NEW: Header Actions & Profile Dropdown --- */
.header-actions {
  display: none;
} /* Hidden on mobile by default */
.user-profile-dropdown {
  position: relative;
  cursor: pointer;
}
.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--brand-bright-blue),
    var(--brand-aqua)
  );
  color: var(--dark-navy);
  font-weight: var(--font-bold);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--dark-blue-card);
}
.dropdown-menu {
  position: absolute;
  top: 140%;
  right: 0;
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  width: 240px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 0;
  z-index: 100;
}
.dropdown-header {
  padding: 0.75rem 1rem;
}
.dropdown-username {
  font-weight: var(--font-semibold);
  color: white;
}
.dropdown-email {
  font-size: 0.875rem;
  color: var(--text-secondary-light);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dropdown-divider {
  border: none;
  border-top: 1px solid var(--dark-border);
  margin: 0.5rem 0;
}
.dropdown-item {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--text-primary-light);
  transition: background-color 0.2s;
}
.dropdown-item:hover {
  background-color: var(--dark-blue-card);
}
.logout-item {
  color: #ef4444;
}

/* --- Desktop Styles --- */
@media (min-width: 992px) {
  .main-nav {
    position: static;
    width: auto;
    height: auto;
    background: transparent;
    flex-direction: row;
    align-items: center;
    transition: none;
  }
  .main-nav a {
    font-size: 1rem;
    padding: 0;
    margin-left: 2.5rem;
  }
  .main-nav a.router-link-exact-active {
    color: var(--text-accent);
    position: relative;
  }
  .main-nav a.router-link-exact-active::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--text-accent);
  }
  .header-actions {
    display: flex;
    margin-left: 2.5rem;
  } /* Show actions on desktop */
  .hamburger {
    display: none;
  }
}
</style>
