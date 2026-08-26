import { createRouter, createWebHashHistory } from "vue-router";

import AccueilView from "../views/AccueilView.vue";
import TachesView from "../views/TachesView.vue";
import NouvelleTacheView from "../views/NouvelleTacheView.vue";
import TacheDetailView from "../views/TacheDetailView.vue";

const routes = [
  {
    path: "/",
    name: "accueil",
    component: AccueilView,
  },
  {
    path: "/taches",
    name: "taches",
    component: TachesView,
  },
  {
    path: "/taches/nouvelle",
    name: "nouvelle-tache",
    component: NouvelleTacheView,
  },
  {
    path: "/taches/:id",
    name: "detail-tache",
    component: TacheDetailView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;