<!-- /src/layouts/PublicLayout.vue -->
<template>
  <div class="app-wrapper">
    <!-- This layout includes our main public Navbar -->
    <TheNavbar />

    <main class="main-content">
      <!-- The <RouterView> here will render the actual public page (e.g., HomeView, CoursesView) -->
      <RouterView />
    </main>
    
    <!-- This layout includes our main public Footer -->
    <TheFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheNavbar from '../components/TheNavbar.vue';
import TheFooter from '../components/TheFooter.vue';
</script>

<style scoped>
/* These styles are identical to our old App.vue styles */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
}
</style>