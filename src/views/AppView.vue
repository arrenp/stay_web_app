<script setup>
import { useLayout } from 'vuetify'
import { ref, onMounted, computed } from "vue";
import AuthorizationCard from "../components/AuthorizationCard.vue";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();

</script>

<template>

    <v-layout ref="app">
      <v-app-bar
       
        color="grey-lighten-2"
        
        name="app-bar"
        class="justify-center"
      >
        <div class="d-flex justify-center align-center w-100">
          
        </div>
        <div v-if="userStore.currentUser">

        <v-btn @click="userStore.signOutUser()">Log Out {{userStore.currentUser.email}}</v-btn>
        </div>
      </v-app-bar>
      
      <v-navigation-drawer v-if="userStore.currentUser" expand-on-hover rail>
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
            prepend-icon="mdi-folder"
            title="My Files"
            value="myfiles"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Shared with me"
            value="shared"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-star"
            title="Starred"
            value="starred"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      <v-main>
        <v-card class="align-center">
          <AuthorizationCard v-if="!userStore.currentUser" />
          <div v-else>Hey</div>
        </v-card>
      </v-main>
    </v-layout>

</template>

<style scoped></style>
