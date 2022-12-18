<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <PetOwnerDialog />
        <v-btn
          class="mx-4"
          color="secondary"
          icon="mdi-calendar-plus"
          v-bind="props"
        />
      </v-col>
      <v-col cols="4">
        <v-card> Add </v-card>
      </v-col>
      <v-col cols="4">
        <v-card> add </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card> <FacilityDay /> </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import FacilityDay from "./FacilityDay.vue";
import PetOwnerDialog from "./PetOwnerDialog.vue";
export default {
  components: {
    FacilityDay,
    PetOwnerDialog,
  },
  setup() {},
  methods: {},
};
</script>
