
# Crypto Payment Flow Enhancement Plan

This document outlines the plan to enhance the cryptocurrency payment flow to be more seamless and remove the manual email verification step.

## 1. Frontend Changes (`src/components/PaymentModal.vue`)

### 1.1. Add "I Have Paid" Button

- After a user generates a wallet address, an "I Have Paid" button will be displayed.
- This button will be initially disabled for a short period (e.g., 60 seconds) to prevent accidental clicks and to give the user time to make the payment.

### 1.2. New Function: `confirmPayment()`

- This new function will be triggered when the "I Have Paid" button is clicked.
- It will gather all the necessary information:
    - `userId`
    - `courseId`
    - `courseTitle`
    - `cryptoAmount`
    - `selectedCoin`
    - `selectedNetwork`
- It will then call a new database function `markPaymentAsPending()` to update the enrollment record.

### 1.3. Update UI to Reflect Pending Status

- After the "I Have Paid" button is clicked, the modal will display a confirmation message, informing the user that their payment is being verified and their enrollment will be activated shortly.

## 2. Backend Changes (`src/services/db.js`)

### 2.1. New Function: `markPaymentAsPending()`

- This new function will be created to handle the "I Have Paid" action.
- It will take the payment details from the frontend as arguments.
- It will update the existing enrollment record in Firestore, setting the `status` to `"pending_confirmation"` and adding the payment details (crypto amount, coin, network) to the record.

### 2.2. Modify `createEnrollment()`

- The `createEnrollment` function will be modified to set the initial `status` of crypto enrollments to `"awaiting_payment"`.

## 3. Admin Dashboard Changes (`src/views/admin/AdminEnrollments.vue`)

### 3.1. Update Filtering and Display

- The "Pending Verification" tab will be updated to show enrollments with the status `"pending_confirmation"`.
- The table will be updated to display the additional payment information (crypto amount, coin, network) for these pending enrollments.

### 3.2. Enhance `confirmEnrollment()`

- The `confirmEnrollment()` function will remain largely the same, but it will now be used to confirm payments for enrollments with the `"pending_confirmation"` status.
- When the admin clicks "Confirm Payment", the enrollment status will be updated to `"active"`.

## 4. Firestore Security Rules (`src/services/firebaseRules.md`)

- The Firestore security rules will be updated to allow users to update their own enrollment records only to set the status to `"pending_confirmation"`.
- This will prevent users from being able to modify their enrollment status to `"active"` or any other status.

By implementing these changes, we will create a more streamlined and user-friendly crypto payment process that eliminates the need for manual email verification and reduces the administrative workload.
