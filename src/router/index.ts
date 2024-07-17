import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("@/layouts/default/LayoutDefault.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("@/views/Home/HomeView.vue")
        }
      ]
    }
  ]
})

export default router
