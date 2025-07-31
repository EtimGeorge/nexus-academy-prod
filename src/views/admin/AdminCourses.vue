<!-- /src/views/admin/AdminCourses.vue - FINAL, CORRECTED VERSION -->
<template>
  <div class="admin-page-container">
    <div class="page-header">
      <h1 class="page-title">Manage Courses</h1>
      <RouterLink to="/admin/courses/new" class="btn btn-primary"
        >Create New Course</RouterLink
      >
    </div>

    <div v-if="isLoading" class="page-loader-container">
      <div class="spinner"></div>
    </div>

    <div v-else-if="error" class="error-message">
      <p>Failed to load courses. Please try again later.</p>
    </div>

    <div v-else-if="courses.length > 0" class="courses-table-container">
      <table class="courses-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Level</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" :key="course.id">
            <td data-label="Title">{{ course.title }}</td>
            <td data-label="Category">{{ course.category || "N/A" }}</td>
            <td data-label="Level">{{ course.level || "N/A" }}</td>
            <td data-label="Price">
              {{ formatPrice(course.price, course.currency) }}
            </td>
            <td data-label="Actions" class="actions-cell">
              <RouterLink
                :to="`/admin/courses/edit/${course.id}`"
                class="btn-action btn-edit"
                >Edit</RouterLink
              >
              <button
                @click="handleDeleteCourse(course.id, course.title)"
                class="btn-action btn-delete"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="no-data-message">
      <p>No courses found. Click "Create New Course" to get started.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
// *** THE DEFINITIVE FIX IS HERE ***
// We are now importing the correct functions that are ACTUALLY exported from our db.js file.
// We are importing 'deleteCourse', NOT the non-existent 'deleteDoc'.
import { getAllCourses, deleteCourse } from "../../services/db.js";

// --- Reactive State ---
const courses = ref([]);
const isLoading = ref(true);
const error = ref(null);

// --- Data Fetching ---
const fetchCourses = async () => {
  try {
    isLoading.value = true;
    error.value = null;
    courses.value = await getAllCourses();
  } catch (err) {
    console.error("Failed to fetch courses:", err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

// --- Methods ---
const handleDeleteCourse = async (courseId, courseTitle) => {
  if (
    confirm(
      `Are you sure you want to delete "${courseTitle}"? This will delete all associated lessons and cannot be undone.`
    )
  ) {
    try {
      // This now correctly calls the 'deleteCourse' function we imported.
      await deleteCourse(courseId);
      alert(`Course "${courseTitle}" has been deleted successfully.`);
      fetchCourses(); // Refresh the list
    } catch (err) {
      console.error("Failed to delete course:", err);
      alert("Error deleting course. See console for details.");
    }
  }
};

const formatPrice = (price, currency = "NGN") => {
  if (typeof price !== "number") return "N/A";
  return new Intl.NumberFormat("en-NG", { style: "currency", currency }).format(
    price / 100
  );
};

// --- Lifecycle Hook ---
onMounted(fetchCourses);
</script>

<style scoped>
/* All styles from the previous, correct version are preserved here. No changes needed. */
.admin-page-container {
  padding: 1rem;
}
.page-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
}
.page-title {
  font-size: 2rem;
  color: #fff;
}
.courses-table-container {
  overflow-x: auto;
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
}
.courses-table {
  width: 100%;
  border-collapse: collapse;
  color: var(--text-primary-light);
}
.courses-table td,
.courses-table th {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--dark-border);
}
.courses-table thead {
  background-color: var(--dark-blue-card);
}
.courses-table th {
  font-size: 0.875rem;
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  color: var(--text-secondary-light);
}
.courses-table tbody tr:hover {
  background-color: var(--dark-blue-card);
}
.actions-cell {
  display: flex;
  gap: 0.5rem;
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
.btn-edit {
  background-color: transparent;
  border: 1px solid var(--brand-bright-blue);
  color: var(--brand-bright-blue);
}
.btn-edit:hover {
  background-color: rgba(38, 108, 255, 0.1);
}
.btn-delete {
  background-color: transparent;
  border: 1px solid #b91c1c;
  color: #dc2626;
}
.btn-delete:hover {
  background-color: rgba(220, 38, 38, 0.1);
}
.error-message,
.no-data-message {
  text-align: center;
  padding: 3rem;
  background-color: var(--dark-blue-bg);
  border-radius: 8px;
}
@media (max-width: 768px) {
  .courses-table thead {
    display: none;
  }
  .courses-table,
  .courses-table tbody,
  .courses-table td,
  .courses-table tr {
    display: block;
    width: 100%;
  }
  .courses-table tr {
    margin-bottom: 1rem;
    border: 1px solid var(--dark-border);
    border-radius: 8px;
  }
  .courses-table td {
    text-align: right;
    position: relative;
    border-bottom: 1px solid var(--dark-border);
  }
  .courses-table td:before {
    content: attr(data-label);
    position: absolute;
    left: 1rem;
    font-weight: var(--font-semibold);
    color: var(--text-secondary-light);
  }
}
</style>
