<!-- /src/views/HomeView.vue - FINAL, COMPLETE, LIVE-DATA VERSION -->
<template>
  <div class="home-page-wrapper">
    <main>
      <!-- 
        ==========================================================================
        HERO SECTION (Complete)
        ==========================================================================
      -->
      <section class="container hero">
        <div class="hero-content">
          <h1 class="hero-title animate-hero">{{ hero.title }}</h1>
          <p class="hero-slogan animate-hero">{{ hero.slogan }}</p>
          <p class="hero-subtitle animate-hero">{{ hero.subtitle }}</p>
          <RouterLink to="/signup" class="btn btn-primary animate-hero"
            >Start Building Now</RouterLink
          >
        </div>
      </section>

      <!-- 
        ==========================================================================
        FEATURED COURSES SECTION (Complete, Live & Robust)
        ==========================================================================
      -->
      <section id="courses" class="section">
        <div class="container">
          <div class="animate-on-scroll">
            <h2 class="section-title">Become an Architect of the Future</h2>
            <p class="section-subtitle">
              Our curriculum is designed to give you practical, portfolio-ready
              skills. Find the track that fits your goals.
            </p>
          </div>

          <!-- Conditional Rendering Block for Live Data -->
          <div v-if="coursesLoading" class="loader-small">
            <div class="spinner"></div>
          </div>

          <div v-else-if="coursesError" class="error-small">
            <p><strong>Could not load featured courses.</strong></p>
            <p
              v-if="coursesError.code === 'failed-precondition'"
              class="error-details"
            >
              (Admin Action Required: A Firestore index is missing. Please check
              the browser's developer console for a link to create it.)
            </p>
          </div>

          <div v-else-if="featuredCourses.length > 0" class="courses-grid">
            <div
              v-for="course in featuredCourses"
              :key="course.id"
              class="course-card animate-on-scroll"
            >
              <div class="course-card-image-container">
                <img
                  :src="course.imageUrl"
                  :alt="course.title"
                  class="course-card-image"
                  loading="lazy"
                />
              </div>
              <div class="course-card-content">
                <h3 class="course-card-title">{{ course.title }}</h3>
                <p class="course-card-description">{{ course.description }}</p>
                <div class="course-card-details">
                  <p>{{ formatPrice(course.price, course.currency) }}</p>
                  <span>{{ course.level }}</span>
                </div>
                <RouterLink :to="`/course/${course.id}`" class="btn btn-primary"
                  >Learn More</RouterLink
                >
              </div>
            </div>
          </div>

          <div v-else class="no-data-message">
            <p>
              No featured courses available at the moment. Please check back
              soon!
            </p>
          </div>
        </div>
      </section>

      <!-- 
        ==========================================================================
        WHY US / DIFFERENTIATORS SECTION (Complete)
        ==========================================================================
      -->
      <section id="why-us" class="section why-us-section">
        <div class="container">
          <div class="animate-on-scroll">
            <h2 class="section-title">An Education That Evolves</h2>
            <p class="section-subtitle">
              The world of AI changes every week. Your education should too.
              We've redesigned learning for the new era of intelligent tools.
            </p>
          </div>
          <div class="features-grid">
            <div
              v-for="feature in whyNexusFeatures"
              :key="feature.title"
              class="feature-card animate-on-scroll"
            >
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 
        ==========================================================================
        TESTIMONIALS SECTION (Complete)
        ==========================================================================
      -->
      <section id="testimonials" class="section">
        <div class="container">
          <div class="animate-on-scroll">
            <h2 class="section-title">From Our Students</h2>
            <p class="section-subtitle">
              Don't just take our word for it. Here's what our students are
              saying about their transformation at Nexus Academy.
            </p>
          </div>
          <div class="testimonials-grid">
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.name"
              class="testimonial-card animate-on-scroll"
            >
              <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
              <div class="testimonial-author">
                <img
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  class="author-image"
                />
                <div>
                  <p class="author-name">{{ testimonial.name }}</p>
                  <p class="author-title">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 
        ==========================================================================
        BLOG PREVIEW SECTION (Complete, Live & Robust)
        ==========================================================================
      -->
      <section id="blog" class="section why-us-section">
        <div class="container">
          <div class="animate-on-scroll">
            <h2 class="section-title">The Nexus Pulse</h2>
            <p class="section-subtitle">
              Our primary engine for insights. Read the latest analysis, tool
              reviews, and workflow tutorials from our team.
            </p>
          </div>

          <div v-if="blogLoading" class="loader-small">
            <div class="spinner"></div>
          </div>

          <div v-else-if="blogError" class="error-small">
            <p><strong>Could not load recent posts.</strong></p>
            <p
              v-if="blogError.code === 'failed-precondition'"
              class="error-details"
            >
              (Admin Action Required: A Firestore index is missing. Please check
              the console.)
            </p>
          </div>

          <div v-else-if="recentPosts.length > 0" class="blog-grid">
            <RouterLink
              v-for="post in recentPosts"
              :key="post.id"
              :to="`/blog/${post.id}`"
              class="blog-post-card animate-on-scroll"
            >
              <div class="blog-post-card-content">
                <p class="blog-post-card-category">{{ post.category }}</p>
                <h3 class="blog-post-card-title">{{ post.title }}</h3>
                <p class="blog-post-card-date">
                  {{ formatDate(post.publishedAt) }}
                </p>
              </div>
            </RouterLink>
          </div>

          <div v-else class="no-data-message">
            <p>No recent blog posts available.</p>
          </div>
        </div>
      </section>

      <!-- 
        ==========================================================================
        FINAL CALL TO ACTION (CTA) SECTION (Complete)
        ==========================================================================
      -->
      <section id="cta" class="section">
        <div class="container cta-container animate-on-scroll">
          <h2 class="section-title">Ready to Build?</h2>
          <p class="section-subtitle">
            Your first steps into the world of AI creation are just a click
            away.
          </p>
          <RouterLink to="/signup" class="btn btn-primary cta-button"
            >Enroll in the Academy</RouterLink
          >
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// **THE FIX:** Import 'watch' and 'nextTick' from Vue.
import { ref, onMounted, watch, nextTick } from 'vue';
import { RouterLink } from 'vue-router';
import { getFeaturedCourses, getRecentBlogPosts } from '@/services/db.js';

// --- Static Data (for sections that don't need to be in the CMS yet) ---
// --- Static Data ---
const hero = {
  title: "The Gap Between Knowing and Doing is Closing.",
  slogan: "Nexus Academy: Where Human Ingenuity Meets Artificial Intelligence.",
  subtitle:
    "Stop watching tutorials. Start building real-world AI solutions. Our hands-on courses and AI-powered tutor will guide you from concept to creation.",
};
const whyNexusFeatures = [
  {
    title: "24/7 Personalized Support",
    description:
      "No human teacher can offer this. Our AI Tutor provides instant, context-aware answers whenever you're stuck.",
  },
  {
    title: "Learn by Building",
    description:
      "Theory is not enough. Every course is project-based, ensuring you leave with a portfolio of real work.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "The AI space moves at light speed. We update our courses constantly to teach the latest tools and techniques.",
  },
  {
    title: "Learn by Doing",
    description:
      "The interactive exercises on WhatsApp and the AI Playground on the site make the learning active, not passive.",
  },
  {
    title: "Blended Learning",
    description:
      "You combine the best of self-paced online courses with the feel of a live, interactive bootcamp.",
  },
];

const testimonials = [
  {
    name: "Aisha David (The Creator)",
    role: "Social Media Manager",
    quote:
      "Nexus Academy completely changed my workflow. I'm creating higher quality content in half the time. The AI tutor is a game-changer!",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "John Obinna (The Upskiller)",
    role: "Marketing Professional",
    quote:
      "The Agentic Workflows course gave me the skills to automate half of my weekly reporting. My value to the company has skyrocketed.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Fatima Bello (The Innovator)",
    role: "Product Manager",
    quote:
      "I never thought I could build my own AI agents. The hands-on projects made it easy to learn. Now I'm leading AI initiatives at work!",
    image:
      "https://images.pexels.com/photos/377058/pexels-photo-377058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Sam (The Builder)",
    role: "Developer",
    quote:
      "I finally understand how to think about and build with LLMs. The Agentic Architect program was exactly the deep-dive I needed.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Chinonso (The Designer)",
    role: "Graphic Designer",
    quote:
      "The AI design tools I learned here have transformed my creative process. I'm producing stunning visuals in record time.",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Ada (The Analyst)",
    role: "Data Analyst",
    quote:
      "The AI for Developers course taught me how to build and deploy my own models. I'm now automating data analysis tasks that used to take days.",
    image:
      "https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// --- Reactive State for Dynamic Content ---
const featuredCourses = ref([]);
const recentPosts = ref([]);
const coursesLoading = ref(true);
const coursesError = ref(null);
const blogLoading = ref(true);
const blogError = ref(null);

// --- Methods ---
const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return 'N/A';
  return timestamp.toDate().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const formatPrice = (price, currency = 'NGN') => {
  if (typeof price !== 'number') return 'N/A';
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency }).format(price / 100);
};

// ===================================================================================
//  DEFINITIVE ANIMATION FIX
// ===================================================================================

/**
 * The core animation setup function.
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".home-page-wrapper .animate-on-scroll");
  if (animatedElements.length === 0) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  animatedElements.forEach((el) => observer.observe(el));
}

/**
 * Watches the data arrays. When they change (from empty to populated),
 * it waits for the DOM to update and then re-runs the animation setup.
 */
watch([featuredCourses, recentPosts], async () => {
  await nextTick();
  initScrollAnimations();
});

// --- Lifecycle Hook & Data Fetching ---
onMounted(() => {
  const fetchCourses = async () => {
    try {
      coursesLoading.value = true;
      featuredCourses.value = await getFeaturedCourses();
    } catch (err) {
      coursesError.value = err;
    } finally {
      coursesLoading.value = false;
    }
  };

  const fetchPosts = async () => {
    try {
      blogLoading.value = true;
      recentPosts.value = await getRecentBlogPosts(3);
    } catch (err) {
      blogError.value = err;
    } finally {
      blogLoading.value = false;
    }
  };

  fetchCourses();
  fetchPosts();
  initHeroAnimation();
  // We still call it here for the static elements on the page.
  // The 'watch' will handle the dynamic ones once the data arrives.
  initScrollAnimations();
});

function initHeroAnimation() {
  if (typeof window.anime === "undefined") return;
  window.anime({ targets: ".animate-hero", translateY: [20, 0], opacity: [0, 1], delay: window.anime.stagger(150, { start: 300 }), duration: 800, easing: "easeOutExpo" });
}
</script>

<style scoped>
/* All styles from the previous HomeView.vue are preserved here, including the new error message styles. */
.home-page-wrapper {
  background-color: var(--dark-navy);
  color: var(--text-primary-light);
  overflow-x: hidden;
}
.hero {
  text-align: center;
  padding: 6rem 0;
  position: relative;
  margin-top: 60px;
}
.hero::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px;
  height: 800px;
  background-image: radial-gradient(
    circle,
    rgba(79, 70, 229, 0.2),
    transparent 60%
  );
  z-index: 0;
}
.hero-content {
  position: relative;
  z-index: 1;
}
.hero-title {
  font-size: 2.5rem;
  line-height: 1.2;
  color: white;
  margin-bottom: 1rem;
}
.hero-slogan {
  font-size: 1.1rem;
  font-weight: var(--font-semibold);
  color: var(--text-accent);
  margin: 0 auto 1.5rem auto;
  max-width: 500px;
}
.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary-light);
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
}
.animate-hero {
  opacity: 0;
  transform: translateY(20px);
}
.courses-grid,
.features-grid,
.testimonials-grid,
.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
.why-us-section {
  background-color: var(--dark-blue-bg);
}
.course-card {
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.course-card-image-container {
  height: 200px;
}
.course-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.course-card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.course-card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
.course-card-description {
  flex: 1;
}
.course-card-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary-light);
}
.course-card .btn {
  width: 100%;
  text-align: center;
}
.feature-card {
  background-color: var(--dark-blue-card);
  padding: 2rem;
  border: 1px solid var(--dark-border);
  border-radius: 12px;
}
.feature-card h3 {
  margin-bottom: 1rem;
}
.feature-card p {
  margin-bottom: 0;
}
.testimonial-card {
  background-color: var(--dark-blue-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--dark-border);
  height: 100%;
}
.testimonial-quote {
  font-style: italic;
  margin-bottom: 1.5rem;
}
.testimonial-author {
  display: flex;
  align-items: center;
}
.author-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}
.author-name {
  font-weight: var(--font-bold);
  color: var(--text-primary-light);
}
.author-title {
  font-size: 0.875rem;
}
.blog-post-card {
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s;
  display: block;
}
.blog-post-card:hover {
  transform: translateY(-5px);
}
.blog-post-card-content {
  padding: 1.5rem;
}
.blog-post-card-category {
  color: var(--text-accent);
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.blog-post-card-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
.blog-post-card-date {
  font-size: 0.875rem;
}
#cta {
  text-align: center;
  background: linear-gradient(to top, var(--dark-blue-bg), var(--dark-navy));
}
.cta-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cta-button {
  background: white;
  color: var(--primary-color);
  font-size: 1.125rem;
  padding: 1rem 2.5rem;
}
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.loader-small,
.error-small,
.no-data-message {
  text-align: center;
  padding: 3rem;
  font-size: 1.1rem;
}
.error-small {
  color: var(--error-color);
}
.error-details {
  font-size: 0.875rem;
  color: var(--text-secondary-light);
  margin-top: 0.5rem;
  font-style: italic;
}
@media (min-width: 768px) {
  .hero {
    padding: 8rem 0;
  }
  .hero-title {
    font-size: 4rem;
  }
  .hero-subtitle {
    font-size: 1.25rem;
  }
  .courses-grid,
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .courses-grid,
  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
