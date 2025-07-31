<!-- /src/views/LoginView.vue - FINAL, BRANDED & ENHANCED VERSION -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    The structure is now wrapped in a container that allows for a background image.
  -->
  <div class="auth-page-wrapper">
    <!-- This div creates the dark overlay effect on top of the background image -->
    <div class="auth-page-overlay"></div>

    <div class="auth-box">
      <!-- Logo Section -->
      <div class="auth-logo-container">
        <RouterLink to="/">
          <img
            src="@/assets/images/nexus-logo-light.png"
            alt="Nexus Academy Logo"
            class="auth-logo"
          />
        </RouterLink>
      </div>

      <h1 class="auth-title">Welcome Back</h1>
      <p class="auth-subtitle">Sign in to access your dashboard.</p>

      <!-- Error Banner -->
      <div v-if="errorMessage" class="error-banner">
        {{ errorMessage }}
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="you@example.com"
          />
        </div>

        <!-- *** NEW: PASSWORD FIELD WITH SHOW/HIDE ICON *** -->
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input-wrapper">
            <!-- 
              The input type is dynamically bound to a variable.
              Clicking the button will toggle the type between 'password' and 'text'.
            -->
            <input
              :type="passwordFieldType"
              id="password"
              v-model="password"
              required
              placeholder="••••••••"
            />
            <!-- 
              The button calls the 'togglePasswordVisibility' method on click.
              The icon inside the button changes based on the password's visibility.
            -->
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="password-toggle-btn"
              aria-label="Toggle password visibility"
            >
              <!-- Show the 'eye-off' icon when the password is visible -->
              <svg
                v-if="passwordFieldType === 'text'"
                class="eye-icon"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.83 9.17c.43.43.67 1.01.67 1.63s-.24 1.2-.67 1.63c-.43.43-1.01.67-1.63.67s-1.2-.24-1.63-.67a2.29 2.29 0 0 1 0-3.26c.43-.43 1.01-.67 1.63-.67s1.2.24 1.63.67M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5m4.33 11.67l-2.09-2.09a4.29 4.29 0 0 0-4.48-4.48l-2.09-2.09C5.46 8.45 3.32 10.03 1.96 12c1.11 1.54 2.79 2.76 4.7 3.55l1.63-1.63c-.4-.14-.77-.33-1.12-.58c-1.14-.81-1.88-2.14-1.88-3.54c0-.66.14-1.28.39-1.85l-1.61-1.61C2.88 9.1 2.23 10.5 2.03 12c.2 1.5 1.11 2.83 2.52 3.86l1.55-1.55c-.23-.33-.42-.7-.55-1.1c-.43-1.29.02-2.7.99-3.67l1.52-1.52c.38-.38.82-.69 1.3-.9l1.57-1.57C17.17 6.33 22 12 22 12c-.52.99-1.21 1.88-2.04 2.64l-1.56-1.56c.33-.42.59-.89.75-1.41c.45-1.35-.14-2.84-1.21-3.79l-1.54-1.54c.73-.25 1.5-.39 2.3-.39c1.3 0 2.5.4 3.5 1.08L16.33 16.17z"
                />
              </svg>
              <!-- Show the 'eye' icon when the password is hidden -->
              <svg v-else class="eye-icon" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"
                />
              </svg>
            </button>
          </div>
        </div>

        <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
          {{ isSubmitting ? "Signing In..." : "Sign In" }}
        </button>
      </form>

      <div class="divider">or</div>

      <button
        @click="handleGoogleLogin"
        class="btn btn-secondary"
        :disabled="isSubmitting"
      >
        Continue with Google
      </button>

      <p class="redirect-link">
        Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { loginWithEmail, loginWithGoogle } from "../services/auth.js";

// --- Reactive State ---
const email = ref("");
const password = ref("");
const errorMessage = ref(null);
const isSubmitting = ref(false);
const router = useRouter();

// --- NEW: State for the password field visibility ---
const passwordFieldType = ref("password"); // Can be 'password' or 'text'

// --- Methods ---

/**
 * NEW: Toggles the password field's type between 'password' and 'text'.
 */
function togglePasswordVisibility() {
  passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password";
}

async function handleLogin() {
  errorMessage.value = null;
  isSubmitting.value = true;
  try {
    await loginWithEmail(email.value, password.value);
    router.push("/dashboard");
  } catch (error) {
    errorMessage.value = getFriendlyErrorMessage(error.code);
  } finally {
    isSubmitting.value = false;
  }
}

async function handleGoogleLogin() {
  errorMessage.value = null;
  isSubmitting.value = true;
  try {
    await loginWithGoogle();
    router.push("/dashboard");
  } catch (error) {
    errorMessage.value = getFriendlyErrorMessage(error.code);
  } finally {
    isSubmitting.value = false;
  }
}

function getFriendlyErrorMessage(errorCode) {
  switch (errorCode) {
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
    case "auth/invalid-login-credentials":
      return "Invalid email or password. Please check your credentials and try again.";
    case "auth/too-many-requests":
      return "Access to this account has been temporarily disabled. Please reset your password or try again later.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
}
</script>

<style scoped>
/* 
  This is a completely new, branded stylesheet for our authentication pages.
*/

/* --- Main Wrapper with Background Image --- */
.auth-page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: var(--container-padding);

  /* The background image */
  background-image: url("https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  position: relative;
}
.auth-page-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(11, 15, 25, 0.8); /* Dark navy overlay */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* --- Auth Box --- */
.auth-box {
  width: 100%;
  max-width: 420px;
  padding: 2.5rem;
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  position: relative; /* To sit on top of the overlay */
  z-index: 2;
}

/* --- Logo --- */
.auth-logo-container {
  text-align: center;
  margin-bottom: 1.5rem;
}
.auth-logo {
  height: 50px;
}

/* --- Titles and Links --- */
.auth-title {
  text-align: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 0.75rem;
}
.auth-subtitle {
  text-align: center;
  color: var(--text-secondary-light);
  margin-bottom: 2rem;
}
.redirect-link {
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 0;
}
.redirect-link a {
  color: var(--brand-aqua);
  font-weight: var(--font-semibold);
}
.divider {
  text-align: center;
  color: var(--text-secondary-light);
  margin: 0.5rem 0 1.5rem 0;
  font-size: 0.875rem;
}
.error-banner {
  background-color: #991b1b;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: center;
  border: 1px solid #f87171;
}

/* --- Form Styles --- */
.auth-form .form-group {
  margin-bottom: 1.5rem;
}
.auth-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: var(--font-semibold);
  color: var(--text-primary-light);
}
.auth-form input {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
}
.auth-form input:focus {
  outline: none;
  border-color: var(--brand-aqua);
}

/* --- Password Field with Icon --- */
.password-input-wrapper {
  position: relative;
}
.password-input-wrapper input {
  padding-right: 3rem;
} /* Make space for the icon button */
.password-toggle-btn {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.eye-icon {
  width: 20px;
  height: 20px;
  color: var(--text-secondary-light);
}
.password-toggle-btn:hover .eye-icon {
  color: var(--text-primary-light);
}

/* --- Buttons --- */
.btn {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
}
.btn-secondary {
  /* Overriding global style slightly for this page */
  border: 1px solid var(--dark-border);
  background-color: var(--dark-blue-bg);
}
.btn:disabled {
  background: var(--dark-border);
  color: var(--text-secondary-light);
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}
</style>
