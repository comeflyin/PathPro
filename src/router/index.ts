import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/Trips",
    name: "Trips",
    component: () => import("../views/MainTrips.vue"),
  },
  {
    path: "/Trips/SearchAll",
    name: "SearchAll",
    component: () => import("../views/SearchAll.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
