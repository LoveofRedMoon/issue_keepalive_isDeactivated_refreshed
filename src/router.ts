import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/test1",
      name: "test1",
      component: () => import("./components/Test1.vue"),
    },
    {
      path: "/test2",
      name: "test2",
      component: () => import("./components/Test2.vue"),
    },
    { path: "/:pathMatch(.*)*", redirect: { name: "test1" } },
  ],
});
