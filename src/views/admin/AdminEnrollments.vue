<!-- /src/views/admin/AdminEnrollments.vue - FINAL, ENHANCED WITH NEW CRYPTO FLOW -->
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
        <!-- MODIFIED: Text updated to reflect "Pending Confirmation" -->
        Pending Confirmation ({{ pendingCount }})
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
            <th>Payment Details</th>
            <!-- NEW: Added Payment Details column -->
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
            <!-- NEW: Display Payment Details conditionally -->
            <td data-label="Payment Details" class="payment-details-cell">
              <div v-if="enrollment.paymentDetails">
                <p>
                  <strong>Coin:</strong> {{ enrollment.paymentDetails.coin }}
                </p>
                <p>
                  <strong>Network:</strong>
                  {{ enrollment.paymentDetails.network }}
                </p>
                <p>
                  <strong>Amount:</strong>
                  {{ enrollment.paymentDetails.amount }}
                </p>
              </div>
              <div
                v-else-if="
                  enrollment.paymentMethod === 'crypto' &&
                  enrollment.status === 'awaiting_payment'
                "
              >
                <p>Awaiting user payment confirmation</p>
                <p>Wallet: {{ enrollment.cryptoWalletAddress }}</p>
              </div>
              <div v-else>
                <p>{{ enrollment.paymentMethod || "N/A" }}</p>
              </div>
            </td>
            <td data-label="Enrolled At">
              <!-- Using the formatDate utility function -->
              {{ formatDate(enrollment.enrolledAt) }}
            </td>
            <td data-label="Status">
              <span
                :class="[
                  'status-badge',
                  `status-${enrollment.status.replace('_', '-')}`,
                ]"
              >
                {{ enrollment.status.replace(/_/g, " ") }}
              </span>
            </td>
            <td data-label="Actions" class="actions-cell">
              <!-- MODIFIED: Confirm Payment button shown for 'pending_confirmation' -->
              <button
                v-if="enrollment.status === 'pending_confirmation'"
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
    <div v-else class="empty-state">
      <p>No enrollments found for the current filter.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
// IMPORTANT: Import from the merged db.js file
import { getAllEnrollments, updateEnrollmentStatus } from "../../services/db.js"; // Corrected path to the merged db.js

// --- Reactive State ---
const allEnrollments = ref([]);
const isLoading = ref(true);
const error = ref(null);
const activeFilter = ref("pending"); // Default to pending confirmation

// --- Computed Properties ---
const filteredEnrollments = computed(() => {
  if (activeFilter.value === "pending") {
    // MODIFIED: Filter to show only 'pending_confirmation' enrollments
    return allEnrollments.value.filter(
      (e) => e.status === "pending_confirmation"
    );
  }
  // If 'all' is selected, return all enrollments
  return allEnrollments.value;
});

const pendingCount = computed(() => {
  // MODIFIED: Count only 'pending_confirmation' enrollments
  return allEnrollments.value.filter((e) => e.status === "pending_confirmation")
    .length;
});

/**
 * Utility function to format Firestore Timestamps into a readable string.
 * @param {object} timestamp Firestore Timestamp object.
 * @returns {string} Formatted date string or "N/A".
 */
const formatDate = (timestamp) => {
  if (!timestamp || !timestamp.toDate) return "N/A";
  return timestamp.toDate().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

// --- Lifecycle Hook ---
// Restored to the original, concise way of calling fetchEnrollments
onMounted(fetchEnrollments);

// --- Methods ---

/**
 * Fetches all enrollments from the database and updates the reactive state.
 * Handles loading and error states.
 */
async function fetchEnrollments() {
  isLoading.value = true;
  error.value = null;
  try {
    allEnrollments.value = await getAllEnrollments();
  } catch (err) {
    console.error("Error fetching enrollments:", err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
}

/**
 * Confirms an enrollment by updating its status to 'active'.
 * This is typically triggered by an admin after verifying payment.
 * @param {string} enrollmentId The ID of the enrollment to confirm.
 */
async function confirmEnrollment(enrollmentId) {
  // Using a custom modal or component for confirmation in a real app
  if (
    confirm(
      "Are you sure you want to confirm this enrollment? This will activate the user's course access."
    )
  ) {
    try {
      await updateEnrollmentStatus(enrollmentId, "active");
      // Re-fetch enrollments to update the table with the new status
      await fetchEnrollments();
      // Using a custom modal or component for alerts in a real app
      alert("Enrollment confirmed successfully!");
    } catch (err) {
      console.error("Error confirming enrollment:", err);
      alert("Failed to confirm enrollment. Please try again.");
    }
  }
}
</script>

<style scoped>
/* Admin Page Container */
.admin-page-container {
  padding: 2rem;
  background-color: var(--dark-blue-bg);
  min-height: calc(
    100vh - var(--navbar-height)
  ); /* Adjust based on your layout */
  color: var(--text-primary-light);
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2.5rem;
  color: var(--accent-light-blue);
  font-weight: var(--font-bold);
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--dark-border);
  padding-bottom: 0.5rem;
}

.filter-tabs button {
  background-color: transparent;
  border: none;
  padding: 0.75rem 1.25rem;
  color: var(--text-secondary-light);
  font-size: 1rem;
  font-weight: var(--font-semibold);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.filter-tabs button:hover {
  color: var(--accent-light-blue);
  background-color: rgba(0, 188, 212, 0.1);
}

.filter-tabs button.active {
  color: var(--accent-green);
  border-bottom: 2px solid var(--accent-green);
  background-color: rgba(16, 185, 129, 0.1);
}

/* Loading and Error States */
.page-loader-container,
.error-message,
.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 1.2rem;
  color: var(--text-secondary-light);
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid var(--accent-light-blue);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error-message p {
  color: var(--accent-red);
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

/* NEW: Payment Details Cell Styling */
.payment-details-cell p {
  font-size: 0.85rem;
  margin-bottom: 0.2rem;
  color: var(--text-secondary-light);
}

.payment-details-cell p strong {
  color: var(--text-primary-light);
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
  color: #10b981; /* Darker green */
}
.status-badge.status-pending-verification {
  background-color: rgba(251, 191, 36, 0.1); /* Yellow */
  color: #f59e0b; /* Darker yellow */
}
/* NEW: Style for pending_confirmation status */
.status-badge.status-pending-confirmation {
  background-color: rgba(255, 165, 0, 0.1); /* Orange */
  color: #ffa500; /* Darker orange */
}
/* NEW: Style for awaiting_payment status */
.status-badge.status-awaiting-payment {
  background-color: rgba(100, 149, 237, 0.1); /* Cornflower Blue */
  color: #6495ed; /* Darker Cornflower Blue */
}
.status-badge.status-declined {
  background-color: rgba(239, 68, 68, 0.1); /* Red */
  color: #ef4444; /* Darker red */
}

/* Action Button Styles */
.actions-cell {
  white-space: nowrap; /* Prevent buttons from wrapping */
}
.btn-action {
  background-color: var(--accent-blue);
  color: var(--dark-navy);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: var(--font-semibold);
  transition: background-color 0.2s ease;
}

.btn-action:hover {
  background-color: #00aacc; /* Slightly darker blue */
}

.btn-action.btn-confirm {
  background-color: var(--accent-green);
  color: var(--dark-navy);
}

.btn-action.btn-confirm:hover {
  background-color: #0d9263; /* Darker green */
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 3rem;
  background-color: var(--dark-blue-card);
  border-radius: 8px;
  margin-top: 2rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .admin-page-container {
    padding: 1rem;
  }
  .page-title {
    font-size: 2rem;
  }
  .filter-tabs {
    flex-wrap: wrap;
  }
  .filter-tabs button {
    flex: 1 1 auto;
    text-align: center;
  }

  .enrollments-table-container {
    border-radius: 0; /* Remove border-radius on small screens for full width */
  }
  .enrollments-table,
  .enrollments-table thead,
  .enrollments-table tbody,
  .enrollments-table th,
  .enrollments-table td,
  .enrollments-table tr {
    display: block;
  }

  .enrollments-table thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  .enrollments-table tr {
    border: 1px solid var(--dark-border);
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden; /* Ensures inner elements respect border-radius */
  }

  .enrollments-table td {
    border-bottom: 1px solid var(--dark-border);
    position: relative;
    padding-left: 50%; /* Adjust as needed for label */
    text-align: right;
  }

  .enrollments-table td:last-child {
    border-bottom: 0;
  }

  .enrollments-table td::before {
    content: attr(data-label);
    position: absolute;
    left: 1rem;
    width: calc(50% - 1rem);
    padding-right: 10px;
    white-space: nowrap;
    text-align: left;
    font-weight: var(--font-semibold);
    color: var(--accent-light-blue);
  }

  .user-id-cell {
    max-width: none; /* Allow full width on mobile */
    white-space: normal; /* Allow text to wrap */
  }

  .actions-cell {
    text-align: right;
  }
}
</style>
