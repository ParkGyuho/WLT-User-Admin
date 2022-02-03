<template>
  <v-card>
    <v-card-title>TABLE FILTER</v-card-title>
    <v-card-text>
      <v-row
        no-gutters
        class="user-filter"
        v-for="(filter, index) in filterArray"
        :key="index"
      >
        <v-col cols="1">
          <v-btn text @click="addFilter"
            ><font-awesome-icon class="fa" icon="plus"
          /></v-btn>
        </v-col>
        <v-col cols="4"
          >Column name<v-select
            label="선택하세요"
            solo
            dense
            v-model="filter.column_name"
          ></v-select
        ></v-col>
        <v-col cols="4">
          <v-text-field label="value" v-model="filter.value"></v-text-field>
        </v-col>
        <v-col cols="1">
          <font-awesome-icon
            class="fa-1x"
            icon="times-circle"
            @click="removeFilter(index)"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-btn>apply filter</v-btn>
        <v-btn @click="closeFilter">cancel</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      filterArray: [{ column_name: "", value: "" }]
    };
  },
  methods: {
    closeFilter() {
      this.$emit("closeFilter");
      this.filterArray = [{ column_name: "", value: "" }];
    },
    removeFilter(index) {
      if (this.filterArray.length > 1) {
        this.filterArray.splice(index, 1);
      }
    },
    addFilter() {
      this.filterArray.push({ column_name: "", value: "" });
    }
  }
};
</script>

<style scoped>
.user-filter {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(194, 194, 194, 0.74);
}
input {
  background-color: white;
  width: 150px;
}
</style>
