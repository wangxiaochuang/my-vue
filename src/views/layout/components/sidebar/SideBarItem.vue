<template>
  <div>
    <router-link v-if="!hasChildren" :to="item.path">
      <el-menu-item :index="item.path">
        <i class="el-icon-location"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </router-link>

    <el-submenu v-else :index="item.path">

      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.name}}</span>
      </template>

      <side-bar-item v-for="child in item.children" :key="child.name" :item="child"
                     :base-path="child.path"></side-bar-item>

    </el-submenu>
  </div>
</template>

<script>
  export default {
    name: 'SideBarItem',
    data: () => {
      return {}
    },
    props: {
      item: {
        type: Object,
        required: true
      },
      basePath: {
        type: String,
        default: ''
      }
    },
    computed: {
      hasChildren() {
        let res = this.item.hasOwnProperty("children")
        return res
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
