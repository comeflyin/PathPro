import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const rootRoutes: RouteRecordRaw[] = [
  {
    path: "home",
    name: "Home",
    component: () => import("@/views/TheHome.vue"),
  },
  {
    path: "collection",
    name: "Collection",
    component: () => import("@/views/TheCollection.vue"),
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
