<!-- /src/views/admin/AdminUsers.vue -->
<template>
  <div class="admin-page-container">
    <div class="page-header">
      <h1 class="page-title">Manage Users</h1>
      <p class="page-subtitle">
        View user information and manage platform roles.
      </p>
    </div>

    <!-- Loading State: Shown while fetching data from Firestore -->
    <div v-if="isLoading" class="page-loader-container">
      <div class="spinner"></div>
    </div>

    <!-- Error State: Shown if the database call fails -->
    <div v-else-if="error" class="error-message">
      <p>Failed to load users. Please try again later.</p>
    </div>

    <!-- Ideal State (with data): The main user table -->
    <div v-else-if="users.length > 0" class="users-table-container">
      <table class="users-table">
        <thead>
          <tr>
            <th>Display Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- The v-for loop iterates over our 'users' array to create a row for each user -->
          <tr v-for="user in users" :key="user.id">
            <td data-label="Display Name">{{ user.displayName || "N/A" }}</td>
            <td data-label="Email">{{ user.email }}</td>
            <td data-label="Role">
              <!-- A styled badge to clearly indicate the user's role -->
              <span :class="['role-badge', `role-${user.role || 'student'}`]">
                {{ user.role || "student" }}
              </span>
            </td>
            <td data-label="Joined On">{{ formatDate(user.createdAt) }}</td>
            <td data-label="Actions" class="actions-cell">
              <!-- 
                This button toggles the user's role. It is disabled for the currently
                logged-in admin to prevent them from accidentally demoting themselves.
              -->
              <button
                @click="handleChangeRole(user)"
                :disabled="user.id === currentUser?.uid"
                class="btn-action btn-role-toggle"
                :title="
                  user.id === currentUser?.uid
                    ? 'Cannot change your own role'
                    : 'Toggle admin role'
                "
              >
                {{ user.role === "admin" ? "Make Student" : "Make Admin" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Empty State: Shown if no users are found in the database -->
    <div v-else class="no-data-message">
      <p>No users found in the database.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { getAllUsers, updateUserRole } from "../../services/db.js";
import { auth } from "../../services/firebase.js"; // Import auth to identify the current admin

// --- Reactive State ---
const users = ref([]);
const isLoading = ref(true);
const error = ref(null);
// A computed property to safely get the current user's ID
const currentUser = computed(() => auth.currentUser);

// --- Data Fetching ---
const fetchUsers = async () => {
  try {
    isLoading.value = true;
    error.value = null;
    users.value = await getAllUsers();
  } catch (err) {
    console.error("Failed to fetch users:", err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

// --- Methods ---
/**
 * Handles the logic for changing a user's role.
 * Includes a confirmation step for this sensitive action.
 * @param {object} user - The full user object to be updated.
 */
const handleChangeRole = async (user) => {
  const newRole = user.role === "admin" ? "student" : "admin";
  const confirmationMessage = `Are you sure you want to change the role for "${user.email}" to "${newRole}"?`;

  if (confirm(confirmationMessage)) {
    try {
      // Call our secure database function to update the role.
      await updateUserRole(user.id, newRole);
      alert(
        `User role for "${user.email}" successfully updated to "${newRole}".`
      );

      // Refresh the user list from the database to show the immediate change.
      // This provides instant feedback to the admin.
      fetchUsers();
    } catch (err) {
      console.error("Failed to update user role:", err);
      alert(
        "There was an error updating the user role. Please check the console."
      );
    }
  }
};

/**
 * Formats a Firestore Timestamp into a readable date string.
 * @param {object} timestamp - The Firestore Timestamp object.
 * @returns {string} A formatted date string.
 */
const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return "N/A";
  return timestamp.toDate().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// --- Lifecycle Hook ---
// Fetch the list of users as soon as the component is mounted to the page.
onMounted(fetchUsers);
</script>

<style scoped>
/* 
  We are reusing the professional, mobile-first admin table styles
  to ensure a consistent and clean admin experience.
*/
.admin-page-container {
  padding: 1rem;
}
.page-header {
  margin-bottom: 2rem;
}
.page-title {
  font-size: 2rem;
  color: white;
}
.page-subtitle {
  font-size: 1rem;
  color: var(--text-secondary-light);
}
.users-table-container {
  overflow-x: auto;
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
}
.users-table {
  width: 100%;
  border-collapse: collapse;
  color: var(--text-primary-light);
}
.users-table th,
.users-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--dark-border);
}
.users-table thead {
  background-color: var(--dark-blue-card);
}
.users-table th {
  font-size: 0.875rem;
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  color: var(--text-secondary-light);
}
.users-table tbody tr:hover {
  background-color: var(--dark-blue-card);
}

/* Role Badge Styles */
.role-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: var(--font-bold);
  text-transform: capitalize;
}
.role-badge.role-admin {
  background-color: rgba(0, 224, 255, 0.1); /* Aqua */
  color: var(--brand-aqua);
}
.role-badge.role-student {
  background-color: rgba(156, 163, 175, 0.1); /* Gray */
  color: var(--text-secondary-light);
}

.actions-cell {
  display: flex;
}
.btn-action.btn-role-toggle {
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: var(--font-semibold);
  border: 1px solid var(--dark-border);
  cursor: pointer;
  background-color: transparent;
  color: var(--text-primary-light);
}
.btn-role-toggle:hover:not(:disabled) {
  background-color: var(--dark-blue-card);
  border-color: white;
}
.btn-role-toggle:disabled {
  cursor: not-allowed;
  color: var(--text-secondary-light);
  opacity: 0.5;
}

.no-data-message,
.error-message {
  text-align: center;
  padding: 3rem;
  background-color: var(--dark-blue-bg);
  border-radius: 8px;
}

@media (max-width: 768px) {
  .users-table thead {
    display: none;
  }
  .users-table,
  .users-table tbody,
  .users-table tr,
  .users-table td {
    display: block;
    width: 100%;
  }
  .users-table tr {
    margin-bottom: 1rem;
    border: 1px solid var(--dark-border);
    border-radius: 8px;
  }
  .users-table td {
    text-align: right;
    position: relative;
    border-bottom: 1px solid var(--dark-border);
  }
  .users-table td::before {
    content: attr(data-label);
    position: absolute;
    left: 1rem;
    font-weight: var(--font-semibold);
    color: var(--text-secondary-light);
  }
}
</style>
