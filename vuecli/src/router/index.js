import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ProjectPage from "@/pages/ProjectPage.vue";
import OurProject from "@/pages/OurProject.vue";
import BlogPage from "@/pages/BlogPage.vue";
import BlogDitailsPage from "@/pages/BlogDitailsPage.vue";
import Error from "@/pages/Error.vue";

export default createRouter(
    {
        history: createWebHistory(process.env.BASE_URL),
        routes: [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },

  {
    path: "/Project",
    name: "projectpage",
    component: ProjectPage,
  },
  {
    path: "/OurProject",
    name: "profuctdetailspage",
    component: OurProject,
  },
  {
    path: "/Blog",
    name: "blogpage",
    component: BlogPage,
  },
  {
    path: "/BlogDetails",
    name: "blogedetailpage",
    component: BlogDitailsPage,
  },
  {
    path: '/:CatchAll(.*)',
    name: 'error',
    component: Error
 }
        ]
    }
)