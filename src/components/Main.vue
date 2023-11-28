<template>
  <v-container> <data-table /> </v-container>
</template>

<script>
import DataTable from "./DataTable.vue";
export default {
  name: "Main",
  components: {
    DataTable,
  },
};
</script>
