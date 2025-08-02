<!-- /src/views/admin/CourseEditorView.vue - FINAL, ENHANCED VERSION -->
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
            <label for="title">Course Title</label
            ><input id="title" v-model="course.title" type="text" />
          </div>
          <div class="form-group">
            <label for="slug">URL Slug</label
            ><input id="slug" v-model="course.slug" type="text" />
          </div>
          <div class="form-group full-width">
            <label for="description">Short Description</label
            ><textarea
              id="description"
              v-model="course.description"
              rows="3"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="category">Category</label
            ><input id="category" v-model="course.category" type="text" />
          </div>
          <div class="form-group">
            <label for="level">Level</label
            ><input id="level" v-model="course.level" type="text" />
          </div>
          <div class="form-group">
            <label for="price">Price (in Kobo/Cents)</label
            ><input id="price" v-model.number="course.price" type="number" />
          </div>
          <div class="form-group">
            <label for="currency">Currency</label
            ><input id="currency" v-model="course.currency" type="text" />
          </div>
          <div class="form-group full-width">
            <label for="imageUrl">Thumbnail Image URL</label
            ><input
              id="imageUrl"
              v-model="course.imageUrl"
              type="text"
              placeholder="https://images.pexels.com/..."
            />
          </div>
          <div class="form-group full-width">
            <label class="checkbox-label">
              <input type="checkbox" v-model="course.isFeatured" />
              Mark as a Featured Course (will show on Home Page)
            </label>
          </div>
        </div>
      </div>

      <!-- *** NEW: Enhanced Course Information Section *** -->
      <div class="form-section">
        <h2 class="section-title">Enhanced Details (for Sales Page)</h2>
        <div class="form-grid">
          <div class="form-group full-width">
            <label for="targetAudience">Target Audience</label>
            <textarea
              id="targetAudience"
              v-model="course.targetAudience"
              rows="2"
              placeholder="e.g., Marketers, copywriters, and entrepreneurs..."
            ></textarea>
          </div>
          <div class="form-group">
            <label for="prerequisites">Prerequisites (one per line)</label>
            <textarea
              id="prerequisites"
              v-model="prerequisitesAsText"
              rows="3"
              placeholder="e.g., No prerequisites required"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="learningObjectives"
              >Learning Objectives (one per line)</label
            >
            <textarea
              id="learningObjectives"
              v-model="learningObjectivesAsText"
              rows="3"
              placeholder="e.g., Build a multi-step AI agent"
            ></textarea>
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
              <label>Module Title</label
              ><input v-model="module.title" type="text" />
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
              <!-- *** NEW: Added new fields to the lesson form *** -->
              <div class="lesson-meta-grid">
                <div class="form-group">
                  <label>Estimated Duration</label>
                  <input
                    v-model="lesson.estimatedDuration"
                    type="text"
                    placeholder="e.g., 15 minutes"
                  />
                </div>
                <div class="form-group">
                  <label class="checkbox-label">
                    <input type="checkbox" v-model="lesson.hasPlayground" />
                    Has AI Playground?
                  </label>
                </div>
              </div>
              <textarea
                v-model="lesson.textContentHTML"
                rows="4"
                placeholder="Lesson content (HTML is supported)"
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
// ===================================================================================
//  IMPORTS & INITIALIZATION
// ===================================================================================
// Import all necessary functions from Vue, Vue Router, and our database service.
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
// We import all required db functions to fetch and save course/lesson data.
import {
  getCourseWithLessons,
  createOrUpdateCourse,
} from "../../services/db.js";

// Initialize router and get the current route to determine if we are editing.
const route = useRoute();
const router = useRouter();
const courseId = ref(route.params.id || null);
const isEditing = ref(!!courseId.value);

// ===================================================================================
//  COMPONENT REACTIVE STATE
// ===================================================================================
// This is the main reactive object that is bound to our form inputs.
// It contains the complete, final data structure for a course, matching all fields in your template.
const course = ref({
  title: "",
  slug: "",
  description: "",
  category: "",
  level: "",
  price: 0,
  currency: "NGN",
  imageUrl: "",
  isFeatured: false,
  targetAudience: "",
  prerequisites: [], // Stored as an array
  learningObjectives: [], // Stored as an array
  estimatedDuration: "",
  hasAIPlayground: false,
  modules: [],
});

// State flags to control the UI (e.g., showing loaders or error messages).
const isLoading = ref(isEditing.value);
const isSaving = ref(false);
const error = ref(null);

// ===================================================================================
//  DEFINITIVE FIX: COMPUTED PROPERTIES FOR TEXTAREAS
//  These properties act as a "bridge" between the array data in our 'course' object
//  and the simple text required by the <textarea> inputs in the template.
// ===================================================================================

const prerequisitesAsText = computed({
  get: () => (course.value.prerequisites || []).join("\n"),
  set: (value) => {
    course.value.prerequisites = value
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item);
  },
});

const learningObjectivesAsText = computed({
  get: () => (course.value.learningObjectives || []).join("\n"),
  set: (value) => {
    course.value.learningObjectives = value
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item);
  },
});

// ===================================================================================
//  METHODS
// ===================================================================================
const addModule = () => {
  course.value.modules.push({
    title: "",
    lessons: [{ title: "", textContentHTML: "", videoURL: "" }],
  });
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

/**
 * The main save handler. This version is now complete and correct, accounting for ALL fields.
 */
const saveCourse = async () => {
  isSaving.value = true;
  try {
    // 1. Destructure the 'modules' array from the main course object.
    const { modules, ...courseDetailsToSave } = course.value;

    // 2. Prepare the lessons data, ensuring correct ordering and linking.
    const lessonsToSave = modules.flatMap((module, modIndex) =>
      module.lessons.map((lesson, lessIndex) => ({
        ...lesson,
        moduleId: module.title, // Link lesson to module by its title
        order: modIndex * 100 + lessIndex, // A simple formula to preserve order
      }))
    );

    // 3. Call our robust database function to perform the transactional write.
    // It saves the main course details and all the lessons in a single operation.
    await createOrUpdateCourse(
      courseId.value,
      courseDetailsToSave,
      lessonsToSave
    );

    alert("Course saved successfully!");
    router.push("/admin/courses");
  } catch (err) {
    console.error("Failed to save course:", err);
    alert("Error saving course. Please check the console for details.");
  } finally {
    isSaving.value = false;
  }
};

// ===================================================================================
//  LIFECYCLE HOOK (for Edit Mode)
// ===================================================================================
onMounted(async () => {
  if (isEditing.value) {
    isLoading.value = true;
    try {
      // Fetches the course and its lessons in a single, efficient call.
      const fetchedCourse = await getCourseWithLessons(courseId.value);

      if (fetchedCourse) {
        // Ensure that array fields exist and are arrays before assigning, preventing errors.
        fetchedCourse.prerequisites = fetchedCourse.prerequisites || [];
        fetchedCourse.learningObjectives =
          fetchedCourse.learningObjectives || [];
        fetchedCourse.modules = fetchedCourse.modules || [];

        // Populate the main 'course' reactive object with the fetched data.
        course.value = fetchedCourse;
      } else {
        error.value = "Course not found.";
      }
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
/* 
  This CSS is a direct migration of our previously established admin form styles,
  ensuring a consistent look and feel across the CMS.
*/
.admin-page-container {
  padding: 1rem;
}
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.page-title {
  font-size: 2rem;
  color: white;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.form-group {
  margin-bottom: 1.5rem;
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
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  background-color: var(--dark-blue-card);
  padding: 1rem;
  border-radius: 6px;
}
input[type="checkbox"] {
  width: 1.25em;
  height: 1.25em;
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
.module-header h3 {
  color: white;
}
.btn-action {
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: var(--font-semibold);
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}
.btn-delete {
  background-color: transparent;
  border: 1px solid #b91c1c;
  color: #dc2626;
}
.btn-delete:hover {
  background-color: rgba(220, 38, 38, 0.1);
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
