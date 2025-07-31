// /src/services/db.js - FINAL, CONSOLIDATED, AND CORRECT VERSION

// ===================================================================================
//  MASTER IMPORT STATEMENT
//  All required functions from the Firebase Firestore SDK are declared here, in one place.
//  This is the definitive fix for the "writeBatch is not defined" and similar errors.
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
  writeBatch, // <-- The missing import is now correctly included here.
} from "firebase/firestore";
import { db } from "./firebase.js";

// ===================================================================================
//  USER PROFILE FUNCTIONS
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

export const updateUserProfileData = (userId, profileData) => {
  if (!userId || !profileData)
    return Promise.reject(new Error("User ID and profile data are required."));
  const userRef = doc(db, "users", userId);
  return setDoc(userRef, profileData, { merge: true });
};

export const deleteUserProfile = (userId) => {
  if (!userId) return Promise.reject(new Error("User ID is required."));
  const userRef = doc(db, "users", userId);
  return deleteDoc(userRef);
};

// ===================================================================================
//  COURSE & LESSON FUNCTIONS (Public & Admin)
// ===================================================================================

export const getAllCourses = async () => {
  try {
    const coursesRef = collection(db, "courses");
    const q = query(coursesRef, orderBy("title", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all courses:", error);
    return [];
  }
};

export const getCourseById = async (courseId) => {
  if (!courseId) return null;
  try {
    const courseRef = doc(db, "courses", courseId);
    const courseSnap = await getDoc(courseRef);
    return courseSnap.exists()
      ? { id: courseSnap.id, ...courseSnap.data() }
      : null;
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    return null;
  }
};

export const getCourseLessons = async (courseId) => {
  if (!courseId) return [];
  try {
    const lessonsRef = collection(db, "lessons");
    const q = query(
      lessonsRef,
      where("courseId", "==", courseId),
      orderBy("order", "asc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching course lessons:", error);
    return [];
  }
};

export const createOrUpdateCourse = async (
  courseId,
  courseData,
  lessonsData
) => {
  const courseRef = courseId
    ? doc(db, "courses", courseId)
    : doc(collection(db, "courses"));
  const finalCourseId = courseRef.id;

  const batch = writeBatch(db);

  batch.set(
    courseRef,
    { ...courseData, updatedAt: serverTimestamp() },
    { merge: true }
  );

  lessonsData.forEach((lesson) => {
    const lessonWithCourseId = { ...lesson, courseId: finalCourseId };
    const lessonRef = lesson.id
      ? doc(db, "lessons", lesson.id)
      : doc(collection(db, "lessons"));
    batch.set(lessonRef, lessonWithCourseId, { merge: true });
  });

  await batch.commit();
  return finalCourseId;
};

export const deleteCourse = async (courseId) => {
  if (!courseId) return Promise.reject(new Error("Course ID is required."));

  const lessonsToDelete = await getCourseLessons(courseId);
  const batch = writeBatch(db);

  lessonsToDelete.forEach((lesson) => {
    const lessonRef = doc(db, "lessons", lesson.id);
    batch.delete(lessonRef);
  });

  const courseRef = doc(db, "courses", courseId);
  batch.delete(courseRef);
  return batch.commit();
};

// ===================================================================================
//  BLOG POST FUNCTIONS (Admin-Specific)
// ===================================================================================

/**
 * Fetches all blog posts from the 'blogPosts' collection.
 * @returns {Promise<Array>} A promise that resolves with an array of all blog post objects.
 */
export const getAllBlogPosts = async () => {
  try {
    const postsRef = collection(db, "blogPosts");
    // Order by most recent post first
    const q = query(postsRef, orderBy("publishedAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all blog posts:", error);
    return [];
  }
};

/**
 * Fetches a single blog post document by its ID.
 * @param {string} postId - The ID of the post.
 * @returns {Promise<object|null>} The post data or null.
 */
export const getBlogPostById = async (postId) => {
  if (!postId) return null;
  try {
    const postRef = doc(db, "blogPosts", postId);
    const postSnap = await getDoc(postRef);
    return postSnap.exists() ? { id: postSnap.id, ...postSnap.data() } : null;
  } catch (error) {
    console.error("Error fetching blog post by ID:", error);
    return null;
  }
};

/**
 * Creates a new blog post or updates an existing one.
 * @param {string|null} postId - The ID of the post to update, or null to create a new one.
 * @param {object} postData - The data for the blog post document.
 * @returns {Promise<string>} The ID of the created or updated post.
 */
export const createOrUpdateBlogPost = async (postId, postData) => {
  const postRef = postId
    ? doc(db, "blogPosts", postId)
    : doc(collection(db, "blogPosts"));

  // Add a server timestamp for creation or updates
  const dataToSave = {
    ...postData,
    // If we are creating, set publishedAt. If updating, set updatedAt.
    ...(postId
      ? { updatedAt: serverTimestamp() }
      : { publishedAt: serverTimestamp() }),
  };

  await setDoc(postRef, dataToSave, { merge: true });
  return postRef.id;
};

// ===================================================================================
//  ENROLLMENT FUNCTIONS (Admin-Specific)
// ===================================================================================

/**
 * Fetches all enrollment documents from the 'enrollments' collection.
 * @returns {Promise<Array>} A promise that resolves with an array of all enrollment objects.
 */
export const getAllEnrollments = async () => {
  try {
    const enrollmentsRef = collection(db, "enrollments");
    // Order by most recent enrollment first
    const q = query(enrollmentsRef, orderBy("enrolledAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all enrollments:", error);
    return [];
  }
};

/**
 * Updates the status of a specific enrollment document.
 * This is used by admins to confirm crypto payments.
 * @param {string} enrollmentId - The ID of the enrollment document.
 * @param {string} newStatus - The new status (e.g., 'active').
 * @returns {Promise<void>}
 */
export const updateEnrollmentStatus = (enrollmentId, newStatus) => {
  if (!enrollmentId || !newStatus) {
    return Promise.reject(
      new Error("Enrollment ID and new status are required.")
    );
  }
  const enrollmentRef = doc(db, "enrollments", enrollmentId);
  // We use { merge: true } to be safe, though we are only updating one field.
  return setDoc(
    enrollmentRef,
    { status: newStatus, updatedAt: serverTimestamp() },
    { merge: true }
  );
};

// ===================================================================================
//  ENROLLMENT FUNCTIONS
// ===================================================================================

export const getEnrolledCourses = async (userId) => {
  if (!userId) return [];
  try {
    const enrollmentsRef = collection(db, "enrollments");
    const q = query(enrollmentsRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return [];

    const coursePromises = querySnapshot.docs.map((enrollmentDoc) => {
      const courseId = enrollmentDoc.data().courseId;
      return getCourseById(courseId);
    });

    const courses = await Promise.all(coursePromises);
    return courses.filter((course) => course !== null);
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
    return [];
  }
};

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
    status: paymentMethod === "crypto" ? "pending_verification" : "active",
  };
  return setDoc(enrollmentRef, enrollmentData);
};

// ===================================================================================
//  USER MANAGEMENT FUNCTIONS (Admin-Specific)
// ===================================================================================

/**
 * Fetches all user profile documents from the 'users' collection.
 * This function should only be callable by an authenticated admin.
 * @returns {Promise<Array>} A promise that resolves with an array of all user profile objects.
 */
export const getAllUsers = async () => {
  try {
    const usersRef = collection(db, "users");
    // Order users by their creation date, with the newest users first.
    const q = query(usersRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    // Map the raw Firestore documents to clean JavaScript objects.
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all users:", error);
    // On error, return an empty array to prevent the application from crashing.
    return [];
  }
};

/**
 * Updates the role of a specific user.
 * This is a critical, security-sensitive function.
 * @param {string} userId - The UID of the user to update.
 * @param {string} newRole - The new role to assign (e.g., 'admin' or 'student').
 * @returns {Promise<void>}
 */
export const updateUserRole = (userId, newRole) => {
  // Validate the inputs to ensure data integrity.
  if (!userId || !newRole) {
    return Promise.reject(new Error("User ID and new role are required."));
  }
  // Create a reference to the specific user document.
  const userRef = doc(db, "users", userId);
  // Use 'setDoc' with '{ merge: true }' to update only the 'role' field
  // without overwriting the rest of the user's profile data.
  return setDoc(userRef, { role: newRole }, { merge: true });
};

// Import the 'getCountFromServer' function for efficient counting.
import { getCountFromServer } from "firebase/firestore";

// ===================================================================================
//  ADMIN DASHBOARD FUNCTIONS
// ===================================================================================

/**
 * Fetches all the necessary statistics for the main admin dashboard.
 * This is an efficient function that uses server-side counts to minimize data transfer.
 * @returns {Promise<object>} A promise that resolves with an object containing dashboard stats.
 */
export const getAdminDashboardStats = async () => {
  try {
    // Create references to our main collections.
    const usersRef = collection(db, "users");
    const coursesRef = collection(db, "courses");
    const enrollmentsRef = collection(db, "enrollments");

    // Create a specific query to find only the enrollments that are pending.
    const pendingEnrollmentsQuery = query(
      enrollmentsRef,
      where("status", "==", "pending_verification")
    );

    // Use Promise.all to run all our database queries in parallel for maximum speed.
    const [
      userCountSnap,
      courseCountSnap,
      enrollmentCountSnap,
      pendingEnrollmentCountSnap,
    ] = await Promise.all([
      getCountFromServer(usersRef),
      getCountFromServer(coursesRef),
      getCountFromServer(enrollmentsRef),
      getCountFromServer(pendingEnrollmentsQuery),
    ]);

    // Return a clean object with all the data.
    return {
      totalUsers: userCountSnap.data().count,
      totalCourses: courseCountSnap.data().count,
      totalEnrollments: enrollmentCountSnap.data().count,
      pendingEnrollments: pendingEnrollmentCountSnap.data().count,
    };
  } catch (error) {
    console.error("Error fetching admin dashboard stats:", error);
    // On error, we can return null or a default state.
    // Throwing the error allows the component to handle it.
    throw error;
  }
};
