<template>
    <div class="dashboard">
      <header class="dashboard-header">
        <h1>Doctor's Dashboard</h1>
      </header>
  
      <section class="appointments-section">
        <h2>Upcoming Appointments</h2>
        <ul class="appointments-list">
          <li v-for="(appointment, index) in appointments" :key="index">
            <span class="patient-name">{{ appointment.name }}</span>
            <span class="appointment-time">{{ appointment.time }}</span>
          </li>
        </ul>
      </section>
  
      <section class="patients-section">
        <h2>Patient Details</h2>
        <ul class="patients-list">
          <li v-for="(patient, index) in patients" :key="index">
            <span class="patient-name">{{ patient.name }}</span>
            <span class="patient-details">
              Age: {{ patient.age }}, Condition: {{ patient.condition }}
            </span>
          </li>
        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "DoctorDashboard",
    data() {
      return {
        appointments: [
          { name: "John Doe", time: "10:00 AM, Dec 8" },
          { name: "Jane Smith", time: "12:30 PM, Dec 8" },
        ],
        patients: [
          { name: "John Doe", age: 45, condition: "Hypertension" },
          { name: "Jane Smith", age: 34, condition: "Diabetes" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Scoped styles for this component */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
  }
  
  .dashboard {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  
  .dashboard-header {
    text-align: center;
    background-color: #795238;
    color: white;
    padding: 15px 0;
    border-radius: 8px;
  }
  
  .dashboard-header h1 {
    margin: 0;
    font-size: 1.5em;
  }
  
  section {
    margin: 20px 0;
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  section h2 {
    margin-bottom: 15px;
    font-size: 1.2em;
    color: #333;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  
  li:last-child {
    border-bottom: none;
  }
  
  .patient-name {
    font-weight: bold;
    color: #795238;
  }
  
  .patient-details,
  .appointment-time {
    font-size: 0.9em;
    color: #555;
  }
  
  @media (max-width: 600px) {
    .dashboard {
      padding: 10px;
    }
  
    section {
      padding: 10px;
    }
  }
  </style>
    