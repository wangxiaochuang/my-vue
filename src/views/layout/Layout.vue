<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <nav-bar class="nav-bar"></nav-bar>
      <app-main class="app-main"></app-main>
    </div>
  </div>
</template>

<script>
  import {NavBar, SideBar, AppMain} from './components'

  export default {
    name: 'layout',
    components: {
      NavBar,
      SideBar,
      AppMain
    },
    data: () => ({
    }),
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .app-wrapper {
    height: 100%;
    display: flex;
    .main-container {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .nav-bar {
        height: 50px;
      }
      .app-main {
        flex-grow: 1;
        background-color: #2c3e50;
      }
    }
  }
</style>

