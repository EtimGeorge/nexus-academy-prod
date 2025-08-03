<!-- /src/views/admin/AdminEnrollments.new.vue -->
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
        Pending Confirmation ({{ pendingCount }})
      </button>
    </div>

    <!-- ... (loading and error states are unchanged) ... -->

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
            <th>Payment Details</th> <!-- NEW -->
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
            <!-- NEW: Display payment details for pending enrollments -->
            <td data-label="Payment Details">
              <div v-if="enrollment.paymentDetails" class="payment-details">
                <div><strong>Coin:</strong> {{ enrollment.paymentDetails.coin.toUpperCase() }}</div>
                <div><strong>Network:</strong> {{ enrollment.paymentDetails.network }}</div>
                <div><strong>Amount:</strong> ${{ enrollment.paymentDetails.amount }}</div>
              </div>
              <span v-else>-</span>
            </td>
            <td data-label="Enrolled At">
              {{ formatDate(enrollment.enrolledAt) }}
            </td>
            <td data-label="Status">
              <span :class="['status-badge', `status-${enrollment.status}`]" >{{ enrollment.status.replace('_', ' ') }}</span>
            </td>
            <td data-label="Actions" class="actions-cell">
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

    <!-- ... (empty state is unchanged) ... -->
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
// IMPORTANT: Import from the new db.new.js file
import {
  getAllEnrollments,
  updateEnrollmentStatus,
} from "../../services/db.new.js";

// --- Reactive State ---
const allEnrollments = ref([]);
const isLoading = ref(true);
const error = ref(null);
const activeFilter = ref("pending"); // Default to pending

// --- Computed Properties ---
const filteredEnrollments = computed(() => {
  if (activeFilter.value === "pending") {
    return allEnrollments.value.filter(
      (e) => e.status === "pending_confirmation" // MODIFIED
    );
  }
  return allEnrollments.value;
});

const pendingCount = computed(() => {
  return allEnrollments.value.filter(
    (e) => e.status === "pending_confirmation" // MODIFIED
  ).length;
});

// ... (rest of the script is unchanged) ...
</script>

<style scoped>
/* ... (styles are unchanged, but you could add styles for .payment-details) ... */
.payment-details div {
  font-size: 0.85rem;
}
</style>
