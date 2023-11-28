<template lang="">
  <!-- <div v-if="launches" class="container">
    <v-data-table
      v-model:items-per-page="itemPerPage"
      :headers="headers"
      :items="data"
      class="elevation-1"
    >
      <template v-slot:item.date_utc="{ item }">
        <span>{{ formatDate(item.date_utc) }}</span>
      </template>

      <template v-slot:item.links.patch.large="{ item }">
        <div class="p-2" v-if="item.links.patch.large">
          <v-img :src="item.links.patch.large"></v-img>
        </div>
        <div class="p-2" v-else>
          <span>-</span>
        </div>
      </template>

      <template v-slot:item.upcoming="{ item }">
        <span>{{ status(item.upcoming) }}</span>
      </template>
    </v-data-table>
  </div> -->
  <div class="test">
    <DetailTableAll :all_data="launches" :statusRequire="true" />
  </div>
  <div class="test">
    <DetailTable
      :all_data="launchesUpcoming"
      title="ตารางการปล่อยจรวดที่กำลังจะถึง"
    />
  </div>
</template>

<script>
import getAllLaunches from "@/services/launches.js";
import getUpcomingLaunches from "@/services/launchesUpcoming";
import DetailTableAll from "./DetailTableAll.vue";
import DetailTable from "./DetailTable.vue";

export default {
  setup() {
    const { launches, error, load } = getAllLaunches();
    const { launchesUpcoming, errorUpcoming, loadUpcoming } =
      getUpcomingLaunches();
    load();
    loadUpcoming();
    return {
      launches,
      error,
      load,
      launchesUpcoming,
      errorUpcoming,
      loadUpcoming,
      // itemPerPage: 10,
      // headers: [
      //   {
      //     title: "ชื่อ",
      //     key: "name",
      //   },
      //   {
      //     title: "เวลาที่ปล่อย",
      //     key: "date_utc",
      //   },
      //   {
      //     title: "รูปภาพ",
      //     key: "links.patch.large",
      //     sortable: false,
      //   },
      //   {
      //     title: "สถานะ",
      //     key: "upcoming",
      //   },
      //   {
      //     align: "center",
      //     title: "จำนวน crew",
      //     key: "cores.length",
      //   },
      // ],
      // data: launches,
    };
  },
  // data() {
  //   const { launches, error, load } = getAllLaunches();
  //   load();
  //   const { launchesUpcoming, errorUpcoming, loadUpcoming } =
  //     getUpcomingLaunches();
  //   loadUpcoming();
  //   return {
  //     all_data: launches,
  //   };
  // },
  // methods: {
  //   formatDate(date) {
  //     let dateText = new Date(date).toLocaleString();
  //     dateText = dateText.replace(",", "");
  //     // console.log(dateText);
  //     return dateText;
  //   },
  //   status(bool) {
  //     if (bool === true) {
  //       return "กำลังจะปล่อย";
  //     } else return "ปล่อยแล้ว";
  //   },
  // },
  components: {
    DetailTableAll,
    DetailTable,
  },
};
</script>
<style></style>
