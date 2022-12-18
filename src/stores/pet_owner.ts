import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";
export const usePetOwnerStore = defineStore("pet-owner", {
  state: () => ({
    petOwners: null,
    lastPetOwnerCreated: null
  }),
  getters: {
    getPetOwners(state) {
      return state.petOwners;
    },
  },
  actions: {
    async fetchPetOwners(facility_id) {
      try {
        const data = await axios.get(`http://localhost:3000/pet_owners.json?facility_id=${facility_id}`);
        console.log(data.data)
        this.petOwners = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async createNewPetOwner(petOwner) {
      try {
        const data = await axios.post("http://localhost:3000/pet_owners.json", petOwner);
        console.log(data.data)
        this.lastPetOwnerCreated = data.data;
        return data.data
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
