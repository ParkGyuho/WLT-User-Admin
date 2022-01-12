<template>
  <v-container>
    <HeaderComponent />
    <div>
      <AddUserComponent />
    </div>
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

<style scoped></style>
