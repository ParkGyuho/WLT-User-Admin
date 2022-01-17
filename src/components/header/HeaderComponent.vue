<template>
  <v-container>
    <v-row class="header">
      <v-col cols="2" class="logo-area">
        <LogoComponent />
      </v-col>
      <v-col cols="8" class="menu-area">
        <MenuComponent />
      </v-col>
      <v-col cols="1" class="logout-button">
        <LogoutButton />
      </v-col>
    </v-row>
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
}
.logo-area {
  background-color: wheat;
  width: 15%;
}
.logout-button {
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-area {
  width: 70%;
  margin: 0 auto;
  background-color: wheat;
  align-items: center;
}
</style>
