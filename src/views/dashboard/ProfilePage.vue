<!-- /src/pages/dashboard/ProfilePage.vue -->

<template>
  <div class="profile-page-content">
    <header class="profile-header">
      <h1>My Profile</h1>
      <p>
        This information will be used for your certificates and communication.
      </p>
    </header>

    <!-- The form is only rendered after the initial data has been loaded -->
    <div v-if="!isLoading" class="profile-card">
      <form @input="onFormChange" @submit.prevent="handleSaveProfile">
        <!-- Avatar Uploader Section -->
        <div class="form-group avatar-group">
          <label>Profile Picture</label>
          <div class="avatar-uploader">
            <div class="avatar-preview">
              <img
                v-if="avatarPreviewUrl"
                :src="avatarPreviewUrl"
                alt="Profile Avatar"
              />
              <span v-else>{{ userInitials }}</span>
            </div>
            <input
              type="file"
              ref="fileInput"
              @change="handleFileSelect"
              accept="image/png, image/jpeg"
              style="display: none"
            />
            <button
              type="button"
              @click="triggerFileInput"
              class="btn btn-secondary"
            >
              Change Avatar
            </button>
            <small>Recommended: Square image, PNG or JPG.</small>
          </div>
        </div>
        <hr class="form-divider" />
        <!-- Personal Details Section -->
        <div class="form-row">
          <div class="form-group">
            <label for="firstName">First Name</label
            ><input
              type="text"
              id="firstName"
              v-model="profile.firstName"
              required
            />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label
            ><input
              type="text"
              id="lastName"
              v-model="profile.lastName"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="displayName">Display Name (Public)</label>
          <input
            type="text"
            id="displayName"
            v-model="profile.displayName"
          /><small>This name will be shown in comments and discussions.</small>
        </div>
        <hr class="form-divider" />
        <!-- Contact Details Section -->
        <div class="form-row">
          <div class="form-group">
            <label for="email">Email Address</label
            ><input
              type="email"
              id="email"
              :value="user?.email"
              readonly
              disabled
            /><small>Email cannot be changed.</small>
          </div>
          <div class="form-group">
            <label for="whatsapp">WhatsApp Number</label
            ><input
              type="tel"
              id="whatsapp"
              v-model="profile.whatsappNumber"
              :placeholder="whatsappPlaceholder"
            />
          </div>
        </div>
        <hr class="form-divider" />
        <!-- Address Section -->
        <div class="form-group">
          <label for="address1">Address Line 1</label
          ><input type="text" id="address1" v-model="profile.address1" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="country">Country</label>
            <select id="country" v-model="profile.country" required>
              <option value="">Select a Country</option>
              <option v-for="c in countries" :key="c.code" :value="c.name">
                {{ c.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="state">State / Province</label>
            <div id="state-input-container">
              <select
                v-if="states.length > 0 && !isStateManual"
                id="state-select"
                v-model="profile.state"
              >
                <option value="">Select a State</option>
                <option v-for="s in states" :key="s" :value="s">{{ s }}</option>
              </select>
              <input
                v-else
                type="text"
                id="state-manual"
                v-model="profile.state"
                placeholder="Enter your state/province"
              />
            </div>
            <a
              href="#"
              @click.prevent="toggleManualState"
              class="manual-input-toggle"
              >{{ manualStateToggleText }}</a
            >
          </div>
        </div>
        <div class="form-group">
          <label for="city">City</label
          ><input type="text" id="city" v-model="profile.city" />
        </div>
        <!-- Form Actions -->
        <div class="form-actions">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="!isFormDirty || isSaving"
          >
            {{ isSaving ? "Saving..." : "Save Changes" }}
          </button>
          <p v-if="successMessage" class="success-message">
            {{ successMessage }}
          </p>
        </div>
      </form>
    </div>
    <!-- A loader is shown while the initial profile data is being fetched -->
    <div v-else class="page-loader-container"><div class="spinner"></div></div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from "vue";
import { auth } from "../../services/firebase.js";
import { updateUserProfile } from "../../services/auth.js";
import { getUserProfile, updateUserProfileData } from "../../services/db.js";
import { uploadUserProfileImage } from "../../services/storageService.js";
import {
  getCountries,
  getStatesByCountry,
  getCountryByName,
} from "../../services/countries.js";

// --- Component State ---
const user = ref(auth.currentUser);
const isLoading = ref(true);
const isSaving = ref(false);
const isFormDirty = ref(false);
const successMessage = ref("");
const fileInput = ref(null); // A ref to access the file input element
const newAvatarFile = ref(null); // Holds the new file to be uploaded

// A reactive object to hold all the form data
const profile = reactive({
  firstName: "",
  lastName: "",
  displayName: "",
  whatsappNumber: "",
  address1: "",
  country: "",
  state: "",
  city: "",
});

// State for the address section
const countries = ref([]);
const states = ref([]);
const isStateManual = ref(false);

// --- Computed Properties ---
const userInitials = computed(() =>
  (user.value?.displayName || user.value?.email || "NS")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase()
);
const whatsappPlaceholder = computed(
  () => `+${getCountryByName(profile.country)?.phone || "1"} ...`
);
const manualStateToggleText = computed(() =>
  isStateManual.value ? "Select from List" : "Enter Manually"
);
const avatarPreviewUrl = computed(() => {
  if (newAvatarFile.value) return URL.createObjectURL(newAvatarFile.value);
  return user.value?.photoURL;
});

// --- Methods ---
const onFormChange = () => {
  isFormDirty.value = true;
};
const triggerFileInput = () => {
  fileInput.value.click();
};
const toggleManualState = () => {
  isStateManual.value = !isStateManual.value;
};

const handleFileSelect = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    newAvatarFile.value = file;
    isFormDirty.value = true;
  }
};

const handleSaveProfile = async () => {
  isSaving.value = true;
  successMessage.value = "";
  try {
    let newPhotoURL = user.value.photoURL;
    if (newAvatarFile.value) {
      newPhotoURL = await uploadUserProfileImage(
        user.value.uid,
        newAvatarFile.value
      );
    }
    await updateUserProfile({
      displayName: profile.displayName,
      photoURL: newPhotoURL,
    });
    await updateUserProfileData(user.value.uid, {
      ...profile,
      photoURL: newPhotoURL,
    });
    successMessage.value = "Profile saved successfully!";
    isFormDirty.value = false;
    newAvatarFile.value = null; // Reset the file ref
    setTimeout(() => {
      successMessage.value = "";
    }, 3000);
  } catch (error) {
    console.error("Error saving profile:", error);
    alert("Failed to save profile. Please check the console for details.");
  } finally {
    isSaving.value = false;
  }
};

// --- Lifecycle & Watchers ---
onMounted(async () => {
  countries.value = getCountries();
  if (user.value) {
    const firestoreProfile = await getUserProfile(user.value.uid);
    if (firestoreProfile) {
      Object.assign(profile, firestoreProfile);
    }
    // Ensure display name is synced with auth profile
    profile.displayName = user.value.displayName || profile.displayName;
  }
  isLoading.value = false;
});

// A "watcher" to automatically update the state list when the country changes.
watch(
  () => profile.country,
  (newCountry) => {
    states.value = getStatesByCountry(newCountry);
    isStateManual.value = states.value.length === 0;
    // Don't reset state if the new country has the existing state
    if (!states.value.includes(profile.state)) {
      profile.state = "";
    }
  }
);
</script>

<style scoped>
/* This is a direct migration of your ProfilePage.css */
.profile-page-content {
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
.profile-header {
  margin-bottom: 2rem;
}
.profile-header h1 {
  font-size: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
.profile-header p {
  font-size: 1rem;
  color: var(--text-secondary-light);
}
.profile-card {
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 1.5rem;
}
.form-divider {
  border: none;
  border-top: 1px solid var(--dark-border);
  margin: 2rem 0;
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
.form-group input:disabled {
  background-color: var(--dark-border);
  color: var(--text-secondary-light);
  cursor: not-allowed;
}
.form-group small {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary-light);
}
.avatar-group {
  text-align: left;
}
.avatar-uploader {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.avatar-preview {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--brand-aqua);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark-navy);
  flex-shrink: 0;
}
.avatar-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.manual-input-toggle {
  display: block;
  font-size: 0.875rem;
  color: var(--brand-aqua);
  text-decoration: underline;
  margin-top: 0.5rem;
  cursor: pointer;
}
.form-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-top: 1px solid var(--dark-border);
  padding-top: 2rem;
  margin-top: 1rem;
}
.form-actions button:disabled {
  background: var(--dark-border);
  cursor: not-allowed;
  color: var(--text-secondary-light);
}
.form-actions button:disabled:hover {
  transform: none;
  box-shadow: none;
}
.success-message {
  color: var(--success-color);
  font-weight: 500;
}
@media (min-width: 768px) {
  .profile-card {
    padding: 2.5rem;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}
</style>
