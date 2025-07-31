<!-- /src/views/BlogView.vue - FINAL, ENHANCED VERSION -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    This section is a direct migration of your enhanced BlogPage.html file.
    Vue's reactive data and computed properties will power the dynamic sections.
  -->
  <div class="blog-page-wrapper">
    <main class="container">
      <!-- Page Header -->
      <header class="blog-header">
        <h1 class="animate-header">The Nexus Pulse</h1>
        <p class="animate-header">
          Analysis, tutorials, and insights on the cutting edge of AI. Your
          essential resource for staying ahead.
        </p>
      </header>

      <!-- Main Two-Column Layout -->
      <div class="blog-layout">
        <!-- 
          Sidebar Section
          Contains all interactive widgets.
        -->
        <aside class="blog-sidebar">
          <!-- Search Widget -->
          <div class="sidebar-widget animate-on-scroll">
            <h3 class="widget-title">Search Articles</h3>
            <div class="search-widget-container">
              <!-- 
                'v-model' is a powerful Vue directive that creates a two-way binding.
                The input field's value is now directly linked to the 'searchTerm'
                variable in our script. Typing in the box automatically updates the variable.
              -->
              <input
                type-="search"
                v-model="searchTerm"
                placeholder="e.g., 'Kling vs Sora'"
              />
            </div>
          </div>

          <!-- Categories Widget -->
          <div class="sidebar-widget animate-on-scroll">
            <h3 class="widget-title">Categories</h3>
            <ul class="category-list">
              <li v-for="category in uniqueCategories" :key="category">
                <a
                  href="#"
                  @click.prevent="setActiveCategory(category)"
                  :class="{ active: activeCategory === category }"
                >
                  {{ category }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Newsletter Widget -->
          <div class="sidebar-widget animate-on-scroll">
            <h3 class="widget-title">Subscribe to Nexus</h3>
            <div class="newsletter-widget-container">
              <p>
                Get the latest AI news and tutorials delivered to your inbox.
              </p>
              <!-- The '@submit.prevent' stops the default form submission and calls our method instead. -->
              <form
                @submit.prevent="handleNewsletterSubmit"
                class="newsletter-form"
              >
                <input
                  type="email"
                  v-model="newsletterEmail"
                  placeholder="Your email address"
                  required
                />
                <button type="submit" class="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>

          <!-- Popular Courses Widget -->
          <div class="sidebar-widget animate-on-scroll">
            <h3 class="widget-title">Popular Courses</h3>
            <ul class="popular-courses-list">
              <li
                v-for="course in popularCourses"
                :key="course.id"
                class="popular-course-item"
              >
                <RouterLink :to="`/course/${course.id}`">
                  <img :src="course.imageUrl" :alt="course.title" />
                  <div class="popular-course-item-info">
                    <h4>{{ course.title }}</h4>
                  </div>
                </RouterLink>
              </li>
            </ul>
          </div>
        </aside>

        <!-- 
          Main Content Section
          Displays the featured post and the grid of other posts.
        -->
        <section class="blog-posts-grid-container">
          <!-- Featured Post -->
          <div v-if="featuredPost" class="featured-post-wrapper">
            <RouterLink
              :to="`/blog/${featuredPost.id}`"
              class="blog-card animate-on-scroll"
            >
              <div class="blog-card-image-container">
                <img
                  :src="featuredPost.imageUrl"
                  :alt="featuredPost.title"
                  class="blog-card-image"
                  loading="lazy"
                />
              </div>
              <div class="blog-card-content">
                <p class="blog-card-category">{{ featuredPost.category }}</p>
                <h3 class="blog-card-title">{{ featuredPost.title }}</h3>
                <p class="blog-card-date">{{ featuredPost.date }}</p>
              </div>
            </RouterLink>
          </div>

          <!-- The grid for all other posts -->
          <div class="posts-grid">
            <template v-if="filteredPosts.length > 0">
              <RouterLink
                v-for="post in filteredPosts"
                :key="post.id"
                :to="`/blog/${post.id}`"
                class="blog-card animate-on-scroll"
              >
                <div class="blog-card-image-container">
                  <img
                    :src="post.imageUrl"
                    :alt="post.title"
                    class="blog-card-image"
                    loading="lazy"
                  />
                </div>
                <div class="blog-card-content">
                  <p class="blog-card-category">{{ post.category }}</p>
                  <h3 class="blog-card-title">{{ post.title }}</h3>
                  <p class="blog-card-date">{{ post.date }}</p>
                </div>
              </RouterLink>
            </template>
            <p v-else class="no-posts-message">
              No posts found matching your criteria.
            </p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { RouterLink } from "vue-router";
// We will now get our data from the dedicated mockData service.
import { allBlogPosts, popularCourses } from "../services/mockData.js";

// ===================================================================================
//  COMPONENT DATA & STATE
// ===================================================================================

// Reactive state for our filters and forms
const activeCategory = ref("All Posts");
const searchTerm = ref("");
const newsletterEmail = ref("");

// ===================================================================================
//  COMPUTED PROPERTIES (The "Smart", Reactive Data)
// ===================================================================================

// Automatically derives the unique categories from our blog post data for the filter buttons.
const uniqueCategories = computed(() => [
  "All Posts",
  ...new Set(allBlogPosts.map((p) => p.category)),
]);

// Finds the single post marked as featured.
const featuredPost = computed(() => allBlogPosts.find((p) => p.isFeatured));

// This is the reactive core of the page. It automatically filters the visible posts
// whenever 'activeCategory' or 'searchTerm' changes.
const filteredPosts = computed(() => {
  // Start with all posts that are NOT featured.
  let posts = allBlogPosts.filter((p) => !p.isFeatured);

  // Apply the category filter.
  if (activeCategory.value !== "All Posts") {
    posts = posts.filter((p) => p.category === activeCategory.value);
  }

  // Apply the search term filter.
  if (searchTerm.value) {
    const term = searchTerm.value.toLowerCase();
    posts = posts.filter((p) => p.title.toLowerCase().includes(term));
  }

  return posts;
});

// ===================================================================================
//  METHODS & LIFECYCLE HOOKS
// ===================================================================================

/**
 * Sets the active category when a filter button is clicked.
 * @param {string} category - The category to set as active.
 */
function setActiveCategory(category) {
  activeCategory.value = category;
}

/**
 * Handles the submission of the newsletter form.
 */
function handleNewsletterSubmit() {
  if (!newsletterEmail.value) return;
  alert(`Thank you for subscribing with ${newsletterEmail.value}!`);
  newsletterEmail.value = ""; // Clear the input field
}

// 'onMounted' runs after the component is rendered to initialize animations.
onMounted(() => {
  initHeaderAnimation();
  initScrollAnimations();
});

// --- Animation Functions (migrated from your old JS) ---
function initHeaderAnimation() {
  if (typeof window.anime !== "undefined") {
    window.anime({
      targets: ".animate-header",
      translateY: [20, 0],
      opacity: [0, 1],
      delay: window.anime.stagger(150),
      duration: 800,
      easing: "easeOutExpo",
    });
  }
}
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  animatedElements.forEach((el) => observer.observe(el));
}
</script>

<style scoped>
/* 
  The 'scoped' attribute ensures these styles ONLY apply to this BlogView.vue component.
  This is a direct and complete migration of your enhanced BlogPage.css file.
*/

.blog-page-wrapper {
  background-color: var(--dark-navy);
  color: var(--text-secondary-light);
  padding-top: 80px;
}
.blog-layout {
  display: grid;
  grid-template-areas: "sidebar" "posts";
  gap: 2rem;
  padding-bottom: 6rem;
}

/* --- Page Header --- */
.blog-header {
  text-align: center;
  padding: 4rem 0;
  border-bottom: 1px solid var(--dark-border);
  margin-bottom: 2rem;
}
.blog-header h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
}
.blog-header p {
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto;
}

/* --- Sidebar & Widgets --- */
.blog-sidebar {
  grid-area: sidebar;
}
.sidebar-widget {
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  margin-bottom: 2rem;
}
.widget-title {
  font-size: 1.125rem;
  color: white;
  padding: 1.5rem;
  border-bottom: 1px solid var(--dark-border);
}
.category-list {
  padding: 1rem;
}
.category-list li a {
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-weight: var(--font-semibold);
  transition: background-color 0.2s, color 0.2s;
}
.category-list li a:hover {
  background-color: var(--dark-blue-card);
  color: white;
}
.category-list li a.active {
  background-color: var(--brand-aqua);
  color: var(--dark-navy);
}

.search-widget-container {
  padding: 1.5rem;
}
input[type="search"] {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
}
input[type="search"]:focus {
  outline: none;
  border-color: var(--brand-aqua);
}

.newsletter-widget-container {
  padding: 1.5rem;
}
.newsletter-widget-container p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
.newsletter-form input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--dark-border);
  background-color: var(--dark-blue-card);
  color: white;
  margin-bottom: 1rem;
}
.newsletter-form button {
  width: 100%;
}

.popular-courses-list {
  padding: 1rem;
}
.popular-course-item a {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
}
.popular-course-item a:hover {
  background-color: var(--dark-blue-card);
}
.popular-course-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}
.popular-course-item-info h4 {
  color: white;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

/* --- Main Content Grid --- */
.blog-posts-grid-container {
  grid-area: posts;
}
.featured-post-wrapper {
  margin-bottom: 3rem;
}
.featured-post-wrapper .blog-card-title {
  font-size: 2rem;
}
.posts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
.no-posts-message {
  text-align: center;
  padding: 3rem;
  font-size: 1.1rem;
}

/* --- Blog Card --- */
.blog-card {
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  display: block;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.blog-card:hover {
  transform: translateY(-8px);
  border-color: var(--brand-aqua);
  box-shadow: 0 10px 40px rgba(0, 224, 255, 0.1);
}
.blog-card-image-container {
  display: block;
  overflow: hidden;
  aspect-ratio: 16 / 9;
}
.blog-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.blog-card:hover .blog-card-image {
  transform: scale(1.05);
}
.blog-card-content {
  padding: 1.5rem;
}
.blog-card-category {
  color: var(--brand-aqua);
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
.blog-card-title {
  font-size: 1.375rem;
  color: white;
  line-height: 1.4;
  margin-bottom: 0.75rem;
}
.blog-card-date {
  font-size: 0.875rem;
}

/* --- Animation Utility --- */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* --- Desktop Responsive Styles --- */
@media (min-width: 768px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}
@media (min-width: 1024px) {
  .blog-header {
    padding: 5rem 0;
  }
  .blog-header h1 {
    font-size: 4rem;
  }
  .blog-layout {
    grid-template-areas: "posts sidebar";
    grid-template-columns: 1fr 320px;
    gap: 4rem;
  }
}
</style>
