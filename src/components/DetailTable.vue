<template lang="">
  <h1>{{ title }}</h1>
  <div v-if="all_data" class="container">
    <v-data-table
      :items-per-page="itemPerPage"
      :headers="headers"
      :items="all_data"
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

      <template v-slot:item.detail="{ item }">
        <v-btn @click="showDialog(item)">Detail</v-btn>
      </template>
    </v-data-table>
    <!-- <v-dialog v-model="show">
      {{ currentDialogItem }}
    </v-dialog> -->

    <v-dialog v-model="show" width="500">
      <template v-slot:default="{ isActive }">
        <v-card title="">
          <v-card-text>
            <h3>{{ currentDialogItem.name }}</h3>

            <p>{{ currentDialogItem.details }}</p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              text="Close"
              @click="isActive.value = false"
              outlined
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["all_data", "title"],
  setup() {
    return {
      itemPerPage: 10,
      headers: [
        {
          title: "ชื่อ",
          key: "name",
        },
        {
          title: "เวลาที่ปล่อย",
          key: "date_utc",
        },
        {
          title: "รูปภาพ",
          key: "links.patch.large",
          sortable: false,
        },
        {
          align: "center",
          title: "จำนวน crew",
          key: "cores.length",
          sortable: false,
        },
        {
          title: "detail",
          key: "detail",
          sortable: false,
        },
      ],
    };
  },
  data() {
    return {
      show: false,
      currentDialogItem: {},
    };
  },
  methods: {
    formatDate(date) {
      let dateText = new Date(date).toLocaleString();
      dateText = dateText.replace(",", "");
      // console.log(dateText);
      return dateText;
    },
    showDialog(item) {
      this.show = true;
      this.currentDialogItem = item;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;500&display=swap");
* {
  font-family: "Kanit", sans-serif;
}
#app {
  color: #2c3e50;
}
h1 {
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
  width: 40%;
  margin: 0 auto;
}
.v-data-table-footer__items-per-page {
  visibility: hidden;
}
</style>
