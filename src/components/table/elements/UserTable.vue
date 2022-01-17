<template>
  <v-container>
    <div class="user-table">
      <v-data-table
        v-model="selected"
        show-select
        :headers="headers"
        :items="users"
        item-key="_id"
        class="elevation-1"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
      ></v-data-table>
      <v-pagination v-model="page" :length="pageCount"> </v-pagination>
    </div>
    <div class="btn-area">
      <router-link to="/adduser">
        <v-btn elevation="2"> Add User </v-btn>
      </router-link>
      <v-btn elevation="2"> Delete User </v-btn>
    </div>
  </v-container>
</template>

<script>
import { showUserApi } from "../../api/index";
export default {
  data() {
    return {
      users: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 15,
      sortBy: "created_at",
      sortDesc: false,
      selected: [],
      headers: [
        { text: "Status", value: "status" },
        { text: "Id", value: "_id" },
        { text: "User type", value: "user_type" },
        { text: "Login id", value: "login_id" },
        { text: "Created at", value: "created_at" },
        { text: "Updated at", value: "updated_at" }
      ]
    };
  },
  created() {
    showUserApi()
      .then(response => (this.users = response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
.container {
  padding-top: 0px;
}
.user-table {
  background-color: lightyellow;
}
.btn-area {
  width: 270px;
  margin-left: auto;
}
.btn-area .v-btn {
  width: 100px;
  margin: 15px;
}
</style>
