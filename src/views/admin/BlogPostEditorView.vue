<!-- /src/views/admin/BlogPostEditorView.vue - FINAL, COMPLETE & CORRECTED VERSION -->
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
        <div class="form-grid">
          <div class="form-group">
            <label for="title">Post Title</label>
            <input id="title" v-model="post.title" type="text" />
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <input id="category" v-model="post.category" type="text" />
          </div>

          <!-- *** THE DEFINITIVE FIX FOR THE DATE FIELD IS HERE *** -->
          <div class="form-group">
            <label for="publishedAt">Published Date</label>
            <input id="publishedAt" v-model="publishedAtForInput" type="date" />
            <small>Leave blank to set to the current date on creation.</small>
          </div>

          <div class="form-group">
            <label for="imageUrl">Header Image URL</label>
            <input id="imageUrl" v-model="post.imageUrl" type="text" />
          </div>
        </div>

        <div class="form-group">
          <label for="content">Content (HTML is supported)</label>
          <textarea id="content" v-model="post.content" rows="15"></textarea>
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
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getBlogPostById, createOrUpdateBlogPost } from "../../services/db.js";
import { serverTimestamp } from "firebase/firestore"; // Import serverTimestamp

const route = useRoute();
const router = useRouter();
const postId = ref(route.params.id || null);
const isEditing = ref(!!postId.value);
const isLoading = ref(isEditing.value);
const isSaving = ref(false);
const error = ref(null);

const post = ref({
  title: "",
  category: "",
  imageUrl: "",
  content: "",
  isFeatured: false,
  publishedAt: null, // This will hold the Firestore Timestamp object
});

// --- Computed Property for the Date Input ---
// This safely handles the conversion between the Firestore Timestamp and the HTML date input format.
const publishedAtForInput = computed({
  get() {
    if (!post.value.publishedAt || !post.value.publishedAt.toDate) return "";
    const date = post.value.publishedAt.toDate();
    // Format to YYYY-MM-DD for the <input type="date">
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  },
  set(newValue) {
    if (newValue) {
      // When the admin changes the date, convert the YYYY-MM-DD string back into a Date object.
      // We will handle the conversion to a Firestore Timestamp right before saving.
      post.value.publishedAt = new Date(newValue);
    } else {
      post.value.publishedAt = null;
    }
  },
});

const savePost = async () => {
  isSaving.value = true;
  try {
    const dataToSave = { ...post.value };

    // --- Definitive Date Logic ---
    if (dataToSave.publishedAt instanceof Date) {
      // If the admin has set a specific date, we use it.
      // Firestore will convert the JS Date object to a Timestamp.
    } else if (!isEditing.value) {
      // If this is a NEW post and the admin left the date blank,
      // we set it to the current server time upon creation.
      dataToSave.publishedAt = serverTimestamp();
    }
    // If it's an existing post and the admin didn't change the date,
    // we just let the existing Timestamp value pass through.

    await createOrUpdateBlogPost(postId.value, dataToSave);
    alert("Blog post saved successfully!");
    router.push("/admin/blog");
  } catch (err) {
    console.error("Failed to save blog post:", err);
    alert("Error saving post. Please check the console.");
  } finally {
    isSaving.value = false;
  }
};

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
/* Updated styles to accommodate the new grid layout */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
small {
  color: var(--text-secondary-light);
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
}
/* All other styles are preserved */
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
}
.form-group {
  margin-bottom: 0;
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
textarea {
  min-height: 200px;
  resize: vertical;
  margin-top: 1.5rem;
}
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  margin-top: 1.5rem;
}
input[type="checkbox"] {
  width: 1.25em;
  height: 1.25em;
}
</style>
