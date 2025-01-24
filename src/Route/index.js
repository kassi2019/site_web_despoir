import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../components/page/PageAccueil.vue"
import nouvelleRoute from "./pageRoute"

// Combine main routes and auth routes
const routes = [
  { path: '/', redirect: '/Accueil' },  // Redirection automatique vers /home à la racine
  { path: '/Accueil', component: Accueil, name: 'Accueil' },
  ...nouvelleRoute, // Spread the auth routes
];

const router = createRouter({

  history: createWebHistory(),
  routes,
});



export default router;
