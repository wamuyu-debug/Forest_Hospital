import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PatientDashboardView from '../views/PatientDashboardView.vue'
import DoctorDashboardView from '../views/DoctorDashboardView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import DoctorsView from '../views/DoctorsView.vue'
import AppointmentsView from '../views/AppointmentsView.vue'
import ReviewsView from '../views/ReviewsView.vue'
import EducateView from '../views/EducateView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactUsView from '../views/ContactUsView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/patientdashboard',
      name: 'patientdashboard',
      component: PatientDashboardView,
    },
    {
      path: '/doctordashboard',
      name: 'doctordashboard',
      component: DoctorDashboardView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component:SignUpView,
    },
    {
      path: '/apointments',
      name: 'appointments',
      component:AppointmentsView,
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: DoctorsView,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: ReviewsView,
    },
    {
      path: '/educate',
      name: 'learnmore',
      component: EducateView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/contact',
      name: 'contactus',
      component: ContactUsView,
    },



  ],
})

export default router
