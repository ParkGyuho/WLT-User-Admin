<template>
  <div data-app>
        <HeaderComponent/>
        <AddUserComponent/>

  </div>
</template>

<script>
import HeaderComponent from '../components/Header/HeaderComponent.vue'
import AddUserComponent from '../components/AddUserComponent.vue'

export default {
    components:{
        HeaderComponent,
        AddUserComponent

    }
}
</script>

<style>

</style>