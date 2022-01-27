<template>
  <v-main>
    <v-row no-gutters class="hidden-sm-and-down">
      <v-col v-for="menu in menu_list" :key="menu">
        <v-btn text color="#8965e0" class="font-weight-regular">{{
          menu
        }}</v-btn>
        <v-divider vertical></v-divider>
      </v-col>
    </v-row>
    <v-row no-gutters class="hidden-md-and-up">
      <v-menu open-on-hover top offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#8965e0" text v-bind="attrs" v-on="on"> Menu </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="menu in menu_list" :key="menu">
            <v-btn text color="#8965e0" class="font-weight-regular">{{
              menu
            }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      menu_list: ["OVERVIEW", "STATISTICS", "SEARCH", "USERS"]
    };
  }
};
</script>

<style scoped>
.col {
  flex-grow: 0;
  display: flex;
  justify-content: center;
}
</style>
