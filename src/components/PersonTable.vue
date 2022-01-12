<template>
  <v-container>
    <div class="persontable">This is Person Table Component</div>
    <div class="undertable">
      <router-link to="/adduser">
        <v-btn elevation="2"> Add User </v-btn>
      </router-link>
      <v-btn elevation="2"> Delete User </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.persontable {
  height: 900px;
  background-color: lightyellow;
}
.undertable {
  width: 270px;
  margin-left: auto;
}
.undertable .v-btn {
  width: 100px;
  margin: 15px;
}
</style>
