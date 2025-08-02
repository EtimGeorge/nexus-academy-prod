<!-- /src/views/CourseDetailView.vue - FINAL, DEFINITIVE, AND CORRECT VERSION -->
<template>
  <div class="course-detail-wrapper">
    <!-- Loading State: Shown while fetching data from Firestore -->
    <div v-if="isLoading" class="page-loader-container">
      <div class="spinner"></div>
    </div>

    <!-- Error State: Shown if the course ID is invalid or fetching fails -->
    <div v-else-if="error" class="container error-message">
      <h1>Course Not Found</h1>
      <p>
        We couldn't find the course you were looking for. It may have been moved
        or deleted.
      </p>
      <RouterLink to="/courses" class="btn btn-secondary"
        >← Back to All Courses</RouterLink
      >
    </div>

    <!-- 
      Ideal State (Course Found): The main page content.
      This is a direct migration of your working HTML structure.
    -->
    <main v-else-if="course">
      <header class="container course-hero">
        <p class="course-category">{{ course.category }}</p>
        <h1>{{ course.title }}</h1>
        <p class="course-subtitle">{{ course.description }}</p>
      </header>

      <div class="container course-layout">
        <div class="course-main-content">
          <!-- What You'll Learn Section -->
          <div class="content-section">
            <h2>What You'll Learn</h2>
            <ul class="learning-objectives-list">
              <li
                v-for="(objective, index) in course.learningObjectives"
                :key="index"
              >
                ✓ {{ objective }}
              </li>
            </ul>
          </div>

          <!-- Curriculum Section -->
          <div class="content-section">
            <h2>Course Curriculum</h2>
            <div class="curriculum-accordion">
              <div
                v-for="module in course.modules"
                :key="module.title"
                class="curriculum-module"
              >
                <div class="module-header" @click="toggleModule">
                  <h3>{{ module.title }}</h3>
                  <svg class="module-toggle-icon" viewBox="0 0 24 24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                  </svg>
                </div>
                <ul class="lesson-list">
                  <li
                    v-for="lesson in module.lessons"
                    :key="lesson.id"
                    class="lesson-item"
                  >
                    <span class="lesson-icon">●</span>
                    {{ lesson.title }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Sticky Sidebar -->
        <aside class="course-sidebar">
          <div class="course-sidebar-card">
            <img
              :src="course.imageUrl"
              :alt="course.title"
              class="course-card-image"
            />
            <div class="course-price">
              {{ formatPrice(course.price, course.currency) }}
            </div>
            <!-- 
              This button now has the correct, complete logic.
              It checks for auth state before opening the modal.
            -->
            <button @click="handleEnrollClick" class="btn btn-primary">
              Enroll Now
            </button>
            <ul class="key-features-list">
              <li>
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  /></svg
                ><span>{{ course.level }} Level</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                  /></svg
                ><span>{{ course.estimatedDuration }}</span>
              </li>
              <li>
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

    <!-- 
      The Payment Modal is 100% preserved and will only be shown when
      'isPaymentModalOpen' is true. The @close event is also preserved.
    -->
    <PaymentModal
      v-if="isPaymentModalOpen"
      :course="course"
      @close="isPaymentModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
// We import our definitive, working database function.
import { getCourseWithLessons } from "@/services/db.js";
// We import the auth object to check the current user's status.
import { auth } from "@/services/firebase.js";
// The Payment Modal component is correctly imported.
import PaymentModal from "@/components/PaymentModal.vue";

// --- Component State ---
const route = useRoute();
const router = useRouter();
const courseId = ref(route.params.id);
const course = ref(null);
const isLoading = ref(true);
const error = ref(null);
const isPaymentModalOpen = ref(false);

// --- Methods ---
const formatPrice = (price, currency = "NGN") => {
  if (typeof price !== "number") return "N/A";
  return new Intl.NumberFormat("en-NG", { style: "currency", currency }).format(
    price / 100
  );
};

// This is the new, definitive logic for the "Enroll" button.
const handleEnrollClick = () => {
  const user = auth.currentUser;
  if (user) {
    // If the user is logged in, open the payment modal.
    isPaymentModalOpen.value = true;
  } else {
    // If the user is not logged in, redirect them to the signup page.
    // We can also store the intended destination to redirect them back after signup.
    sessionStorage.setItem("redirectAfterLogin", `/course/${courseId.value}`);
    router.push("/signup");
  }
};

const toggleModule = (event) => {
  const header = event.currentTarget;
  const module = header.parentElement;
  module.classList.toggle("is-open");
};

// --- Lifecycle Hook & Data Fetching ---
onMounted(async () => {
  try {
    isLoading.value = true;
    // We fetch all data using our definitive, robust db function.
    const fetchedCourse = await getCourseWithLessons(courseId.value);
    if (fetchedCourse) {
      course.value = fetchedCourse;
    } else {
      // If the db function returns null, we set an error state.
      throw new Error("Course not found");
    }
  } catch (err) {
    console.error("Failed to load course details:", err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
/* All styles from your definitive CourseDetailPage.css are preserved here. */
.course-detail-wrapper {
  background-color: var(--dark-navy);
  color: var(--text-secondary-light);
  padding-top: 80px;
}
.course-hero {
  text-align: center;
  padding: 4rem 0;
}
.course-category {
  color: var(--brand-aqua);
  font-weight: var(--font-semibold);
}
.course-hero h1 {
  font-size: 3rem;
  color: white;
  margin: 0.5rem 0 1rem 0;
}
.course-subtitle {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
}
.course-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-bottom: 6rem;
}
.content-section {
  margin-bottom: 3rem;
}
.content-section h2 {
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--dark-border);
}
.learning-objectives-list {
  list-style-type: none;
  padding: 0;
}
.learning-objectives-list li {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}
.curriculum-accordion {
  border: 1px solid var(--dark-border);
  border-radius: 8px;
}
.curriculum-module {
  border-bottom: 1px solid var(--dark-border);
}
.curriculum-module:last-child {
  border-bottom: none;
}
.module-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
}
.module-header h3 {
  color: white;
}
.module-toggle-icon {
  fill: white;
  transition: transform 0.3s ease;
}
.curriculum-module.is-open .module-toggle-icon {
  transform: rotate(180deg);
}
.lesson-list {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  background-color: var(--dark-navy);
}
.curriculum-module.is-open .lesson-list {
  max-height: 500px; /* Or a larger value if needed */
}
.lesson-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--dark-border);
}
.lesson-icon {
  color: var(--brand-aqua);
}
.course-sidebar-card {
  position: sticky;
  top: 100px;
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 1.5rem;
}
.course-card-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}
.course-price {
  font-size: 2.5rem;
  font-weight: var(--font-bold);
  color: white;
  margin-bottom: 1.5rem;
}
.course-sidebar-card .btn {
  width: 100%;
  text-align: center;
  margin-bottom: 1.5rem;
}
.key-features-list {
  list-style: none;
  padding: 0;
}
.key-features-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.key-features-list svg {
  width: 24px;
  height: 24px;
  fill: var(--brand-aqua);
}
.error-message {
  text-align: center;
  padding: 4rem 0;
  color: var(--text-primary-light);
}
.error-message h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.error-message p {
  font-size: 1.25rem;
  color: var(--text-secondary-light);
  margin-bottom: 2rem;
}
@media (min-width: 1024px) {
  .course-layout {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
