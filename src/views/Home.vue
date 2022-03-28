<template>
  <v-app>
    <v-app-bar color="#F2F4F4">
      <HeaderComponent />
    </v-app-bar>

    <div class="user-table-area">
      <Table />
    </div>
  </v-app>
</template>

<script>
import HeaderComponent from "../components/header/HeaderComponent";

import Table from "../components/table/Table";

export default {
  components: {
    HeaderComponent,
    Table
  }
};
</script>

<style scoped>
.v-app-bar {
  flex-grow: 0;
}
.user-table-area {
  background-color: #e5e8e8;
}
</style>
