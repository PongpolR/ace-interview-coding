<template lang="">
  <div class="test">
    <DetailTableAll :all_data="launches" :statusRequire="true" />
  </div>
  <div class="test">
    <DetailTable :all_data="launchesPast" title="การปล่อยจรวดในอดีต" />
    <DetailTable
      :all_data="launchesUpcoming"
      title="การปล่อยจรวดที่กำลังจะถึง"
    />
  </div>
</template>

<script>
import getAllLaunches from "@/services/launches.js";
import getUpcomingLaunches from "@/services/launchesUpcoming";
import getPastLaunches from "@/services/launchesPast";
import DetailTableAll from "./DetailTableAll.vue";
import DetailTable from "./DetailTable.vue";

export default {
  setup() {
    const { launches, error, load } = getAllLaunches();
    const { launchesUpcoming, errorUpcoming, loadUpcoming } =
      getUpcomingLaunches();
    const { launchesPast, errorPast, loadPast } = getPastLaunches();
    load();
    loadUpcoming();
    loadPast();
    return {
      launches,
      error,
      load,
      launchesUpcoming,
      errorUpcoming,
      loadUpcoming,
      launchesPast,
      errorPast,
      loadPast,
    };
  },
  components: {
    DetailTableAll,
    DetailTable,
  },
};
</script>
<style></style>
