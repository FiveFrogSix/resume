import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
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
          component: () => import("@/views/HomeView.vue")
        },
        {
          path: "about",
          name: "About",
          component: () => import("@/views/AboutView.vue")
        },
        {
          path: "resume",
          name: "Resume",
          component: () => import("@/views/ResumeView.vue")
        },
        {
          path: "contact",
          name: "Contact",
          component: () => import("@/views/ContactView.vue")
        }
      ]
    }
  ]
})

export default router
