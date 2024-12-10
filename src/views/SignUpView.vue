<template>
  <div class="gradient-background">
    <v-card
      class="mx-auto"
      style="max-width: 500px;"
    >
    <v-card-title class="text-h6 font-weight-regular"></v-card-title>
    <h1 style="text-align: center;">Sign Up</h1>
      <v-form
        ref="form"
        v-model="isValid"
        class="pa-4 pt-6"
      >
        <v-text-field
          v-model="signup_info.name"
          :rules="[rules.name]"
          color="black"
          counter="6"
          label="name"
          style="min-height: 96px"
          type="name"
          variant="filled"
        ></v-text-field>

        <v-text-field
          v-model="signup_info.password"
          :rules="[rules.password, rules.length(6)]"
          color="black"
          counter="6"
          label="Password"
          style="min-height: 96px"
          type="password"
          variant="filled"
        ></v-text-field>

        <v-text-field
          v-model="signup_info.phone"
          color="black"
          label="Phone number"
          variant="filled"
        ></v-text-field>

        <v-text-field
          v-model="signup_info.email"
          :rules="[rules.email]"
          color="black"
          label="Email address"
          type="email"
          variant="filled"
        ></v-text-field>

       
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
      
        <v-btn
       
          :loading="isLoading"
          color="black"
          @click="navigateTo('patientdashboard')">
          Submit
        </v-btn>
      </v-card-actions>
      <v-dialog
        v-model="dialog"
        max-width="400"
        persistent
      >
      
      </v-dialog>
    </v-card>
    </div>
  </template>
  <script>
  import axios from 'axios'
    export default {
      data: () => ({
        signup_info:{
          name:'',
          email:'',
          password:'',
          phone:'',
          user_type:'patient'
        },
        
        isLoading: false,
        password: undefined,
        phone: undefined,
        rules: {
          email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
          length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
          required: v => !!v || 'This field is required',
        },
      }),
      methods: {
    fetchProfile() {
      axios
        .get('/profile')
        .then(response => {
          this.profile = response.data;
        })
        .catch(error => {
          console.error('Error fetching profile:', error);
        });
      },
      navigateTo(page){
        axios.post('http://127.0.0.1:8000/api/signup', this.signup_info)
        .then(response => {
        
       this.$router.push({ name:page});
        })
      }
  }
};
 

  </script>
<style scoped>
/* Main colors for the theme */


.text-beige {
  color: #f5f5dc !important;
}

/* Apply beige color to inputs, text fields, and button */
.v-text-field input {
  color: #f5f5dc !important;
}

.v-text-field label {
  color: #f5f5dc !important;
}

.v-btn {
  background-color: #f5f5dc !important;
  color: #a4303f !important; /* Dark red text */
}

.v-btn:hover {
  background-color: #d9d2b3; /* Slightly darker beige on hover */
}

.v-checkbox .v-input--selection-controls__ripple {
  background-color: #a4303f !important;
}

/* Styling the dialog content */
.v-card {
  background-color: #795238;
}

.v-card-title,
.v-card-text {
  color: #f5f5dc;
}

.v-dialog .v-btn {
  background-color: #d9d2b3 !important; /* Light beige for dialog buttons */
}
</style>