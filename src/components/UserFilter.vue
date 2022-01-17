<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="2" class="menu-item">
          <v-text-field :counter="10" label="Name"></v-text-field>
        </v-col>
        <v-col cols="2" class="menu-item">
          <v-text-field :counter="15" label="Phone Number"></v-text-field>
        </v-col>
        <v-col cols="3" class="menu-item"
          ><v-select label="선택하세요" solo></v-select
        ></v-col>
        <v-col cols="3" class="menu-item"
          ><v-select label="선택하세요" solo></v-select
        ></v-col>
        <v-col cols="2" class="menu-item"><v-btn>search</v-btn></v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {};
</script>

<style scoped>
.v-select {
  width: 200px;
}
.menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
