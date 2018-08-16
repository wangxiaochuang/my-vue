<template>
  <div>
    <router-link v-if="!item.children">
      <el-menu-item :index="item.path">{{item.name}}</el-menu-item>
    </router-link>

    <el-submenu v-else :index="item.path || item.path">

      <template slot="title">
        <span slot="title">{{item.name}}</span>
      </template>

      <template v-for="child in item.children">
        <side-bar-item v-if="child.children" :key="child.name" :item="child" :base-path="child.path"></side-bar-item>

        <el-menu-item v-else :index="child.name">
          <span slot="title">{{child.name}}</span>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      basePath: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
