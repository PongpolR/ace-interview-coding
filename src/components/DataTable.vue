<template lang="">
  <div v-if="launches">
    <v-data-table
      v-model:items-per-page="itemPerPage"
      :headers="headers"
      :items="data"
      :item-value="id"
      class="elevation-1"
    >
      <template v-slot:item.date_utc="{ item }">
        <span>{{ formatDate(item.date_utc) }}</span>
      </template>
      <template v-slot:item.upcoming="{ item }">
        <span>{{ status(item.upcoming) }}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import getAllLaunches from "@/services/launches.js";
// import { VDataTable } from "vuetify/labs/VDataTable";
export default {
  setup() {
    const { launches, error, load } = getAllLaunches();
    load();
    return {
      launches,
      error,
      load,
      itemPerPage: 10,
      headers: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Date",
          key: "date_utc",
        },
        // {
        //   title: "Img",
        //   key: 'links["patch"]["small"]',
        // },
        // {
        {
          title: "Status",
          key: "upcoming",
        },
      ],
      data: launches,
    };
  },
  methods: {
    formatDate(date) {
      let dateText = new Date(date).toLocaleString();
      dateText = dateText.replace(",", "");
      // console.log(dateText);
      return dateText;
    },
    status(bool) {
      if (bool === true) {
        return "กำลังจะปล่อย";
      } else return "ปล่อยแล้ว";
    },
  },
  // components: {
  //   VDataTable,
  // },
};

// const items = [
//   {
//     name: "African Elephant",
//     species: "Loxodonta africana",
//     diet: "Herbivore",
//     habitat: "Savanna, Forests",
//   },
// ];
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;500&display=swap");
* {
  font-family: "Kanit", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
