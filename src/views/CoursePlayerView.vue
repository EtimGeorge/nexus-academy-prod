<!-- /src/views/CoursePlayerView.vue -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    This is a direct migration of your CoursePlayer.html file, adapted for Vue.
  -->
  <div class="course-player-wrapper">
    <!-- Mobile-only sidebar toggle button -->
    <button
      class="sidebar-toggle-btn"
      @click="toggleSidebar"
      :class="{ 'is-active': isSidebarOpen }"
      aria-label="Toggle Lesson List"
    >
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>

    <div class="course-player-layout">
      <!-- 
        Lesson Sidebar
        The 'is-active' class is now dynamically controlled by a reactive Vue variable.
      -->
      <aside class="lesson-sidebar" :class="{ 'is-active': isSidebarOpen }">
        <!-- The entire sidebar is only rendered after the course data has been loaded -->
        <template v-if="course">
          <header class="sidebar-header">
            <h2>{{ course.title }}</h2>
            <RouterLink to="/dashboard">← Back to Dashboard</RouterLink>
          </header>

          <div id="lesson-list-container">
            <!-- The v-for loops build the module and lesson list from our fetched data -->
            <div v-for="module in course.modules" :key="module.title">
              <h3 class="module-title">{{ module.title }}</h3>
              <ul class="lesson-list">
                <li
                  v-for="lesson in getLessonsForModule(module.title)"
                  :key="lesson.id"
                  class="lesson-list-item"
                  :class="{ active: currentLessonId === lesson.id }"
                  @click="selectLesson(lesson.id)"
                >
                  <a href="#">
                    <span class="lesson-icon">●</span>
                    {{ lesson.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </aside>

      <!-- Main Content Area -->
      <main class="lesson-main-content">
        <!-- A loader is shown while data is being fetched -->
        <div v-if="isLoading" class="page-loader-container">
          <div class="spinner"></div>
        </div>
        <!-- The active lesson is displayed once loading is complete -->
        <div v-else-if="activeLesson">
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
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
// We now import from our new, centralized courseData service
import { getCourseDetailsById } from "../services/courseData.js";

// --- Reactive State ---
const route = useRoute();
const course = ref(null);
const lessons = ref([]);
const currentLessonId = ref(null);
const isLoading = ref(true);
const isSidebarOpen = ref(false);

// --- Computed Properties ---
// This computed property finds the currently active lesson object from the lessons array.
// It will automatically re-calculate whenever currentLessonId changes.
const activeLesson = computed(() => {
  if (!lessons.value.length) return null;
  return lessons.value.find((l) => l.id === currentLessonId.value);
});

// --- Methods ---

/**
 * A helper method to filter lessons for a specific module title.
 * @param {string} moduleTitle - The title of the module.
 * @returns {Array} - An array of lesson objects belonging to that module.
 */
function getLessonsForModule(moduleTitle) {
  return lessons.value.filter((l) => l.moduleTitle === moduleTitle);
}

/**
 * Sets the current lesson ID and closes the mobile sidebar if it's open.
 * @param {string} lessonId - The ID of the lesson to make active.
 */
function selectLesson(lessonId) {
  currentLessonId.value = lessonId;
  if (isSidebarOpen.value) {
    isSidebarOpen.value = false;
  }
}

/**
 * Toggles the visibility of the mobile sidebar.
 */
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

// --- Lifecycle Hooks ---
onMounted(() => {
  const courseId = route.params.id;
  if (courseId) {
    // Fetch the course data from our mock data service
    const courseData = getCourseDetailsById(courseId);
    if (courseData) {
      course.value = courseData;
      // Process the modules to create a flat list of lesson objects
      lessons.value = courseData.modules.flatMap((module, moduleIndex) =>
        module.lessons.map((lessonTitle, lessonIndex) => ({
          id: `${courseData.id}-m${moduleIndex}-l${lessonIndex}`,
          title: lessonTitle,
          moduleTitle: module.title,
          videoURL: "https://www.youtube.com/embed/S_p3-g_c3vo", // Placeholder
          textContentHTML: `<p>Full text content for "${lessonTitle}" will appear here.</p>`,
        }))
      );
      // Set the first lesson as the active one by default
      if (lessons.value.length > 0) {
        currentLessonId.value = lessons.value[0].id;
      }
    }
  }
  isLoading.value = false;
});
</script>

<style scoped>
/* This is a direct migration of your CoursePlayer.css file */
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
.lesson-list-item {
  cursor: pointer;
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
}
.lesson-list-item:hover a {
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
.sidebar-toggle-btn {
  position: fixed;
  top: 1.5rem;
  left: var(--container-padding);
  z-index: 1001;
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.sidebar-toggle-btn.is-active span:nth-child(1) {
  transform: rotate(45deg);
}
.sidebar-toggle-btn.is-active span:nth-child(2) {
  opacity: 0;
}
.sidebar-toggle-btn.is-active span:nth-child(3) {
  transform: rotate(-45deg);
}
.sidebar-toggle-btn .hamburger span {
  height: 2px;
  width: 20px;
  background-color: white;
  display: block;
  margin: 4px 0;
  transition: all 0.3s ease-in-out;
  transform-origin: center;
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
