// stores/pet.js
import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";
export const usePetStore = defineStore("pet", {
  state: () => ({
    pets: [],
  }),
  getters: {
    getPets(state) {
      return state.pets;
    },
  },
  actions: {
    async fetchPets() {
      try {
        const data = await axios.get("http://localhost:3000/pets.json");
        this.pets = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
