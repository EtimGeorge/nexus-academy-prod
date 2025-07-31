<!-- /src/views/dashboard/MyLearning.vue - FINAL, CORRECTED PATHS -->

<template>
  <div class="my-learning-wrapper">
    <div v-if="isLoading" class="page-loader-container">
      <div class="spinner"></div>
    </div>
    <div v-else-if="enrolledCourses.length === 0" class="no-courses-container">
      <h2>My Learning</h2>
      <p>
        You are not yet enrolled in any courses.
        <RouterLink to="/courses">Explore our courses</RouterLink> to get
        started.
      </p>
    </div>
    <div v-else>
      <section class="continue-learning-card animate-on-scroll">
        <h2>Continue Learning</h2>
        <CourseCard
          v-if="continueLearningCourse"
          :course="continueLearningCourse"
          :progress="getCourseProgress(continueLearningCourse.id)"
        />
      </section>
      <section class="my-courses-section">
        <h2>All My Courses</h2>
        <div class="my-courses-grid">
          <CourseCard
            v-for="course in enrolledCourses"
            :key="course.id"
            :course="course"
            :progress="getCourseProgress(course.id)"
            class="animate-on-scroll"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { RouterLink } from "vue-router";
// *** CORRECTED PATHS ***
// These paths now correctly go up one level from 'views/dashboard' to 'services'.
import { auth } from "../../services/firebase.js";
import { getEnrolledCourses } from "../../services/db.js";
// This path correctly goes up one level from 'views/dashboard' to 'components'.
import CourseCard from "../../components/CourseCard.vue";

// --- Component State ---
const enrolledCourses = ref([]);
const isLoading = ref(true);
const mockUserProgress = {
  "0081JItLJETHm6mWSVF7": { progressPercentage: 66 },
  "cm-1": { progressPercentage: 80 },
  "bp-2": { progressPercentage: 25 },
};

// --- Computed Properties ---
const continueLearningCourse = computed(() => {
  return enrolledCourses.value.length > 0 ? enrolledCourses.value[0] : null;
});

// --- Methods & Lifecycle ---
function getCourseProgress(courseId) {
  return mockUserProgress[courseId] || { progressPercentage: 0 };
}

onMounted(async () => {
  const user = auth.currentUser;
  if (user) {
    enrolledCourses.value = await getEnrolledCourses(user.uid);
  }
  isLoading.value = false;

  await nextTick();
  initScrollAnimations();
});

function initScrollAnimations() {
  // ... (animation logic is correct, no changes needed) ...
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  animatedElements.forEach((el) => observer.observe(el));
}
</script>

<style scoped>
/* All CSS is correct, no changes needed. */
.continue-learning-card {
  background: linear-gradient(135deg, #1d2333, #111827);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
}
.continue-learning-card h2,
.my-courses-section h2 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
}
.my-courses-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
.no-courses-container {
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
}
.no-courses-container a {
  color: var(--brand-aqua);
  font-weight: var(--font-semibold);
}
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
@media (min-width: 768px) {
  .my-courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1280px) {
  .my-courses-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
