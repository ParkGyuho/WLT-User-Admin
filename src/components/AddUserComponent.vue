<template>
  <v-container>
    <v-form ref="form" lazy-validation>
      <v-layout column>
        <v-layout row>
          <v-flex xs5 class="imageBox">
            Image
            <v-file-input
              @change="upload"
              accept="image/*"
              type="file"
              id="file"
              class="inputfile"
              prepend-icon="mdi-camera"
            />
          </v-flex>

          <v-flex xs6 class="inputBox">
            <v-flex>
              <v-text-field
                v-model="user_name"
                label="Name"
                :rules="user_name_rule"
                hide-details="auto"
                maxlength="20"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                :rules="user_phone_number_rule"
                label="Phone Number"
                hide-details="auto"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field label="E-mail" hide-details="auto"></v-text-field>
            </v-flex>
            <v-flex>
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
            </v-flex>

            <v-flex>
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
            </v-flex>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    departments_List: ["Foo", "Bar", "Fizz", "Buzz"],
    roles_List: ["Master", "Manager", "Labeler"],
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
.inputBox {
  margin: 2rem;
}

.inputBox .flex {
  margin: 1rem;
}
</style>
