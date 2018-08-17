<template>
  <div>
    <router-link v-if="!hasChildren" :to="resolvePath(item.path)">
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
                     :base-path="resolvePath(item.path)"></side-bar-item>

    </el-submenu>
  </div>
</template>

<script>
  import path from 'path'

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
        return this.item.hasOwnProperty("children")
      }
    },
    methods: {
      resolvePath(...paths) {
        return path.resolve(this.basePath, ...paths)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
