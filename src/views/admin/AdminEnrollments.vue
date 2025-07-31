<!-- /src/views/admin/AdminEnrollments.vue -->
<template>
  <div class="admin-page-container">
    <div class="page-header">
      <h1 class="page-title">Manage Enrollments</h1>
    </div>

    <!-- Filter Tabs for easy navigation between enrollment statuses -->
    <div class="filter-tabs">
      <button
        @click="activeFilter = 'all'"
        :class="{ active: activeFilter === 'all' }"
      >
        All Enrollments
      </button>
      <button
        @click="activeFilter = 'pending'"
        :class="{ active: activeFilter === 'pending' }"
      >
        Pending Verification ({{ pendingCount }})
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="page-loader-container">
      <div class="spinner"></div>
    </div>
    <!-- Error State -->
    <div v-else-if="error" class="error-message">
      <p>Failed to load enrollments.</p>
    </div>

    <!-- Main Content Table -->
    <div
      v-else-if="filteredEnrollments.length > 0"
      class="enrollments-table-container"
    >
      <table class="enrollments-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Course Title</th>
            <th>Enrolled At</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="enrollment in filteredEnrollments" :key="enrollment.id">
            <td data-label="User ID" class="user-id-cell">
              <span :title="enrollment.userId">{{ enrollment.userId }}</span>
            </td>
            <td data-label="Course Title">{{ enrollment.courseTitle }}</td>
            <td data-label="Enrolled At">
              {{ formatDate(enrollment.enrolledAt) }}
            </td>
            <td data-label="Status">
              <span :class="['status-badge', `status-${enrollment.status}`]">{{
                enrollment.status
              }}</span>
            </td>
            <td data-label="Actions" class="actions-cell">
              <!-- The 'Confirm' button only shows for pending enrollments -->
              <button
                v-if="enrollment.status === 'pending_verification'"
                @click="confirmEnrollment(enrollment.id)"
                class="btn-action btn-confirm"
              >
                Confirm Payment
              </button>
              <span v-else>-</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Empty State -->
    <div v-else class="no-data-message">
      <p>No enrollments found for the selected filter.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import {
  getAllEnrollments,
  updateEnrollmentStatus,
} from "../../services/db.js";

// --- Reactive State ---
const allEnrollments = ref([]);
const isLoading = ref(true);
const error = ref(null);
const activeFilter = ref("all"); // 'all' or 'pending'

// --- Data Fetching ---
const fetchEnrollments = async () => {
  try {
    isLoading.value = true;
    error.value = null;
    allEnrollments.value = await getAllEnrollments();
  } catch (err) {
    console.error("Failed to fetch enrollments:", err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

// --- Computed Properties ---
// This automatically filters the displayed list when the activeFilter changes.
const filteredEnrollments = computed(() => {
  if (activeFilter.value === "pending") {
    return allEnrollments.value.filter(
      (e) => e.status === "pending_verification"
    );
  }
  return allEnrollments.value;
});

// This calculates the number for the 'Pending' tab badge.
const pendingCount = computed(() => {
  return allEnrollments.value.filter((e) => e.status === "pending_verification")
    .length;
});

// --- Methods ---
const confirmEnrollment = async (enrollmentId) => {
  if (
    confirm(
      "Are you sure you want to confirm this payment and grant access to the course?"
    )
  ) {
    try {
      // Call our new database function to update the status
      await updateEnrollmentStatus(enrollmentId, "active");
      alert("Enrollment confirmed successfully!");
      // Refresh the list from the database to show the change
      fetchEnrollments();
    } catch (err) {
      console.error("Failed to confirm enrollment:", err);
      alert(
        "There was an error confirming the enrollment. Please check the console."
      );
    }
  }
};

const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return "N/A";
  return timestamp.toDate().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

// --- Lifecycle Hook ---
onMounted(fetchEnrollments);
</script>

<style scoped>
/* Reusing professional, mobile-first admin styles for consistency */
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

/* Filter Tabs Styles */
.filter-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--dark-border);
}
.filter-tabs button {
  background: none;
  border: none;
  color: var(--text-secondary-light);
  font-size: 1rem;
  font-weight: var(--font-semibold);
  padding: 1rem;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}
.filter-tabs button:hover {
  color: white;
}
.filter-tabs button.active {
  color: var(--brand-aqua);
  border-bottom-color: var(--brand-aqua);
}

/* Table Styles */
.enrollments-table-container {
  overflow-x: auto;
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
}
.enrollments-table {
  width: 100%;
  border-collapse: collapse;
  color: var(--text-primary-light);
}
.enrollments-table th,
.enrollments-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--dark-border);
}
.enrollments-table thead {
  background-color: var(--dark-blue-card);
}
.user-id-cell {
  font-family: monospace;
  font-size: 0.8rem;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Status Badge Styles */
.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: var(--font-bold);
  text-transform: uppercase;
}
.status-badge.status-active {
  background-color: rgba(16, 185, 129, 0.1); /* Green */
  color: #10b981;
}
.status-badge.status-pending_verification {
  background-color: rgba(245, 158, 11, 0.1); /* Amber */
  color: #f59e0b;
}

.actions-cell {
  text-align: center;
}
.btn-action.btn-confirm {
  background-color: var(--success-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
}
.no-data-message,
.error-message {
  text-align: center;
  padding: 3rem;
  background-color: var(--dark-blue-bg);
  border-radius: 8px;
}

@media (max-width: 768px) {
  /* Mobile table styles */
}
</style>
