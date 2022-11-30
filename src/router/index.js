import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CVView from "../views/CVView.vue";
import ProjectsView from "../views/ProjectsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cv",
      name: "cv",
      component: CVView,
    },
    {
      path: "/projets",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/:catchAll(.*)",
      name: "catchAll",
      redirect: "/",
    },
  ],
});

export default router;
