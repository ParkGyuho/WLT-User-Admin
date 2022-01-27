<template>
  <v-app>
    <v-app-bar color="#F2F4F4">
      <HeaderComponent />
    </v-app-bar>
    <v-row class="user-filter-area">
      <UserFilter />
    </v-row>
    <div class="user-table-area">
      <Table />
    </div>
  </v-app>
</template>

<script>
import HeaderComponent from "../components/header/HeaderComponent";
import UserFilter from "../components/UserFilter";
import Table from "../components/table/Table";

export default {
  components: {
    HeaderComponent,
    UserFilter,
    Table
  }
};
</script>

<style scoped>
.user-filter-area {
  background-color: lightsteelblue;
}
.user-table-area {
  background-color: lightslategray;
}
</style>
