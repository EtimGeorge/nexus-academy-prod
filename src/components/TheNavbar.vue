<!-- /src/components/TheNavbar.vue - FINAL, COMPLETE VERSION -->

<template>
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

      <!-- Main Navigation -->
      <nav class="main-nav" :class="{ 'is-active': isNavOpen }">
        <!-- 
          *** THE DEFINITIVE FIX IS HERE ***
          All five agreed-upon navigation links are now present and in the correct order.
        -->
        <RouterLink to="/" @click="closeNav">Home</RouterLink>
        <RouterLink to="/courses" @click="closeNav">Courses</RouterLink>
        <RouterLink to="/blog" @click="closeNav">Blog</RouterLink>
        <RouterLink to="/why-nexus" @click="closeNav">Why Nexus</RouterLink>
        <RouterLink to="/about" @click="closeNav">About</RouterLink>
        <RouterLink to="/contact" @click="closeNav">Contact</RouterLink>
        
        <!-- Desktop-only CTA button -->
        <RouterLink to="/login" class="btn btn-secondary nav-cta-desktop">Sign In</RouterLink>
      </nav>

      <!-- Hamburger Button for Mobile -->
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
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

// Reactive State
const isNavOpen = ref(false);
const isScrolled = ref(false);

// Methods
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

// This function explicitly sets the navigation state to closed.
// It's designed to be called by the menu links.
const closeNav = () => {
  isNavOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// Lifecycle Hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* All CSS from the previous, correct version is preserved here. No changes needed. */
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
.nav-cta-desktop {
  display: none;
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

/* --- Desktop Styles --- */
@media (min-width: 992px) {
  /* Widened breakpoint for more links */
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
  .nav-cta-desktop {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    margin-left: 2.5rem;
  }
  .hamburger {
    display: none;
  }
}
</style>
