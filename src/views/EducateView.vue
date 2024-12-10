<template>
  <div class="about-us-container">
    <!-- Page Header -->
    <header class="about-us-header">
      <h1>Get Educated today</h1>
      <p>Learn more about our mission, vision, and values.</p>
    </header>

    <!-- Main Content Container -->
    <div class="content-container">
      <!-- Mission Section -->
      <section class="about-section">
        <h2>Our Mission</h2>
        <p>
          We are dedicated to providing innovative, high-quality services to improve the lives of our customers. Our team
          is committed to excellence, integrity, and empathy in everything we do.
        </p>
      </section>

      <!-- Vision Section -->
      <section class="about-section">
        <h2>Our Vision</h2>
        <p>
          To be a global leader in delivering exceptional solutions that create a positive impact on the communities we
          serve.
        </p>
      </section>

      <!-- Values Section -->
      <section class="about-section">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity and Transparency</li>
          <li>Excellence in Service</li>
          <li>Innovation and Growth</li>
          <li>Empathy and Compassion</li>
        </ul>
      </section>

      <section class="about-section">
        <h2>Educative Tips</h2>
        <p>Here are some advantages of having good health</p>
        <ul>
          <li> Enhanced Quality of Life</li>
          <li>Increased Energy and Productivity</li>
          <li>Reduced Risk of Chronic Diseases</li>
          <li>Improved Mental Health</li>
        </ul>
      </section>


      <!-- Team Section -->
      
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

</script>

<style scoped>
/* General Styling */
.about-us-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #795238; /* Black background */
  color: #fff; /* White text */
  font-family: Arial, sans-serif;
  line-height: 1.6;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

/* Header Styling */
.about-us-header {
  text-align: center;
  margin-bottom: 40px;
  color: #363636; /* Dark red */
}

.about-us-header h1 {
  font-size: 36px;
  color: #363636; /* Dark red */
}

.about-us-header p {
  font-size: 18px;
  color: #f0f0f0;
}

/* Content Container */
.content-container {
  background-color: #333; /* Dark gray for contrast */
  padding: 20px;
  border-radius: 8px;
}

/* Section Styling */
.about-section {
  margin-bottom: 30px;
}

.about-section h2 {
  font-size: 24px;
  color: black; /* Dark red */
  margin-bottom: 10px;
}

.about-section p {
  font-size: 16px;
  margin-bottom: 10px;
  color: #eaeaea;
}

.about-section ul {
  list-style: disc;
  padding-left: 20px;
  color: #eaeaea;
}

.about-section li {
  font-size: 16px;
  margin-bottom: 5px;
}

</style>
