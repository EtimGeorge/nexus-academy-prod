<!-- /src/views/HomeView.vue - FINAL, FEATURE-COMPLETE VERSION -->

<template>
  <div class="home-page-wrapper">
    <main>
      <!-- 
        ==========================================================================
        HERO SECTION
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
        FEATURED COURSES SECTION
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
          <div class="courses-grid">
            <div
              v-for="course in featuredCourses"
              :key="course.title"
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
                  <p>{{ course.price }}</p>
                  <span>{{ course.flexibility }}</span>
                </div>
                <RouterLink :to="course.link" class="btn btn-primary"
                  >Learn More</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 
        ==========================================================================
        WHY US / DIFFERENTIATORS SECTION
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
        TESTIMONIALS SECTION
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
        BLOG PREVIEW SECTION
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
          <div class="blog-grid">
            <RouterLink
              v-for="post in blogPosts"
              :key="post.title"
              :to="post.link"
              class="blog-post-card animate-on-scroll"
            >
              <div class="blog-post-card-content">
                <p class="blog-post-card-category">{{ post.category }}</p>
                <h3 class="blog-post-card-title">{{ post.title }}</h3>
                <p class="blog-post-card-date">{{ post.date }}</p>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- 
        ==========================================================================
        FINAL CALL TO ACTION (CTA) SECTION
        ==========================================================================
      -->
      <section id="cta" class="section">
        <div class="container animate-on-scroll cta-container">
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
// This is the modern Vue 3 <script setup> block, which is clean and efficient.
import { onMounted } from "vue";
import { RouterLink } from "vue-router";

// ===================================================================================
//  COMPONENT DATA
//  This is the single source of truth for this page's content.
// ===================================================================================

const hero = {
  title: "The Gap Between Knowing and Doing is Closing.",
  slogan: "Nexus Academy: Where Human Ingenuity Meets Artificial Intelligence.",
  subtitle:
    "Stop watching tutorials. Start building real-world AI solutions. Our hands-on courses and AI-powered tutor will guide you from concept to creation.",
};

const featuredCourses = [
  {
    title: "AI for Content & Marketing",
    description:
      "Learn to generate viral content ideas, write compelling copy, and create stunning visuals with AI.",
    price: "Starts at $299",
    flexibility: "Self-Paced",
    imageUrl:
      "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/courses",
  },
  {
    title: "Agentic Workflows with n8n",
    description:
      "Go beyond simple automation. Learn to build, test, and deploy complex, multi-step AI agents.",
    price: "Starts at $499",
    flexibility: "Self-Paced",
    imageUrl:
      "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/courses",
  },
   {
    title: "AI for Business & Productivity",
    description:
      "Automate tedious tasks, analyze data for key insights, and build custom AI agents to streamline your workflows.",
    price: "Starts at $399",
    flexibility: "Self-Paced",
    imageUrl:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#/signup",
  },
  {
    title: "AI-Powered Design",
    description:
      "Create stunning graphics, videos, and animations using the latest AI design tools. No design experience required.",
    price: "Starts at $349",
    flexibility: "Self-Paced",
    imageUrl:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#/signup",
  },
  {
    title: "AI for Developers",
    description:
      "Master the latest AI frameworks and libraries. Build, train, and deploy your own AI models from scratch.",
    price: "Starts at $599",
    flexibility: "Self-Paced",
    imageUrl:
      "https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#/signup",
  },
  {
    title: "The Agentic Architect Program",
    description:
      "Go beyond using tools. Learn to architect and build your own multi-step AI agents using APIs and vector databases.",
    price: "Starts at $999",
    flexibility: "Cohort-Based",
    imageUrl:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#/signup",
  },
];

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

const blogPosts = [
  {
    category: "Tool Spotlight",
    title: "Kling vs Runway: Which AI Video Tool is Right for You?",
    date: "July 22, 2024",
    link: "/blog",
  },
  {
    category: "Workflow Wednesday",
    title: "How to Build a Custom GPT to Analyze Customer Feedback",
    date: "July 17, 2024",
    link: "#",
  },
  {
    category: "Future Forward",
    title: "The 'AI Skills Gap' is Here. Here's How to Get Ahead.",
    date: "July 15, 2024",
    link: "#",
  },
  {
    category: "Tool Spotlight",
    title: "Top 5 AI Tools for Content Creators in 2024",
    date: "July 20, 2024",
    link: "/blog",
  },
  {
    category: "AI News",
    title: "OpenAI's Latest Model: What It Means for Developers",
    date: "July 19, 2024",
    link: "#",
  },
  {
    category: "Workflow Tutorials",
    title: "How to Build a Research Agent with n8n and Vector Databases",
    date: "July 18, 2024",
    link: "/blog",
  },
];

// ===================================================================================
//  LIFECYCLE HOOKS & ANIMATIONS
// ===================================================================================

onMounted(() => {
  initHeroAnimation();
  initScrollAnimations();
});

function initHeroAnimation() {
  if (typeof window.anime === "undefined") return;
  window.anime({
    targets: ".animate-hero",
    translateY: [20, 0],
    opacity: [0, 1],
    delay: window.anime.stagger(150, { start: 300 }),
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
  animatedElements.forEach((el) => observer.observe(el));
}
</script>

<style scoped>
/* 
  The 'scoped' attribute ensures these styles ONLY apply to this HomeView.vue component.
  All styles below are a direct migration of your previous HomePage.css.
*/

.home-page-wrapper {
  background-color: var(--dark-navy);
  color: var(--text-primary-light);
  overflow-x: hidden;
}

/* --- Hero Section --- */
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

/* --- Grid Layouts --- */
.courses-grid,
.features-grid,
.testimonials-grid,
.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* --- Section-Specific Styles --- */
.why-us-section {
  background-color: var(--dark-blue-bg);
}

/* Course Card */
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

/* Feature Card */
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

/* Testimonial Card */
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

/* Blog Card */
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

/* Final CTA Section */
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

/* Animation Utility Class */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Desktop Responsive Styles */
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

