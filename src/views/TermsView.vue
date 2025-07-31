<!-- /src/views/TermsView.vue - FINAL, FROM-SCRATCH VERSION -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    This structure uses the same readable, long-form text layout as the Privacy Policy page.
  -->
  <div class="legal-page-wrapper">
    <main class="container">
      <!-- Page Header -->
      <header class="legal-header">
        <h1 class="animate-header">Terms of Service</h1>
        <p class="animate-header">Last Updated: {{ lastUpdated }}</p>
      </header>

      <!-- Article Content -->
      <article class="legal-content">
        <p>These Terms of Service ("Terms") govern your use of the Nexus Academy website and services (collectively, the "Service") operated by Nexus Academy ("us", "we", or "our"). Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. By accessing or using the Service you agree to be bound by these Terms.</p>

        <!-- The v-for loop dynamically builds the sections from our data object. -->
        <section v-for="section in termsSections" :key="section.title" class="animate-on-scroll">
          <h2>{{ section.title }}</h2>
          <!-- 'v-html' renders the HTML content for each section. -->
          <div v-html="section.content"></div>
        </section>

      </article>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// ===================================================================================
//  COMPONENT DATA
//  This is the single source of truth for all content on this page.
//  IMPORTANT: This is template text and should be reviewed by a legal professional.
// ===================================================================================

const lastUpdated = "July 30, 2024";

const termsSections = [
  {
    title: "1. Accounts",
    content: `
      <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
      <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.</p>
    `
  },
  {
    title: "2. Courses and Enrollment",
    content: `
      <p>When you enroll in a course, you are granted a limited, non-exclusive, non-transferable license to access and view the course content for which you have paid all required fees, solely for your personal, non-commercial, educational purposes through the Service, in accordance with these Terms.</p>
      <p>You may not reproduce, redistribute, transmit, assign, sell, broadcast, rent, share, lend, modify, adapt, edit, create derivative works of, sublicense, or otherwise transfer or use any course unless we give you explicit permission to do so in a written agreement.</p>
    `
  },
  {
    title: "3. Intellectual Property",
    content: `
      <p>The Service and its original content (excluding content provided by users), features and functionality are and will remain the exclusive property of Nexus Academy and its licensors. The Service is protected by copyright, trademark, and other laws of both Nigeria and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Nexus Academy.</p>
    `
  },
  {
    title: "4. Termination",
    content: `
      <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
      <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
    `
  },
  {
    title: "5. Limitation of Liability",
    content: `
      <p>In no event shall Nexus Academy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
    `
  },
  {
    title: "6. Changes",
    content: `
      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
    `
  },
  {
    title: "7. Contact Us",
    content: `
      <p>If you have any questions about these Terms, please contact us at: <a href="mailto:legal@nexusacademy.com">legal@nexusacademy.com</a></p>
    `
  }
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
  if (typeof window.anime !== 'undefined') {
    window.anime({
      targets: ".animate-header",
      translateY: [20, 0], opacity: [0, 1],
      delay: window.anime.stagger(150),
      duration: 800, easing: "easeOutExpo",
    });
  }
}
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
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
</script>

<style scoped>
/* 
  The 'scoped' attribute ensures these styles ONLY apply to this component.
  We are reusing the exact same stylesheet logic from PrivacyView.vue for consistency.
*/

.legal-page-wrapper {
    background-color: var(--dark-navy);
    color: var(--text-secondary-light);
    padding-top: 80px; /* Offset for sticky navbar */
}

/* --- Header --- */
.legal-header {
    text-align: center;
    padding: 4rem 0;
    border-bottom: 1px solid var(--dark-border);
    margin-bottom: 3rem;
}
.legal-header h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 0.5rem;
}
.legal-header p {
    font-size: 1rem;
    color: var(--text-secondary-light);
}

/* --- Content --- */
.legal-content {
    max-width: 800px; /* Optimal width for reading text */
    margin: 0 auto;
    padding-bottom: 6rem;
}
.legal-content section {
    margin-bottom: 3rem;
}
.legal-content h2 {
    font-size: 1.75rem;
    color: white;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--dark-border);
}
.legal-content p, .legal-content li {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
}
.legal-content ul {
    list-style-type: disc;
    padding-left: 2rem;
}
.legal-content a {
    color: var(--brand-aqua);
    text-decoration: underline;
    font-weight: var(--font-semibold);
}
.legal-content a:hover {
    text-decoration: none;
}

/* --- Animation Utility --- */
.animate-header, .animate-on-scroll {
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
    .legal-header { padding: 5rem 0; }
    .legal-header h1 { font-size: 4rem; }
}
</style>