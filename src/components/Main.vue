<template>
  <h1>รายการการปล่อยจรวด</h1>
  <v-container class="fill-height">
    <data-table />
  </v-container>
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
