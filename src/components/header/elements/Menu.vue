<template>
  <div class="menu-list">
    <v-footer color="primary">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="menu in menuList"
          :key="menu"
          color="white"
          text
          rounded
          class="my-3"
        >
          {{ menu }}
        </v-btn>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
const menuList = ["OVERVIEW", "STATISTICS", "SEARCH", "MY PROFILE"];

export default {
  data: () => ({
    menuList
  })
};
</script>

<style scoped>
.menu-list {
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
