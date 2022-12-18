<template>
  <div class="text-center buddy-menu">
    <v-menu
      open-on-hover
      @mouseover="buddyGlee = true"
      @mouseleave="buddyGlee = false"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          @mouseover="buddyReady = true"
          @mouseleave="buddyReady = false"
          v-bind="props"
          class="buddy-btn"
          :elevation="0"
          variant="plain"
          :class="buddyReady || buddyGlee ? 'pt-0' : 'pt-3'"
        >
          <v-img
            :width="60"
            :src="buddyGlee ? gleeSrc : buddyReady ? readySrc : sleepSrc"
          ></v-img>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <router-link to="/">Home</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/">Help</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/account-settings">Account Settings</router-link>
        </v-list-item>
        <v-list-item>
          <v-btn @click="userStore.signOutUser()" color="primary"
            >Log Out</v-btn
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<style>
.buddy-menu {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10001;
}
.buddy-btn {
  height: auto !important;
  padding: 0 !important;
}
</style>
<script>
import { useUserStore } from "../stores/user";
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    buddyGlee: false,
    buddyReady: false,
  }),
  computed: {
    sleepSrc() {
      return new URL(`../assets/sleep.png`, import.meta.url).href;
    },
    readySrc() {
      return new URL(`../assets/up.png`, import.meta.url).href;
    },
    gleeSrc() {
      return new URL(`../assets/content.png`, import.meta.url).href;
    },
  },
  setup() {
    const userStore = useUserStore();

    return { userStore };
  },
};
</script>
