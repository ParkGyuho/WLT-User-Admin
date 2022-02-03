<template>
  <v-app>
    <v-app-bar color="#F2F4F4">
      <HeaderComponent />
    </v-app-bar>
    <div class="adduser-area">
      <AddUserComponent />
    </div>
  </v-app>
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
  background-color: #e5e8e8;
}
</style>
