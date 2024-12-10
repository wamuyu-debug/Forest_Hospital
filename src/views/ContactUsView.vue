<template>
    <v-container class="application-container">
      <v-card class="pa-5">
        <v-card-title class="text-h5 text-center ">
          Document Submission Request
        </v-card-title>
        <v-card-text>
          <p>Dear Doctor,</p>
          <p>
            We are delighted that you are interested in joining our team at
            Forest Hospital. To proceed with the application process, we kindly
            request you to submit the following documents for verification:
          </p>
          <ul>
            <li>Copy of Medical Degree</li>
            <li>Specialization Certificates</li>
            <li>Medical License and Registration</li>
            <li>Professional Experience Letters</li>
            <li>Identification Proof (Passport/Driver's License)</li>
            <li>Updated Curriculum Vitae (CV)</li>
            <li>Any Additional Certifications or Accreditations</li>
          </ul>
          <p>
            Please ensure that all documents are clear and legible then send the
            scanned copies to
            <a :href="mailtoLink" class="highlight">{{ emailAddress }}</a>, and we'll get you signed up.
          </p>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Dynamic email
  const emailAddress = ref("lisangacha6@gmail.com");
  
  // Mailto link with subject and body
  const mailtoLink = ref(
    `mailto:${emailAddress.value}?subject=Document Submission&body=Dear Team,%0A%0APlease find attached the required documents for verification.%0A%0AThank you.`
  );
  </script>
  
  <style scoped>
  .application-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    color:#959595;
  }
  
  .highlight {
    font-weight: bold;
    color: #795238;
  }
  
  .dark-red--text {
    color: #a4303f !important;
  }
  
  ul {
    padding-left: 20px;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  .v-card-text{
    color:#959595;
  }
  .v-card-title{
    color:#795238;
  }
  </style>
  