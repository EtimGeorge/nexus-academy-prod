// /src/services/auth.js - MIGRATED TO VUE PROJECT

// --- Imports ---
// We now import directly from the 'firebase/auth' package.
// Vite will handle resolving these imports from our node_modules folder.
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  updatePassword,
  deleteUser,
} from "firebase/auth";
// We import our initialized auth service from our local firebase.js file.
import { auth } from "./firebase.js";

// --- Provider Initialization ---
const googleProvider = new GoogleAuthProvider();

// ===================================================================================
//  CORE AUTHENTICATION FUNCTIONS (No changes to logic)
// ===================================================================================

export const signupWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const logout = () => {
  return signOut(auth);
};

export const onAuthStateChanged = (callback) => {
  return firebaseOnAuthStateChanged(auth, callback);
};

// ===================================================================================
//  USER PROFILE & ACCOUNT MANAGEMENT FUNCTIONS (No changes to logic)
// ===================================================================================

/**
 * Updates the current user's profile in Firebase Authentication (e.g., displayName, photoURL).
 * @param {object} profileData - An object with data to update.
 * @returns {Promise<void>}
 */
export const updateUserProfile = (profileData) => {
  const user = auth.currentUser;
  if (!user) return Promise.reject(new Error("No authenticated user found."));
  return updateProfile(user, profileData);
};

/**
 * Re-authenticates the current user based on their original sign-in method.
 * @param {string} [currentPassword] - Required only for email/password users.
 * @returns {Promise<void>}
 */
export const reauthenticateUser = (currentPassword) => {
  const user = auth.currentUser;
  if (!user)
    return Promise.reject(new Error("No user is currently signed in."));

  const providerId = user.providerData[0].providerId;

  if (providerId === "password") {
    if (!currentPassword) {
      return Promise.reject(
        new Error("Password is required for re-authentication.")
      );
    }
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return reauthenticateWithCredential(user, credential);
  }

  if (providerId === "google.com") {
    return reauthenticateWithPopup(user, googleProvider);
  }

  return Promise.reject(
    new Error("Unsupported authentication provider for re-authentication.")
  );
};

/**
 * Updates the current user's password. Requires recent re-authentication.
 * @param {string} newPassword - The user's desired new password.
 * @returns {Promise<void>}
 */
export const updateUserPassword = (newPassword) => {
  const user = auth.currentUser;
  if (!user)
    return Promise.reject(new Error("No user is currently signed in."));
  return updatePassword(user, newPassword);
};

/**
 * Deletes the current user's account from Firebase Authentication. Requires recent re-authentication.
 * @returns {Promise<void>}
 */
export const deleteUserAccount = () => {
  const user = auth.currentUser;
  if (!user)
    return Promise.reject(new Error("No user is currently signed in."));
  return deleteUser(user);
};
