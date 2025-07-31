<!-- /src/views/CourseDetailView.vue - FINAL, ENHANCED VERSION -->

<template>
  <div class="course-detail-wrapper">
    <!-- Main page content is only rendered after the course data has been loaded. -->
    <main v-if="course" id="course-detail-content">
      <!-- Course Hero Section (No changes to this block) -->
      <header class="container course-hero">
        <span class="course-category">{{ course.category }}</span>
        <h1>{{ course.title }}</h1>
        <p>{{ course.subtitle }}</p>
      </header>

      <!-- Main Two-Column Layout (No changes to this block) -->
      <div class="container course-layout">
        <div class="course-main-content">
          <h2>What You'll Learn</h2>
          <p>{{ course.learningOutcomes }}</p>
          <br />
          <h2>Course Curriculum</h2>
          <div class="curriculum-accordion">
            <div
              v-for="(module, index) in course.modules"
              :key="module.title"
              class="curriculum-module"
              :class="{ 'is-open': openModules.includes(index) }"
            >
              <div class="module-header" @click="toggleModule(index)">
                <h3>{{ module.title }}</h3>
                <svg class="module-toggle-icon" viewBox="0 0 24 24">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                </svg>
              </div>
              <ul class="lesson-list">
                <li
                  v-for="lesson in module.lessons"
                  :key="lesson"
                  class="lesson-item"
                >
                  <span class="lesson-icon">✓</span> {{ lesson }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Sidebar with Purchase Card -->
        <aside class="course-sidebar">
          <div class="course-sidebar-card">
            <img
              :src="course.imageUrl"
              :alt="course.title"
              class="course-card-image"
            />
            <div class="course-price">${{ course.price }}</div>
            <!-- 
              *** THE CRITICAL CHANGE IS HERE ***
              This button no longer triggers the payment directly.
              Instead, it calls the 'openPaymentModal' method.
            -->
            <button @click="openPaymentModal" class="btn btn-primary">
              Enroll Now
            </button>
            <ul class="key-features-list">
              <li class="key-feature-item">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  /></svg
                ><span>{{ course.level }} Level</span>
              </li>
              <li class="key-feature-item">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                  /></svg
                ><span>Approx. {{ course.duration }}</span>
              </li>
              <li class="key-feature-item">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                  /></svg
                ><span>Self-Paced Learning</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
    <!-- Shows a loader while the initial course data is being fetched. -->
    <div v-else class="page-loader-container">
      <div class="spinner"></div>
    </div>

    <!-- 
      *** NEW: PAYMENT MODAL INTEGRATION ***
      This is our new PaymentModal component.
      The 'v-if' directive controls its visibility based on the 'isModalOpen' variable.
      We pass the 'course' object as a prop to the modal.
      We listen for a 'close' event from the modal to call our 'closePaymentModal' method.
    -->
    <PaymentModal
      v-if="isModalOpen && course"
      :course="course"
      @close="closePaymentModal"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
// We now import our new PaymentModal component.
import PaymentModal from "../components/PaymentModal.vue";
import { getCourseDetailsById } from "../services/courseData.js";
import { auth } from "../services/firebase.js";

// --- Component State ---
const route = useRoute();
const router = useRouter();
const course = ref(null);
const openModules = ref([]);
// This new reactive variable will control the visibility of our payment modal.
const isModalOpen = ref(false);

// --- Methods ---
function toggleModule(index) {
  const currentIndex = openModules.value.indexOf(index);
  if (currentIndex === -1) {
    openModules.value.push(index);
  } else {
    openModules.value.splice(currentIndex, 1);
  }
}

/**
 * Opens the payment modal. It first checks if a user is logged in.
 */
function openPaymentModal() {
  if (!auth.currentUser) {
    alert("Please create an account or sign in to enroll.");
    router.push("/signup");
    return;
  }
  isModalOpen.value = true;
}

/**
 * Closes the payment modal.
 */
function closePaymentModal() {
  isModalOpen.value = false;
}

// --- Lifecycle Hooks ---
onMounted(() => {
  const courseId = route.params.id;
  course.value = getCourseDetailsById(courseId);
});
</script>

<style scoped>
/* 
  All of your existing, working CSS from the file you provided is preserved here.
  No changes are needed to the styling of the page itself.
*/
.course-detail-wrapper {
  background-color: var(--dark-navy);
  color: var(--text-secondary-light);
  padding-top: 80px;
}
#course-detail-content {
  padding-bottom: 6rem;
}
.course-hero {
  padding: 3rem 0;
  text-align: center;
  border-bottom: 1px solid var(--dark-border);
}
.course-category {
  color: var(--brand-aqua);
  font-weight: 700;
  margin-bottom: 1rem;
  display: block;
}
.course-hero h1 {
  font-size: 2.5rem;
  color: white;
  line-height: 1.2;
  max-width: 800px;
  margin: 0 auto 1rem auto;
}
.course-hero p {
  font-size: 1.125rem;
  color: var(--text-secondary-light);
  max-width: 700px;
  margin: 0 auto;
}
.course-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
}
.course-main-content h2 {
  font-size: 1.75rem;
  color: white;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--dark-border);
}
.curriculum-module {
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
}
.module-header {
  background-color: var(--dark-blue-bg);
  padding: 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.module-header h3 {
  color: white;
  font-size: 1.125rem;
}
.module-toggle-icon {
  transition: transform 0.3s ease;
  fill: white;
}
.lesson-list {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out, padding 0.4s ease-out;
  background-color: var(--dark-blue-card);
  padding: 0 1.5rem;
}
.curriculum-module.is-open .lesson-list {
  max-height: 1000px;
  padding: 1.5rem;
}
.curriculum-module.is-open .module-toggle-icon {
  transform: rotate(180deg);
}
.lesson-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--dark-border);
}
.lesson-item:last-child {
  border-bottom: none;
}
.lesson-item .lesson-icon {
  color: var(--brand-aqua);
}
.course-sidebar-card {
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 1.5rem;
}
.course-card-image {
  margin-bottom: 1.5rem;
  border-radius: 8px;
}
.course-price {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}
.course-sidebar-card .btn-primary {
  width: 100%;
  text-align: center;
  padding: 1rem;
  font-size: 1.125rem;
}
.key-features-list {
  list-style: none;
  padding: 1.5rem 0 0 0;
  margin-top: 1.5rem;
  border-top: 1px solid var(--dark-border);
}
.key-feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.key-feature-item svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  fill: var(--brand-aqua);
}
@media (min-width: 768px) {
  .course-hero {
    padding: 5rem 0;
  }
  .course-hero h1 {
    font-size: 3.5rem;
  }
}
@media (min-width: 1024px) {
  .course-layout {
    grid-template-columns: 1fr 380px;
    gap: 3rem;
  }
  .course-sidebar {
    position: sticky;
    top: 100px;
  }
}
</style>
