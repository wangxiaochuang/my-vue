<template>
  <el-menu
    default-active="userManager"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">

    <side-bar-item v-for="route in permission_routers" :key="route.name" :item="route"
                   :base-path="route.path"></side-bar-item>
  </el-menu>
</template>

<script>
  import { asyncRouterMap } from '../../../../router/index'
  import SideBarItem from './SideBarItem.vue'

  export default {
    components: {
      SideBarItem
    },
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {
      permission_routers() {
        return asyncRouterMap
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-width: 200px;
    min-height: 400px;
  }
</style>
