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
            max-width="500px"
            :retain-focus="false"
            v-if="!editmode"
          >
            <v-card>
              <v-card-title class="text-h4"> Detail Infomation </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-row no-gutters>
                  <v-col class="user-image" cols="3">
                    <v-avatar rounded color="warning lighten-2" size="90"
                      ><v-icon size="80">mdi-account-circle</v-icon></v-avatar
                    >
                  </v-col>
                  <v-col>
                    <v-row no-gutters class="text-h4">
                      {{ detailUser.user_name }}
                    </v-row>
                    <v-row
                      class="subtitle-1 top-info"
                      v-for="(info, prop, index) in getMainInfo"
                      :key="index"
                      no-gutters
                    >
                      {{ prop }} : {{ info }}
                    </v-row>
                  </v-col>
                </v-row>
                <v-row class="subtitle-1" no-gutters>
                  <v-col
                    v-for="(info, prop, index) in getSubInfo"
                    :key="index"
                    cols="12"
                    class="sub-info-title font-weight-medium"
                  >
                    {{ prop }}
                    <v-col class="body-1">
                      {{ info }}
                    </v-col>
                  </v-col>
                </v-row>
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
            max-width="500px"
            :retain-focus="false"
            v-else
            persistent
          >
            <v-card>
              <v-card-title class="text-h4"> Detail Infomation </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-row no-gutters>
                  <v-col class="user-image" cols="3">
                    <v-avatar rounded color="warning lighten-2" size="90"
                      ><v-icon size="80">mdi-account-circle</v-icon></v-avatar
                    >
                  </v-col>
                  <v-col>
                    <v-row no-gutters>
                      <v-text-field
                        v-model="detailUser.user_name"
                        label="User name"
                      ></v-text-field>
                    </v-row>
                    <v-row
                      class="subtitle-1 top-info"
                      v-for="(info, prop, index) in getMainInfo"
                      :key="index"
                      no-gutters
                    >
                      {{ prop }} :
                      <v-text-field
                        dense
                        v-model="detailUser[prop]"
                      ></v-text-field>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row class="subtitle-1" no-gutters>
                  <v-col
                    v-for="(info, prop, index) in getSubInfo"
                    :key="index"
                    cols="12"
                    class="sub-info-title font-weight-medium"
                  >
                    {{ prop }}
                    <v-col class="sub-info-input body-1">
                      <v-select
                        v-if="prop == 'user_type'"
                        :items="roles_List"
                        v-model="detailUser[prop]"
                      ></v-select>
                      <v-text-field
                        v-else
                        dense
                        v-model="detailUser[prop]"
                      ></v-text-field>
                    </v-col>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="saveUser(detailUser)"> Save </v-btn>
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
      <v-btn elevation="2" @click="deleteUser()"> Delete User </v-btn>
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
  computed: {
    getMainInfo: function () {
      const mainInfo = {
        mail_address: "",
        phone_number: ""
      };

      mainInfo.mail_address = this.detailUser.mail_address;
      mainInfo.phone_number = this.detailUser.phone_number;

      for (const key in mainInfo) {
        if (mainInfo[key] == undefined) {
          mainInfo[key] = "none";
        }
      }
      return mainInfo;
    },

    getSubInfo: function () {
      const SubInfo = {
        login_id: "",
        user_type: ""
      };
      SubInfo.login_id = this.detailUser.login_id;
      SubInfo.user_type = this.detailUser.user_type;

      return SubInfo;
    }
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
    async saveUser(user) {
      const beforeEditedInfo = this.beforeEditedUsers[this.users.indexOf(user)];
      const afterEditedInfo = user;

      if (user.user_name == "demo") {
        await UserAPI.uploadUser(beforeEditedInfo, afterEditedInfo);
      }
      this.beforeEditedUsers = JSON.parse(JSON.stringify(this.users));
      this.showDialog = false;
      this.editmode = false;
    },
    closeLog() {
      this.users = JSON.parse(JSON.stringify(this.beforeEditedUsers));
      this.showDialog = false;
      this.editmode = false;
    },
    deleteUser() {
      //this.users가 얕은 참조라 다른 짓 하면 다시 돌아옴;; 수정예정
      this.users = this.users.filter(v => {
        return !this.selected.includes(v);
      });
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 0px;
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
.user-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
}
.sub-info-title {
  margin-left: 12px;
}
.sub-info-input {
  padding: 0px;
}
</style>
