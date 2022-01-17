<template>
  <v-container>
    <div class="user-table">
      <div v-for="(group, index) in this.groups" :key="index">
        {{ group }}
      </div>
    </div>
  </v-container>
</template>

<script>
import { showGroupApi } from "../../api/index";

export default {
  data() {
    return {
      groups: {}
    };
  },
  created() {
    showGroupApi()
      .then(response => (this.groups = response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
.container {
  padding-top: 0px;
}
.user-table {
  height: 900px;
  background-color: lightyellow;
}
</style>
