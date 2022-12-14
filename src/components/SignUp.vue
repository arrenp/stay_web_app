<template>
  <v-container>
    <v-text-field
      v-model="email"
      color="primary"
      label="Email"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      hint="At least 8 characters"
      counter
      variant="outlined"
      @click:append="show1 = !show1"
    ></v-text-field>
    <v-text-field
      v-model="password_confirmation"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Password Confirmation"
      hint="At least 8 characters"
      counter
      variant="outlined"
      @click:append="show1 = !show1"
    ></v-text-field>
  </v-container>

  <v-divider></v-divider>

  <v-card-actions>
    <v-spacer></v-spacer>

    <v-btn @click="signUp" color="success">
      Sign Up

      <v-icon icon="mdi-chevron-right" end></v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script lang="ts">
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      show1: false,
      show2: true,
      email: null,
      password: null,
      password_confirmation: null,
      rules: {
        required: (value: string) => !!value || "Required.",
        min: (v: string) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  setup() {
    const userStore = useUserStore();
    
    return { userStore };
  },
  methods: {
    signUp() {
      this.userStore.signUpUser({ user: { email: this.email, password: this.password, password_confirmation: this.password_confirmation } });
    },
  },
};
</script>
