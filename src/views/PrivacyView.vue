<!-- /src/views/PrivacyView.vue - FINAL, FROM-SCRATCH VERSION -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    This structure is designed for maximum readability, using standard semantic
    HTML for a long-form text document.
  -->
  <div class="legal-page-wrapper">
    <main class="container">
      <!-- 
        Page Header
        Provides a clear and unambiguous title for the document.
      -->
      <header class="legal-header">
        <h1 class="animate-header">Privacy Policy</h1>
        <p class="animate-header">Last Updated: {{ lastUpdated }}</p>
      </header>

      <!-- 
        Article Content
        The main content is wrapped in an <article> tag. Each section of the policy
        is a <section> with a clear <h2> heading.
      -->
      <article class="legal-content">
        <p>
          Welcome to Nexus Academy ("we," "our," "us"). We are committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website and use our services. Please read this privacy policy
          carefully. If you do not agree with the terms of this privacy policy,
          please do not access the site.
        </p>

        <!-- 
          The v-for loop dynamically builds the sections from our 'policySections' data object.
          This makes the policy incredibly easy to update in the future. To add a new section,
          you only need to add an object to the array in the script.
        -->
        <section
          v-for="section in policySections"
          :key="section.title"
          class="animate-on-scroll"
        >
          <h2>{{ section.title }}</h2>
          <!-- The 'v-html' directive is used to render the HTML content of each section. -->
          <div v-html="section.content"></div>
        </section>
      </article>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

// ===================================================================================
//  COMPONENT DATA
//  This is the single source of truth for all content on this page.
//  IMPORTANT: This is template text and should be reviewed by a legal professional.
// ===================================================================================

const lastUpdated = "July 30, 2024";

const policySections = [
  {
    title: "1. Collection of Your Information",
    content: `
      <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
      <p><b>Personal Data:</b> Personally identifiable information, such as your name, email address, and demographic information, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</p>
      <p><b>Derivative Data:</b> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>
    `,
  },
  {
    title: "2. Use of Your Information",
    content: `
      <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
      <ul>
        <li>Create and manage your account.</li>
        <li>Email you regarding your account or order.</li>
        <li>Process payments and refunds.</li>
        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
        <li>Notify you of updates to the Site.</li>
      </ul>
    `,
  },
  {
    title: "3. Disclosure of Your Information",
    content: `
      <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
      <p><b>By Law or to Protect Rights:</b> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</p>
      <p><b>Third-Party Service Providers:</b> We may share your information with third parties that perform services for us or on our behalf, including payment processing (Paystack), data analysis, email delivery, hosting services, and customer service.</p>
    `,
  },
  {
    title: "4. Security of Your Information",
    content: `
      <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
    `,
  },
  {
    title: "5. Contact Us",
    content: `
      <p>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@nexusacademy.com">privacy@nexusacademy.com</a></p>
    `,
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
  The 'scoped' attribute ensures these styles ONLY apply to this component.
  These styles are designed for readability of long-form text.
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
.legal-content p,
.legal-content li {
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
  .legal-header {
    padding: 5rem 0;
  }
  .legal-header h1 {
    font-size: 4rem;
  }
}
</style>
