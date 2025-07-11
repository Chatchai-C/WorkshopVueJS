import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about-me",
        name: "about-me",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Aboutme.vue"),
    },
    {
        path: "/grading",
        name: "grading",
        component: () =>
            import("../views/Grading.vue"),
    },

    {
        path: "",
        name: "ToolBar",
        component: () => import("../views/ToolBar.vue"),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("../views/Login.vue"),
            },
            {
                path: "/api",
                name: "api",
                component: () => import("../views/Apicon.vue"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
