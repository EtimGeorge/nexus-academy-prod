<!-- /src/views/SignupView.vue - FINAL, BRANDED & ENHANCED VERSION -->

<template>
  <!-- 
    ==========================================================================
    TEMPLATE / HTML STRUCTURE
    ==========================================================================
    This component reuses the same CSS classes and structure as the LoginView
    for a consistent look and feel across the entire authentication flow.
  -->
  <div class="auth-page-wrapper">
    <div class="auth-page-overlay"></div>
    
    <div class="auth-box">
      <!-- Logo Section -->
      <div class="auth-logo-container">
        <RouterLink to="/">
          <img src="@/assets/images/nexus-logo-light.png" alt="Nexus Academy Logo" class="auth-logo">
        </RouterLink>
      </div>

      <h1 class="auth-title">Create Your Account</h1>
      <p class="auth-subtitle">Join the Academy and start building the future.</p>

      <!-- Error Banner -->
      <div v-if="errorMessage" class="error-banner">
        {{ errorMessage }}
      </div>
      
      <!-- Google Sign-Up Button (Primary CTA for Signup) -->
      <button @click="handleGoogleSignup" class="btn btn-secondary" :disabled="isSubmitting">
        Continue with Google
      </button>

      <div class="divider">or sign up with email</div>

      <!-- Sign-Up Form -->
      <form @submit.prevent="handleSignup" class="auth-form">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="email" required placeholder="you@example.com">
        </div>
        
        <!-- Password Field with Show/Hide Icon -->
        <div class="form-group">
          <label for="password">Password (min. 6 characters)</label>
          <div class="password-input-wrapper">
            <input :type="passwordFieldType" id="password" v-model="password" required placeholder="••••••••">
            <button type="button" @click="togglePasswordVisibility('password')" class="password-toggle-btn" aria-label="Toggle password visibility">
              <svg v-if="passwordFieldType === 'text'" class="eye-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9.17c.43.43.67 1.01.67 1.63s-.24 1.2-.67 1.63c-.43.43-1.01.67-1.63.67s-1.2-.24-1.63-.67a2.29 2.29 0 0 1 0-3.26c.43-.43 1.01-.67 1.63-.67s1.2.24 1.63.67M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5m4.33 11.67l-2.09-2.09a4.29 4.29 0 0 0-4.48-4.48l-2.09-2.09C5.46 8.45 3.32 10.03 1.96 12c1.11 1.54 2.79 2.76 4.7 3.55l1.63-1.63c-.4-.14-.77-.33-1.12-.58c-1.14-.81-1.88-2.14-1.88-3.54c0-.66.14-1.28.39-1.85l-1.61-1.61C2.88 9.1 2.23 10.5 2.03 12c.2 1.5 1.11 2.83 2.52 3.86l1.55-1.55c-.23-.33-.42-.7-.55-1.1c-.43-1.29.02-2.7.99-3.67l1.52-1.52c.38-.38.82-.69 1.3-.9l1.57-1.57C17.17 6.33 22 12 22 12c-.52.99-1.21 1.88-2.04 2.64l-1.56-1.56c.33-.42.59-.89.75-1.41c.45-1.35-.14-2.84-1.21-3.79l-1.54-1.54c.73-.25 1.5-.39 2.3-.39c1.3 0 2.5.4 3.5 1.08L16.33 16.17z"/></svg>
              <svg v-else class="eye-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/></svg>
            </button>
          </div>
        </div>

        <!-- Confirm Password Field with Show/Hide Icon -->
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <div class="password-input-wrapper">
            <input :type="confirmPasswordFieldType" id="confirm-password" v-model="confirmPassword" required placeholder="••••••••">
            <button type="button" @click="togglePasswordVisibility('confirm')" class="password-toggle-btn" aria-label="Toggle password visibility">
              <svg v-if="confirmPasswordFieldType === 'text'" class="eye-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9.17c.43.43.67 1.01.67 1.63s-.24 1.2-.67 1.63c-.43.43-1.01.67-1.63.67s-1.2-.24-1.63-.67a2.29 2.29 0 0 1 0-3.26c.43-.43 1.01-.67 1.63-.67s1.2.24 1.63.67M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5m4.33 11.67l-2.09-2.09a4.29 4.29 0 0 0-4.48-4.48l-2.09-2.09C5.46 8.45 3.32 10.03 1.96 12c1.11 1.54 2.79 2.76 4.7 3.55l1.63-1.63c-.4-.14-.77-.33-1.12-.58c-1.14-.81-1.88-2.14-1.88-3.54c0-.66.14-1.28.39-1.85l-1.61-1.61C2.88 9.1 2.23 10.5 2.03 12c.2 1.5 1.11 2.83 2.52 3.86l1.55-1.55c-.23-.33-.42-.7-.55-1.1c-.43-1.29.02-2.7.99-3.67l1.52-1.52c.38-.38.82-.69 1.3-.9l1.57-1.57C17.17 6.33 22 12 22 12c-.52.99-1.21 1.88-2.04 2.64l-1.56-1.56c.33-.42.59-.89.75-1.41c.45-1.35-.14-2.84-1.21-3.79l-1.54-1.54c.73-.25 1.5-.39 2.3-.39c1.3 0 2.5.4 3.5 1.08L16.33 16.17z"/></svg>
              <svg v-else class="eye-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/></svg>
            </button>
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
          {{ isSubmitting ? 'Creating Account...' : 'Create Account' }}
        </button>
      </form>
      
      <p class="redirect-link">
        Already have an account? <RouterLink to="/login">Sign In</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
// We import our Firebase service functions
import { signupWithEmail, loginWithGoogle } from '../services/auth.js';
import { createUserProfile } from '../services/db.js';

// --- Reactive State ---
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref(null);
const isSubmitting = ref(false);
const router = useRouter();

// --- State for the password fields visibility ---
const passwordFieldType = ref('password');
const confirmPasswordFieldType = ref('password');

// --- Methods ---

/**
 * Toggles the visibility of the specified password field.
 * @param {string} field - 'password' or 'confirm'
 */
function togglePasswordVisibility(field) {
  if (field === 'password') {
    passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
  } else if (field === 'confirm') {
    confirmPasswordFieldType.value = confirmPasswordFieldType.value === 'password' ? 'text' : 'password';
  }
}

/**
 * Handles the email/password signup form submission.
 */
async function handleSignup() {
  errorMessage.value = null;

  // Client-side validation
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Passwords do not match.";
    return;
  }

  isSubmitting.value = true;
  try {
    const userCredential = await signupWithEmail(email.value, password.value);
    // After creating the auth user, we create their profile in our database.
    await createUserProfile(userCredential.user);
    // Navigate to the dashboard on successful signup.
    router.push('/dashboard');
  } catch (error) {
    errorMessage.value = getFriendlyErrorMessage(error.code);
  } finally {
    isSubmitting.value = false;
  }
}

/**
 * Handles the "Continue with Google" button click for signup.
 */
async function handleGoogleSignup() {
  errorMessage.value = null;
  isSubmitting.value = true;
  try {
    const userCredential = await loginWithGoogle();
    // The createUserProfile function will also be called for Google signups.
    await createUserProfile(userCredential.user);
    router.push('/dashboard');
  } catch (error) {
    errorMessage.value = getFriendlyErrorMessage(error.code);
  } finally {
    isSubmitting.value = false;
  }
}

/**
 * Provides user-friendly messages for Firebase signup error codes.
 */
function getFriendlyErrorMessage(errorCode) {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'This email address is already taken. Please sign in or use a different email.';
    case 'auth/weak-password':
      return 'The password is too weak. It must be at least 6 characters long.';
    case 'auth/popup-closed-by-user':
      return 'The sign-up process was cancelled. Please try again.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
}
</script>

<style scoped>
/* 
  This component reuses the EXACT same stylesheet as the LoginView for a
  perfectly consistent brand experience. We just need to copy the CSS.
*/

/* --- Main Wrapper with Background Image --- */
.auth-page-wrapper {
  display: flex; justify-content: center; align-items: center;
  min-height: 100vh; padding: var(--container-padding);
  background-image: url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover; background-position: center; position: relative;
}
.auth-page-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(11, 15, 25, 0.8);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
}

/* --- Auth Box --- */
.auth-box {
  width: 100%; max-width: 420px; padding: 2.5rem;
  background-color: var(--dark-blue-bg); border: 1px solid var(--dark-border);
  border-radius: 12px; position: relative; z-index: 2;
}

/* --- Logo --- */
.auth-logo-container { text-align: center; margin-bottom: 1.5rem; }
.auth-logo { height: 50px; }

/* --- Titles and Links --- */
.auth-title { text-align: center; font-size: 2rem; color: white; margin-bottom: 0.75rem; }
.auth-subtitle { text-align: center; color: var(--text-secondary-light); margin-bottom: 2rem; }
.redirect-link { text-align: center; margin-top: 1.5rem; margin-bottom: 0; }
.redirect-link a { color: var(--brand-aqua); font-weight: var(--font-semibold); }
.divider { text-align: center; color: var(--text-secondary-light); margin: 0.5rem 0 1.5rem 0; font-size: 0.875rem; }
.error-banner { background-color: #991B1B; color: white; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center; border: 1px solid #F87171; }

/* --- Form Styles --- */
.auth-form .form-group { margin-bottom: 1.5rem; }
.auth-form label { display: block; margin-bottom: 0.5rem; font-weight: var(--font-semibold); color: var(--text-primary-light); }
.auth-form input {
  width: 100%; padding: 0.75rem 1rem;
  background-color: var(--dark-blue-card); border: 1px solid var(--dark-border);
  border-radius: 8px; color: white; font-size: 1rem;
}
.auth-form input:focus { outline: none; border-color: var(--brand-aqua); }

/* --- Password Field with Icon --- */
.password-input-wrapper { position: relative; }
.password-input-wrapper input { padding-right: 3rem; }
.password-toggle-btn {
  position: absolute; top: 50%; right: 0.5rem;
  transform: translateY(-50%); background: transparent; border: none;
  cursor: pointer; padding: 0.5rem; display: flex;
  align-items: center; justify-content: center;
}
.eye-icon { width: 20px; height: 20px; color: var(--text-secondary-light); }
.password-toggle-btn:hover .eye-icon { color: var(--text-primary-light); }

/* --- Buttons --- */
.btn { width: 100%; padding: 0.8rem; margin-bottom: 1rem; }
.btn-secondary { border: 1px solid var(--dark-border); background-color: var(--dark-blue-bg); }
.btn:disabled {
  background: var(--dark-border); color: var(--text-secondary-light);
  cursor: not-allowed; box-shadow: none; transform: none;
}
</style>