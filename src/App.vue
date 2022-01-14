<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { UserAPI } from "./services";

export default {
  async created() {
    await UserAPI.login();
  }
};
</script>

<style></style>
