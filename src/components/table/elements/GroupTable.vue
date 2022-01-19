<template>
  <v-container>
    <div class="user-table">
      <v-data-table
        v-model="selected"
        item-key="_id"
        :headers="headers"
        :items="groups"
        show-select
        hide-default-footer
        @page-count="pageCount = $event"
        show-expand
        :expanded.sync="expanded"
      >
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">More info about {{ item.name }}</td>
        </template>
      </v-data-table>
      <v-pagination v-model="page" :length="pageCount"> </v-pagination>
    </div>
  </v-container>
</template>

<script>
import { UserAPI } from "../../../services";
export default {
  data() {
    return {
      groups: [],
      selected: [],
      expanded: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 15,
      headers: [
        { text: "Group Name", value: "name" },
        { text: "Members Count", value: "members_count" },
        { text: "", value: "data-table-expand" }
      ]
    };
  },
  async created() {
    const groups = await UserAPI.getGroups();
    this.groups = groups;
  }
};
</script>

<style scoped>
.container {
  padding-top: 0px;
}
.user-table {
  background-color: lightyellow;
}
</style>
