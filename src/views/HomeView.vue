<script setup>
import { useLayout } from "vuetify";
import { ref, onMounted, computed } from "vue";
import AuthorizationCard from "../components/AuthHome.vue";
import BuddyMenu from "../components/BuddyMenu.vue";
import { RouterView, RouterLink, useRoute } from "vue-router";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
const items = [{ title: "Account Settings", route: "/account-settings" }];
const route = useRoute();

const path = computed(() => route.path);
const currentTab = ref("tab-" + path);
</script>

<template>
  <v-app>
    <v-layout ref="app">
      <v-app-bar class="app-bar" color="grey-lighten-2" density="compact" name="app-bar">
        <v-app-bar-title
          v-if="
            userStore.currentUser.facilities &&
            userStore.currentUser.facilities[0]
          "
          >{{ userStore.currentUser.facilities[0].name }}</v-app-bar-title
        >
        <v-app-bar-title v-else>Stay Buddy</v-app-bar-title>
        <v-tabs v-model="currentTab" v-if="userStore.currentUser.user">
          <v-tab @click="$router.push('/')" value="tab-/"> Home </v-tab>
          <v-tab @click="$router.push('/pet-owners')" value="tab-/pet-owners">
            Accounts
          </v-tab>
        </v-tabs>

        <!-- <v-menu v-if="userStore.currentUser.user">
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <router-link :to="item.route">{{ item.title }}</router-link>
            </v-list-item>
            <v-list-item>
              <v-btn @click="userStore.signOutUser()" color="primary"
                >Log Out</v-btn
              >
            </v-list-item>
          </v-list>
        </v-menu> -->
      </v-app-bar>

      <!-- <v-navigation-drawer
        permanent
        v-if="userStore.currentUser.user"
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home"
            title="Home"
            value="myfiles"
            @click="$router.push('/')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Accounts"
            value="myfiles"
            @click="$router.push('/pet-owners')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-star"
            title="Starred"
            value="starred"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer> -->

      <v-main class="mt-8">
        <AuthorizationCard v-if="!userStore.currentUser.user" />
        <RouterView v-else />
      </v-main>
      <BuddyMenu v-if="userStore.currentUser.user" />
    </v-layout>
  </v-app>
</template>

<style scoped>
.v-application {
  width: 100vw;
}
.v-app-bar-title{
  flex: .46 1 auto!important;
}
</style>
