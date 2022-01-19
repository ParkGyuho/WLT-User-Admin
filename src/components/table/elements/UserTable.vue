<template>
  <v-container>
    <div class="user-table">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="users"
        item-key="_id"
        show-select
        hide-default-footer
        :page.sync="page"
        :items-per-page="itemsPerPage"
        @page-count="pageCount = $event"
      >
      </v-data-table>
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
import { UserAPI } from "../../../services";

export default {
  data() {
    return {
      users: [],
      selected: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 15,
      headers: [
        { text: "User Name", value: "user_name" },
        { text: "Login ID", value: "login_id" },
        { text: "User Type", value: "user_type" }
      ]
    };
  },
  async created() {
    await UserAPI.login();
    const users = await UserAPI.getUsers();
    this.users = users;
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
