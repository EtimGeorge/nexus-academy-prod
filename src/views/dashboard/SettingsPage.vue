<!-- /src/pages/dashboard/SettingsPage.vue -->

<template>
  <div class="settings-page-content">
    <header class="settings-header">
      <h1>Account Settings</h1>
      <p>Manage your account security, payment methods, and preferences.</p>
    </header>

    <!-- Security Card -->
    <div class="settings-card">
      <h2>Security</h2>
      <form v-if="isPasswordUser" @submit.prevent="handleChangePassword">
        <div class="form-group">
          <label for="current-password">Current Password</label
          ><input type="password" v-model="passwordData.current" required />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="new-password">New Password</label
            ><input type="password" v-model="passwordData.new" required />
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm New Password</label
            ><input type="password" v-model="passwordData.confirm" required />
          </div>
        </div>
        <div class="form-actions">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="isSavingPassword"
          >
            {{ isSavingPassword ? "Updating..." : "Update Password" }}
          </button>
        </div>
      </form>
      <p v-else>
        Password management is not available for accounts created with a social
        provider (e.g., Google).
      </p>
    </div>

    <!-- Payment Methods Card -->
    <div class="settings-card">
      <h2>Payment Methods</h2>
      <div class="payment-intro-text">
        <p>
          Manage your saved card details and billing history through our secure
          payment partner.
        </p>
      </div>
      <div class="payment-method-row">
        <div class="payment-info">
          <h4>Card Details</h4>
          <p>Add or remove credit and debit cards securely.</p>
        </div>
        <button @click="manageBilling" class="btn btn-secondary">
          Manage on Paystack
        </button>
      </div>
    </div>

    <!-- Preferences Card -->
    <div class="settings-card">
      <h2>Preferences</h2>
      <div class="form-group">
        <label for="currency-select">Preferred Currency</label
        ><select v-model="preferences.currency">
          <option value="NGN">NGN</option>
          <option value="USD">USD</option></select
        ><small>This will update prices across the site.</small>
      </div>
    </div>

    <!-- Danger Zone Card -->
    <div class="settings-card danger-zone">
      <h2>Danger Zone</h2>
      <div class="danger-zone-row">
        <div class="danger-info">
          <h4>Delete Your Account</h4>
          <p>
            This action is irreversible. All your course progress and data will
            be permanently lost.
          </p>
        </div>
        <button @click="showDeleteModal = true" class="btn btn-danger">
          Delete Account
        </button>
      </div>
    </div>

    <!-- Deletion Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Confirm Account Deletion</h2>
        <p>
          This action is permanent. To proceed, please type
          <strong>DELETE</strong> in the box below.
        </p>
        <div class="form-group">
          <label for="delete-confirm-input">Confirmation</label
          ><input
            type="text"
            v-model="deleteConfirmText"
            placeholder="Type DELETE here"
          />
        </div>
        <p v-if="reauthPasswordRequired">
          For your security, please provide your current password.
        </p>
        <div v-if="reauthPasswordRequired" class="form-group">
          <label for="reauth-password">Current Password</label
          ><input type="password" v-model="reauthPassword" />
        </div>
        <div class="modal-actions">
          <button @click="showDeleteModal = false" class="btn btn-secondary">
            Cancel
          </button>
          <button
            @click="handleDeleteAccount"
            class="btn btn-danger"
            :disabled="!canConfirmDeletion"
          >
            {{ isDeleting ? "Deleting..." : "Confirm Deletion" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../../services/firebase.js";
import {
  reauthenticateUser,
  updateUserPassword,
  deleteUserAccount,
} from "../../services/auth.js";
import { deleteUserProfile } from "../../services/db.js";

// --- Component State ---
const user = auth.currentUser;
const router = useRouter();
const isPasswordUser = ref(user?.providerData[0]?.providerId === "password");
const isSavingPassword = ref(false);
const isDeleting = ref(false);
const showDeleteModal = ref(false);
const deleteConfirmText = ref("");
const reauthPassword = ref("");
const passwordData = reactive({ current: "", new: "", confirm: "" });
const preferences = reactive({ currency: "NGN" });

// --- Computed Properties ---
const reauthPasswordRequired = computed(
  () => isPasswordUser.value && showDeleteModal.value
);
const canConfirmDeletion = computed(() => deleteConfirmText.value === "DELETE");

// --- Methods ---
const handleChangePassword = async () => {
  if (passwordData.new !== passwordData.confirm) {
    alert("New passwords do not match.");
    return;
  }
  isSavingPassword.value = true;
  try {
    await reauthenticateUser(passwordData.current);
    await updateUserPassword(passwordData.new);
    alert("Password updated successfully!");
    passwordData.current = "";
    passwordData.new = "";
    passwordData.confirm = "";
  } catch (error) {
    console.error("Password change failed:", error);
    alert(
      error.code === "auth/wrong-password"
        ? "The current password you entered is incorrect."
        : "Failed to update password."
    );
  } finally {
    isSavingPassword.value = false;
  }
};

const manageBilling = () => {
  alert("Redirecting to our secure payment portal...");
  // window.location.href = 'https://billing.paystack.com/...';
};

const handleDeleteAccount = async () => {
  isDeleting.value = true;
  try {
    await reauthenticateUser(reauthPassword.value);
    await deleteUserProfile(user.uid);
    await deleteUserAccount();
    alert("Your account has been successfully deleted.");
    router.push("/login");
  } catch (error) {
    console.error("Account deletion failed:", error);
    alert(
      error.code === "auth/wrong-password"
        ? "Incorrect password. Account deletion cancelled."
        : "An error occurred during re-authentication."
    );
  } finally {
    isDeleting.value = false;
    showDeleteModal.value = false;
  }
};
</script>

<style scoped>
/* This is a direct migration of your SettingsPage.css */
.settings-page-content {
  animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.settings-header {
  margin-bottom: 2rem;
}
.settings-header h1 {
  font-size: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
.settings-header p {
  font-size: 1rem;
  color: var(--text-secondary-light);
}
.settings-card {
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}
.settings-card h2 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--dark-border);
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  font-weight: var(--font-semibold);
  color: var(--text-primary-light);
  margin-bottom: 0.75rem;
}
.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: border-color 0.2s;
}
.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--brand-aqua);
}
.form-group small {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary-light);
}
.form-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
}
.payment-intro-text {
  color: var(--text-secondary-light);
  font-size: 0.875rem;
  margin-bottom: 2rem;
}
.payment-method-row,
.danger-zone-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.payment-info h4,
.danger-info h4 {
  color: white;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}
.payment-info p,
.danger-info p {
  color: var(--text-secondary-light);
  margin: 0;
}
.danger-zone {
  border-color: #991b1b;
}
.danger-zone h2 {
  color: #f87171;
}
.btn.btn-danger {
  background-color: #dc2626;
  color: white;
}
.btn.btn-danger:hover {
  background-color: #b91c1c;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  transition: opacity 0.3s ease;
}
.modal-content {
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  text-align: left;
  transition: transform 0.3s ease;
}
.modal-content h2 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  padding-bottom: 0;
  border-bottom: none;
}
.modal-content p {
  color: var(--text-secondary-light);
  margin-bottom: 1.5rem;
}
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}
@media (min-width: 768px) {
  .settings-card {
    padding: 2.5rem;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  .payment-method-row,
  .danger-zone-row {
    flex-direction: row;
    align-items: center;
  }
}
</style>
