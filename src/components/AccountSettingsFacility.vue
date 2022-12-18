<script lang="ts">
import { RouterLink } from "vue-router";
import { useUserStore } from "../stores/user";
import FacilityForm from "./AccountSettingsFacilityForm.vue";
export default {
  components: {
    FacilityForm,
  },
  data: () => ({
    expand: false,
    currentExpand: 0,
  }),
  setup() {
    const userStore = useUserStore();
    const facilities = userStore.currentUser.facilities;

    return { userStore, facilities };
  },
  methods: {
    toggleExpand(index: number) {
      this.currentExpand = index;
      this.expand = !this.expand;
    },
    setAsDefault(id: number) {
      this.userStore.updateDefaultFacilityId(id);
    },
  },
};
</script>

<template>
  <v-row>
    <v-col cols="12" md="12">
      <h2>Facility</h2>
      <router-link to="/new-facility"
        ><v-icon
          icon="mdi-map-marker-plus"
          size="18"
          color="success"
          class="mr-1 pb-1"
        ></v-icon
        >Add New Facility</router-link
      >
    </v-col>
  </v-row>
  <v-row>
    <v-col v-for="(facility, index) in facilities" cols="4" md="6" sm="12">
      <v-card class="mx-auto">
        <v-card-item :title="facility.name">
          <template
            v-if="userStore.defaultFacilityId == facility.id"
            v-slot:subtitle
          >
            <v-icon
              icon="mdi-alert"
              size="18"
              color="error"
              class="mr-1 pb-1"
            ></v-icon>

            Default Facility
          </template>
        </v-card-item>

        <!-- <div class="d-flex py-3 justify-space-between">
            <v-list-item density="compact" prepend-icon="mdi-weather-windy">
              <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
              <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
          </div> -->

        <v-expand-transition>
          <div v-if="expand && currentExpand == index">
            <FacilityForm :facility="facility" mode="edit" />
          </div>
        </v-expand-transition>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="toggleExpand(index)">
            {{
              expand && currentExpand == index ? "Cancel Edit" : "Edit Facility"
            }}
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :inactive="userStore.defaultFacilityId == facility.id"
            @click="setAsDefault(facility.id)"
          >
            Set As Default
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
