<template>
  <v-container>
    <div class="user-table">{{ users }}</div>
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
      users: []
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
  height: 900px;
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
