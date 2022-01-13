<template>
  <v-container>
    <v-app>
      <HeaderComponent />
      <div class="user-filter-area">
        <UserFilter />
      </div>
      <div class="user-table-area">
        <Table />
      </div>
    </v-app>
  </v-container>
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
