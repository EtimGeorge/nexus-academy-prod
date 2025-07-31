<!-- /src/components/TheFooter.vue - FINAL, COMPLETE VERSION -->

<template>
  <footer class="main-footer">
    <div class="container footer-container">

      <!-- Section 1: Logo and Slogan -->
      <div class="footer-section footer-about">
        <!-- The RouterLink ensures this is an efficient, client-side navigation link -->
        <RouterLink to="/" class="footer-logo-link">
          <img src="@/assets/images/nexus-logo-light.png" alt="Nexus Academy Logo" class="footer-logo">
        </RouterLink>
        <p class="footer-slogan">Where Human Ingenuity Meets Artificial Intelligence.</p>
      </div>

      <!-- Section 2: Quick Links Navigation -->
      <div class="footer-section footer-links">
        <h3 class="footer-heading">Navigate</h3>
        <ul>
          <!-- All agreed-upon navigation links are present -->
          <li><RouterLink to="/courses">Courses</RouterLink></li>
          <li><RouterLink to="/blog">Blog</RouterLink></li>
          <li><RouterLink to="/why-nexus">Why Nexus</RouterLink></li>
          <li><RouterLink to="/about">About Us</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>

      <!-- Section 3: Social Media Links -->
      <div class="footer-section footer-social">
        <h3 class="footer-heading">Connect</h3>
        <div class="social-icons">
          <!-- These are placeholder links. They should be updated with actual URLs. -->
          <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <!-- Inlined SVG for performance and easy styling -->
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.063c0 2.228 1.583 4.088 3.681 4.509-.64.175-1.306.216-1.967.184.571 1.834 2.228 3.166 4.191 3.204-1.758 1.381-3.978 2.2-6.39 2.2-1.071 0-2.127-.066-3.174-.184 2.278 1.474 4.986 2.34 7.9 2.34 9.471 0 14.655-7.854 14.655-14.655v-.657c1.008-.722 1.876-1.616 2.572-2.675z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Bar with Legal Links and Copyright -->
    <div class="footer-bottom-bar">
      <div class="container bottom-bar-container">
        <!-- 
          The copyright year is dynamically generated using JavaScript, ensuring it's always current.
          The {{...}} syntax is called "interpolation" in Vue.
        -->
        <p class="copyright">© {{ new Date().getFullYear() }} Nexus Academy. All Rights Reserved.</p>
        <div class="legal-links">
          <!-- These RouterLinks will require corresponding routes in our router configuration. -->
          <RouterLink to="/terms-of-service">Terms of Service</RouterLink>
          <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// This component only needs the RouterLink for navigation. No complex logic is required.
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* 
  The 'scoped' attribute ensures these styles are encapsulated and only apply to this footer.
  This CSS is a direct migration of our final, dark-mode version.
*/

.main-footer {
    background-color: var(--dark-blue-bg);
    border-top: 1px solid var(--dark-border);
    padding-top: 4rem;
}

.footer-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding-bottom: 3rem;
}

.footer-section h3 {
    font-size: 1rem;
    font-weight: var(--font-semibold);
    color: var(--text-secondary-light);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1.5rem;
}

/* --- About Section --- */
.footer-logo { height: 40px; margin-bottom: 1rem; }
.footer-slogan {
    color: var(--text-secondary-light);
    font-size: 0.875rem;
    max-width: 250px;
    line-height: 1.6;
    margin-bottom: 0;
}

/* --- Links Section --- */
.footer-links ul li { margin-bottom: 0.75rem; }
.footer-links ul a {
    color: var(--text-primary-light);
    font-weight: var(--font-semibold);
}
.footer-links ul a:hover { color: var(--text-accent); }

/* --- Social Section --- */
.social-icons { display: flex; gap: 1rem; }
.social-icon {
    width: 24px;
    height: 24px;
    color: var(--text-secondary-light);
    transition: color 0.2s;
}
.social-icon:hover { color: var(--text-primary-light); }


/* --- Bottom Bar --- */
.footer-bottom-bar {
    background-color: var(--dark-navy);
    padding: 1.5rem 0;
    border-top: 1px solid var(--dark-border);
}

.bottom-bar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
}

.copyright {
    font-size: 0.875rem;
    color: var(--text-secondary-light);
    margin: 0;
}

.legal-links { display: flex; gap: 1.5rem; }
.legal-links a {
    font-size: 0.875rem;
    color: var(--text-secondary-light);
}
.legal-links a:hover { color: var(--text-primary-light); }

/* --- Desktop Responsive Styles --- */
@media (min-width: 768px) {
    .footer-container {
        grid-template-columns: 2fr 1fr 1fr 1fr; /* Added one more column for better spacing */
    }
    
    .bottom-bar-container {
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>