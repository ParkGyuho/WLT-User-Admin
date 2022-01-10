<template>
  <div>
    <LogoComponent/>
    <LogoutButton/>
    <MenuComponent/>
  </div>  
</template>

<script>
import LogoComponent from './HeaderElements/LogoComponent.vue'
import LogoutButton from './HeaderElements/LogoutButton.vue'
import MenuComponent from './HeaderElements/MenuComponent.vue'

export default {
  components:{
    LogoComponent,
    LogoutButton,
    MenuComponent
  }

}
</script>

<style>

</style>