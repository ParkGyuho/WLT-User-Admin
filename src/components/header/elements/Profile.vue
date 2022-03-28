<template>
  <v-row no-gutters>
    <v-col cols="4">
      <v-avatar color="purple" size="30"
        ><v-icon dark size="30">mdi-account-circle</v-icon></v-avatar
      >
    </v-col>
    <v-col cols="6">
      <v-btn text color="black" class="font-weight-regular">{{
        loginID
      }}</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { UserAPI } from "../../../services";
export default {
  data() {
    return {
      loginID: ""
    };
  },
  async created() {
    const loginID = (await UserAPI.login()).loginID;
    this.loginID = loginID;
  }
};
</script>

<style scoped>
.col {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
