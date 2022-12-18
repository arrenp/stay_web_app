<template>
    <v-container>
  <PetOwnerDialog />
  <v-btn class="ml-3" icon="mdi-refresh" @click="callFetchPetOwners()" />
  <v-table class="mt-4" density="compact">
    <thead>
      <tr>
        <th class="text-left"><h2>Owner</h2></th>
        <th class="text-left"><h2>Pet</h2></th>
        <th class="text-left"><h2>Size</h2></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in petOwnerStore.petOwners" :key="item.owner.id">
        <td>
          <h4>{{ item.owner.first_name }} {{ item.owner.last_name }}</h4>
          <h5>{{ item.owner.city }}, {{ item.owner.state }}</h5>
        </td>
        <td>
          <h4>{{ item.pet.name }}</h4>
          <h5>{{ item.pet.species_pet.breed }}</h5>
        </td>
        <td>
          <h4>{{ item.pet.species_pet.size }}</h4>
        </td>
      </tr>
    </tbody>
  </v-table>
</v-container>
</template>
<script>
import { useUserStore } from "../stores/user";
import { usePetOwnerStore } from "../stores/pet_owner";
import PetOwnerDialog from "./PetOwnerDialog.vue";
export default {
  components: {
    PetOwnerDialog,
  },
  setup() {
    const userStore = useUserStore();
    const petOwnerStore = usePetOwnerStore();

    return { userStore, petOwnerStore };
  },
  methods: {
    callFetchPetOwners() {
      this.petOwnerStore.fetchPetOwners(this.userStore.defaultFacilityId);
    },
  },
};
</script>
