<template>
  <div class="menu-list">
    <div class="menu-elements">OVERVIEW</div>
    <div class="menu-elements">STATISTICS</div>
    <div class="menu-elements">SEARCH</div>
    <div class="menu-elements">MY PROFILE</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu-list {
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.menu-elements:hover {
  color: red;
}
</style>
