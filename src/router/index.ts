import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "Index",
      component: () => import("@/layouts/default/LayoutDefault.vue"),
      redirect: { name: "Home" },
      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("@/views/Home/HomeView.vue")
        },
        {
          path: "skills",
          name: "Skills",
          component: () => import("@/views/Home/HomeView.vue")
        },
        {
          path: "talens",
          name: "Talens",
          component: () => import("@/views/Home/HomeView.vue")
        }
      ]
    }
  ]
})

export default router
