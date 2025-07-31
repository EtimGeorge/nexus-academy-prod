<!-- /src/views/admin/CourseEditorView.vue -->
<template>
  <div class="admin-page-container">
    <div class="page-header">
      <h1 class="page-title">
        {{ isEditing ? "Edit Course" : "Create New Course" }}
      </h1>
      <div class="header-actions">
        <RouterLink to="/admin/courses" class="btn btn-secondary"
          >Cancel</RouterLink
        >
        <button
          @click="saveCourse"
          class="btn btn-primary"
          :disabled="isSaving"
        >
          {{ isSaving ? "Saving..." : "Save & Publish" }}
        </button>
      </div>
    </div>

    <div v-if="isLoading" class="page-loader-container">
      <div class="spinner"></div>
    </div>
    <div v-else-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>

    <form v-else @submit.prevent="saveCourse" class="course-editor-form">
      <!-- Section 1: Core Course Details -->
      <div class="form-section">
        <h2 class="section-title">Core Details</h2>
        <div class="form-grid">
          <div class="form-group">
            <label for="title">Course Title</label>
            <input
              id="title"
              v-model="course.title"
              type="text"
              placeholder="e.g., AI for Content & Marketing"
            />
          </div>
          <div class="form-group">
            <label for="slug">URL Slug</label>
            <input
              id="slug"
              v-model="course.slug"
              type="text"
              placeholder="e.g., ai-content-marketing-v1"
            />
          </div>
          <div class="form-group full-width">
            <label for="description">Short Description</label>
            <textarea
              id="description"
              v-model="course.description"
              rows="3"
              placeholder="A short, compelling description for the course card."
            ></textarea>
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <input
              id="category"
              v-model="course.category"
              type="text"
              placeholder="e.g., Content & Marketing"
            />
          </div>
          <div class="form-group">
            <label for="level">Level</label>
            <input
              id="level"
              v-model="course.level"
              type="text"
              placeholder="e.g., Beginner"
            />
          </div>
          <div class="form-group">
            <label for="price">Price (in Kobo/Cents)</label>
            <input
              id="price"
              v-model.number="course.price"
              type="number"
              placeholder="e.g., 29900 for NGN 299.00"
            />
          </div>
          <div class="form-group">
            <label for="currency">Currency</label>
            <input
              id="currency"
              v-model="course.currency"
              type="text"
              placeholder="e.g., NGN"
            />
          </div>
          <div class="form-group full-width">
            <label for="imageUrl">Thumbnail Image URL</label>
            <input
              id="imageUrl"
              v-model="course.imageUrl"
              type="text"
              placeholder="https://images.pexels.com/..."
            />
          </div>
        </div>
      </div>

      <!-- Section 2: Curriculum (Modules & Lessons) -->
      <div class="form-section">
        <h2 class="section-title">Curriculum</h2>
        <div class="modules-container">
          <div
            v-for="(module, modIndex) in course.modules"
            :key="modIndex"
            class="module-item"
          >
            <div class="module-header">
              <h3>Module {{ modIndex + 1 }}: {{ module.title }}</h3>
              <button
                @click.prevent="removeModule(modIndex)"
                class="btn-action btn-delete"
              >
                Remove Module
              </button>
            </div>
            <div class="form-group">
              <label>Module Title</label>
              <input
                v-model="module.title"
                type="text"
                placeholder="e.g., Foundations of AI"
              />
            </div>

            <h4>Lessons</h4>
            <div
              v-for="(lesson, lessIndex) in module.lessons"
              :key="lessIndex"
              class="lesson-item"
            >
              <input
                v-model="lesson.title"
                type="text"
                :placeholder="`Lesson ${lessIndex + 1} Title`"
              />
              <textarea
                v-model="lesson.textContentHTML"
                rows="3"
                placeholder="Lesson content (can include HTML tags)"
              ></textarea>
              <input
                v-model="lesson.videoURL"
                type="text"
                placeholder="Secure Video URL (Vimeo/Wistia)"
              />
              <button
                @click.prevent="removeLesson(modIndex, lessIndex)"
                class="btn-action btn-delete"
              >
                Remove Lesson
              </button>
            </div>
            <button
              @click.prevent="addLesson(modIndex)"
              class="btn btn-secondary"
            >
              Add Lesson to Module
            </button>
          </div>
        </div>
        <button @click.prevent="addModule" class="btn btn-primary">
          Add New Module
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  getCourseById,
  getCourseLessons,
  createOrUpdateCourse,
} from "../../services/db.js";

// --- Component State ---
const route = useRoute();
const router = useRouter();
const courseId = ref(route.params.id || null);
const isEditing = ref(!!courseId.value);
const isLoading = ref(isEditing.value); // Only load if we are editing
const isSaving = ref(false);
const error = ref(null);

// This is the main reactive object for our form
const course = ref({
  title: "",
  slug: "",
  description: "",
  category: "",
  level: "",
  price: 0,
  currency: "NGN",
  imageUrl: "",
  modules: [],
});

// --- Methods ---
const addModule = () => {
  course.value.modules.push({ title: "", lessons: [] });
};

const removeModule = (modIndex) => {
  course.value.modules.splice(modIndex, 1);
};

const addLesson = (modIndex) => {
  course.value.modules[modIndex].lessons.push({
    title: "",
    textContentHTML: "",
    videoURL: "",
  });
};

const removeLesson = (modIndex, lessIndex) => {
  course.value.modules[modIndex].lessons.splice(lessIndex, 1);
};

const saveCourse = async () => {
  isSaving.value = true;
  try {
    // Separate the core course data from the curriculum data
    const courseDetails = {
      title: course.value.title,
      slug: course.value.slug,
      description: course.value.description,
      category: course.value.category,
      level: course.value.level,
      price: course.value.price,
      currency: course.value.currency,
      imageUrl: course.value.imageUrl,
      // Store the module titles in order on the main course document for easy display
      moduleOrder: course.value.modules.map((m) => m.title),
    };

    // Flatten the lessons from all modules into a single array for saving
    const lessonsToSave = course.value.modules.flatMap((module, modIndex) =>
      module.lessons.map((lesson, lessIndex) => ({
        ...lesson,
        moduleId: module.title, // Link lesson to module by title
        order: modIndex * 100 + lessIndex, // A simple way to maintain order
      }))
    );

    // Call our powerful new database function
    const savedCourseId = await createOrUpdateCourse(
      courseId.value,
      courseDetails,
      lessonsToSave
    );

    alert("Course saved successfully!");
    // Redirect back to the main course list
    router.push("/admin/courses");
  } catch (err) {
    console.error("Failed to save course:", err);
    alert("Error saving course. Please check the console for details.");
  } finally {
    isSaving.value = false;
  }
};

// --- Data Fetching (for Edit Mode) ---
onMounted(async () => {
  if (isEditing.value) {
    try {
      const [courseData, lessonsData] = await Promise.all([
        getCourseById(courseId.value),
        getCourseLessons(courseId.value),
      ]);

      if (!courseData) {
        error.value = "Course not found.";
        return;
      }

      // Reconstruct the nested curriculum structure for the form
      const modulesMap = new Map();
      lessonsData.forEach((lesson) => {
        if (!modulesMap.has(lesson.moduleId)) {
          modulesMap.set(lesson.moduleId, {
            title: lesson.moduleId,
            lessons: [],
          });
        }
        modulesMap.get(lesson.moduleId).lessons.push(lesson);
      });

      course.value = {
        ...courseData,
        modules: Array.from(modulesMap.values()),
      };
    } catch (err) {
      console.error("Failed to load course for editing:", err);
      error.value = "Failed to load course data.";
    } finally {
      isLoading.value = false;
    }
  }
});
</script>

<style scoped>
/* Dedicated styles for the Course Editor form */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.header-actions {
  display: flex;
  gap: 1rem;
}
.form-section {
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}
.section-title {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--dark-border);
}
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.form-group.full-width {
  grid-column: 1 / -1;
}
.form-group label {
  display: block;
  font-weight: var(--font-semibold);
  margin-bottom: 0.5rem;
}
.form-group input,
.form-group textarea {
  width: 100%;
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 6px;
  padding: 0.75rem;
  color: white;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--brand-aqua);
}
.module-item {
  border: 1px solid var(--dark-border);
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.module-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.lesson-item {
  border-top: 1px solid var(--dark-border);
  padding-top: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.btn.btn-secondary {
  margin-top: 1rem;
}
</style>
