import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import AddUser from "../views/AddUser.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/adduser",
      name: "adduser",
      component: AddUser
    }
  ]
});
