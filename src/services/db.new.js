// /src/services/db.new.js - Contains modifications for the new crypto payment flow

// ===================================================================================
//  MASTER IMPORT STATEMENT
// ===================================================================================
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  orderBy,
  deleteDoc,
  writeBatch,
  getCountFromServer,
  limit,
} from "firebase/firestore";
import { db } from "@/services/firebase.js";

// ===================================================================================
//  USER PROFILE FUNCTIONS (UNCHANGED)
// ===================================================================================
export const createUserProfile = (user) => {
  if (!user) return;
  const userRef = doc(db, "users", user.uid);
  const userData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || null,
    photoURL: user.photoURL || null,
    createdAt: serverTimestamp(),
  };
  return setDoc(userRef, userData, { merge: true });
};

export const getUserProfile = async (userId) => {
  if (!userId) return null;
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? userSnap.data() : null;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

// ... other user functions are unchanged ...

// ===================================================================================
//  ENROLLMENT FUNCTIONS (MODIFIED)
// ===================================================================================

/**
 * MODIFIED: Creates an enrollment document.
 * For crypto payments, the status is now 'awaiting_payment'.
 */
export const createEnrollment = (
  userId,
  courseId,
  courseTitle,
  paymentMethod
) => {
  if (!userId || !courseId) {
    return Promise.reject(
      new Error("User ID and Course ID are required to create an enrollment.")
    );
  }
  const enrollmentId = `${userId}_${courseId}`;
  const enrollmentRef = doc(db, "enrollments", enrollmentId);
  const enrollmentData = {
    userId: userId,
    courseId: courseId,
    courseTitle: courseTitle,
    enrolledAt: serverTimestamp(),
    paymentProvider: paymentMethod,
    progressPercentage: 0,
    status: paymentMethod === "crypto" ? "awaiting_payment" : "active", // MODIFIED
  };
  return setDoc(enrollmentRef, enrollmentData);
};

/**
 * NEW: Updates an enrollment record when a user confirms they have paid.
 */
export const submitPaymentConfirmation = (enrollmentId, paymentDetails) => {
  if (!enrollmentId || !paymentDetails) {
    return Promise.reject(
      new Error("Enrollment ID and payment details are required.")
    );
  }
  const enrollmentRef = doc(db, "enrollments", enrollmentId);
  return setDoc(
    enrollmentRef,
    {
      status: "pending_confirmation", // NEW STATUS
      paymentDetails: paymentDetails, // NEW DATA
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
};

/**
 * UNCHANGED: Fetches all enrollment documents.
 */
export const getAllEnrollments = async () => {
  try {
    const enrollmentsRef = collection(db, "enrollments");
    const q = query(enrollmentsRef, orderBy("enrolledAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all enrollments:", error);
    return [];
  }
};

/**
 * UNCHANGED: Updates the status of an enrollment (used by admin).
 */
export const updateEnrollmentStatus = (enrollmentId, newStatus) => {
  if (!enrollmentId || !newStatus) {
    return Promise.reject(
      new Error("Enrollment ID and new status are required.")
    );
  }
  const enrollmentRef = doc(db, "enrollments", enrollmentId);
  return setDoc(
    enrollmentRef,
    { status: newStatus, updatedAt: serverTimestamp() },
    { merge: true }
  );
};

// ... all other functions in db.js remain unchanged ...
