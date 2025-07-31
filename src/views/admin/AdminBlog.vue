<!-- /src/views/admin/AdminBlog.vue -->
<template>
  <div class="admin-page-container">
    <div class="page-header">
      <h1 class="page-title">Manage Blog Posts</h1>
      <RouterLink to="/admin/blog/new" class="btn btn-primary"
        >Create New Post</RouterLink
      >
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="page-loader-container">
      <div class="spinner"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-message">
      <p>Failed to load blog posts. Please try again later.</p>
    </div>

    <!-- Ideal State (with data) -->
    <div v-else-if="posts.length > 0" class="posts-table-container">
      <table class="posts-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Published Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td data-label="Title">{{ post.title }}</td>
            <td data-label="Category">{{ post.category || "N/A" }}</td>
            <td data-label="Published Date">
              {{ formatDate(post.publishedAt) }}
            </td>
            <td data-label="Actions" class="actions-cell">
              <RouterLink
                :to="`/admin/blog/edit/${post.id}`"
                class="btn-action btn-edit"
                >Edit</RouterLink
              >
              <button
                @click="handleDeletePost(post.id, post.title)"
                class="btn-action btn-delete"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Empty State -->
    <div v-else class="no-data-message">
      <p>No blog posts found. Click "Create New Post" to get started.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
// We will add the deleteBlogPost function to db.js in a future step
import { getAllBlogPosts /*, deleteBlogPost*/ } from "../../services/db.js";

// --- Reactive State ---
const posts = ref([]);
const isLoading = ref(true);
const error = ref(null);

// --- Data Fetching ---
const fetchPosts = async () => {
  try {
    isLoading.value = true;
    error.value = null;
    posts.value = await getAllBlogPosts();
  } catch (err) {
    console.error("Failed to fetch blog posts:", err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

// --- Methods ---
const handleDeletePost = async (postId, postTitle) => {
  if (
    confirm(
      `Are you sure you want to delete the post "${postTitle}"? This cannot be undone.`
    )
  ) {
    alert(
      `In a real app, this would delete post ID: ${postId}. Delete logic is not yet implemented.`
    );
    // Future implementation:
    // await deleteBlogPost(postId);
    // fetchPosts();
  }
};

/**
 * Formats a Firestore Timestamp into a readable date string.
 * @param {object} timestamp - The Firestore Timestamp object.
 * @returns {string} A formatted date string (e.g., "July 31, 2024").
 */
const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) {
    return "Not available";
  }
  return timestamp.toDate().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// --- Lifecycle Hook ---
onMounted(fetchPosts);
</script>

<style scoped>
/* 
  We are reusing the same professional, mobile-first table styles
  from AdminCourses.vue to ensure a consistent admin experience.
*/
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
  color: white;
}
.posts-table-container {
  overflow-x: auto;
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
}
.posts-table {
  width: 100%;
  border-collapse: collapse;
  color: var(--text-primary-light);
}
.posts-table th,
.posts-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--dark-border);
}
.posts-table thead {
  background-color: var(--dark-blue-card);
}
.posts-table th {
  font-size: 0.875rem;
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  color: var(--text-secondary-light);
}
.posts-table tbody tr:hover {
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
.no-data-message,
.error-message {
  text-align: center;
  padding: 3rem;
  background-color: var(--dark-blue-bg);
  border-radius: 8px;
}

@media (max-width: 768px) {
  .posts-table thead {
    display: none;
  }
  .posts-table,
  .posts-table tbody,
  .posts-table tr,
  .posts-table td {
    display: block;
    width: 100%;
  }
  .posts-table tr {
    margin-bottom: 1rem;
    border: 1px solid var(--dark-border);
    border-radius: 8px;
  }
  .posts-table td {
    text-align: right;
    position: relative;
    border-bottom: 1px solid var(--dark-border);
  }
  .posts-table td::before {
    content: attr(data-label);
    position: absolute;
    left: 1rem;
    font-weight: var(--font-semibold);
    color: var(--text-secondary-light);
  }
}
</style>
