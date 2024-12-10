<script>
import { RouterView, } from 'vue-router'
import Navbar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';


export default {
  components: {
    Navbar,
    FooterSection,
    RouterView,
  }
}
</script>

<template>
  <v-app>
    <Navbar />
    <v-container>

      <v-main>
        <RouterView />

      </v-main>
    </v-container>
  </v-app>
  <FooterSection></FooterSection>
</template>
