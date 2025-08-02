<!-- /src/views/CoursesView.vue - FINAL, LIVE-DATA VERSION -->

<template>
  <div class="courses-page-wrapper">
    <main class="container">
      <!-- Page Header (No changes needed here) -->
      <header class="courses-header">
        <h1 class="animate-header">Explore the Academy</h1>
        <p class="animate-header">Find the perfect learning path to advance your skills and build the future with AI.</p>
      </header>

      <!-- 
        ==========================================================================
        Conditional Rendering Block
        This is the core of our robust, production-ready UI.
        ==========================================================================
      -->
      <!-- 1. The Loading State -->
      <div v-if="isLoading" class="page-loader-container">
        <div class="spinner"><img src="../assets/images/nexus-logo-light.png" alt="Loading..." class="spinner-logo"></div>
      </div>

      <!-- 2. The Error State -->
      <div v-else-if="error" class="error-message">
        <h2>Something Went Wrong</h2>
        <p>We couldn't load the course catalog at this time. Please try again later.</p>
      </div>

      <!-- 3. The Ideal State (with data) -->
      <div v-else>
        <!-- Filter Controls (Logic is now powered by live data) -->
        <section class="filter-controls">
          <div class="filter-group">
            <button
              v-for="category in uniqueCategories"
              :key="category"
              @click="setFilter('category', category)"
              :class="{ active: currentFilters.category === category }"
              class="filter-btn"
            >
              {{ category }}
            </button>
          </div>
          <div class="filter-group">
            <button
              v-for="level in uniqueLevels"
              :key="level"
              @click="setFilter('level', level)"
              :class="{ active: currentFilters.level === level }"
              class="filter-btn"
            >
              {{ level }}
            </button>
          </div>
        </section>

        <!-- Course Grid (Now displays live data from Firestore) -->
        <section class="courses-grid">
          <template v-if="filteredCourses.length > 0">
            <div v-for="course in filteredCourses" :key="course.id" class="course-card animate-on-scroll">
              <div class="course-card-image-container">
                <img :src="course.imageUrl" :alt="course.title" class="course-card-image" loading="lazy">
              </div>
              <div class="course-card-content">
                <div class="course-card-tags">
                  <span>{{ course.level }}</span>
                  <span>{{ course.duration || 'Self-Paced' }}</span>
                </div>
                <h3 class="course-card-title">{{ course.title }}</h3>
                <p class="course-card-description">{{ course.description }}</p>
                <!-- The link now correctly uses the course's Firestore Document ID -->
                <RouterLink :to="`/course/${course.id}`" class="btn btn-primary">View Course</RouterLink>
              </div>
            </div>
          </template>
          <!-- The Empty State (for filters) -->
          <p v-else class="no-courses-message">
            No courses match your selected filters. Try a different combination.
          </p>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
// /src/views/CoursesView.vue --- DEFINITIVELY CORRECTED <script setup>

import { ref, computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
// We now import our database service function.
import { getAllCourses } from '@/services/db.js';

// --- Reactive State ---
const allCourses = ref([]);
const isLoading = ref(true);
const error = ref(null);
const currentFilters = ref({
  category: "All",
  level: "All",
});

// --- Computed Properties ---
const uniqueCategories = computed(() => ["All", ...new Set(allCourses.value.map(c => c.category).filter(Boolean))]);
const uniqueLevels = computed(() => ["All", ...new Set(allCourses.value.map(c => c.level).filter(Boolean))]);
const filteredCourses = computed(() => {
  let courses = allCourses.value;
  if (currentFilters.value.category !== "All") {
    courses = courses.filter(c => c.category === currentFilters.value.category);
  }
  if (currentFilters.value.level !== "All") {
    courses = courses.filter(c => c.level === currentFilters.value.level);
  }
  return courses;
});

// --- Methods ---
function setFilter(type, value) {
  currentFilters.value[type] = value;
}

// --- Lifecycle Hook & Data Fetching ---
onMounted(async () => {
  try {
    isLoading.value = true;
    error.value = null;
    allCourses.value = await getAllCourses();
  } catch (err) {
    console.error("Failed to load courses:", err);
    error.value = "An error occurred while fetching courses.";
  } finally {
    isLoading.value = false;
    initHeaderAnimation();
    // A small delay ensures Vue has rendered the new elements before we try to animate them.
    setTimeout(initScrollAnimations, 100); 
  }
});

// --- Animation Functions ---

function initHeaderAnimation() {
  if (typeof window.anime !== 'undefined') {
    window.anime({
      targets: ".animate-header",
      translateY: [20, 0],
      opacity: [0, 1],
      delay: window.anime.stagger(150),
      duration: 800,
      easing: "easeOutExpo",
    });
  }
}

/**
 * *** THIS IS THE MISSING FUNCTION, NOW CORRECTLY INCLUDED ***
 * Uses the modern Intersection Observer API to efficiently trigger animations on scroll.
 */
function initScrollAnimations() {
  // We re-query for the elements inside the function to ensure they exist.
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );
  animatedElements.forEach((el) => observer.observe(el));
}
</script>

<style scoped>
/* 
  The 'scoped' attribute ensures these styles ONLY apply to this CoursesView.vue component.
  All styles below are a direct migration of your CoursesPage.css file,
  updated to use our new "Nexus Dark" design system variables.
*/

.courses-page-wrapper {
    background-color: var(--dark-navy);
    color: var(--text-secondary-light);
    padding-top: 80px; /* Offset for sticky navbar */
}

/* --- Page Header --- */
.courses-header {
    text-align: center;
    padding: 4rem 0;
    border-bottom: 1px solid var(--dark-border);
    margin-bottom: 3rem;
}
.courses-header h1 { font-size: 3rem; color: white; margin-bottom: 1rem; }
.courses-header p { font-size: 1.125rem; max-width: 600px; margin: 0 auto; }

/* --- Filter Controls --- */
.filter-controls {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.filter-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
}
.filter-btn {
    background-color: transparent;
    border: 1px solid var(--dark-border);
    color: var(--text-primary-light);
    padding: 0.5rem 1.25rem;
    border-radius: 99px;
    font-size: 0.875rem;
    font-weight: var(--font-semibold);
    cursor: pointer;
    transition: all 0.2s ease;
}
.filter-btn:hover {
    background-color: var(--dark-blue-card);
    border-color: var(--text-secondary-light);
}
.filter-btn.active {
    background: linear-gradient(90deg, var(--brand-bright-blue), var(--brand-aqua));
    border-color: transparent;
    color: var(--dark-navy);
}

/* --- Course Grid --- */
.courses-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-bottom: 6rem;
}
.no-courses-message {
    text-align: center;
    padding: 3rem;
    font-size: 1.1rem;
    color: var(--text-secondary-light);
}

/* --- Course Card (styles migrated here for encapsulation) --- */
.course-card {
    background-color: var(--dark-blue-card);
    border: 1px solid var(--dark-border);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.course-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}
.course-card-image-container { height: 200px; }
.course-card-image { width: 100%; height: 100%; object-fit: cover; }
.course-card-content { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
.course-card-tags { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
.course-card-tags span {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    background-color: var(--dark-blue-bg);
    border-radius: 99px;
    color: var(--text-primary-light);
}
.course-card-title { font-size: 1.25rem; margin-bottom: 0.5rem; }
.course-card-description { flex: 1; margin-bottom: 1.5rem; }
.course-card .btn { width: 100%; text-align: center; }

/* --- Responsive Styles --- */
@media (min-width: 768px) {
    .courses-header { padding: 5rem 0; }
    .courses-header h1 { font-size: 4rem; }
    .filter-controls { flex-direction: row; justify-content: center; }
    .courses-grid { grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }
}
</style>