import { createRouter, createWebHistory } from 'vue-router';
import FormPage from '../components/FormPage.vue';
import SavedData from '../components/SavedData.vue';

const routes = [
  {
    path: '/',
    name: 'FormPage',
    component: FormPage
  },
  {
    path: '/saved',
    name: 'SavedPage',
    component: SavedData
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;