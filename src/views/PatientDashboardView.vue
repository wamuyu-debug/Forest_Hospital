<template>
    <v-card class="mx-auto" color="grey-lighten-3" max-width="448">
      <v-layout>
        <v-main>
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="n in content"
                :key="n"
                cols="12"
                @click="navigateTo(`${n['navigate']}`)"
              >
                <v-card
                  :title="`${n['title']}`"
                  :text="`${n['text']}`"
                ></v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  <script setup>
   import router from '@/router';
  import {ref} from 'vue'
  const content = ref([
  
    {
        'title': 'Appointments',
        'text':'Book Appointments With Us',
        'navigate':'appointments'
    },
    {
        'title': 'Learn More',
        'text':'Importance Of Good health',
        'navigate':'learnmore'
    },
    {
        'title': 'Reviews',
        'text':'Give Us Your Reviews',
        'navigate':'reviews'
    },
    {
        'title': 'Gallery',
        'text':'View Our Gallery',
        'navigate':'gallery'
    },
  ]);

 function navigateTo(page){
    router.push({ name: page });
    }
</script>
<style scoped>

/* Cards and their inner elements */
.v-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #525254!important; /* Beige */
  
}
/* App Layout and Spacing Adjustments */
.v-row {
  margin-top: 20px;
}
.v-container{
  background-color: #795238;
  width:absolute;
  height:500px;
}
</style>