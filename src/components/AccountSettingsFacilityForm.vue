<template>
  <v-form v-model="valid" @submit="createNewFacility()">
    <v-container>
      <v-row>
        <v-col class="py-0" cols="12" md="6">
          <v-text-field
            v-model="facility.name"
            density="compact"
            variant="outlined"
            :rules="nameRules"
            
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col class="py-0" cols="12" md="6">
          <v-text-field
            v-model="facility.contact_person"
            density="compact"
            variant="outlined"
            :rules="nameRules"
            
            label="Manager"
            required
          ></v-text-field>
        </v-col>

        <v-col class="py-0" cols="12" md="12">
          <v-text-field
            v-model="facility.address1"
            density="compact"
            variant="outlined"
            
            label="Street Address"
            required
          ></v-text-field>
        </v-col>

        <v-col class="py-0" cols="12" md="12">
          <v-text-field
            v-model="facility.address2"
            density="compact"
            variant="outlined"
            
            label="Street Address (Apt #, etc.)"
            required
          ></v-text-field>
        </v-col>

        <v-col class="py-0" cols="12" md="6">
          <v-text-field
            v-model="facility.city"
            density="compact"
            variant="outlined"
            
            label="City"
            required
          ></v-text-field>
        </v-col>

        <v-col class="py-0" cols="12" md="3">
          <v-text-field
            v-model="facility.state"
            density="compact"
            variant="outlined"
            
            label="State"
            required
          ></v-text-field>
        </v-col>

        <v-col class="py-0" cols="12" md="3">
          <v-text-field
            v-model="facility.zip_code"
            variant="outlined"
            density="compact"
            
            label="Zip Code"
            required
          ></v-text-field>
        </v-col>

        <v-col class="py-0" cols="12" md="6">
          <v-text-field
            v-model="facility.email"
            density="compact"
            variant="outlined"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col class="py-0" cols="12" md="6">
          <v-text-field
            v-model="facility.phone"
            density="compact"
            variant="outlined"
            
            label="Phone"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn @click="createNewFacility()">Save Changes</v-btn>
    </v-container>
  </v-form>
</template>
<script lang="ts">
import { useUserStore } from "../stores/user";
export default {
  data: () => ({
    valid: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  props: ["facility", "mode"],
  setup() {
    const userStore = useUserStore();

    return { userStore };
  },
  created() {
    console.log(this.facility);
    console.log(this.mode);
  },
  methods: {
    createNewFacility() {
      let account = this.userStore.currentUser.account;
      console.log(this.facility);
      console.log(account.id);
      let facility = {
        facility: {
          name: this.facility.name,
          address1: this.facility.address1,
          address2: this.facility.address2,
          city: this.facility.city,
          state: this.facility.state,
          zip_code: this.facility.zip_code,
          phone: this.facility.phone,
          contact_person: this.facility.contact_person,
          email: this.facility.email,
          account_id: account.id,
        },
      };
      console.log(this.mode);
      if (this.mode === "create") {
        facility["commit"] = "Create Facility";
        this.userStore.createNewFacility(facility).then(() => {
          this.userStore.updateFacilities().then(() => {
            this.userStore.updateDefaultFacilityId(this.userStore.newestFacilityId).then(() => {
            this.$router.push("/account-settings");
          });
          });
        });
      } else {
        facility["commit"] = "Update Facility";
        facility.facility["id"] = this.facility.id;
        this.userStore.updateFacility(facility).then(() => {
          this.userStore.updateFacilities().then(() => {
            this.$router.push("/account-settings");
          });
        });
      }
    },
  },
};
</script>
