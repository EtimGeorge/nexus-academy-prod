<!-- /src/views/ContactView.vue - FINAL, FROM-SCRATCH VERSION -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    This structure uses a two-column layout on larger screens for a professional look.
  -->
  <div class="contact-page-wrapper">
    <main class="container">
      <!-- Page Header -->
      <header class="contact-header">
        <h1 class="animate-header">Get in Touch</h1>
        <p class="animate-header">
          Have a question, a project idea, or just want to say hello? We’d love
          to hear from you.
        </p>
      </header>

      <!-- Main Two-Column Layout -->
      <div class="contact-layout">
        <!-- Left Column: Contact Information -->
        <div class="contact-info animate-on-scroll">
          <div v-for="item in contactInfo" :key="item.title" class="info-item">
            <div class="info-icon" v-html="item.icon"></div>
            <div class="info-text">
              <h3>{{ item.title }}</h3>
              <p v-if="item.isEmail">
                <a :href="'mailto:' + item.detail">{{ item.detail }}</a>
              </p>
              <p v-else>{{ item.detail }}</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact Form -->
        <div class="contact-form-container animate-on-scroll">
          <!-- 
            The '@submit.prevent' directive is Vue's way of handling form submissions.
            It prevents the default browser page reload and calls our 'handleSubmit' method instead.
          -->
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Full Name</label>
              <!-- 
                'v-model' creates a two-way data binding between the input field
                and the 'formData.name' variable in our script.
              -->
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                placeholder="John Doe"
              />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                required
                placeholder="Let's talk about..."
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="5"
                required
                placeholder="Your message..."
              ></textarea>
            </div>
            <!-- The button is disabled while the form is submitting to prevent multiple submissions. -->
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? "Sending..." : "Send Message" }}
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// ===================================================================================
//  COMPONENT DATA & STATE
// ===================================================================================

// 'ref' creates a reactive object. We group all our form fields inside this object.
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

// A state variable to track the submission status for the button.
const isSubmitting = ref(false);

// Data for the contact information block. This makes it easy to update.
const contactInfo = [
  {
    title: "General Inquiries",
    detail: "contact@nexusacademy.com",
    isEmail: true,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
  {
    title: "Business & Partnerships",
    detail: "partners@nexusacademy.com",
    isEmail: true,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
  },
  {
    title: "Location",
    detail: "Lagos, Nigeria (Remote First)",
    isEmail: false,
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  },
];

// ===================================================================================
//  METHODS & LIFECYCLE HOOKS
// ===================================================================================

/**
 * Handles the form submission event.
 * In a real application, this would send the data to a backend service.
 * For now, it simulates the process.
 */
function handleSubmit() {
  // Set submitting state to true to disable the button
  isSubmitting.value = true;

  // Log the form data to the console to show it was captured
  console.log("Form Submitted:", formData.value);

  // Simulate a network request (e.g., sending an email)
  setTimeout(() => {
    // Show a success message
    alert(`Thank you, ${formData.value.name}! Your message has been sent.`);

    // Reset the form fields
    formData.value.name = "";
    formData.value.email = "";
    formData.value.subject = "";
    formData.value.message = "";

    // Set submitting state back to false to re-enable the button
    isSubmitting.value = false;
  }, 1000); // 1-second delay to simulate sending
}

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
  The 'scoped' attribute ensures these styles ONLY apply to this ContactView.vue component.
*/

.contact-page-wrapper {
  background-color: var(--dark-navy);
  color: var(--text-secondary-light);
  padding-top: 80px;
  padding-bottom: 6rem;
}

/* --- Header --- */
.contact-header {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 3rem;
}
.contact-header h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
}
.contact-header p {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
}

/* --- Main Layout --- */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

/* --- Contact Info Column --- */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}
.info-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-icon svg {
  width: 24px;
  height: 24px;
  color: var(--brand-aqua);
}
.info-text h3 {
  font-size: 1.25rem;
  color: white;
  margin-bottom: 0.5rem;
}
.info-text p {
  margin: 0;
  font-size: 1rem;
}
.info-text a {
  color: var(--text-primary-light);
}
.info-text a:hover {
  text-decoration: underline;
  color: var(--brand-aqua);
}

/* --- Contact Form Column --- */
.contact-form-container {
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  padding: 2.5rem;
  border-radius: 12px;
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: var(--font-semibold);
  color: var(--text-primary-light);
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: border-color 0.2s;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--brand-aqua);
}
.contact-form button {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
}
.contact-form button:disabled {
  background: var(--dark-border);
  color: var(--text-secondary-light);
  cursor: not-allowed;
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
@media (min-width: 992px) {
  .contact-layout {
    grid-template-columns: 1fr 1.5fr; /* Info column is smaller than form column */
    gap: 5rem;
  }
  .contact-header {
    padding: 5rem 0;
  }
  .contact-header h1 {
    font-size: 4rem;
  }
}
</style>
