<template>
  <v-container>
    <v-row no-gutters class="font-weight-light display-2"> Users </v-row>

    <v-row no-gutters>
      <v-tabs>
        <v-tab large @click="changeComponent(TabComponents.USER_TABLE)"
          >user</v-tab
        >
        <v-tab large @click="changeComponent(TabComponents.GROUP_TABLE)"
          >group</v-tab
        >
        <v-spacer></v-spacer>
        <div class="filter-btn">
          <v-dialog v-model="showFilter" width="540" persistent>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="secondary" v-bind="attrs" v-on="on">
                <font-awesome-icon class="fa-x" icon="filter" />
              </v-btn>
            </template>
            <UserFilter @closeFilter="closeFilter" />
          </v-dialog>
          <v-btn color="secondary" @click="removeFilter">
            <font-awesome-icon class="fa-x" icon="filter" />
            <font-awesome-icon class="fa-x" icon="times" />
          </v-btn>
        </div>
      </v-tabs>
    </v-row>
    <v-row no-gutters> </v-row>
    <v-row class="table-area">
      <keep-alive>
        <component :is="currentTab"></component>
      </keep-alive>
    </v-row>
  </v-container>
</template>

<script>
import UserTable from "./elements/UserTable";
import GroupTable from "./elements/GroupTable";
import UserFilter from "./elements/UserFilter";

const TabComponents = Object.freeze({
  USER_TABLE: "UserTable",
  GROUP_TABLE: "GroupTable"
});

export default {
  components: {
    UserTable,
    GroupTable,
    UserFilter
  },
  data() {
    return {
      currentTab: TabComponents.USER_TABLE,
      TabComponents: TabComponents,
      showFilter: false
    };
  },
  methods: {
    changeComponent(componentName) {
      this.currentTab = componentName;
    },
    closeFilter() {
      this.showFilter = false;
    },
    removeFilter() {
      this.$store.dispatch("getUsers");
    }
  }
};
</script>

<style scoped>
.display-2 {
  margin: 30px 0px 30px auto;
}
.filter-btn {
  display: flex;
  align-items: center;
  margin: 15px;
}
.table-area {
  margin-top: 0px;
}
.v-btn {
  margin: 0 5px;
}
</style>
