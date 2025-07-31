<!-- /src/views/SinglePostView.vue - FINAL, ENHANCED VERSION -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    This section is a direct migration of your SinglePostPage.html file.
    Vue's conditional rendering ('v-if') is used to safely display content
    only after it has been successfully fetched.
  -->
  <div class="single-post-wrapper">
    <main class="container">
      <!-- 
        This is a conditional rendering block. The entire article will only be
        rendered if the 'post' data object is not null.
      -->
      <article v-if="post" id="post-content-container">
        <!-- Article Header -->
        <header class="post-header">
          <p class="post-category">{{ post.category }}</p>
          <h1 class="post-title">{{ post.title }}</h1>
          <div class="post-meta">
            <span>Published on {{ post.date }}</span>
          </div>
        </header>

        <!-- Featured Image -->
        <div class="feature-image-container">
          <img :src="post.imageUrl" :alt="post.title" class="feature-image" />
        </div>

        <!-- 
          Article Body
          'v-html' is a Vue directive that allows us to render raw HTML content.
          This is necessary because our blog post content includes HTML tags (<h2>, <p>, etc.).
        -->
        <div class="post-body" v-html="post.content"></div>
      </article>

      <!-- A loading message is shown while the post data is being fetched. -->
      <div v-else class="page-loader-container">
        <div class="spinner"></div>
      </div>

      <!-- Post Actions Widget (Like & Share) -->
      <section v-if="post" id="post-actions-container" class="container">
        <div class="post-actions-widget">
          <!-- Liking Widget -->
          <div class="like-widget">
            <!-- 
              The '@click' directive calls our 'toggleLike' method.
              The ':class' binding dynamically adds the 'liked' class.
            -->
            <button
              @click="toggleLike"
              :class="{ liked: isLiked }"
              class="like-button"
              aria-label="Like this post"
            >
              <svg class="heart-icon" viewBox="0 0 24 24">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
            <span class="like-count">{{ likeCount }}</span>
          </div>

          <!-- Sharing Widget -->
          <div class="share-widget">
            <h4 class="share-widget-title">Share:</h4>
            <!-- 'v-if' is used for feature detection. The mobile button shows only if the Web Share API is available. -->
            <button
              v-if="canShare"
              @click="sharePost"
              class="btn btn-primary mobile-share-button"
            >
              Share
            </button>
            <!-- The desktop buttons show as a fallback if the Web Share API is not available. -->
            <div v-else class="share-buttons">
              <a
                :href="shareLinks.twitter"
                target="_blank"
                rel="noopener noreferrer"
                class="share-twitter"
                aria-label="Share on X"
                ><svg viewBox="0 0 24 24">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  /></svg
              ></a>
              <a
                :href="shareLinks.facebook"
                target="_blank"
                rel="noopener noreferrer"
                class="share-facebook"
                aria-label="Share on Facebook"
                ><svg viewBox="0 0 24 24">
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"
                  /></svg
              ></a>
              <a
                :href="shareLinks.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="share-linkedin"
                aria-label="Share on LinkedIn"
                ><svg viewBox="0 0 24 24">
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM6 9H2V21h4V9zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  /></svg
              ></a>
              <button @click="copyLink" aria-label="Copy link">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Comments Section -->
      <section v-if="post" id="comments-section" class="container">
        <h2 class="section-title">Join the Discussion</h2>
        <div class="comment-form-container">
          <textarea placeholder="Add a comment..." disabled></textarea>
          <button class="btn btn-primary" disabled>Submit</button>
          <p class="comment-notice">
            Commenting and likes are coming soon! This is a UI demonstration.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router"; // Vue Router's hook for accessing route information
import { allBlogPosts } from "../services/mockData.js";

// ===================================================================================
//  COMPONENT DATA & STATE
// ===================================================================================

const route = useRoute(); // Get access to the current route object
const postId = ref(route.params.id); // Get the post ID from the URL (e.g., /blog/{id})
const post = ref(null); // This will hold the data for our specific blog post

// --- Interactivity State ---
const isLiked = ref(false);
const likeCount = ref(Math.floor(Math.random() * 100)); // Start with a random number of likes
const canShare = ref(false); // Will be set to true if the Web Share API is available

// ===================================================================================
//  COMPUTED PROPERTIES
// ===================================================================================

// This computed property generates the URLs for the desktop share buttons.
// It automatically updates if the page URL or post title changes.
const shareLinks = computed(() => {
  if (!post.value) return {};
  const url = window.location.href;
  const text = `Check out this article from Nexus Academy: ${post.value.title}`;
  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      url
    )}`,
  };
});

// ===================================================================================
//  METHODS & LIFECYCLE HOOKS
// ===================================================================================

/**
 * Toggles the liked state of the post and updates the count.
 * This is a UI-only demonstration for now.
 */
function toggleLike() {
  isLiked.value = !isLiked.value;
  likeCount.value += isLiked.value ? 1 : -1;
}

/**
 * Uses the modern Web Share API to open the native device sharing menu.
 */
async function sharePost() {
  if (!post.value) return;
  try {
    await navigator.share({
      title: post.value.title,
      text: `Check out this article from Nexus Academy: ${post.value.title}`,
      url: window.location.href,
    });
  } catch (err) {
    console.error("Error using Web Share API:", err);
  }
}

/**
 * Copies the current page URL to the user's clipboard.
 */
function copyLink(e) {
  const button = e.currentTarget;
  navigator.clipboard.writeText(window.location.href).then(() => {
    // Provide visual feedback that the link was copied
    const originalContent = button.innerHTML;
    button.innerHTML =
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
    setTimeout(() => {
      button.innerHTML = originalContent;
    }, 2000);
  });
}

// 'onMounted' runs after the component is rendered. It's the perfect place to fetch
// data for the page and initialize features.
onMounted(() => {
  // Find the correct blog post from our mock data service using the ID from the URL.
  post.value = allBlogPosts.find((p) => p.id === postId.value);

  // Feature detect for the Web Share API.
  if (navigator.share) {
    canShare.value = true;
  }
});
</script>

<style scoped>
/* 
  The 'scoped' attribute ensures these styles ONLY apply to this component.
  This is a direct and complete migration of your SinglePostPage.css file.
*/

.single-post-wrapper {
  background-color: var(--dark-navy);
  color: var(--text-secondary-light);
  padding-top: 80px;
}
#post-content-container,
#post-actions-container,
#comments-section {
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem var(--container-padding);
}

/* --- Article Styles --- */
.post-header {
  margin-bottom: 2rem;
}
.post-category {
  color: var(--brand-aqua);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.post-title {
  font-size: 2.5rem;
  color: white;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}
.post-meta {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  border-top: 1px solid var(--dark-border);
  border-bottom: 1px solid var(--dark-border);
  padding: 1rem 0;
}
.post-meta span {
  margin-right: 1.5rem;
}
.feature-image-container {
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16/9;
}
.feature-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post-body {
  font-size: 1.125rem;
  line-height: 1.8;
}
.post-body h2,
.post-body h3 {
  color: white;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}
.post-body h2 {
  font-size: 1.75rem;
}
.post-body h3 {
  font-size: 1.5rem;
}
.post-body p {
  margin-bottom: 1.5rem;
}
.post-body a {
  color: var(--brand-aqua);
  text-decoration: underline;
}
.post-body blockquote {
  margin: 2rem 0;
  padding-left: 1.5rem;
  border-left: 4px solid var(--brand-aqua);
  font-style: italic;
  color: white;
}

/* --- Post Actions Widget --- */
#post-actions-container {
  padding: 2rem 0;
  border-top: 1px solid var(--dark-border);
}
.post-actions-widget {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* --- Like Widget --- */
.like-widget {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.like-button {
  background: transparent;
  border: 1px solid var(--dark-border);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}
.like-button:hover {
  border-color: #f472b6;
}
.like-button.liked {
  border-color: #ec4899;
  animation: bounce 0.4s ease;
}
.heart-icon {
  width: 24px;
  height: 24px;
  fill: var(--text-secondary-light);
  transition: fill 0.2s;
}
.like-button.liked .heart-icon {
  fill: #ec4899;
}
.like-count {
  font-size: 1rem;
  font-weight: 700;
  color: white;
}
@keyframes bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* --- Share Widget --- */
.share-widget {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.share-widget-title {
  font-weight: 700;
  color: white;
}
.share-buttons a,
.share-buttons button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--dark-blue-card);
  border-radius: 50%;
  margin-left: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}
.share-buttons svg {
  width: 20px;
  height: 20px;
  fill: white;
}
.share-twitter:hover {
  background-color: #1da1f2;
}
.share-facebook:hover {
  background-color: #1877f2;
}
.share-linkedin:hover {
  background-color: #0a66c2;
}
.mobile-share-button {
  padding: 0.5rem 1.5rem;
}

/* --- Comments Section --- */
#comments-section {
  text-align: center;
  border-top: 1px solid var(--dark-border);
}
.comment-form-container {
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  padding: 2rem;
  border-radius: 12px;
}
.comment-form-container textarea {
  width: 100%;
  height: 100px;
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  padding: 1rem;
  resize: vertical;
  margin-bottom: 1rem;
}
.comment-form-container button:disabled {
  background: var(--dark-border);
  cursor: not-allowed;
  color: var(--text-secondary-light);
}
.comment-notice {
  margin-top: 1rem;
  font-size: 0.875rem;
}

/* --- Desktop Responsive Styles --- */
@media (min-width: 768px) {
  .post-title {
    font-size: 3.5rem;
  }
}
</style>
