<template>
  <v-container class="appointment-container">
    <v-card class="pa-5">
      <v-card-title class="text-h5 text-center">
        Book an Appointment
      </v-card-title>
      <v-form v-model="valid" ref="form">
        <!-- Doctor Selection -->
        <v-select
          label="Select Doctor"
          v-model="form.doctor"
          :items="doctors"
          required
          outlined
        ></v-select>

        <!-- Date Picker -->
        <v-menu v-model="menu" :close-on-content-click="false" location="center">
          <template v-slot:activator="{ props }">
            <v-text-field
              v-model="formattedDate"
              label="Select Appointment Date"
              hide-details="auto"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="props"
            />
          </template>
          <v-date-picker
            v-model="form.appointmentDate"
            @input="formattedDate = formatDate(form.appointmentDate)"
          />
        </v-menu>

        <!-- Submit Button -->
        <v-btn
          class="mt-4"
          color="dark-red"
          dark
          block
          :disabled="!form.doctor || !form.appointmentDate"
          @click="submitForm"
        >
          Submit Appointment
        </v-btn>
      </v-form>

      <!-- Success Message -->
      <v-alert
        type="success"
        v-if="successMessage"
        dismissible
        class="mt-4"
        @click="successMessage = ''"
      >
        {{ successMessage }}
      </v-alert>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const valid = ref(true); // Form validation state
const successMessage = ref(""); // Success message after submission
const menu = ref(false); // Controls date picker menu visibility
const formattedDate = ref(""); // Formatted appointment date for display

const form = ref({
  doctor: null,
  appointmentDate: null,
}); // Form data

const doctors = ref(["Dr. Joyce", "Dr. Michael", "Dr. Samuel"]); // List of doctors

// Store appointments
const appointments = ref([]); // Stores all booked appointments

// Format date into DD/MM/YYYY
function formatDate(inputDate) {
  if (!inputDate) return "";
  const date = new Date(inputDate);
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Handle form submission
function submitForm() {
  if (form.value.doctor && form.value.appointmentDate) {
    // Capture appointment data
    const newAppointment = {
      doctor: form.value.doctor,
      date: formatDate(form.value.appointmentDate),
    };

    // Add to appointments list
    appointments.value.push(newAppointment);

    // Set success message
    successMessage.value = `Appointment booked successfully with ${newAppointment.doctor} on ${newAppointment.date}.`;

    // Clear the form
    clearForm();
  } else {
    successMessage.value = "Please complete all fields before submitting.";
  }
}

// Clear form inputs after submission
function clearForm() {
  form.value.doctor = null;
  form.value.appointmentDate = null;
  formattedDate.value = "";
}
</script>

<style scoped>
.appointment-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}


.v-btn {
  background-color: #795238 !important;
}

.v-alert {
  font-size: 16px;
}
.v-card-title{
  color:#795238
}
</style>
