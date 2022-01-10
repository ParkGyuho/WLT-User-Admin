<template>
    <div>
        <HeaderComponent/>
        <PersonFilterComponent/>
        <PersonTableComponent/>
    </div>
</template>

<script>
import HeaderComponent from '../components/Header/HeaderComponent.vue'
import PersonFilterComponent from '../components/PersonFilterComponent.vue'
import PersonTableComponent from '../components/PersonTableComponent.vue'

export default {
  components:{
    HeaderComponent,
    PersonFilterComponent,
    PersonTableComponent
  }
}
</script>

<style>

</style>