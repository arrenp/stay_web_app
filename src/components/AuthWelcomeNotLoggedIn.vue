<template>
  <v-container> </v-container>

  <v-divider></v-divider>

  <v-card-actions>
    <v-btn @click="$emit('sign-in-status')" color="success">
      Sign In
      <v-icon icon="mdi-chevron-right" end></v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="$emit('sign-up-status')" color="primary">
      Register
      <v-icon icon="mdi-chevron-right" end></v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script lang="ts">
export default {
  emits: ["sign-in-status", "sign-up-status"],
};
</script>
