<template>
  <h1>Welcome to Forest Hospital</h1>
  <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
    >
      <v-img
        :src="image.src"
        height="100%"
        cover
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2 white--text">
            {{ image.caption }}
          </div>
          <v-btn
            color="#242323"
            dark
            rounded
            width="10"
            large
            class="elevation-3"
            @click="navigateTo('login')">Login</v-btn>
        </div>
      </v-img>
    </v-carousel-item>
  </v-carousel>
  <v-text>If You Are Signing up as a  new doctor,contact us first </v-text>
  <v-btn
            color="#242323"
            dark
            square
            width="90"
            large
            class="elevation-3"
            @click="navigateTo('contactus')">Contact</v-btn>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: '../src/assets/lisa1.jpg'},
        { src: '../src/assets/lisa2.jpg'},
        { src: '../src/assets/lisa3.jpg'},
        { src: '../src/assets/lisa4.jpg'},
        { src: '../src/assets/lisa5.jpg'},
      ],
    };
  },
  methods: 
    { navigateTo(page){
      this.$router.push({ name:page});
}
},}
</script>
<style scoped>

/* Style for the delimiter dots */
.v-carousel_controls_item {
  background-color: #ffffff; /* White dots */
  opacity: 0.7;
}

.v-carousel_controls_item--active {
  background-color: #4CAF50; /* Active dot color */
  opacity: 1;
}
.images .caption{
  font-size:10pc,
}
.V-text{
  font-size:bold;
  font-family:Arial, Helvetica, sans-serif;
}
</style>
