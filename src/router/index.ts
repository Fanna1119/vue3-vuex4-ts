import { createWebHistory, createRouter } from "vue-router";


//routes
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import Projects from '../views/Projects.vue'



const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/projects/:projectId",
      name: "projects",
      component: Projects
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;