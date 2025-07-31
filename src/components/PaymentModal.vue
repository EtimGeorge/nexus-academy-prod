<!-- /src/components/PaymentModal.vue - FINAL, ENHANCED WITH CRYPTO -->

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button
        @click="closeModal"
        class="close-modal-btn"
        aria-label="Close payment options"
      >
        ×
      </button>

      <!-- View 1: Initial Choice (Paystack / Crypto / Simulated) -->
      <div v-if="!showCryptoDetails">
        <h2>Choose Your Payment Method</h2>

        <!-- Paystack Option (Original Logic - Commented out for now) -->
        <div class="payment-option" @click="initiatePaystackPayment">
          <h3>Pay with Card / Bank</h3>
          <p>Securely pay with your card or bank account via Paystack.</p>
        </div>

        <!-- Crypto Option -->
        <div class="payment-option" @click="handleCryptoPaymentChoice">
          <h3>Pay with Crypto</h3>
          <p>
            Pay with Bitcoin, USDT, or other cryptos. Manual confirmation
            required.
          </p>
        </div>

        <!-- Simulated Enrollment Option (For Development) -->
        <div
          class="payment-option simulated"
          @click="handleSimulatedEnrollment"
        >
          <h3>Simulated Enrollment (Dev Only)</h3>
          <p>Instantly enroll for testing purposes.</p>
        </div>
      </div>

      <!-- View 2: Crypto Payment Details -->
      <div v-else class="crypto-details-view">
        <a href="#" @click.prevent="showCryptoDetails = false" class="back-link"
          >← Back to options</a
        >
        <h2>Pay with Crypto</h2>
        <p class="page-description">
          Select your preferred cryptocurrency and network. Your access will be
          granted after manual confirmation by our team.
        </p>

        <!-- Crypto Form -->
        <form @submit.prevent="generateCryptoAddress">
          <div class="form-group">
            <label for="crypto-method">Cryptocurrency</label>
            <select
              id="crypto-method"
              v-model="selectedCoin"
              class="form-control"
            >
              <option
                v-for="(coin, key) in companyWallets"
                :key="key"
                :value="key"
              >
                {{ coin.name }}
              </option>
            </select>
          </div>

          <div class="form-group" v-if="networksForSelectedCoin.length > 0">
            <label for="crypto-network">Network</label>
            <select
              id="crypto-network"
              v-model="selectedNetworkValue"
              class="form-control"
            >
              <option
                v-for="network in networksForSelectedCoin"
                :key="network.value"
                :value="network.value"
              >
                {{ network.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="crypto-amount">Amount (USD equivalent)</label>
            <input
              type="text"
              id="crypto-amount"
              :value="`$${course.price.toFixed(2)}`"
              readonly
              class="form-control"
            />
          </div>

          <button type="submit" class="btn btn-primary form-submit-btn">
            Generate Address
          </button>
        </form>

        <!-- Wallet Display Card (Dynamically shown after generation) -->
        <div v-if="currentWallet" class="card wallet-card">
          <h4>Make Your Deposit</h4>
          <p>
            Scan the QR code or copy the address below to send
            <strong id="wallet-coin-name">{{ currentWallet.name }}</strong
            >.
          </p>
          <div id="wallet-qr-code" class="qr-code-container"></div>
          <div class="wallet-address-group">
            <label>Wallet Address</label>
            <input
              type="text"
              :value="currentWallet.address"
              readonly
              ref="walletAddressInput"
            />
            <button @click="copyWalletAddress">{{ copyButtonText }}</button>
          </div>
          <div class="wallet-address-group">
            <label>Network</label>
            <input type="text" :value="currentWallet.networkName" readonly />
          </div>
          <div
            v-if="currentWallet.destinationTagRequired"
            class="wallet-address-group"
          >
            <label>Destination Tag</label>
            <input type="text" :value="currentWallet.tag" readonly />
          </div>
          <small class="wallet-warning"
            >Please send only
            <strong id="wallet-coin-symbol">{{ currentWallet.symbol }}</strong>
            to this address. Sending any other coins may result in permanent
            loss.</small
          >
          <p class="crypto-notice">
            After payment, send your transaction hash/ID and your Nexus Academy
            email to our support team for verification. Access will be granted
            after manual confirmation.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// /src/components/PaymentModal.vue --- DEFINITIVE SCRIPT BLOCK

import { ref, computed, watch, onMounted, nextTick } from "vue"; // Correctly imported
import { useRouter } from "vue-router";
import { auth } from "../services/firebase.js";
import { createEnrollment } from "../services/db.js";
import { companyWallets } from "../services/cryptoWallets.js";

// --- PROPS, EMITS, & STATE ---
const props = defineProps({ course: { type: Object, required: true } });
const emit = defineEmits(["close"]);
const router = useRouter();
const showCryptoDetails = ref(false);
const copyButtonText = ref("Copy");
const walletAddressInput = ref(null);
const selectedCoin = ref("usdt");
const selectedNetworkValue = ref("");
const currentWallet = ref(null);

// --- COMPUTED PROPERTIES ---
const networksForSelectedCoin = computed(() => {
  const coin = companyWallets[selectedCoin.value];
  return coin ? coin.networks : [];
});

// --- METHODS ---
function closeModal() {
  emit("close");
  showCryptoDetails.value = false;
  selectedCoin.value = "usdt";
  selectedNetworkValue.value = "";
  currentWallet.value = null;
}

function initiatePaystackPayment() {
  alert(
    "Paystack payment is currently disabled for development. Please use 'Simulated Enrollment'."
  );
  /* ... (live paystack code remains commented out) ... */

  /*
  if (typeof window.PaystackPop === 'undefined') {
    alert('Payment service could not be loaded. Please check your connection and try again.');
    return;
  }
  const paystack = new window.PaystackPop();
  paystack.newTransaction({
    key: 'pk_test_YOUR_PUBLIC_KEY', // <-- REMINDER: REPLACE THIS FOR LIVE
    email: user.email,
    amount: props.course.price * 100, // Amount in kobo/cents
    currency: 'NGN',
    ref: `NEXUS-${props.course.id}-${Date.now()}`,
    metadata: { user_id: user.uid, course_id: props.course.id, course_title: props.course.title },
    onSuccess: async (transaction) => {
      // In a real Paystack setup, you would rely on the webhook for final confirmation.
      // This client-side success is for immediate user feedback.
      alert('Payment successful! Your enrollment is being processed.');
      // You could also create a 'pending_paystack' enrollment here, then verify with webhook.
      await createEnrollment(user.uid, props.course.id, props.course.title, 'paystack');
      router.push('/dashboard');
    },
    onCancel: () => {
      alert('Payment was cancelled.');
    }
  });
  */
}

async function handleSimulatedEnrollment() {
  const user = auth.currentUser;
  if (!user || !props.course) {
    alert("Authentication error. Please re-login.");
    router.push("/login");
    return;
  }
  try {
    await createEnrollment(
      user.uid,
      props.course.id,
      props.course.title,
      "simulated"
    );
    alert(
      "Simulated enrollment successful! You now have access to the course."
    );
    router.push("/dashboard");
    closeModal();
  } catch (error) {
    console.error("Simulated enrollment failed:", error);
    alert("An error occurred during simulated enrollment.");
  }
}

function handleCryptoPaymentChoice() {
  showCryptoDetails.value = true;
  selectedNetworkValue.value = networksForSelectedCoin.value[0]?.value || "";
}

async function generateCryptoAddress() {
  const coinData = companyWallets[selectedCoin.value];
  const network = coinData.networks.find(
    (n) => n.value === selectedNetworkValue.value
  );
  if (!coinData || !network) {
    alert("Please select a valid cryptocurrency and network.");
    return;
  }
  currentWallet.value = {
    name: coinData.name,
    symbol: coinData.symbol,
    address: network.address,
    networkName: network.name,
    destinationTagRequired: network.destinationTagRequired || false,
    tag: network.tag || "",
  };

  // *** THE DEFINITIVE FIX IS HERE ***
  await nextTick(); // Correctly called after being imported

  const qrContainer = document.getElementById("wallet-qr-code");
  if (qrContainer) {
    qrContainer.innerHTML = "";
    // We must call QRCode from the window object as it's a global script
    new window.QRCode(qrContainer, {
      text:
        network.address +
        (network.destinationTagRequired && network.tag
          ? `?dt=${network.tag}`
          : ""),
      width: 150,
      height: 150,
    });
  }
  try {
    const user = auth.currentUser;
    if (!user) {
      alert(
        "Authentication error. Please re-login to initiate crypto payment."
      );
      router.push("/login");
      closeModal();
      return;
    }
    await createEnrollment(
      user.uid,
      props.course.id,
      props.course.title,
      "crypto"
    );
    // No alert here, as the user still needs to pay. The UI itself is the confirmation.
  } catch (error) {
    console.error("Failed to create pending crypto enrollment:", error);
    alert("Could not record crypto payment initiation. Please try again.");
  }
}

function copyWalletAddress() {
  if (walletAddressInput.value) {
    walletAddressInput.value.select();
    navigator.clipboard.writeText(walletAddressInput.value.value);
    copyButtonText.value = "Copied!";
    setTimeout(() => {
      copyButtonText.value = "Copy";
    }, 2000);
  }
}

// --- WATCHERS ---
watch(selectedCoin, (newCoin) => {
  const networks = companyWallets[newCoin]?.networks || [];
  selectedNetworkValue.value = networks[0]?.value || "";
});
</script>

<style scoped>
/* 
  All styles below are directly from our previous implementation, adapted and enhanced for the new features.
*/
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(11, 15, 25, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
.modal-content {
  background-color: var(--dark-blue-bg);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  position: relative;
  animation: fadeInModal 0.3s ease forwards;
}
@keyframes fadeInModal {
  from {
    transform: scale(0.95);
    opacity: 0.8;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.close-modal-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  color: var(--text-secondary-light);
  cursor: pointer;
  transition: color 0.2s;
}
.close-modal-btn:hover {
  color: white;
}
.modal-content h2 {
  font-size: 1.75rem;
  color: white;
  margin-bottom: 2rem;
}

.payment-option {
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.payment-option:hover {
  border-color: var(--brand-aqua);
  transform: translateY(-2px);
}
.payment-option.simulated:hover {
  border-color: #fbbf24;
} /* Yellow for dev option */
.payment-option h3 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: white;
}
.payment-option p {
  margin: 0;
  color: var(--text-secondary-light);
}

.crypto-details-view {
  padding-top: 1rem;
}
.crypto-details-view .page-description {
  margin-bottom: 1.5rem;
}
.back-link {
  display: inline-block;
  color: var(--text-secondary-light);
  margin-bottom: 1rem;
  font-weight: var(--font-semibold);
}
.crypto-details h4 {
  color: white;
  margin-bottom: 1rem;
}
.crypto-details ol {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-secondary-light);
}
.crypto-details li {
  margin-bottom: 0.75rem;
}
.wallet-address {
  display: flex;
  margin-bottom: 1rem;
}
.wallet-address input {
  flex-grow: 1;
  padding: 0.75rem;
  background-color: var(--dark-navy);
  border: 1px solid var(--dark-border);
  color: var(--text-primary-light);
  border-radius: 6px 0 0 6px;
  font-family: monospace;
}
.wallet-address button {
  padding: 0.75rem 1rem;
  background-color: var(--brand-aqua);
  color: var(--dark-navy);
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  font-weight: var(--font-bold);
}
.crypto-notice {
  font-size: 0.875rem;
  font-style: italic;
  color: var(--text-secondary-light);
}

/* Form control styles (reused from global or auth pages) */
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: var(--font-semibold);
  color: var(--text-primary-light);
}
.form-control {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--dark-blue-card);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
}
.form-control:focus {
  outline: none;
  border-color: var(--brand-aqua);
}
.form-submit-btn {
  margin-top: 1rem;
}

/* QR Code specific styles */
.qr-code-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: white; /* QR code needs a light background */
  border-radius: 8px;
  margin: 1.5rem auto;
  width: 170px; /* Width of QR code + padding */
  height: 170px;
}
</style>
