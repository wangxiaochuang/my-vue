<template>
  <div class="navbar-container">
    <font-awesome-icon icon="bars" @click="toggleSideBar"/>
  </div>

</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
      }
    },
    methods: {
      ...mapActions([
        "toggleSideBar"
      ]),
      logout () {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar-container {
    height: 50px;
    display: flex;
    align-items: center;
  }
</style>
