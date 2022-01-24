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
            v-if="!editmode"
          >
            <v-card>
              <v-card-title class="text-h4"> Detail Infomation </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" class="avatar">
                      <v-avatar color="warning lighten-2" size="150"
                        >avatar</v-avatar
                      >
                    </v-col>
                    <v-col cols="12" class="text-h3 avatar">
                      {{ detailUser.user_name }}
                    </v-col>

                    <v-col cols="12" class="dialog-info-side">
                      <div
                        class="text-h5 mb-2"
                        v-for="(info, prop, index) in detailUser"
                        :key="index"
                      >
                        <div class="text-h6 mb-3">{{ prop }} :{{ info }}</div>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="editUser()"> Edit </v-btn>
                <v-btn @click="closeLog()"> Close </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="showDialog"
            max-width="700px"
            :retain-focus="false"
            v-else
            persistent
          >
            <v-card>
              <v-card-title class="text-h4"> Detail Infomation </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" class="avatar">
                      <v-avatar color="warning lighten-2" size="150"
                        >avatar</v-avatar
                      >
                    </v-col>
                    <v-col cols="12" class="text-h3 avatar">
                      {{ detailUser.user_name }}
                    </v-col>
                    <v-col cols="12" class="dialog-info-side">
                      <div
                        class="text-h5 mb-2"
                        v-for="(info, prop, index) in detailUser"
                        :key="index"
                      >
                        {{ prop }} :
                        <v-select
                          v-if="prop == 'status'"
                          v-model="detailUser[prop]"
                          :items="status_List"
                        ></v-select>
                        <v-select
                          v-else-if="prop == 'user_type'"
                          :items="roles_List"
                          v-model="detailUser[prop]"
                        ></v-select>
                        <v-text-field
                          v-else
                          v-model="detailUser[prop]"
                        ></v-text-field>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="saveUser()"> Save </v-btn>
                <v-btn @click="closeLog()"> Close </v-btn>
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

const status_List = ["Activated", "Inactivated"];
const roles_List = ["Master", "Manager", "Worker"];

export default {
  data() {
    return {
      users: [],
      beforeEditedUsers: [],
      selected: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: 15,
      showDialog: false,
      editmode: false,
      detailUser: [],
      roles_List: roles_List,
      status_List: status_List,
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
    this.beforeEditedUsers = JSON.parse(JSON.stringify(users));
  },
  methods: {
    showlog(item) {
      this.showDialog = true;
      this.detailUser = item;
    },
    editUser() {
      this.editmode = true;
    },
    saveUser() {
      this.beforeEditedUsers = JSON.parse(JSON.stringify(this.users));
      this.showDialog = false;
      this.editmode = false;
    },
    closeLog() {
      this.users = JSON.parse(JSON.stringify(this.beforeEditedUsers));
      this.showDialog = false;
      this.editmode = false;
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
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightyellow;
}
</style>
