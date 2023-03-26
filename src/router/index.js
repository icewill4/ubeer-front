import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BieresView from "../views/BieresView.vue";
import BiereDetailsView from "../views/BiereDetailsView.vue";
import BrasseriesView from "../views/BrasseriesView.vue";
import BrasserieDetailsView from "../views/BrasserieDetailsView.vue";
import CommandesView from "../views/CommandesView.vue";
import CommandeDetailsView from "../views/CommandeDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/bieres",
      name: "bieres",
      component: BieresView,
    },
    {
      path: "/bieres/:id",
      name: "bieres-details",
      component: BiereDetailsView,
    },
    {
      path: "/brasseries",
      name: "brasseries",
      component: BrasseriesView,
    },
    {
      path: "/brasseries/:id",
      name: "brasseries-details",
      component: BrasserieDetailsView,
    },
    {
      path: "/commandes",
      name: "commandes",
      component: CommandesView,
    },
    {
      path: "/commandes/:id",
      name: "commandes-details",
      component: CommandeDetailsView,
    },
  ],
});

export default router;
