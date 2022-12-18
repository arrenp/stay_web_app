<script lang="ts">
import { RouterLink } from "vue-router";
import { useUserStore } from "../stores/user";
import AccountSettingsFacility from "./AccountSettingsFacility.vue";
import ServiceTable from "./AccountSettingsServiceTable.vue";
export default {
  components: {
    AccountSettingsFacility,
    ServiceTable
  },
  
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <h1>Account Settings</h1>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <AccountSettingsFacility />
    <v-divider class="mt-5"></v-divider>
    <v-row>
        <v-col cols="12">
            <h2>Services</h2>
        </v-col>
        <v-col cols="12">
            <ServiceTable />
        </v-col>
    </v-row>
  </v-container>
</template>
