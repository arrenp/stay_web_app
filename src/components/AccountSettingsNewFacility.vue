<script lang="ts">
import { RouterLink } from "vue-router";
import { useUserStore } from "../stores/user";
import FacilityForm from "./AccountSettingsFacilityForm.vue";
export default {
  components: {
    FacilityForm,
  },
  data: () => ({
    facility: {
        name: null,
        address1: null,
        address2: null,
        city: null,
        state: null,
        zip_code: null,
        phone: null,
        contact_person: null
    }
  }),
  setup() {
    const userStore = useUserStore();
    const facilities = userStore.currentUser.facilities;

    return { userStore, facilities };
  },
  
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <h1>New Facility</h1>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12" md="12">
        <FacilityForm :facility="facility" mode="create" />
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <router-link to="/account-settings">Back to Account Settings</router-link>
        </v-col>
    </v-row>
  </v-container>
</template>
