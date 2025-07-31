<!-- /src/views/admin/AdminDashboard.vue - FINAL, FEATURE-COMPLETE VERSION -->
<template>
  <div class="admin-page-container">
    <div class="page-header">
      <h1 class="page-title">Admin Dashboard</h1>
      <p class="page-subtitle">
        A high-level overview of the Nexus Academy platform.
      </p>
    </div>

    <!-- Loading State: Shown while the initial stats are being fetched -->
    <div v-if="isLoading" class="page-loader-container">
      <div class="spinner"></div>
    </div>

    <!-- Error State: Shown if the database call fails -->
    <div v-else-if="error" class="error-message">
      <p>
        Could not load dashboard statistics. Please try refreshing the page.
      </p>
    </div>

    <!-- 
      Ideal State: The main dashboard content, rendered after data is fetched successfully.
      This uses a responsive grid to display our key statistics.
    -->
    <div v-else class="stats-grid">
      <!-- Total Users Stat Card -->
      <div class="stat-card">
        <div class="stat-card-header">
          <h3 class="stat-title">Total Users</h3>
          <div class="stat-icon icon-users">
            <svg viewBox="0 0 24 24">
              <path
                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
              />
            </svg>
          </div>
        </div>
        <p class="stat-value">{{ stats.totalUsers }}</p>
        <RouterLink to="/admin/users" class="stat-link"
          >Manage Users →</RouterLink
        >
      </div>

      <!-- Total Courses Stat Card -->
      <div class="stat-card">
        <div class="stat-card-header">
          <h3 class="stat-title">Total Courses</h3>
          <div class="stat-icon icon-courses">
            <svg viewBox="0 0 24 24">
              <path
                d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V6h2v4h4v2z"
              />
            </svg>
          </div>
        </div>
        <p class="stat-value">{{ stats.totalCourses }}</p>
        <RouterLink to="/admin/courses" class="stat-link"
          >Manage Courses →</RouterLink
        >
      </div>

      <!-- Total Enrollments Stat Card -->
      <div class="stat-card">
        <div class="stat-card-header">
          <h3 class="stat-title">Total Enrollments</h3>
          <div class="stat-icon icon-enrollments">
            <svg viewBox="0 0 24 24">
              <path
                d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73V12l5 2.73 5-2.73v3.99z"
              />
            </svg>
          </div>
        </div>
        <p class="stat-value">{{ stats.totalEnrollments }}</p>
        <RouterLink to="/admin/enrollments" class="stat-link"
          >View Enrollments →</RouterLink
        >
      </div>

      <!-- Pending Enrollments (High Priority) Stat Card -->
      <div class="stat-card high-priority">
        <div class="stat-card-header">
          <h3 class="stat-title">Pending Enrollments</h3>
          <div class="stat-icon icon-pending">
            <svg viewBox="0 0 24 24">
              <path
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"
              />
            </svg>
          </div>
        </div>
        <p class="stat-value">{{ stats.pendingEnrollments }}</p>
        <RouterLink to="/admin/enrollments" class="stat-link"
          >Verify Payments →</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { getAdminDashboardStats } from "../../services/db.js";

// --- Reactive State ---
const stats = ref(null); // Will hold our data object: { totalUsers, totalCourses, ... }
const isLoading = ref(true);
const error = ref(null);

// --- Data Fetching ---
const fetchStats = async () => {
  try {
    isLoading.value = true;
    error.value = null;
    stats.value = await getAdminDashboardStats();
  } catch (err) {
    console.error("Failed to fetch dashboard stats:", err);
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

// --- Lifecycle Hook ---
// Fetch the stats as soon as the component is mounted.
onMounted(fetchStats);
</script>

<style scoped>
/* 
  Dedicated, professional styles for a modern dashboard UI.
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

.stats-grid {
  display: grid;
  /* Creates a responsive grid that adapts to screen size */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.stat-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.stat-title {
  font-size: 1rem;
  font-weight: var(--font-semibold);
  color: var(--text-secondary-light);
}

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stat-icon svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

/* Icon-specific colors */
.icon-users {
  color: #60a5fa;
  background-color: rgba(96, 165, 250, 0.1);
}
.icon-courses {
  color: #a78bfa;
  background-color: rgba(167, 139, 250, 0.1);
}
.icon-enrollments {
  color: #4ade80;
  background-color: rgba(74, 222, 128, 0.1);
}
.icon-pending {
  color: #f59e0b;
  background-color: rgba(245, 158, 11, 0.1);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: var(--font-bold);
  color: white;
  margin: 0;
  line-height: 1;
}

.stat-link {
  margin-top: auto; /* Pushes the link to the bottom of the card */
  padding-top: 1rem;
  color: var(--text-secondary-light);
  font-weight: var(--font-semibold);
  font-size: 0.875rem;
  transition: color 0.2s;
}
.stat-link:hover {
  color: var(--brand-aqua);
}

/* Special styling for the high-priority card */
.stat-card.high-priority {
  border-color: var(--brand-aqua);
  box-shadow: 0 0 20px rgba(0, 224, 255, 0.1);
}
.stat-card.high-priority .stat-title {
  color: var(--brand-aqua);
}

.error-message {
  text-align: center;
  padding: 3rem;
  background-color: var(--dark-blue-bg);
  border-radius: 8px;
  color: #ef4444;
}
</style>
