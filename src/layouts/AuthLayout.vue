<!-- /src/layouts/AuthLayout.vue -->
<template>
  <!-- 
    This is a minimal layout specifically for authentication pages.
    It provides a clean, centered environment to focus the user on the task.
  -->
  <div class="auth-layout-wrapper">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
/* 
  These styles create a centered container for the login/signup forms.
*/
.auth-layout-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--dark-navy);
}
</style>