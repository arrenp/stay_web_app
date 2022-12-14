<script lang="ts">
import SignUp from "./SignUp.vue";
import SignIn from "./SignIn.vue";
import WelcomeNotLoggedIn from "./WelcomeNotLoggedIn.vue";
const STATUS_TITLE: string[] = [
  "Welcome To Staywire",
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
  <v-card class="mx-auto" max-width="644" :title="STATUS_TITLE[currentStatus]">
    <SignIn v-if="currentStatus == 1" />
    <WelcomeNotLoggedIn
      @sign-in-status="currentStatus = 1"
      @sign-up-status="currentStatus = 2"
      v-if="currentStatus == 0"
    />
    <SignUp v-if="currentStatus == 2" />
  </v-card>
</template>
