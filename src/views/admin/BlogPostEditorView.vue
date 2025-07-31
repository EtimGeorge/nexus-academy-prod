<!-- /src/views/admin/BlogPostEditorView.vue -->
<template>
  <div class="admin-page-container">
    <div class="page-header">
      <h1 class="page-title">
        {{ isEditing ? "Edit Blog Post" : "Create New Post" }}
      </h1>
      <div class="header-actions">
        <RouterLink to="/admin/blog" class="btn btn-secondary"
          >Cancel</RouterLink
        >
        <button @click="savePost" class="btn btn-primary" :disabled="isSaving">
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

    <form v-else @submit.prevent="savePost" class="post-editor-form">
      <div class="form-section">
        <div class="form-group">
          <label for="title">Post Title</label>
          <input
            id="title"
            v-model="post.title"
            type="text"
            placeholder="e.g., The Ultimate AI Video Showdown"
          />
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <input
            id="category"
            v-model="post.category"
            type="text"
            placeholder="e.g., Tool Spotlight"
          />
        </div>
        <div class="form-group">
          <label for="imageUrl">Header Image URL</label>
          <input
            id="imageUrl"
            v-model="post.imageUrl"
            type="text"
            placeholder="https://images.pexels.com/..."
          />
        </div>
        <div class="form-group">
          <label for="contentHTML">Content (HTML is supported)</label>
          <textarea
            id="contentHTML"
            v-model="post.contentHTML"
            rows="15"
            placeholder="<h2>Introduction</h2><p>Start writing your article here...</p>"
          ></textarea>
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="post.isFeatured" />
            Mark as Featured Post
          </label>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getBlogPostById, createOrUpdateBlogPost } from "../../services/db.js";

// --- Component State ---
const route = useRoute();
const router = useRouter();
const postId = ref(route.params.id || null);
const isEditing = ref(!!postId.value);
const isLoading = ref(isEditing.value);
const isSaving = ref(false);
const error = ref(null);

// This is the main reactive object for our form
const post = ref({
  title: "",
  category: "",
  imageUrl: "",
  contentHTML: "",
  isFeatured: false,
});

// --- Methods ---
const savePost = async () => {
  if (!post.value.title) {
    alert("Please enter a title for the blog post.");
    return;
  }
  isSaving.value = true;
  try {
    // We can pass the whole post object to our database function
    await createOrUpdateBlogPost(postId.value, post.value);
    alert("Blog post saved successfully!");
    router.push("/admin/blog"); // Redirect back to the blog post list
  } catch (err) {
    console.error("Failed to save blog post:", err);
    alert("Error saving blog post. Please check the console for details.");
  } finally {
    isSaving.value = false;
  }
};

// --- Data Fetching (for Edit Mode) ---
onMounted(async () => {
  if (isEditing.value) {
    try {
      const fetchedPost = await getBlogPostById(postId.value);
      if (fetchedPost) {
        post.value = fetchedPost;
      } else {
        error.value = "Blog post not found.";
      }
    } catch (err) {
      console.error("Failed to load blog post for editing:", err);
      error.value = "Failed to load post data.";
    } finally {
      isLoading.value = false;
    }
  }
});
</script>

<style scoped>
/* 
  We are reusing the professional form styles from CourseEditorView.vue
  to ensure a consistent and clean admin experience.
*/
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
.post-editor-form {
  /* Optional: can be empty if all styling is on form-section */
}
.form-section {
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  padding: 2rem;
}
.form-group {
  margin-bottom: 1.5rem;
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
  font-size: 1rem;
  font-family: inherit;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--brand-aqua);
}
textarea {
  min-height: 200px;
  resize: vertical;
}
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}
input[type="checkbox"] {
  width: 1.25em;
  height: 1.25em;
}
</style>
