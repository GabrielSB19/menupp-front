const routes = [
  {
    path: "/",
    component: () => import("pages/Home.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/LoginScreen.vue"),
  },
  {
    path: "/signup",
    component: () => import("pages/RegisterScreen.vue"),
  },
];

export default routes;
