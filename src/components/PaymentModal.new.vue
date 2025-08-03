<!-- /src/components/PaymentModal.new.vue - MODIFIED FOR NEW CRYPTO FLOW -->

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <!-- ... (unchanged part of the template) ... -->

      <!-- View 2: Crypto Payment Details -->
      <div v-else class="crypto-details-view">
        <!-- ... (form is unchanged) ... -->

        <!-- Wallet Display Card (Dynamically shown after generation) -->
        <div v-if="currentWallet && !paymentSubmitted" class="card wallet-card">
          <h4>Make Your Deposit</h4>
          <!-- ... (wallet details are unchanged) ... -->

          <p class="crypto-notice">
            After making the payment, click the button below to confirm.
          </p>

          <button
            @click="handlePaymentConfirmation"
            :disabled="isConfirmButtonDisabled"
            class="btn btn-primary form-submit-btn"
          >
            {{ confirmButtonText }}
          </button>
        </div>

        <!-- View 3: Payment Submitted Confirmation -->
        <div v-if="paymentSubmitted" class="payment-submitted-view">
          <h4>Payment Submitted!</h4>
          <p>
            Thank you for your payment. Our team will verify it shortly, and your
            course access will be activated. You can check the status of your
            enrollment in your dashboard.
          </p>
          <button @click="closeModal" class="btn btn-secondary">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// /src/components/PaymentModal.new.vue --- SCRIPT MODIFICATIONS

import { ref, computed, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../services/firebase.js";
// IMPORTANT: Import from the new db.new.js file
import { createEnrollment, submitPaymentConfirmation } from "../services/db.new.js";
import { companyWallets } from "../services/cryptoWallets.js";

// --- PROPS, EMITS, & STATE ---
const props = defineProps({ course: { type: Object, required: true } });
const emit = defineEmits(["close"]);
const router = useRouter();
const showCryptoDetails = ref(false);
const currentWallet = ref(null);
const paymentSubmitted = ref(false); // NEW
const isConfirmButtonDisabled = ref(true); // NEW
const confirmButtonText = ref("I Have Paid (Enabling in 60s)"); // NEW

// ... (other state variables are unchanged) ...

// --- METHODS ---

async function generateCryptoAddress() {
  // ... (this function is largely the same) ...

  // Create the enrollment with 'awaiting_payment' status
  await createEnrollment(
    auth.currentUser.uid,
    props.course.id,
    props.course.title,
    "crypto"
  );

  // Enable the 'I Have Paid' button after a delay
  setTimeout(() => {
    isConfirmButtonDisabled.value = false;
    confirmButtonText.value = "I Have Paid";
  }, 60000); // 60 seconds
}

/**
 * NEW: Handles the user clicking "I Have Paid"
 */
async function handlePaymentConfirmation() {
  const user = auth.currentUser;
  if (!user) return;

  const enrollmentId = `${user.uid}_${props.course.id}`;
  const paymentDetails = {
    coin: selectedCoin.value,
    network: selectedNetworkValue.value,
    amount: props.course.price,
  };

  try {
    await submitPaymentConfirmation(enrollmentId, paymentDetails);
    paymentSubmitted.value = true; // Show the confirmation view
  } catch (error) {
    console.error("Failed to submit payment confirmation:", error);
    alert("There was an error submitting your payment confirmation. Please try again.");
  }
}

// ... (other methods are unchanged) ...
</script>

<style scoped>
/* ... (styles are unchanged) ... */
</style>
