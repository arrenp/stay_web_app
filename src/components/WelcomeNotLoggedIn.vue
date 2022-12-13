<template>
  <v-container> </v-container>

  <v-divider></v-divider>

  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn @click="$emit('sign-in-status')" color="success">
      Sign In
      <v-icon icon="mdi-chevron-right" end></v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="$emit('sign-up-status')" color="primary">
      Sign Up
      <v-icon icon="mdi-chevron-right" end></v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script lang="ts">
// import { useUserStore } from "../stores/user";
// const store = useUserStore();
// const getUsers = computed(() => {
//   return store.getUsers;
// });
// const users = computed(() => {
//   return store.users;
// });
// onMounted(() => {
//   store.fetchUsers();
// });
export default {
  emits: ["sign-in-status", "sign-up-status"],
};
</script>
