import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const rootRoutes: RouteRecordRaw[] = [
  {
    path: "home",
    name: "Home",
    component: () => import("@/views/TheHome.vue"),
  },
  {
    path: "account",
    name: "Account",
    component: () => import("@/views/account/TheAccount.vue"),
  },
  {
    path: "settings",
    name: "Settings",
    component: () => import("@/views/account/components/TheSettings.vue"),
  },
  {
    path: "DiscountSection",
    name: "DiscountSection",
    component: () => import("@/views/DiscountSection/DiscountSection.vue"),
  },
  {
    path: "collection",
    name: "Collection",
    component: () => import("@/views/TheCollection.vue"),
  },
  {
    path: "Trips",
    name: "Trips",
    component: () => import("../views/MainTrips.vue"),
  },
  {
    path: "Trips/SearchAll",
    name: "SearchAll",
    component: () => import("../views/SearchAll.vue"),
  },
]

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "App",
    component: () => import("@/App.vue"),
    redirect: "/root",
    children: [
      {
        path: "root",
        name: "Root",
        component: () => import("@/views/TheRoot.vue"),
        redirect: "/root/home",
        children: rootRoutes,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
