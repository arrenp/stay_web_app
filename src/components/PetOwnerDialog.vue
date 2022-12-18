<style>
.pet-owner-dialog .v-overlay__content {
  align-items: center;
}
</style>
<template>
  <v-dialog v-model="dialog" persistent class="pet-owner-dialog">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" icon="mdi-account-plus" v-bind="props" />
    </template>
    <v-card width="90vw">
      <v-container>
        <v-row>
          <v-col cols="12"><h2>New Owner</h2> </v-col>
          <v-col cols="12" sm="8">
            <v-row>
              <v-col
                v-for="(field, index) in ownerForm"
                class="py-0"
                :key="index"
                :cols="field.cols"
                :sm="field.sm"
              >
                <v-text-field
                  v-model="petOwner.owner[field.key]"
                  variant="outlined"
                  density="compact"
                  :label="field.label"
                  :required="field.required"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col class="py-0" cols="12" sm="4">
            <v-textarea
              v-model="petOwner.owner['notes']"
              variant="outlined"
              density="compact"
              label="Owner Notes"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row v-for="(pet, index) in petOwner.pets" :key="index">
          <v-divider></v-divider>
          <v-col cols="12"
            ><h2>Pet #{{ index + 1 }}</h2>
          </v-col>
          <v-col cols="12" sm="8">
            <v-row>
              <v-col
                v-for="(field, i) in petForm"
                class="py-0"
                :key="i"
                :cols="field.cols"
                :sm="field.sm"
              >
                <v-text-field
                  v-model="pet[field.key]"
                  variant="outlined"
                  density="compact"
                  :label="field.label"
                  :required="field.required"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col class="py-0" cols="12" sm="4">
            <v-textarea
              v-model="pet['notes']"
              variant="outlined"
              density="compact"
              label="Notes"
            ></v-textarea>
          </v-col>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-col class="py-0 text-end" cols="12" sm="12">
            <v-btn
              :disabled="progress"
              @click="addPetForm()"
              class="ma-2"
              color="indigo"
            >
              <v-icon icon="mdi-plus" size="18" class="mr-1 pb-1"> </v-icon>
              <v-icon icon="mdi-paw" size="18" class="mr-1 pb-1"> </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="progress"
          color="blue-darken-1"
          variant="text"
          @click="dialog = false"
        >
          Close
        </v-btn>
        <v-btn
          v-if="!progress"
          color="blue-darken-1"
          variant="text"
          @click="createNewPetOwner()"
        >
          Save
        </v-btn>
        <v-progress-circular
          v-if="progress"
          indeterminate
          color="green"
        ></v-progress-circular>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { usePetOwnerStore } from "../stores/pet_owner";
import { useUserStore } from "../stores/user";
export default {
  data() {
    return {
      progress: false,
      dialog: false,
      ownerForm: [
        {
          key: "first_name",
          value: null,
          rules: null,
          required: true,
          cols: 6,
          sm: 4,
          label: "First Name",
        },
        {
          key: "last_name",
          value: null,
          rules: null,
          required: true,
          cols: 6,
          sm: 4,
          label: "Last Name",
        },
        {
          key: "email",
          rules: null,
          required: false,
          cols: 6,
          sm: 4,
          label: "Email",
        },
        {
          key: "address1",
          value: null,
          rules: null,
          required: false,
          cols: 12,
          sm: 8,
          label: "Address",
        },
        {
          key: "address2",
          value: null,
          rules: null,
          required: false,
          cols: 12,
          sm: 4,
          label: "Address2",
        },
        {
          key: "city",
          value: null,
          rules: null,
          required: false,
          cols: 6,
          sm: 4,
          label: "City",
        },
        {
          key: "state",
          value: null,
          rules: null,
          required: false,
          cols: 2,
          sm: 2,
          label: "State",
        },
        {
          key: "zip_code",
          value: null,
          rules: null,
          required: false,
          cols: 3,
          sm: 3,
          label: "Zip Code",
        },
        {
          key: "phone",
          value: null,
          rules: null,
          required: false,
          cols: 6,
          sm: 3,
          label: "Phone",
        },
      ],
      petForm: [
        {
          key: "name",
          value: null,
          rules: null,
          required: true,
          cols: 12,
          sm: 12,
          label: "Name",
        },
        {
          key: "birth_date",
          value: null,
          rules: null,
          required: false,
          cols: 6,
          sm: 6,
          label: "Birth Date",
        },
      ],
      petOwner: {
        owner: {
          first_name: null,
          last_name: null,
          mobile: null,
          email: null,
          phone: null,
          address1: null,
          address2: null,
          city: null,
          state: null,
          zip_code: null,
          notes: null,
        },
        pets: [],
      },
    };
  },
  setup() {
    const petOwnerStore = usePetOwnerStore();
    const userStore = useUserStore();

    return { petOwnerStore, userStore };
  },
  created() {},
  methods: {
    addPetForm() {
      this.petOwner.pets.push({
        name: null,
        birth_date: null,
        notes: null,
        species_pet_id: 3,
      });
    },
    createNewPetOwner() {
      this.progress = true;
      this.petOwner.facility_id = this.userStore.defaultFacilityId;
      this.petOwnerStore.createNewPetOwner(this.petOwner).then(() => {
        this.progress = false;
        this.dialog = false;
      });
    },
  },
};
</script>
