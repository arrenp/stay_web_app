<script lang="ts">
import SignUp from "./AuthSignUp.vue";
import SignIn from "./AuthSignIn.vue";
import WelcomeNotLoggedIn from "./AuthWelcomeNotLoggedIn.vue";
const STATUS_TITLE: string[] = [
  "Welcome To Stay Buddy",
  "User Log In",
  "User Registration",
];
let currentStatus: number = 0;
export default {
  components: {
    SignUp,
    SignIn,
    WelcomeNotLoggedIn,
  },
  data() {
    return {
      STATUS_TITLE,
      currentStatus,
    };
  },
};
</script>

<template>
  <v-card class="mx-auto" width="420" :title="STATUS_TITLE[currentStatus]">
    <SignIn v-if="currentStatus == 1" />
    <WelcomeNotLoggedIn
      @sign-in-status="currentStatus = 1"
      @sign-up-status="currentStatus = 2"
      v-if="currentStatus == 0"
    />
    <SignUp v-if="currentStatus == 2" />
  </v-card>
</template>
