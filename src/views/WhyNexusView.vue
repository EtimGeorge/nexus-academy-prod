<!-- /src/views/WhyNexusView.vue - FINAL, ENHANCED VERSION -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    This is a direct migration of your WhyNexusPage.html file, enhanced with
    Vue directives and our new brand identity.
  -->
  <div class="why-nexus-wrapper">
    <main>
      <!-- Page Header (Hero) -->
      <header class="container why-nexus-header">
        <h1 class="animate-header">An Education Reimagined for the AI Era.</h1>
        <p class="animate-header">
          We don't just teach you the tools; we teach you how to think. Discover
          the Nexus Method for building practical, real-world AI solutions.
        </p>
      </header>

      <!-- Differentiators / Features Section -->
      <section class="container features-section">
        <!-- The v-for loop automatically builds this section from our data object -->
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="feature-row animate-on-scroll"
        >
          <div class="feature-text">
            <h2>{{ feature.title }}</h2>
            <p>{{ feature.description }}</p>
          </div>
          <div class="feature-image">
            <img :src="feature.imageUrl" :alt="feature.title" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- AI Tutor Showcase -->
      <section class="ai-tutor-section">
        <div class="container animate-on-scroll">
          <h2 class="section-title">Meet Aida, Your 24/7 AI Tutor</h2>
          <p class="section-subtitle">
            Get unstuck in seconds, not hours. Our WhatsApp-based AI tutor is
            trained on our entire curriculum and is always available to answer
            your questions, provide feedback, and explain complex topics.
          </p>
          <div class="chat-demo-container">
            <div class="chat-bubble user">
              "What's the difference between few-shot and zero-shot prompting?"
            </div>
            <div class="chat-bubble ai">
              "Great question! Zero-shot is like asking a chef to make a dish
              they've never seen, using only their general knowledge. Few-shot
              is like giving them 2-3 examples of similar dishes first to guide
              them."
            </div>
          </div>
        </div>
      </section>

      <!-- *** NEW: STRATEGIC CALL TO ACTION SECTION *** -->
      <!-- This new section is added to provide a clear next step for the user after learning about our methods. -->
      <section class="section">
        <div class="container cta-container animate-on-scroll">
          <h2 class="section-title">Experience the Difference</h2>
          <p class="section-subtitle">
            Our free "AI Quickstart" course is the perfect introduction to the
            Nexus Method. Start building your first AI-powered creations in
            under an hour.
          </p>
          <RouterLink to="/signup" class="btn btn-primary cta-button"
            >Start for Free</RouterLink
          >
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router"; // Although not used directly, it's good practice for clarity

// ===================================================================================
//  COMPONENT DATA
//  By storing content in a data structure, we make the page easier to update and maintain.
// ===================================================================================

const features = [
  {
    title: "Always Current",
    description:
      "The world of AI changes every week. Your education should too. Our curriculum is a living entity, updated continuously to include the latest breakthroughs, tools, and techniques, ensuring you're never learning yesterday's news.",
    imageUrl:
      "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Practical, Portfolio-Ready Projects",
    description:
      "Stop watching tutorials, start building. We believe the only way to truly learn is by doing. You'll build real-world projects that solve actual problems, leaving you with tangible skills and a professional portfolio that stands out.",
    imageUrl:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// ===================================================================================
//  LIFECYCLE HOOKS & ANIMATIONS
// ===================================================================================

onMounted(() => {
  // Initialize all animations after the component has been rendered to the page.
  initHeaderAnimation();
  initScrollAnimations();
});

// --- Animation Functions (migrated directly from your WhyNexusPage.js) ---

function initHeaderAnimation() {
  if (typeof window.anime === "undefined") return;
  window.anime({
    targets: ".animate-header",
    translateY: [20, 0],
    opacity: [0, 1],
    delay: window.anime.stagger(150),
    duration: 800,
    easing: "easeOutExpo",
  });
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
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}
</script>

<style scoped>
/* 
  The 'scoped' attribute ensures these styles ONLY apply to this WhyNexusView.vue component.
  This is a direct migration of your WhyNexusPage.css file, updated for our design system.
*/

.why-nexus-wrapper {
  background-color: var(--dark-navy);
  color: var(--text-secondary-light);
  padding-top: 80px; /* Offset for sticky navbar */
}

/* --- Page Header --- */
.why-nexus-header {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 3rem;
}
.why-nexus-header h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}
.why-nexus-header p {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
}

/* --- Features Section --- */
.features-section {
  padding-bottom: 3rem;
}
.feature-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 5rem;
}
.feature-text h2 {
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
}
.feature-text p {
  font-size: 1.125rem;
  line-height: 1.8;
}
.feature-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

/* --- AI Tutor Showcase Section --- */
.ai-tutor-section {
  background: linear-gradient(to bottom, var(--dark-blue-bg), var(--dark-navy));
  padding: 6rem 0;
  text-align: center;
}
.ai-tutor-section .section-subtitle {
  max-width: 700px;
  margin: 0 auto 3rem auto;
}
.chat-demo-container {
  max-width: 500px;
  margin: 0 auto;
}
.chat-bubble {
  padding: 1rem 1.5rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  line-height: 1.6;
  max-width: 80%;
}
.chat-bubble.user {
  background: linear-gradient(
    90deg,
    var(--brand-bright-blue),
    var(--brand-aqua)
  );
  color: var(--dark-navy);
  font-weight: var(--font-semibold);
  border-bottom-right-radius: 4px;
  margin-left: auto;
}
.chat-bubble.ai {
  background-color: var(--dark-blue-card);
  color: var(--text-primary-light);
  border-bottom-left-radius: 4px;
  margin-right: auto;
  text-align: left;
}

/* --- NEW CTA Section Styles --- */
.cta-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.cta-button {
  font-size: 1.125rem;
  padding: 1rem 2.5rem;
}

/* --- Animation Utility --- */
.animate-header,
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.is-visible {
  /* Class added by JS when element is in view */
  opacity: 1;
  transform: translateY(0);
}

/* --- DESKTOP RESPONSIVE STYLES --- */
@media (min-width: 768px) {
  .why-nexus-header {
    padding: 5rem 0;
  }
  .why-nexus-header h1 {
    font-size: 4rem;
  }

  .feature-row {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  /* This creates the alternating layout */
  .feature-row:nth-child(even) .feature-text {
    order: 2;
  }
  .feature-row:nth-child(even) .feature-image {
    order: 1;
  }
}
</style>
