import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/gatos",
    name: "gatos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GatosPage.vue"),
  },
  {
    path: "/imagenes",
    name: "imagenes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ImagenesPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
