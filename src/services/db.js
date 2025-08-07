// /src/services/db.js - FINAL, CONSOLIDATED, AND CORRECT VERSION
// This file integrates ALL original functions from db.js with the new crypto payment flow changes from db.new.js.

// ===================================================================================
//  MASTER IMPORT STATEMENT
//  All required functions from the Firebase Firestore SDK are declared here, in one place.
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
  addDoc, // Ensure addDoc is imported for adding new documents
} from "firebase/firestore";
import { db } from "@/services/firebase.js"; // Assuming firebase.js exports the initialized 'db' instance.

// ===================================================================================
//  USER PROFILE FUNCTIONS
// ===================================================================================

/**
 * Creates a new user profile document in Firestore or updates an existing one.
 * Uses merge: true to avoid overwriting existing fields.
 * @param {object} user The Firebase Auth user object.
 * @returns {Promise<void>} A promise that resolves when the document is set.
 */
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

/**
 * Retrieves a user's profile from Firestore.
 * @param {string} userId The UID of the user.
 * @returns {Promise<object|null>} The user's profile data, or null if not found.
 */
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

/**
 * Updates specific fields in a user's profile document.
 * @param {string} userId The ID of the user whose profile to update.
 * @param {object} updates An object containing the fields to update (e.g., { displayName: "New Name" }).
 * @returns {Promise<void>} A promise that resolves when the update is complete.
 */
export const updateUserProfileData = (userId, updates) => {
  if (!userId || !updates) {
    return Promise.reject(new Error("User ID and updates are required."));
  }
  const userRef = doc(db, "users", userId);
  // Add an updatedAt timestamp to track when the profile was last modified
  return setDoc(
    userRef,
    { ...updates, updatedAt: serverTimestamp() },
    { merge: true }
  );
};

/**
 * Deletes a user's profile document. This should be used with caution.
 * @param {string} userId The ID of the user profile to delete.
 * @returns {Promise<void>} A promise that resolves when the deletion is complete.
 */
export const deleteUserProfile = (userId) => {
  if (!userId) {
    return Promise.reject(new Error("User ID is required for deletion."));
  }
  const userRef = doc(db, "users", userId);
  return deleteDoc(userRef);
};

/**
 * Retrieves all user profiles from the 'users' collection.
 * This is typically an admin-only function due to potential data size and privacy.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of user data.
 */
export const getAllUsers = async () => {
  try {
    const usersRef = collection(db, "users");
    // Order by creation date, latest first
    const q = query(usersRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all users:", error);
    return [];
  }
};

/**
 * Updates a user's role. This is an administrative function.
 * @param {string} userId The ID of the user whose role to update.
 * @param {string} newRole The new role to assign (e.g., 'admin', 'user').
 * @returns {Promise<void>} A promise that resolves when the role is updated.
 */
export const updateUserRole = (userId, newRole) => {
  if (!userId || !newRole) {
    return Promise.reject(new Error("User ID and new role are required."));
  }
  const userRef = doc(db, "users", userId);
  return setDoc(
    userRef,
    { role: newRole, updatedAt: serverTimestamp() },
    { merge: true }
  );
};

// ===================================================================================
//  COURSE FUNCTIONS
// ===================================================================================

/**
 * Retrieves a single course document by its ID.
 * @param {string} courseId The ID of the course to retrieve.
 * @returns {Promise<object|null>} A promise that resolves to the course data, or null if not found.
 */
export const getCourse = async (courseId) => {
  if (!courseId) return null;
  try {
    const courseRef = doc(db, "courses", courseId);
    const courseSnap = await getDoc(courseRef);
    return courseSnap.exists()
      ? { id: courseSnap.id, ...courseSnap.data() }
      : null;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
};

/**
 * Retrieves all course documents from the 'courses' collection.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of course data.
 */
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

/**
 * Adds a new course to the 'courses' collection.
 * @param {object} courseData The data for the new course.
 * @returns {Promise<string>} A promise that resolves to the ID of the new course.
 */
export const addCourse = async (courseData) => {
  try {
    const coursesRef = collection(db, "courses");
    const docRef = await addDoc(coursesRef, {
      ...courseData,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding course:", error);
    throw error;
  }
};

/**
 * Updates an existing course document.
 * @param {string} courseId The ID of the course to update.
 * @param {object} updates An object containing the fields to update.
 * @returns {Promise<void>} A promise that resolves when the update is complete.
 */
export const updateCourse = (courseId, updates) => {
  if (!courseId || !updates) {
    return Promise.reject(new Error("Course ID and updates are required."));
  }
  const courseRef = doc(db, "courses", courseId);
  return setDoc(
    courseRef,
    { ...updates, updatedAt: serverTimestamp() },
    { merge: true }
  );
};

/**
 * Deletes a course document by its ID.
 * @param {string} courseId The ID of the course to delete.
 * @returns {Promise<void>} A promise that resolves when the deletion is complete.
 */
export const deleteCourse = (courseId) => {
  if (!courseId) {
    return Promise.reject(new Error("Course ID is required for deletion."));
  }
  const courseRef = doc(db, "courses", courseId);
  return deleteDoc(courseRef);
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

/**
 * Fetches a single course and ALL of its associated lessons in one efficient operation.
 * This is the primary function used by the Course Editor and Course Player.
 * @param {string} courseId - The ID of the course to fetch.
 * @returns {Promise<object|null>} A promise that resolves with a single course object
 *                                 that now contains a nested 'modules' array, or null.
 */
export const getCourseWithLessons = async (courseId) => {
  if (!courseId) return null;

  try {
    // This now correctly calls the functions that we have confirmed exist.
    const [courseData, lessonsData] = await Promise.all([
      getCourse(courseId), // Changed from getCourseById
      getLessonsForCourse(courseId), // Changed from getCourseLessons
    ]);

    if (!courseData) {
      console.log("getCourseWithLessons: Course not found.");
      return null;
    }

    const modulesMap = new Map();
    if (courseData.moduleOrder && courseData.moduleOrder.length > 0) {
      courseData.moduleOrder.forEach((moduleTitle) => {
        modulesMap.set(moduleTitle, { title: moduleTitle, lessons: [] });
      });
    }

    lessonsData.forEach((lesson) => {
      if (!modulesMap.has(lesson.moduleId)) {
        modulesMap.set(lesson.moduleId, {
          title: lesson.moduleId,
          lessons: [],
        });
      }
      modulesMap.get(lesson.moduleId).lessons.push(lesson);
    });

    return {
      ...courseData,
      modules: Array.from(modulesMap.values()),
    };
  } catch (error) {
    console.error("Error fetching course with lessons:", error);
    throw error;
  }
};

// ===================================================================================
//  LESSON FUNCTIONS
// ===================================================================================

/**
 * Retrieves all lessons for a given course.
 * @param {string} courseId The ID of the course.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of lesson data.
 */
export const getLessonsForCourse = async (courseId) => {
  if (!courseId) return [];
  try {
    const lessonsRef = collection(db, "lessons");
    // Query for lessons belonging to the specific course, ordered by orderIndex
    const q = query(
      lessonsRef,
      where("courseId", "==", courseId),
      orderBy("order", "asc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error fetching lessons for course ${courseId}:`, error);
    return [];
  }
};

/**
 * Retrieves a single lesson document by its ID.
 * @param {string} lessonId The ID of the lesson.
 * @returns {Promise<object|null>} A promise that resolves to the lesson data, or null.
 */
export const getLesson = async (lessonId) => {
  if (!lessonId) return null;
  try {
    const lessonRef = doc(db, "lessons", lessonId);
    const lessonSnap = await getDoc(lessonRef);
    return lessonSnap.exists()
      ? { id: lessonSnap.id, ...lessonSnap.data() }
      : null;
  } catch (error) {
    console.error(`Error fetching lesson ${lessonId}:`, error);
    return null;
  }
};

/**
 * Adds a new lesson to a course.
 * @param {object} lessonData The data for the new lesson, including courseId.
 * @returns {Promise<string>} A promise that resolves to the ID of the new lesson.
 */
export const addLesson = async (lessonData) => {
  try {
    const lessonsRef = collection(db, "lessons");
    const docRef = await addDoc(lessonsRef, {
      ...lessonData,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding lesson:", error);
    throw error;
  }
};

/**
 * Updates an existing lesson document.
 * @param {string} lessonId The ID of the lesson to update.
 * @param {object} updates An object containing the fields to update.
 * @returns {Promise<void>} A promise that resolves when the update is complete.
 */
export const updateLesson = (lessonId, updates) => {
  if (!lessonId || !updates) {
    return Promise.reject(new Error("Lesson ID and updates are required."));
  }
  const lessonRef = doc(db, "lessons", lessonId);
  return setDoc(
    lessonRef,
    { ...updates, updatedAt: serverTimestamp() },
    { merge: true }
  );
};

/**
 * Deletes a lesson document by its ID.
 * @param {string} lessonId The ID of the lesson to delete.
 * @returns {Promise<void>} A promise that resolves when the deletion is complete.
 */
export const deleteLesson = (lessonId) => {
  if (!lessonId) {
    return Promise.reject(new Error("Lesson ID is required for deletion."));
  }
  const lessonRef = doc(db, "lessons", lessonId);
  return deleteDoc(lessonRef);
};

// ===================================================================================
//  BLOG POST FUNCTIONS
// ===================================================================================

/**
 * Retrieves all blog posts.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of blog post data.
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
 * Retrieves a single blog post by its ID.
 * @param {string} postId The ID of the blog post.
 * @returns {Promise<object|null>} A promise that resolves to the blog post data, or null.
 */
export const getBlogPostById = async (postId) => {
  if (!postId) return null;
  try {
    const postRef = doc(db, "blogPosts", postId);
    const postSnap = await getDoc(postRef);
    return postSnap.exists() ? { id: postSnap.id, ...postSnap.data() } : null;
  } catch (error) {
    console.error(`Error fetching blog post ${postId}:`, error);
    return null;
  }
};

/**
 * Adds a new blog post.
 * @param {object} postData The data for the new blog post.
 * @returns {Promise<string>} A promise that resolves to the ID of the new post.
 */
export const addBlogPost = async (postData) => {
  try {
    const blogPostsRef = collection(db, "blogPosts");
    const docRef = await addDoc(blogPostsRef, {
      ...postData,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding blog post:", error);
    throw error;
  }
};

/**
 * Updates an existing blog post.
 * @param {string} postId The ID of the blog post to update.
 * @param {object} updates An object containing the fields to update.
 * @returns {Promise<void>} A promise that resolves when the update is complete.
 */
export const updateBlogPost = (postId, updates) => {
  if (!postId || !updates) {
    return Promise.reject(new Error("Post ID and updates are required."));
  }
  const postRef = doc(db, "blogPosts", postId);
  return setDoc(
    postRef,
    { ...updates, updatedAt: serverTimestamp() },
    { merge: true }
  );
};

/**
 * Deletes a blog post by its ID.
 * @param {string} postId The ID of the blog post to delete.
 * @returns {Promise<void>} A promise that resolves when the deletion is complete.
 */
export const deleteBlogPost = (postId) => {
  if (!postId) {
    return Promise.reject(new Error("Post ID is required for deletion."));
  }
  const postRef = doc(db, "blogPosts", postId);
  return deleteDoc(postRef);
};

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
//  ENROLLMENT FUNCTIONS (MODIFIED FOR CRYPTO FLOW)
// ===================================================================================

/**
 * Creates a new enrollment record for a user in a course.
 * This function has been MODIFIED to support the new crypto payment flow.
 * For crypto payments, it now sets the initial status to 'awaiting_payment' and can store
 * initial wallet details if provided.
 * For other payment methods, it typically sets the status to 'pending_verification' or 'active'
 * depending on the payment gateway's immediate confirmation.
 *
 * @param {string} userId The ID of the user enrolling.
 * @param {string} courseId The ID of the course being enrolled in.
 * @param {string} courseTitle The title of the course.
 * @param {string} paymentMethod The payment method used (e.g., 'paystack', 'crypto', 'simulated').
 * @param {object|null} initialCryptoDetails Optional, contains initial crypto wallet address, coin, and network
 * if the enrollment is for crypto and an address was generated.
 * @returns {Promise<string>} A promise that resolves with the ID of the new enrollment document.
 */
export const createEnrollment = async (
  userId,
  courseId,
  courseTitle,
  paymentMethod,
  initialCryptoDetails = null
) => {
  if (!userId || !courseId || !courseTitle || !paymentMethod) {
    return Promise.reject(
      new Error(
        "User ID, course ID, course title, and payment method are required."
      )
    );
  }

  // Create a unique enrollment ID based on user and course to prevent duplicate enrollments
  // This assumes a user can only enroll in a course once.
  const enrollmentId = `${userId}_${courseId}`;
  const enrollmentRef = doc(db, "enrollments", enrollmentId);

  // Determine the initial status based on the payment method
  let status = "pending_verification"; // Default for Paystack/Simulated
  if (paymentMethod === "crypto") {
    status = "awaiting_payment"; // New status for crypto payments before user confirms payment
  }

  const enrollmentData = {
    userId,
    courseId,
    courseTitle,
    paymentMethod,
    status, // Set the determined initial status
    enrolledAt: serverTimestamp(),
  };

  // If crypto payment and initial details are provided, add them to the enrollment record
  if (paymentMethod === "crypto" && initialCryptoDetails) {
    enrollmentData.cryptoWalletAddress = initialCryptoDetails.address;
    enrollmentData.cryptoCoin = initialCryptoDetails.coin;
    enrollmentData.cryptoNetwork = initialCryptoDetails.network;
  }

  try {
    await setDoc(enrollmentRef, enrollmentData, { merge: true }); // Use merge to allow idempotent creation
    return enrollmentId;
  } catch (error) {
    console.error("Error creating enrollment:", error);
    throw error;
  }
};

/**
 * NEW FUNCTION: Submits a payment confirmation for a crypto enrollment.
 * This function is called by the frontend when the user clicks "I Have Paid".
 * It updates the enrollment status to 'pending_confirmation' and adds detailed payment info.
 *
 * @param {string} enrollmentId The ID of the enrollment document to update.
 * @param {object} paymentDetails An object containing details like coin, network, amount.
 * @returns {Promise<void>} A promise that resolves when the document is updated.
 */
export const submitPaymentConfirmation = (enrollmentId, paymentDetails) => {
  if (!enrollmentId || !paymentDetails) {
    return Promise.reject(
      new Error(
        "Enrollment ID and payment details are required for confirmation."
      )
    );
  }
  const enrollmentRef = doc(db, "enrollments", enrollmentId);
  return setDoc(
    enrollmentRef,
    {
      status: "pending_confirmation", // Set status to pending confirmation for admin review
      paymentDetails: paymentDetails, // Store the details provided by the user (coin, network, amount)
      updatedAt: serverTimestamp(),
    },
    { merge: true } // Merge to update specific fields without overwriting the whole document
  );
};

/**
 * Fetches all enrollment documents from Firestore.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of enrollment data.
 */
export const getAllEnrollments = async () => {
  try {
    const enrollmentsRef = collection(db, "enrollments");
    // Order by 'enrolledAt' in descending order to show latest enrollments first
    const q = query(enrollmentsRef, orderBy("enrolledAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all enrollments:", error);
    return [];
  }
};

/**
 * Updates the status of an enrollment document. Primarily used by admin.
 * @param {string} enrollmentId The ID of the enrollment to update.
 * @param {string} newStatus The new status (e.g., 'active', 'declined', 'pending_verification').
 * @returns {Promise<void>} A promise that resolves when the update is complete.
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
    {
      status: newStatus,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
};

// ===================================================================================
//  ADMIN DASHBOARD FUNCTIONS
// ===================================================================================

/**
 * Fetches various statistics for the admin dashboard.
 * This function includes a query for 'pending_confirmation' enrollments.
 * @returns {Promise<object>} A promise that resolves with an object containing dashboard stats.
 */
export const getAdminDashboardStats = async () => {
  try {
    // Create references to our main collections.
    const usersRef = collection(db, "users");
    const coursesRef = collection(db, "courses");
    const enrollmentsRef = collection(db, "enrollments");
    const blogPostsRef = collection(db, "blogPosts"); // Reference for blog posts count

    // Create specific queries for counts
    const pendingVerificationQuery = query(
      enrollmentsRef,
      where("status", "in", [
        "pending_verification",
        "pending_confirmation",
        "awaiting_payment",
      ]) // Include all pending crypto statuses
    );

    // Use Promise.all to run all our database queries in parallel for maximum speed.
    const [
      userCountSnap,
      courseCountSnap,
      enrollmentCountSnap,
      pendingEnrollmentCountSnap,
      blogPostCountSnap, // Added for blog post count
    ] = await Promise.all([
      getCountFromServer(usersRef),
      getCountFromServer(coursesRef),
      getCountFromServer(enrollmentsRef),
      getCountFromServer(pendingVerificationQuery),
      getCountFromServer(blogPostsRef), // Get count of blog posts
    ]);

    // Return a clean object with all the data.
    return {
      totalUsers: userCountSnap.data().count,
      totalCourses: courseCountSnap.data().count,
      totalEnrollments: enrollmentCountSnap.data().count,
      pendingEnrollments: pendingEnrollmentCountSnap.data().count, // This now includes all crypto pending statuses
      totalBlogPosts: blogPostCountSnap.data().count, // Include total blog posts
    };
  } catch (error) {
    console.error("Error fetching admin dashboard stats:", error);
    // On error, we can return null or a default state.
    return {
      totalUsers: 0,
      totalCourses: 0,
      totalEnrollments: 0,
      pendingEnrollments: 0,
      totalBlogPosts: 0,
    };
  }
};

// ===================================================================================
//  FEATURED CONTENT FUNCTIONS
// ===================================================================================

/**
 * Retrieves a limited number of featured courses.
 * @param {number} numCourses The number of featured courses to retrieve.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of featured course data.
 */
export const getFeaturedCourses = async (numCourses = 3) => {
  try {
    const coursesRef = collection(db, "courses");
    // Assuming 'isFeatured' field exists and is true for featured courses
    const q = query(
      coursesRef,
      where("isFeatured", "==", true),
      limit(numCourses)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching featured courses:", error);
    return [];
  }
};

/**
 * Retrieves a limited number of featured blog posts.
 * @param {number} numPosts The number of featured blog posts to retrieve.
 * @returns {Promise<Array<object>>} A promise that resolves to an array of featured blog post data.
 */
export const getFeaturedBlogPosts = async (numPosts = 3) => {
  try {
    const blogPostsRef = collection(db, "blogPosts");
    // Assuming 'isFeatured' field exists and is true for featured blog posts
    const q = query(
      blogPostsRef,
      where("isFeatured", "==", true),
      limit(numPosts)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching featured blog posts:", error);
    return [];
  }
};

/**
 * Fetches a limited number of the most recent blog posts for the home page preview.
 * @param {number} postLimit - The number of posts to fetch.
 * @returns {Promise<Array>} A promise that resolves with an array of blog post objects.
 */
export const getRecentBlogPosts = async (postLimit = 3) => {
  try {
    const postsRef = collection(db, "blogPosts");
    const q = query(postsRef, orderBy("publishedAt", "desc"), limit(postLimit));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching recent blog posts:", error);
    // This provides a clearer error for the missing index.
    if (error.code === "failed-precondition") {
      console.error(
        "Firestore Index Missing: Please create a composite index for the 'blogPosts' collection on 'publishedAt' descending."
      );
    }
    throw error; // Re-throw the error so the component can handle it.
  }
};

// ===================================================================================
//  BATCH OPERATIONS (Example, if needed for complex transactions)
// ===================================================================================

/**
 * Executes a batch of Firestore write operations (set, update, delete).
 * This is useful for performing multiple atomic operations.
 * @param {Array<object>} operations An array of operations, each with { type: 'set'|'update'|'delete', ref: DocRef, data?: object }.
 * @returns {Promise<void>} A promise that resolves when the batch is committed.
 */
export const executeBatch = async (operations) => {
  const batch = writeBatch(db);
  operations.forEach((op) => {
    if (op.type === "set") {
      batch.set(op.ref, op.data, { merge: true });
    } else if (op.type === "update") {
      batch.update(op.ref, op.data);
    } else if (op.type === "delete") {
      batch.delete(op.ref);
    }
  });
  return batch.commit();
};

export const getEnrolledCourses = async (userId) => {
  if (!userId) return [];
  try {
    const enrollmentsRef = collection(db, "enrollments");
    const q = query(enrollmentsRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return [];

    const coursePromises = querySnapshot.docs.map((enrollmentDoc) => {
      const courseId = enrollmentDoc.data().courseId;
      return getCourse(courseId); // Changed from getCourseById
    });

    const courses = await Promise.all(coursePromises);
    return courses.filter((course) => course !== null);
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
    return [];
  }
};
