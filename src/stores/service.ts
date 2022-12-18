import { defineStore } from "pinia";
import { useUserStore} from './user.ts';
// Import axios to make HTTP requests
import axios from "axios";
export const useServiceStore = defineStore("service", {
  state: () => ({
    services: null,
    provides: null,
  }),
  getters: {
    getServices(state) {
      return state.services;
    },
    getProvides(state) {
        return state.provides;
      },
  },
  actions: {
    async fetchServices() {
      try {
        const data = await axios.get("http://localhost:3000/services.json");
        console.log(data.data)
        this.services = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchProvides(facilityId) {
       
        try {
          const data = await axios.get(`http://localhost:3000/provides.json?facility_id=${facilityId}`);
          console.log(data.data)
          this.provides = data.data;
        } catch (error) {
          alert(error);
          console.log(error);
        }
      },
  },
});
