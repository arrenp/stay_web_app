// stores/user.js
import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";
interface User {
  user: {
    email: string;
    password: string;
    password_confirmation: string;
  }
  
}
interface LogInUser {
  user: {
    email: string;
    password: string;
    remember_me: boolean;
  }
  commit: string
}
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    auth: {},
    currentUser: null
  }),
  getters: {
    getUser(state) {
      return state.currentUser;
    },
    getAuth(state) {
      return state.auth;
    },
  },
  actions: {
    async signUpUser(user: User) {
      try {
        await axios.post(
          "http://localhost:3000/users/",
          user
        ).then(signInUser({
          user: {
            email: user.user.email,
            password: user.user.password,
            remember_me: 0
          },
          commit: "log in"
        }))
        this.user = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async signInUser(logInUser: LogInUser) {
      try {
        const data = await axios.post(
          "http://localhost:3000/users/sign_in.json",
          logInUser
        );
        this.currentUser = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async signOutUser() {
      try {
        const data = await axios.get(
          "http://localhost:3000/users/sign_out"
        );
        this.currentUser = null
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
