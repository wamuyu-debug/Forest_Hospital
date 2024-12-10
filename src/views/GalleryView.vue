<template>
    <v-container class="gallery-container">
      <v-row dense>
        <v-col
          v-for="(image, index) in images"
          :key="index"
          :cols="image.cols"
          class="gallery-item"
        >
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                v-bind="props"
                class="gallery-card"
                elevation="5"
                outlined
              >
                <v-img
                  :src="image.src"
                  height="200"
                  class="gallery-image"
                  cover
                ></v-img>
                <v-card-title
                  v-if="isHovering"
                  class="gallery-title"
                  dark
                >
                  {{ image.title }}
                </v-card-title>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const images = ref([
    { src: "../src/assets/wamuyu1.jpg", title: "Picture 1", cols: 4 },
    { src: "../src/assets/wamuyu2.jpg", title: "Picture 2", cols: 4 },
    { src: "../src/assets/wamuyu3.jpg", title: "Picture 3", cols: 4 },
    { src: "../src/assets/wamuyu4.jpg", title: "Picture 4", cols: 6 },
    { src: "../src/assets/wamuyu5.jpg", title: "Picture 5", cols: 6 },
    { src: "../src/assets/wamuyu6.jpg", title: "Picture 6", cols: 12 },
  ]);
  </script>
  
  <style scoped>
  .gallery-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .gallery-item {
    overflow: hidden;
    position: relative;
    margin-bottom: 16px;
  }
  
  .gallery-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .gallery-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .gallery-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: beige;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    padding: 8px 0;
  }
  
  .gallery-image {
    border-radius: 8px;
  }
  </style>
  