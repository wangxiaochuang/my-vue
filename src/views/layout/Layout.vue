<!--suppress ALL -->
<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="closeSideBar"></div>
    <side-bar class="sidebar-container"></side-bar>

    <div class="main-container">
      <nav-bar class="nav-bar"></nav-bar>
      <app-main class="app-main"></app-main>
    </div>
  </div>
</template>

<script>
  import {NavBar, SideBar, AppMain} from './components'
  import ResizeMixin from './mixin/ResizeHandler'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'layout',
    components: {
      NavBar,
      SideBar,
      AppMain
    },
    mixins: [ResizeMixin],
    methods: {
      ...mapActions([
        "closeSideBar"
      ])
    },
    computed: {
      ...mapGetters([
        "sidebar",
        "device"
      ]),
      classObj() {
        return {
          mobile: this.device === 'mobile',
          desktop: this.device === 'desktop',
          openSidebar: this.sidebar.opened,
          hideSidebar: !this.sidebar.opened,
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-wrapper {
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
    .drawer-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: black;
      opacity: 0.3;
      z-index: 999;
    }
  }
</style>

