<template>
  <v-container>
    <div class="user-table">
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="users"
        item-key="_id"
        show-select
        hide-default-footer
        :page.sync="page"
        :items-per-page="itemsPerPage"
        @page-count="pageCount = $event"
      >
        <template v-slot:item.detail_info="{ item }">
          <v-btn @click="showlog(item)"> Detail </v-btn>
          <v-dialog
            v-model="showDialog"
            max-width="700px"
            :retain-focus="false"
          >
            <v-card>
              <v-card-title class="text-h4"> Detail Infomation </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="5" class="dialog-image-side">
                      <div class="dialog-image"></div>
                    </v-col>
                    <v-col cols="7" class="dialog-info-side">
                      <div
                        class="text-h6 text--primary"
                        v-for="(info, prop, index) in detailUser"
                        :key="index"
                      >
                        {{ prop }} :{{ info }}
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="editUser(item)"> Modify </v-btn>
                <v-btn @click="showDialog = false"> Close </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
      <v-pagination v-model="page" :length="pageCount"> </v-pagination>
    </div>
    <div class="btn-area">
      <router-link to="/adduser">
        <v-btn elevation="2"> Add User </v-btn>
      </router-link>
      <v-btn elevation="2"> Delete User </v-btn>
    </div>
  </v-container>
</template>

<script>
import { UserAPI } from "../../../services";

export default {
  data() {
    return {
      users: [],
      selected: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 15,
      showDialog: false,
      detailUser: [],
      headers: [
        { text: "User Name", value: "user_name" },
        { text: "Login ID", value: "login_id" },
        { text: "User Type", value: "user_type" },
        { text: "Detail Info.", value: "detail_info", sortable: false }
      ]
    };
  },
  async created() {
    const users = await UserAPI.getUsers();
    this.users = users;
  },
  methods: {
    showlog(item) {
      this.showDialog = !this.showDialog;
      this.detailUser = item;
    },
    editUser(item) {
      console.log(item);
    }
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
.btn-area {
  width: 270px;
  margin-left: auto;
}
.btn-area .v-btn {
  width: 100px;
  margin: 15px;
}
.text--primary {
  margin: 15px;
}
.dialog-image-side {
  background-color: lightblue;
}
.dialog-info-side {
  background-color: lightgrey;
}
.dialog-image {
  background-color: lightpink;
  width: 210px;
  height: 250px;
  margin: 12px auto;
}
</style>
