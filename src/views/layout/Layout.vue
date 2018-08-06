<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            cmdb
          </div>
          <div class="md-toolbar-section-end">
            <nav-bar/>
          </div>
        </div>

      </md-app-toolbar>

      <md-app-drawer md-persistent="full" :md-active.sync="menuVisible">
        <md-toolbar md-elevation="0">
          <span>菜单区</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <side-bar/>
      </md-app-drawer>

      <md-app-content>
        <app-main/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import {NavBar, SideBar, AppMain} from './index';

  export default {
    name: 'layout',
    components: {
      NavBar,
      SideBar,
      AppMain
    },
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-container {
    .md-app {
      max-height: 400px;
      /*border: 1px solid rgba(#000, .12);*/

      .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
      }
    }
  }


</style>
