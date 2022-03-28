<template>
  <v-card>
    <v-card-title class="font-weight-light display-1"> Add User </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-app>
        <v-form ref="form" lazy-validation>
          <v-row class="align">
            <v-col cols="10" class="input-area">
              <v-col>
                <v-text-field
                  v-model="userName"
                  label="Name"
                  :rules="userNameRule"
                  hide-details="auto"
                  maxlength="15"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="userPhoneNumber"
                  :rules="userPhoneNumberRule"
                  label="Phone Number"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="userEmail"
                  label="E-mail"
                  hide-details="auto"
                  :rules="emailRule"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="userLoginId"
                  label="login ID"
                  hide-details="auto"
                  :rules="loginIdRule"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="userPassword"
                  label="Password"
                  hide-details="auto"
                  :rules="passwordRule"
                ></v-text-field>
              </v-col>

              <v-col class="d-flex" cols="6" sm="12">
                <v-select
                  v-model="userType"
                  :items="userTypeList"
                  :rules="userTypeRule"
                  label="User Type"
                ></v-select>
              </v-col>
            </v-col>
          </v-row>
        </v-form>
        <div class="btn-area">
          <v-btn elevation="2" @click="save">Add</v-btn>
          <v-btn elevation="2" @click="showModal = true">Cancel</v-btn>
          <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">Notice</h3>

            <h4 slot="body">유저 등록을 취소하시겠습니까?</h4>

            <button slot="footer" @click="closeModal(), closeAddUser()">
              확인
            </button>
            <button slot="footer" @click="closeModal">취소</button>
          </Modal>
        </div>
      </v-app>
    </v-card-text>
  </v-card>
</template>

<script>
import Modal from "./modal/modal";
import { UserAPI } from "./../services";

const userTypeList = ["Master", "Manager", "Labeler"];

export default {
  components: {
    Modal
  },
  data: () => ({
    imageUrl: null,
    showModal: false,
    userTypeList,
    userName: "",
    userNameRule: [
      v => !!v || "이름은 필수 입력사항입니다.",
      v => !(v && v.length >= 10) || "이름은 10자 이상 입력할 수 없습니다.",
      v => !(v && v.length <= 1) || "2자 이상 입력해주세요."
    ],
    userPhoneNumber: "",
    userPhoneNumberRule: [
      v => !!v || "전화번호는 필수 입력사항입니다.",
      v => /^[0-9]*$/.test(v) || "전화번호는 숫자만 입력 가능합니다.",
      v => (v && v.length >= 10) || "전화번호는 10자 이상 입력해주세요.",
      v => (v && v.length <= 11) || "전화번호는 11자 이하 입력해주세요."
    ],
    userType: "",
    userTypeRule: [v => !!v || "유저 타입은 필수 선택사항입니다."],
    userEmail: "",
    emailRule: [v => !!v || "이메일은 필수 입력사항입니다."],
    userLoginId: "",
    loginIdRule: [v => !!v || "아이디는 필수 입력사항입니다."],
    userPassword: "",
    passwordRule: [v => !!v || "패스워드는 필수 입력사항입니다."]
  }),
  methods: {
    closeAddUser() {
      this.$emit("closeAddUser");
    },
    checkDuplicateId(user_id) {
      const userData = this.$store.state.users;

      for (const i in userData) {
        const userCheckId = userData[i].login_id;
        console.log(userCheckId);
        if (user_id == userCheckId) {
          return "이미 사용중인 아이디입니다.";
        }
      }
      return true;
    },
    async save() {
      const validate = this.$refs.form.validate();
      if (validate) {
        const newUserInfo = {
          user_name: this.userName,
          user_type: this.userType,
          login_id: this.userLoginId,
          password: this.userPassword,
          mail_address: this.userEmail,
          phone_number: this.userPhoneNumber
        };

        await UserAPI.addUser(newUserInfo);
        this.$emit("closeAddUser");
      }
    },
    closeModal() {
      this.showModal = false;
      this.userName = "";
      this.userType = "";
      this.userLoginId = "";
      this.userPassword = "";
      this.userEmail = "";
      this.userPhoneNumber = "";
    }
  }
};
</script>

<style scoped>
.input-area {
  margin: 10px;
}
.input-area .v-text-field {
  margin: 5px 0;
}
.btn-area {
  width: 270px;
  margin-left: auto;
  margin-top: auto;
}
.v-btn {
  width: 100px;
  margin: 15px;
}
.align {
  justify-content: space-evenly;
}
</style>
