<template>
  <v-container>
    <v-app>
      <v-form ref="form" lazy-validation>
        <v-row>
          <v-col class="image-area">
            Image
            <v-file-input
              @change="upload"
              accept="image/*"
              type="file"
              id="file"
              class="inputfile"
              prepend-icon="mdi-camera"
            />
          </v-col>

          <v-col class="input-area">
            <v-col>
              <v-text-field
                v-model="user_name"
                label="Name"
                :rules="user_name_rule"
                hide-details="auto"
                maxlength="20"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                :rules="user_phone_number_rule"
                label="Phone Number"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="E-mail" hide-details="auto"></v-text-field>
            </v-col>
            <v-col>
              Department:
              <v-row align="center">
                <v-col class="d-flex" cols="6" sm="12">
                  <v-select
                    :items="departments_List"
                    label="선택하세요"
                    solo
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>

            <v-col>
              Role:
              <v-row align="center">
                <v-col class="d-flex" cols="6" sm="12">
                  <v-select
                    :items="roles_List"
                    label="선택하세요"
                    solo
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-col>
        </v-row>
      </v-form>
      <div class="btn-area">
        <v-btn elevation="2">Add</v-btn>
        <v-btn elevation="2">Cancel</v-btn>
      </div>
    </v-app>
  </v-container>
</template>

<script>
const departmanet_List = ["Foo", "Bar", "Fizz", "Buzz"];
const roles_List = ["Master", "Manager", "Labeler"];

export default {
  data: () => ({
    departments_List: departmanet_List,
    roles_List: roles_List,
    user_name: "",
    user_name_rule: [
      v => !!v || "이름은 필수 입력사항입니다.",
      v => /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/.test(v) || "이름은 한글만 입력 가능합니다.",
      v => !(v && v.length >= 10) || "이름은 10자 이상 입력할 수 없습니다.",
      v => !(v && v.length <= 1) || "2자 이상 입력해주세요."
    ],
    user_phone_number_rule: [
      v => !!v || "전화번호는 필수 입력사항입니다.",
      v => /^[0-9]*$/.test(v) || "전화번호는 숫자만 입력 가능합니다.",
      v => (v && v.length >= 10) || "전화번호는 10자 이상 입력해주세요.",
      v => (v && v.length <= 11) || "전화번호는 11자 이하 입력해주세요."
    ]
  }),
  methods: {
    upload() {
      console.log("upload");
    }
  }
};
</script>

<style scoped>
.input-area {
  background: lightgreen;
}
.input-area .flex {
  margin: 1rem;
}
.image-area {
  background: cornflowerblue;
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
</style>
