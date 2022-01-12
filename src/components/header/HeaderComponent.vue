<template>
  <v-container>
    <div class="firstheader">
      <div class="logo">
        <LogoComponent />
      </div>
      <div class="menu">
        <MenuComponent />
      </div>
      <div class="logoutbutton">
        <LogoutButton />
      </div>
    </div>
  </v-container>
</template>

<script>
import LogoComponent from "./elements/Logo";
import LogoutButton from "./elements/LogoutButton";
import MenuComponent from "./elements/Menu";

export default {
  components: {
    LogoComponent,
    LogoutButton,
    MenuComponent
  }
};
</script>

<style scoped>
.container {
  background-color: lightblue;
  padding: 10px;
}
.firstheader {
  display: flex;
  height: 80px;
}
.logo {
  background-color: wheat;
  width: 25%;
}
.logoutbutton {
  width: 7%;
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu {
  width: 65%;
  margin: 0 auto;
  background-color: wheat;
}
</style>
