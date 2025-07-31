<!-- /src/components/CourseCard.vue -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    This is a direct migration of your CourseCard.html structure, enhanced
    with Vue's conditional rendering to handle our two different modes.
  -->
  <div class="course-card">
    <!-- The entire card is a link to the appropriate page -->
    <RouterLink :to="cardLink" class="course-card-link-wrapper">
      <div class="course-card-image-container">
        <!-- 
          The ':src' is a Vue directive for binding attributes. We bind the image source
          to the 'course.imageUrl' property.
        -->
        <img
          :src="course.imageUrl || 'https://via.placeholder.com/400x225'"
          :alt="course.title"
          class="course-card-image"
          loading="lazy"
        />
      </div>
      <div class="course-card-content">
        <h3 class="course-card-title">{{ course.title }}</h3>

        <!-- 
          *** NEW: CONDITIONAL "LEARNING" MODE ***
          This block is only rendered if a 'progress' object is passed to the component.
          This is how we create the "Learning" mode for the dashboard.
        -->
        <div v-if="progress" class="progress-info">
          <div class="progress-bar">
            <!-- The width of the inner bar is dynamically set by the progress percentage -->
            <div
              class="progress-bar-inner"
              :style="{ width: progress.progressPercentage + '%' }"
            ></div>
          </div>
          <p class="progress-text">
            {{ progress.progressPercentage }}% Complete
          </p>
        </div>

        <!-- 
          *** NEW: CONDITIONAL "DISCOVERY" MODE ***
          This block is rendered if no 'progress' object is passed.
          This is the "Discovery" mode for public pages.
        -->
        <p v-else class="course-card-description">{{ course.description }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

// ===================================================================================
//  COMPONENT LOGIC
// ===================================================================================

// 'defineProps' is how a Vue component declares the data it expects to receive
// from its parent. This makes the component highly reusable.
const props = defineProps({
  // The 'course' object is always required.
  course: {
    type: Object,
    required: true,
  },
  // The 'progress' object is optional. Its presence determines the card's mode.
  progress: {
    type: Object,
    required: false,
  },
});

// This computed property determines the correct link for the card based on its mode.
const cardLink = computed(() => {
  // If it's in "Learning" mode (has progress), link to the Course Player.
  if (props.progress) {
    return `/learn/${props.course.id}`;
  }
  // If it's in "Discovery" mode, link to the Course Detail (sales) page.
  return `/course/${props.course.id}`;
});
</script>

<style scoped>
/* 
  The 'scoped' attribute ensures these styles ONLY apply to this CourseCard component.
  This is a direct migration and enhancement of your CourseCard.css.
*/
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
.course-card-link-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%; /* Ensures the link fills the card */
}
.course-card-image-container {
  height: 180px;
  background-color: var(--dark-blue-bg);
}
.course-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.course-card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Makes the content area fill remaining space */
}
.course-card-title {
  font-size: 1.25rem;
  color: white;
  margin-bottom: 0.75rem;
}
.course-card-description {
  color: var(--text-secondary-light);
  flex-grow: 1; /* Pushes the (future) button to the bottom */
}

/* --- Progress Bar Styles (for "Learning" mode) --- */
.progress-info {
  margin-top: auto; /* Pushes the progress bar to the bottom of the content area */
  padding-top: 1rem;
}
.progress-bar {
  width: 100%;
  height: 8px;
  background-color: var(--dark-border);
  border-radius: 99px;
  overflow: hidden;
}
.progress-bar-inner {
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--brand-bright-blue),
    var(--brand-aqua)
  );
  border-radius: 99px;
  transition: width 0.5s ease;
}
.progress-text {
  font-size: 0.875rem;
  color: var(--text-secondary-light);
  margin-top: 0.5rem;
  margin-bottom: 0;
}
</style>
