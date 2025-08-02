<!-- /src/views/CoursePlayerView.vue - FINAL, LIVE DATA VERSION -->
<template>
  <!-- 
    This is the main wrapper for our "Digital Classroom" experience.
    It uses the same professional, mobile-first CSS as our previous design.
  -->
  <div class="course-player-wrapper">
    <!-- Mobile-only sidebar toggle button -->
    <button
      class="sidebar-toggle-btn"
      id="sidebar-toggle-btn"
      aria-label="Toggle Lesson List"
    >
      <div class="hamburger"><span></span><span></span><span></span></div>
    </button>

    <div class="course-player-layout">
      <!-- Lesson Sidebar -->
      <aside class="lesson-sidebar" id="lesson-sidebar">
        <header class="sidebar-header">
          <!-- The course title is now dynamically populated from Firestore -->
          <h2 id="sidebar-course-title">{{ course?.title || "Loading..." }}</h2>
          <RouterLink to="/dashboard">← Back to Dashboard</RouterLink>
        </header>
        <div id="lesson-list-container">
          <!-- The curriculum is now dynamically generated from our live course data -->
          <div v-for="module in course?.modules" :key="module.title">
            <h3 class="module-title">{{ module.title }}</h3>
            <ul class="lesson-list">
              <li
                v-for="lesson in module.lessons"
                :key="lesson.id"
                :class="[
                  'lesson-list-item',
                  { active: lesson.id === currentLessonId },
                ]"
                :data-lesson-id="lesson.id"
              >
                <a href="#">
                  <span class="lesson-icon">●</span>
                  {{ lesson.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main id="lesson-main-content" class="lesson-main-content">
        <!-- Loading State -->
        <div v-if="isLoading" class="page-loader-container">
          <div class="spinner"></div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="error-message">
          <h1>Course Not Found</h1>
          <p>We couldn't find the course you were looking for.</p>
        </div>

        <!-- Ideal State (Lesson Loaded) -->
        <template v-else-if="activeLesson">
          <h3>{{ activeLesson.title }}</h3>
          <div class="video-container">
            <iframe
              :src="activeLesson.videoURL"
              :title="activeLesson.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div
            class="lesson-content-text"
            v-html="activeLesson.textContentHTML"
          ></div>
        </template>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue';
import { useRoute, RouterLink } from "vue-router";
// **THE CRITICAL FIX:** We now import exclusively from our live database service.
import { getCourseWithLessons } from "@/services/db.js";

// --- Component State ---
const route = useRoute();
const courseId = ref(route.params.id);
const course = ref(null);
const currentLessonId = ref(null);
const isLoading = ref(true);
const error = ref(null);

// --- Computed Property ---
// This safely finds the currently active lesson object from our data.
const activeLesson = computed(() => {
  if (!course.value || !currentLessonId.value) return null;
  // Flatten all lessons from all modules into a single array and find the one that matches.
  return course.value.modules
    .flatMap((m) => m.lessons)
    .find((l) => l.id === currentLessonId.value);
});

// --- Methods ---
/**
 * Attaches all necessary event listeners for the page, including the mobile sidebar toggle.
 */
function attachEventListeners() {
  const lessonListContainer = document.getElementById("lesson-list-container");
  const sidebarToggleBtn = document.getElementById("sidebar-toggle-btn");
  const sidebar = document.getElementById("lesson-sidebar");

  if (lessonListContainer) {
    lessonListContainer.addEventListener("click", (e) => {
      const clickedLi = e.target.closest(".lesson-list-item");
      if (clickedLi && clickedLi.dataset.lessonId) {
        e.preventDefault();
        currentLessonId.value = clickedLi.dataset.lessonId;
        if (sidebar?.classList.contains("is-active")) {
          sidebar.classList.remove("is-active");
          sidebarToggleBtn?.classList.remove("is-active");
        }
      }
    });
  }

  if (sidebarToggleBtn && sidebar) {
    sidebarToggleBtn.addEventListener("click", () => {
      sidebarToggleBtn.classList.toggle("is-active");
      sidebar.classList.toggle("is-active");
    });
  }
}

// --- Lifecycle Hook & Data Fetching ---
// This now fetches the complete, live course data from Firestore when the component is created.
onMounted(async () => {
  try {
    isLoading.value = true;
    const fetchedCourse = await getCourseWithLessons(courseId.value);

    if (fetchedCourse) {
      course.value = fetchedCourse;
      // Set the first lesson of the first module as the default active lesson.
      if (fetchedCourse.modules?.[0]?.lessons?.[0]) {
        currentLessonId.value = fetchedCourse.modules[0].lessons[0].id;
      }
    } else {
      throw new Error("Course not found in database.");
    }
  } catch (err) {
    console.error("Failed to load course player data:", err);
    error.value = err;
  } finally {
    isLoading.value = false;
    // We must wait for the next DOM update cycle before attaching listeners
    // to ensure all the v-for elements have been rendered.
    await nextTick();
    attachEventListeners();
  }
});
</script>

<style scoped>
/* 
  This is the final, production-ready CSS for our "Digital Classroom".
  It is a direct migration of our previously agreed-upon responsive styles.
*/
.course-player-wrapper {
  background-color: #0b0f19;
  color: #d1d5db;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.course-player-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
}
.lesson-sidebar {
  background-color: #111827;
  border-right: 1px solid #374151;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: -100%;
  width: 85%;
  max-width: 350px;
  height: 100%;
  z-index: 100;
  transition: left 0.4s ease-in-out;
}
.lesson-sidebar.is-active {
  left: 0;
}
.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid #374151;
}
.sidebar-header h2 {
  color: white;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
.sidebar-header a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}
.sidebar-header a:hover {
  color: var(--brand-aqua);
}
#lesson-list-container {
  overflow-y: auto;
  flex: 1;
}
.module-title {
  padding: 1rem 1.5rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #9ca3af;
  letter-spacing: 0.5px;
}
.lesson-list {
  padding: 0 1rem 1rem 1rem;
}
.lesson-list-item a {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.25rem;
  font-weight: 500;
  transition: background-color 0.2s;
  color: var(--text-primary-light);
}
.lesson-list-item a:hover {
  background-color: #1d2333;
}
.lesson-list-item.active a {
  background-color: var(--brand-aqua);
  color: var(--dark-navy);
}
.lesson-icon {
  color: #9ca3af;
}
.lesson-list-item.active .lesson-icon {
  color: var(--dark-navy);
}
.lesson-main-content {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}
.lesson-main-content h3 {
  color: white;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  background-color: #000;
  border-radius: 12px;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.lesson-content-text {
  margin-top: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
}
.lesson-content-text :deep(p) {
  margin-bottom: 1em;
} /* Example of styling rendered HTML */
.sidebar-toggle-btn {
  position: fixed;
  top: 1.5rem;
  left: var(--container-padding);
  z-index: 1001;
  background-color: #1d2333;
  border: 1px solid #374151;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.sidebar-toggle-btn .hamburger {
  width: 24px;
  height: 24px;
}
.sidebar-toggle-btn .hamburger span {
  height: 3px;
  width: 24px;
  background-color: white;
}
.error-message {
  text-align: center;
  color: white;
  padding: 3rem;
}
@media (min-width: 1024px) {
  .sidebar-toggle-btn {
    display: none;
  }
  .lesson-sidebar {
    position: static;
    flex-shrink: 0;
    width: 350px;
    height: auto;
    transition: none;
  }
  .lesson-main-content {
    padding: 2.5rem;
  }
}
</style>
