<script setup>
import { ref, onMounted, computed } from "vue";
import AuthorizationCard from "../components/AuthorizationCard.vue";
</script>

<template>
  <div class="wrapper">
    <v-layout ref="app">
      <v-app-bar color="grey-lighten-2" name="app-bar" class="justify-center">
        <div class="d-flex justify-center align-center w-100">
          <!-- <child v-slot="{ print }">
            <v-btn @click="print('app-bar')">Get data</v-btn>
          </child> -->
        </div>
      </v-app-bar>
      <div v-if="false">
        <v-navigation-drawer expand-on-hover rail>
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
      </div>
      <v-main>
        <v-card class="align-center">
          <AuthorizationCard />
        </v-card>
      </v-main>
    </v-layout>
  </div>
</template>

<style scoped></style>
