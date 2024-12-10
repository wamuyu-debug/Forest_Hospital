<template>
    <div class="review-container">
      <header>
        <h2>Patient Reviews</h2>
        <p>We value your feedback! Share your experience with us.</p>
      </header>
  
      <!-- Review Form -->
      <form @submit.prevent="submitReview" class="review-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            v-model="newReview.name"
            placeholder="Your Name"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="review">Review</label>
          <textarea
            id="review"
            v-model="newReview.text"
            placeholder="Write your review here..."
            rows="4"
            required
          ></textarea>
        </div>
  
        <button type="submit" class="submit-btn">Submit Review</button>
      </form>
  
      <!-- Success Message -->
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
  
      <!-- Display Reviews -->
      <section class="review-list">
        <h3>What Our Patients Say:</h3>
        <div v-if="reviews.length === 0" class="no-reviews">
          No reviews yet. Be the first to leave a review!
        </div>
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="review-item"
        >
          <h4>{{ review.name }}</h4>
          <p>{{ review.text }}</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import axios from 'axios'
  export default {
    setup() {
      // Reviews list (initially empty)
      const reviews = ref([]);
  
      // New review data
      const newReview = ref({
        name: "",
        text: "",
      });
  
      // Success message
      const successMessage = ref("");
  
      // Submit a review
      const submitReview = () => {
        if (newReview.value.name && newReview.value.text) {
          reviews.value.push({ ...newReview.value });
  
          // Reset form fields
          newReview.value.name = "";
          newReview.value.text = "";
  
          // Show success message
          successMessage.value = "Review submitted! Thank you for your feedback.";
          setTimeout(() => {
            successMessage.value = ""; // Clear the message after 3 seconds
          }, 3000);
        }
      };
  
      return {
        reviews,
        newReview,
        successMessage,
        submitReview,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Container Styling */
  .review-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color:beige;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Header Styling */
  header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  header h2 {
    font-size: 28px;
    color: #795238;
  }
  
  header p {
    font-size: 16px;
    color: #555;
  }
  
  /* Form Styling */
  .review-form {
    margin-bottom: 30px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
  
  input:focus,
  textarea:focus {
    outline: none;
    border-color: #007bff;
  }
  
  .submit-btn {
    padding: 10px 20px;
    background-color:#363636;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  
  /* Success Message */
  .success-message {
    margin-top: 10px;
    padding: 10px;
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
    text-align: center;
    font-size: 14px;
  }
  
  /* Reviews List */
  .review-list {
    margin-top: 20px;
  }
  
  .review-list h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .no-reviews {
    font-style: italic;
    color: #777;
  }
  
  .review-item {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
  }
  
  .review-item h4 {
    margin: 0;
    color: #007bff;
  }
  
  .review-item p {
    margin: 5px 0 0;
    color: #333;
  }
  </style>
  