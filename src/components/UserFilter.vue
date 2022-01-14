<template>
  <!-- <div class="user-filter">
      <div>NAME <br /><input type="text" /></div>
      <div>Phone Number<br /><input type="text" /></div>
      <div>Department<v-select label="선택하세요" solo></v-select></div>
      <div>Role<v-select label="선택하세요" solo></v-select></div>
      <div><v-btn>search</v-btn></div>
    </div> -->
  <div class="user-filter">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="2">
            <v-text-field :counter="10" label="Name"></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field :counter="15" label="Phone Number"></v-text-field>
          </v-col>
          <div>Department<v-select label="선택하세요" solo></v-select></div>
          <div>Role<v-select label="선택하세요" solo></v-select></div>
          <div><v-btn>search</v-btn></div>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-filter {
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: lightseagreen;
}
input {
  background-color: white;
  width: 150px;
}
.v-select {
  width: 150px;
}
</style>
