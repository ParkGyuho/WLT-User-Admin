<template>
  <v-container>
    <v-app>
      <HeaderComponent />
      <div class="adduser-area">
        <AddUserComponent />
      </div>
    </v-app>
  </v-container>
</template>

<script>
import HeaderComponent from "../components/header/HeaderComponent";
import AddUserComponent from "../components/AddUserComponent";

export default {
  components: {
    HeaderComponent,
    AddUserComponent
  }
};
</script>

<style scoped>
.adduser-area {
  background-color: lightgrey;
}
</style>
