<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Morning Walks",
          info: "Potty break with friends",
          timeRange: "8am-8:30am",
          icon: "mdi-weather-sunset-up",
          color: "yellow"
        },
        {
          title: "Breakfast & Rest",
          info: null,
          timeRange: "8:30am-9:30am",
          icon: "mdi-food-variant",
          color: "teal"
        },
        {
          title: "Play Time!",
          info: "In play group",
          timeRange: "9:30am-3:00pm",
          icon: "mdi-soccer",
          color: "red"
        },
        {
          title: "Dinner & Rest",
          info: "In play group",
          timeRange: "3:00pm-8:00pm",
          icon: "mdi-food",
          color: "green"
        },
        {
          title: "Evening Walks",
          info: "In play group",
          timeRange: "8:00pm-10:00pm",
          icon: "mdi-walk",
          color: "gray"
        },
        {
          title: "Sleep Time",
          info: "Lights out. A staff member is on premises at all times in case of an emergency.",
          timeRange: "10:00pm-next day",
          icon: "mdi-sleep",
          color: "blue"
        },
      ],
    };
  },
  created() {},
};
</script>
<template>
  <v-timeline side="end" align="start">
    <v-timeline-item
      v-for="item in items"
      :key="item.timeRange"
      :dot-color="item.color"
      :icon="item.icon"
    >
      <div class="d-flex">
        <strong class="mr-4">{{ item.timeRange }}</strong>
        <div>
          <strong>{{ item.title }}</strong>
          <div class="text-caption">{{ item.info }}</div>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
