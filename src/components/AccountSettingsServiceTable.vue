<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Unit</th>
        <th class="text-left">Cost Per Unit</th>
        <th class="text-left">Category</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in serviceStore.provides" :key="item.name">
        <td>{{ item.service.name }}</td>
        <td>{{ item.service.unit.name }}</td>
        <td>${{ item.cost_per_unit }}0 <v-btn icon="mdi-pencil-box-outline" variant="plain" :elevation="0" density="compact"></v-btn></td>
        <td>{{ item.service.category }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
import { useServiceStore } from "../stores/service";
import { useUserStore } from "../stores/user";
export default {
  setup() {
    const serviceStore = useServiceStore();
    const userStore = useUserStore();
    serviceStore.fetchProvides(userStore.defaultFacilityId);
    return { serviceStore, userStore };
  },
  methods: {
    callFetchProvides () {
      this.serviceStore.fetchProvides(this.userStore.defaultFacilityId);
    }
  }
};
</script>
