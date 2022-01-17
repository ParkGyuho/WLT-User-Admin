<template>
  <div>
    <div class="tab-area">
      <v-btn @click="changeComponent(TabComponents.USER_TABLE)">user</v-btn>
      <v-btn @click="changeComponent(TabComponents.GROUP_TABLE)">group</v-btn>
    </div>
    <div>
      <keep-alive>
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UserTable from "./elements/UserTable";
import GroupTable from "./elements/GroupTable.vue";

const TabComponents = Object.freeze({
  USER_TABLE: "UserTable",
  GROUP_TABLE: "GroupTable"
});

export default {
  components: {
    UserTable,
    GroupTable
  },
  data() {
    return {
      TabComponents,
      currentTab: TabComponents.USER_TABLE
    };
  },
  methods: {
    changeComponent(componentName) {
      this.currentTab = componentName;
    }
  }
};
</script>

<style scoped>
.tab-area {
  margin: 20px 0px 0px 12px;
}
</style>
