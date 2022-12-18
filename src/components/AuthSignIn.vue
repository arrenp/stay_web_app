<template>
  <v-container>
    <v-text-field
      v-model="email"
      density="compact"
      color="primary"
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
    <v-checkbox
      variant="outlined"
      v-model="remember_me"
      label="Remember Me"
    ></v-checkbox>
  </v-container>

  <v-divider></v-divider>

  <v-card-actions>
    <v-spacer></v-spacer>

    <v-btn v-if="!progress" @click="signIn" color="success">
      Sign In

      <v-icon icon="mdi-chevron-right" end></v-icon>
    </v-btn>
    <div v-else>
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
      remember_me: 0,
      progress: false,
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
    signIn() {
      this.progress = true;
      this.userStore.signInUser({
        user: {
          email: this.email,
          password: this.password,
          remember_me: this.remember_me,
        },
      }).then(() => {
        this.progress = false;
      });
    },
  },
};
</script>
