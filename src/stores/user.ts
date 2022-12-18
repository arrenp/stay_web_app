// stores/user.js
import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";
export interface SignUpUser {
  user: {
    email: string;
    password: string;
    password_confirmation: string;
  };
}
export interface LogInUser {
  user: {
    email: string;
    password: string;
    remember_me: boolean;
  };
  commit: string;
}
export interface NewFacility {
  facility: {
    name: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip_code: string;
    phone: string;
    contact_person: string;
    account_id: string;
  };
}
export interface User {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
}
export interface Account {
  id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}
export interface Facility {
  id: number;
  account_id: number;
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
  contact_person: string;
  created_at: string;
  updated_at: string;
}
export interface CurrentUser {
  user: User;
  account: Account;
  facilities: Array<Facility>[];
}

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: { user: null, account: null, facilities: null },
    defaultFacilityId: null,
    newestFacilityId: null
  }),
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
  actions: {
    async signUpUser(user: SignUpUser) {
      try {
        const data = await axios.post("http://localhost:3000/users.json", user);
        console.log(data);
        console.log("data");
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
        console.log(data.data);
        this.currentUser.user = JSON.parse(data.data.user);
        this.currentUser.account = JSON.parse(data.data.account);
        this.currentUser.facilities = JSON.parse(data.data.facilities);
        this.defaultFacilityId = this.currentUser.facilities[0]
          ? this.currentUser.facilities[0].id
          : null;
        console.log(this.currentUser);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async signOutUser() {
      try {
        await axios.get("http://localhost:3000/users/sign_out.json");
        this.currentUser = null;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async createNewFacility(facility: NewFacility) {
      try {
        const data = await axios.post(
          `http://localhost:3000/facilities.json`,
          facility
        );
        this.newestFacilityId = data.data.id
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async updateFacility(facility: Facility) {
      console.log(this.currentUser.account);
      try {
        const data = await axios.put(
          `http://localhost:3000/facilities/${facility.facility.id}.json`,
          facility
        );
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async updateFacilities() {
      try {
        const data = await axios.get(
          `http://localhost:3000/facilities.json?account_id=${this.currentUser.account.id}`
        );
        console.log(data.data);
        this.currentUser.facilities = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async updateDefaultFacilityId(id: string) {
      try {
        this.defaultFacilityId = id;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
