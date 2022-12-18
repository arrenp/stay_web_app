import { createRouter, createWebHistory } from "vue-router";
import FacilityHome from "../components/FacilityHome.vue";
import AccountSettings from "../components/AccountSettings.vue";
import NewFacility from "../components/AccountSettingsNewFacility.vue";
import PetOwnerHome from "../components/PetOwnerHome.vue";
import DailyTimeline from "../components/DailyTimeline.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-with-facility",
      component: FacilityHome,
    },
    {
      path: "/account-settings",
      name: "account-settings",
      component: AccountSettings,
    },
    {
      path: "/new-facility",
      name: "new-facility",
      component: NewFacility,
    },
    {
      path: "/pet-owners/",
      name: "pet-owners",
      component: PetOwnerHome,
    },
    {
      path: "/daily-timeline/",
      name: "daily-timeline",
      component: DailyTimeline,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
