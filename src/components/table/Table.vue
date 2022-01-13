<template>
  <div>
    <div class="tab-area">
      <v-btn @click="changeComponent('UserTable')">user</v-btn>
      <v-btn @click="changeComponent('GroupTable')">group</v-btn>
    </div>
    <div>
      <keep-alive>
        <component :is="comp"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UserTable from "./elements/UserTable";
import GroupTable from "./elements/GroupTable.vue";

export default {
  components: {
    UserTable,
    GroupTable
  },
  data() {
    return { comp: "UserTable" };
  },
  methods: {
    changeComponent(componentName) {
      this.comp = componentName;
    }
  }
};
</script>

<style scoped>
.tab-area {
  margin: 20px 0px 0px 12px;
}
</style>
