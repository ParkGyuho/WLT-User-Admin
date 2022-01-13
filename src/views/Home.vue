<template>
  <v-container>
    <v-app>
      <HeaderComponent />
      <div class="user-filter-area">
        <PersonFilter />
      </div>
      <div class="user-table-area">
        <PersonTable />
      </div>
    </v-app>
  </v-container>
</template>

<script>
import HeaderComponent from "../components/header/HeaderComponent";
import PersonFilter from "../components/PersonFilter";
import PersonTable from "../components/PersonTable";

export default {
  components: {
    HeaderComponent,
    PersonFilter,
    PersonTable
  }
};
</script>

<style scoped>
.user-filter-area {
  background-color: lightsteelblue;
}
.user-table-area {
  height: 1000px;
  background-color: lightslategray;
}
</style>
