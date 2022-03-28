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
          <v-btn @click="addFilter" icon>
            <font-awesome-icon class="fa-x" icon="plus" />
          </v-btn>
        </v-col>
        <v-col cols="4"
          >Column name<v-select
            label="선택하세요"
            solo
            dense
            v-model="filter.column_name"
            :items="Object.keys(column_List)"
          ></v-select
        ></v-col>
        <v-col cols="4">
          <v-select
            v-if="filter.column_name == 'User type'"
            :items="userTypeList"
            v-model="filter.value"
            clearable
          ></v-select>
          <v-autocomplete
            v-else-if="filter.column_name == 'User name'"
            :items="users"
            item-text="user_name"
            label="value"
            v-model="filter.value"
            clearable
          ></v-autocomplete>
          <v-autocomplete
            v-else-if="filter.column_name == 'Login ID'"
            :items="users"
            item-text="login_id"
            label="value"
            v-model="filter.value"
            clearable
          ></v-autocomplete>
          <v-text-field v-else v-model="filter.value" label="value">
          </v-text-field>
        </v-col>
        <v-col cols="1">
          <font-awesome-icon
            class="fa-x"
            icon="times-circle"
            @click="removeFilter(index)"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="applyFilter" :disabled="disableFilter">apply</v-btn>
      <v-btn @click="closeFilter">cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
const column_List = {
  "User name": "user_name",
  "Login ID": "login_id",
  "User type": "user_type",
  "Mail address": "mail_address",
  "Phone number": "phone_number"
};
const userTypeList = ["Master", "Manager", "Worker"];

export default {
  data() {
    return {
      filterArray: [{ column_name: null, value: null }],
      column_List: column_List,
      userTypeList: userTypeList,
      users: [],
      disableFilter: true
    };
  },
  watch: {
    filterArray: {
      handler(val) {
        for (const key in val) {
          if (val[key].column_name && val[key].value) {
            this.disableFilter = false;
          } else {
            this.disableFilter = true;
            break;
          }
        }
      },
      deep: true
    }
  },
  created() {
    const users = this.$store.state.users;
    this.users = users;
  },
  methods: {
    closeFilter() {
      this.$emit("closeFilter");
      this.filterArray = [{ column_name: null, value: null }];
    },
    removeFilter(index) {
      if (this.filterArray.length > 1) {
        this.filterArray.splice(index, 1);
      }
    },
    addFilter() {
      if (this.filterArray.length < 5) {
        this.filterArray.push({ column_name: null, value: null });
      }
    },
    applyFilter() {
      for (const key in this.filterArray) {
        this.$store.state.users = this.$store.state.users.filter(
          user =>
            user[column_List[this.filterArray[key].column_name]] ==
            this.filterArray[key].value
        );
      }
      this.$emit("closeFilter");
      this.filterArray = [{ column_name: null, value: null }];
    }
  }
};
</script>

<style scoped>
.user-filter {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: -20px;
}
input {
  background-color: white;
  width: 150px;
}
</style>
