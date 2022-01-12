<template>
  <v-container>
    <HeaderComponent />
    <div class="personfilter">
      <PersonFilter />
    </div>
    <div class="persontable">
      <PersonTable />
    </div>
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
.personfilter {
  background-color: lightsteelblue;
}
.persontable {
  height: 1000px;
  background-color: lightslategray;
}
</style>
