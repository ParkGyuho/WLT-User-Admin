import Vue from "vue";
import Vuex from "vuex";
import { UserAPI } from "../services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    getUserData(state, data) {
      state.users = data;
    }
  },
  actions: {
    async getUsers(context) {
      return await UserAPI.getUsers().then(response =>
        context.commit("getUserData", response)
      );
    }
  },
  modules: {}
});
