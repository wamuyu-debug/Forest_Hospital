<template>
    <div>
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
        <form @submit.prevent="login()">
          <v-text-field 
          v-model="signup_info.email"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          ></v-text-field>
          
          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Password  
            <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            >
            Forgot login password?</a>
          </div>
  
          <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          v-model="signup_info.password"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          ></v-text-field>
          
          <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
          >
        </v-card>
        
        <v-btn  
        block
        type="submit" @click="handleLogin"> Log In</v-btn>
        
      </form>
          <v-card-text class="text-center text-beige">
        Do not have an account? 
        <a
          href="/signup"
          class="text-decoration-none text-beige font-weight-bold"
          rel="noopener noreferrer"
        >
          Sign up
        </a>
      </v-card-text>
      </v-card>
    </div>
  </template>

<script setup>
import axios from 'axios'
import {reactive, ref} from'vue';
import router from '@/router';

const visible =ref(false)
const profile = ref()
const signup_info =ref({
  email:'',
  password:'',
})
const isPatient = ref();

function login () {
  console.log(signup_info.value)
  axios
      .post('http://127.0.0.1:8000/api/login', signup_info.value)
      .then(response => {
        profile.value = response.data;
        console.log(profile.value.user.user_type)
        isPatient.value = profile.value.user.user_type=="patient"
        console.log(isPatient.value)
        if (isPatient.value){
        router.push({
          name:'patientdashboard'
        })
      
        }
        else{
          router.push({
            name:'doctordashboard'
          })
        }
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });

    };

  </script>
<style scoped>
/* Main Theme Colors */
.theme {
  background-color: #795238; 
  min-height: 100vh; /* Full screen background */
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  background-color: #795238; /* Dark Red Card */
  color: #f5f5dc; /* Beige Text */
}

.text-beige {
  color: #f5f5dc !important; /* Beige color */
}

.v-btn {
  background-color: #f5f5dc; /* Beige Button */
  color: #a4303f !important; /* Dark Red Text */
}

.v-btn:hover {
  background-color: #d9d2b3; /* Slightly darker beige on hover */
}

.warning-card {
  background-color: #d9d2b3 !important; /* Light beige for warning card */
  border: 1px solid #f5f5dc; /* Beige border */
}

.text-caption {
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Input Fields */
.v-input__control {
  background-color: #d9d2b3 !important; /* Beige input background */
  color: #a4303f !important; /* Dark red text */
}

.v-input__control::placeholder {
  color: #a4303f !important; /* Placeholder in dark red */
}

/* Links */
a.text-decoration-none {
  color: #f5f5dc !important; /* Beige Links */
  font-weight: bold;
}

a.text-decoration-none:hover {
  text-decoration: underline;
}

</style>
