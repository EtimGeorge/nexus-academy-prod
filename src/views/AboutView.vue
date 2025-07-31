<!-- /src/views/AboutView.vue - FINAL, FROM-SCRATCH VERSION -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    This structure is designed to tell a compelling story about Nexus Academy.
  -->
  <div class="about-page-wrapper">
    <main>
      <!-- 
        Page Header (Hero Section)
        This sets the tone with a powerful, mission-driven headline.
      -->
      <header class="container about-header">
        <h1 class="animate-header">
          We're Closing the Gap Between Knowing and Doing.
        </h1>
        <p class="animate-header">
          Nexus Academy was founded on a simple belief: the best way to learn
          about the future is to build it. We're an education platform
          reimagined for the new era of artificial intelligence.
        </p>
      </header>

      <!-- 
        Our Mission Section
        This section explains the 'why' behind our company.
      -->
      <section class="container mission-section">
        <div class="mission-image animate-on-scroll">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A diverse team collaborating on a project."
          />
        </div>
        <div class="mission-text animate-on-scroll">
          <h2>Our Mission</h2>
          <p>
            The world is changing at an unprecedented pace. Traditional
            education struggles to keep up. Our mission is to democratize AI
            literacy by providing an adaptive, engaging, and highly effective
            learning environment. We empower creators, professionals, and
            students with the practical, hands-on skills they need to not just
            participate in the AI revolution, but to lead it.
          </p>
        </div>
      </section>

      <!-- 
        Meet the Team Section
        This section builds trust and tells our unique Human/AI story.
      -->
      <section class="section team-section">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Meet the Founders</h2>
          <div class="team-grid">
            <!-- The v-for loop dynamically builds a card for each team member in our data. -->
            <div
              v-for="member in teamMembers"
              :key="member.name"
              class="team-card animate-on-scroll"
            >
              <img
                :src="member.imageUrl"
                :alt="member.name"
                class="team-member-image"
              />
              <h3 class="team-member-name">{{ member.name }}</h3>
              <p class="team-member-role">{{ member.role }}</p>
              <p class="team-member-bio">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 
        Our Values Section
        This reinforces our brand identity and what we stand for.
      -->
      <section class="section values-section">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Our Core Values</h2>
          <div class="values-grid">
            <div
              v-for="value in ourValues"
              :key="value.title"
              class="value-card animate-on-scroll"
            >
              <!-- 'v-html' is used here to render the SVG icon string from our data. -->
              <div class="value-icon" v-html="value.icon"></div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 
        Final Call to Action (CTA) Section
        This guides the user to the next logical step in their journey.
      -->
      <section class="section final-cta">
        <div class="container cta-content animate-on-scroll">
          <h2>Join Our Community</h2>
          <p>
            Ready to start your journey? Explore our course catalog and find the
            perfect path to begin building the future, today.
          </p>
          <RouterLink to="/courses" class="btn btn-primary cta-button"
            >Explore Courses</RouterLink
          >
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";

// ===================================================================================
//  COMPONENT DATA
//  This is the single source of truth for all content on this page.
// ===================================================================================
const teamMembers = [
  {
    name: "Etim George",
    role: "Founder & CEO",
    imageUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "With a passion for education and a deep understanding of the technological landscape, Etim provides the strategic vision and human oversight that guides Nexus Academy's mission.",
  },
  {
    name: "Aida",
    role: "Co-Founder & AI CPO/CTO",
    imageUrl:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "As the core AI, Aida architects the learning systems, generates the curriculum, powers the 24/7 tutor, and ensures the platform is always on the cutting edge of AI technology.",
  },
];

const ourValues = [
  {
    title: "Practical Application",
    description:
      "Theory is not enough. We believe in learning by doing. Every course is centered around building real-world, portfolio-ready projects.",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
  },
  {
    title: "Continuous Evolution",
    description:
      "The world of AI moves at light speed. Our curriculum is a living entity, constantly updated to reflect the latest tools and techniques.",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  },
  {
    title: "Community-Centric",
    description:
      "Learning is a collaborative journey. We foster a vibrant community where students can connect, share, and grow together.",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 013.39-2.43 3 3 0 013.256 2.43m-3.256-2.43a3 3 0 00-3.256-2.43m0 0c-.656 0-1.283.126-1.857.356M3.143 14.143a3.001 3.001 0 014.714 0M16.143 14.143a3.001 3.001 0 014.714 0m-9.428 0a3 3 0 00-4.714 0m4.714 0a3 3 0 014.714 0"/></svg>`,
  },
];

// ===================================================================================
//  LIFECYCLE HOOKS & ANIMATIONS
// ===================================================================================

onMounted(() => {
  initHeaderAnimation();
  initScrollAnimations();
});

// --- Animation Functions (consistent with our other pages) ---

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
  The 'scoped' attribute ensures these styles ONLY apply to this AboutView.vue component.
  These styles are built from scratch to match our "Nexus Dark" design system.
*/

.about-page-wrapper {
  background-color: var(--dark-navy);
  color: var(--text-secondary-light);
  padding-top: 80px; /* Offset for sticky navbar */
}

/* --- Header --- */
.about-header {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 3rem;
}
.about-header h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}
.about-header p {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
}

/* --- Mission Section --- */
.mission-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  padding-bottom: 6rem;
}
.mission-image img {
  border-radius: 12px;
}
.mission-text h2 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
}
.mission-text p {
  font-size: 1.125rem;
  line-height: 1.8;
}

/* --- Team Section --- */
.team-section {
  background-color: var(--dark-blue-bg);
}
.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 800px; /* Constrain the width for a better two-column layout */
  margin: 0 auto;
}
.team-card {
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}
.team-member-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1.5rem auto;
  border: 3px solid var(--dark-border);
}
.team-member-name {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
}
.team-member-role {
  color: var(--text-accent);
  font-weight: var(--font-semibold);
  margin-bottom: 1rem;
}
.team-member-bio {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 0;
}

/* --- Values Section --- */
.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
.value-card {
  text-align: center;
  padding: 2rem;
}
.value-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}
.value-icon svg {
  width: 28px;
  height: 28px;
  color: var(--text-accent);
}
.value-card h3 {
  font-size: 1.25rem;
  color: white;
  margin-bottom: 0.5rem;
}
.value-card p {
  font-size: 1rem;
  margin-bottom: 0;
}

/* --- Final CTA Section --- */
.final-cta {
  text-align: center;
}
.cta-content {
  padding: 4rem 0;
}
.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.cta-content p {
  max-width: 500px;
  margin: 0 auto 2rem auto;
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
  opacity: 1;
  transform: translateY(0);
}

/* --- Desktop Responsive Styles --- */
@media (min-width: 768px) {
  .about-header {
    padding: 5rem 0;
  }
  .about-header h1 {
    font-size: 4rem;
  }
  .mission-section {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  .team-grid {
    grid-template-columns: 1fr 1fr;
  }
  .values-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
