import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../components/home.vue");
const About = () => import("../components/about.vue");
const Calendar = () => import("../components/calendar.vue")
const Disclaimer = () => import("../components/disclaimer.vue");

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/calendar",
        name: "Calendar",
        component: Calendar,
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../components/contact.vue"),
    },
    {
        path: "/impressum",
        name: "Impressum",
        component: () => import("../components/impressum.vue"),
    },
    {
        path: "/disclaimer",
        name: "Disclaimer",
        component: Disclaimer,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
