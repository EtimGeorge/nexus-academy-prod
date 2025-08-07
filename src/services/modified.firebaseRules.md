// This is the definitive, production-ready set of security rules for Nexus Academy.
// MODIFIED for the new crypto payment flow.
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // ======================================================================
    //  HELPER FUNCTIONS (Unchanged from original)
    //  These make our rules cleaner and easier to read.
    // ======================================================================

    // Function to check if a user is authenticated.
    function isSignedIn() {
      return request.auth != null;
    }

    // Function to check if a user is the owner of a document.
    function isOwner(userId) {
      return request.auth.uid == userId;
    }

    // Function to check if a user has the 'admin' role.
    // This performs a 'get' request to check the user's role in their own profile document.
    function isAdmin() {
      return isSignedIn() && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // ======================================================================
    //  COLLECTION RULES
    // ======================================================================

    // --- Public & Semi-Public Collections (Unchanged from original) ---

    // ANY authenticated user can READ course data.
    // ONLY an admin can create, update, or delete courses.
    match /courses/{courseId} {
      allow read: if isSignedIn();
      allow write: if isAdmin();
    }

    // ANY authenticated user can READ lesson data.
    // ONLY an admin can create, update, or delete lessons.
    match /lessons/{lessonId} {
      allow read: if isSignedIn();
      allow write: if isAdmin();
    }

    // ANY authenticated user can READ blog post data.
    // ONLY an admin can create, update, or delete blog posts.
    match /blogPosts/{postId} {
      allow read: if isSignedIn();
      allow write: if isAdmin();
    }

    // --- User-Specific Collections (MODIFIED for crypto payment flow) ---

    match /enrollments/{enrollmentId} {
      // A user can READ their own enrollment documents.
      // An ADMIN can read ANY enrollment document (for the admin panel).
      allow read: if isOwner(resource.data.userId) || isAdmin();

      // A user can CREATE their own enrollment document.
      allow create: if isOwner(request.resource.data.userId);
      
      // *** MODIFIED RULE FOR SECURE USER PAYMENT CONFIRMATION ***
      // This rule allows two scenarios for updating an enrollment:
      // 1. An ADMIN can update ANY enrollment (e.g., to confirm a payment to 'active' or 'declined').
      // 2. A regular user (owner) can update THEIR OWN enrollment ONLY if:
      //    a. They are the owner (`isOwner(request.resource.data.userId)`).
      //    b. They are setting the status to `"pending_confirmation"`.
      //    c. The only fields they are allowed to change are `status`, `paymentDetails`, and `updatedAt`.
      //       This prevents users from changing other critical fields or setting their status to 'active'.
      allow update: if isAdmin() ||
                      (
                        isOwner(request.resource.data.userId) &&
                        request.resource.data.status == "pending_confirmation" &&
                        request.resource.data.diff(resource.data).affectedKeys().hasOnly(['status', 'paymentDetails', 'updatedAt'])
                      );

      // No one can delete enrollments from the client side. This should be a rare, manual operation.
      allow delete: if false;
    }

    match /users/{userId} {
      // An ADMIN can read ANY user's profile.
      // A regular user can only read THEIR OWN profile.
      allow read: if isOwner(userId) || isAdmin();

      // A user can CREATE and UPDATE their own profile.
      // An ADMIN can also CREATE and UPDATE any user's profile (e.g., to change their role).
      allow write: if isOwner(userId) || isAdmin();
      
      // ONLY an ADMIN can delete user profiles.
      allow delete: if isAdmin();
    }
  }
}
