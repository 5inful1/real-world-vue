import { createRouter, createWebHistory } from "vue-router";
import Events from "../views/Events.vue";
import EventDetails from "../views/EventDetails.vue";
import about from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Events",
    component: Events,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
  {
    path: "/about",
    name: "About",
    component: about,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
