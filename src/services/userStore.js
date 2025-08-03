// /src/services/userStore.js - The definitive, centralized user state manager.

import { ref } from 'vue';
import { auth } from './firebase.js'; // Note: I assume firebase.js is your auth init file
import { getUserProfile } from './db.js';

// --- Reactive State ---
// This ref will hold the user's full profile object from Firestore (including their role).
export const userProfile = ref(null);
// A simple flag to prevent redundant Firestore reads.
let hasFetched = false;

// --- Main Logic ---
// This listener is the core of the store. It automatically reacts to Firebase Auth state changes.
auth.onAuthStateChanged(async (user) => {
  if (user) {
    // If a user logs IN, fetch their detailed profile from the database.
    try {
      userProfile.value = await getUserProfile(user.uid);
      hasFetched = true;
    } catch (error) {
      console.error("userStore: Failed to fetch user profile on auth change:", error);
      userProfile.value = null; // Reset on error for security.
    }
  } else {
    // If a user logs OUT, clear all local profile data.
    userProfile.value = null;
    hasFetched = false;
  }
});

// --- Helper Function for Security Guards ---
// This function is used by the router to ensure the user's profile and role
// have been loaded before it attempts to grant access to a protected route.
export const ensureUserProfile = async () => {
    if (auth.currentUser && !hasFetched) {
        try {
            userProfile.value = await getUserProfile(auth.currentUser.uid);
            hasFetched = true;
        } catch (error) {
            console.error("userStore: ensureUserProfile failed:", error);
            userProfile.value = null; // Ensure a clean state on failure
        }
    }
}