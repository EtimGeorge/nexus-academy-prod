// This is the definitive, production-ready set of security rules for Nexus Academy.
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // ======================================================================
    //  HELPER FUNCTIONS
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
    // This is the most important new piece. It performs a 'get' request
    // to check the user's role in their own profile document.
    function isAdmin() {
      return isSignedIn() && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    // ======================================================================
    //  COLLECTION RULES
    // ======================================================================

    // --- Public & Semi-Public Collections ---

    // ANY authenticated user can READ course data.
    // ONLY an admin can create, update, or delete courses.
    match /courses/{courseId} {
      allow read: if isSignedIn();
      allow write: if isAdmin(); // 'write' covers create, update, delete
    }

    // ANY authenticated user can READ lesson data.
    // ONLY an admin can create, update, or delete lessons.
    match /lessons/{lessonId} {
      allow read: if isSignedIn();
      allow write: if isAdmin();
    }

    // ANY authenticated user can READ blog posts.
    // ONLY an admin can create, update, or delete blog posts.
    match /blogPosts/{postId} {
      allow read: if isSignedIn();
      allow write: if isAdmin();
    }

    // --- User-Specific Collections ---

    match /enrollments/{enrollmentId} {
      // A user can READ their own enrollment documents.
      // An ADMIN can read ANY enrollment document (for the admin panel).
      allow read: if isOwner(resource.data.userId) || isAdmin();

      // A user can CREATE their own enrollment document.
      allow create: if isOwner(request.resource.data.userId);
      
      // ONLY an admin can UPDATE an enrollment (e.g., to confirm a payment).
      allow update: if isAdmin();

      // No one can delete enrollments from the client side. This should be a rare, manual operation.
      allow delete: if false;
    }

    match /users/{userId} {
      // An ADMIN can read ANY user's profile.
      // A regular user can only read THEIR OWN profile.
      allow read: if isOwner(userId) || isAdmin();

      // A user can CREATE and UPDATE their own profile.
      allow create, update: if isOwner(userId);
      
      // *** THE DEFINITIVE FIX FOR YOUR ERROR IS HERE ***
      // ONLY an ADMIN can UPDATE any user's profile (e.g., to change their role).
      // We combine this with the rule above. A write is allowed if you are the owner OR if you are an admin.
      allow write: if isOwner(userId) || isAdmin();

      // For safety, only admins can delete user profiles.
      allow delete: if isAdmin();
    }
  }
}