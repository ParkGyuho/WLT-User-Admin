<template>
  <v-main>
    <v-row no-gutters>
      <v-col cols="2" class="logo-area">
        <LogoComponent />
      </v-col>
      <v-col cols="5" class="menu-area">
        <MenuComponent />
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="2" class="profile-area">
        <ProfileComponent />
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="1" class="logout-button">
        <LogoutButton />
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import LogoComponent from "./elements/Logo";
import LogoutButton from "./elements/LogoutButton";
import MenuComponent from "./elements/Menu";
import ProfileComponent from "./elements/Profile.vue";

export default {
  components: {
    LogoComponent,
    LogoutButton,
    MenuComponent,
    ProfileComponent
  }
};
</script>

<style scoped>
.header {
  display: flex;
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-area {
  margin-right: auto;
  display: flex;
  align-items: center;
}
.logo-area {
  justify-content: center;
  align-items: center;
}
</style>
