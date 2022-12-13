// stores/user.js
import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";
interface User {
  email: string
  password: string
}
export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: [],
  }),
  getters: {
    getUser(state) {
      return state.currentUser;
    },
  },
  actions: {
    async postUser(user: User) {
      try {
        const data = await axios.post(
          "http://localhost:3000/user/sign_up", 
          user
          );
        this.currentUser = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
