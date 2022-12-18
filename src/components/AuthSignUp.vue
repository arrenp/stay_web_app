<template>
  <v-container>
    <v-text-field
      v-model="email"
      color="primary"
      density="compact"
      label="Email"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      v-model="password"
      density="compact"
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
      density="compact"
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

    <v-btn v-if="!progress" @click="signUp" color="success">
      Sign Up

      <v-icon icon="mdi-chevron-right" end></v-icon>
    </v-btn>
    <div v-else>
      <div v-if="progress2">Account created. Signing in...</div>
      <v-progress-circular indeterminate color="green"></v-progress-circular>
    </div>
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
      progress: false,
      progress2: false,
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
      this.progress = true;
      this.userStore
        .signUpUser({
          user: {
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
          },
        })
        .then(() => {
          this.progress2 = true;
          this.userStore
            .signInUser({
              user: {
                email: this.email,
                password: this.password,
                remember_me: 0,
              },
              commit: "Log in",
            })
            .then(() => {
              this.progress = false;
              this.progress2 = false;
            });
        });
    },
  },
};
</script>
