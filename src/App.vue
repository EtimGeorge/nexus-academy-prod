<!-- /src/App.vue - THE NEW DISPATCHER -->
<template>
  <!-- 
    This is the root of our entire application.
    The Vue Router will render the correct top-level component here.
    If the URL is '/', it will render PublicLayout.vue.
    If the URL is '/dashboard', it will render DashboardView.vue.
    If the URL is '/admin', it will render AdminView.vue.
  -->
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style>
/* 
  We keep the global page transition styles here, as they apply to the top-level RouterView.
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>