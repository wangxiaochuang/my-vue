<template>
  <md-list>

    <md-list-item md-expand>
      <span class="md-list-item-text">News</span>

      <md-list slot="md-expand">
        <md-list-item class="md-inset">World</md-list-item>
        <md-list-item class="md-inset">Europe</md-list-item>
        <md-list-item class="md-inset">South America</md-list-item>



        <md-list-item class="md-inset" md-expand>
          <span class="md-list-item-text">Games</span>
          <md-list>
            <md-list-item class="md-inset">Console</md-list-item>
            <md-list-item class="md-inset">PC</md-list-item>
            <md-list-item class="md-inset">Phone</md-list-item>
          </md-list>
        </md-list-item>



      </md-list>
    </md-list-item>

    <md-list-item md-expand>
      <span class="md-list-item-text">Games</span>

      <md-list slot="md-expand">
        <md-list-item class="md-inset">Console</md-list-item>
        <md-list-item class="md-inset">PC</md-list-item>
        <md-list-item class="md-inset">Phone</md-list-item>
      </md-list>
    </md-list-item>

    <md-list-item md-expand>
      <span class="md-list-item-text">Video</span>

      <md-list slot="md-expand">
        <md-list-item class="md-inset">Humor</md-list-item>
        <md-list-item class="md-inset">Music</md-list-item>
        <md-list-item class="md-inset">Movies</md-list-item>
        <md-list-item class="md-inset">TV Shows</md-list-item>
      </md-list>
    </md-list-item>

    <md-list-item>
      <span class="md-list-item-text">Shop</span>
    </md-list-item>
  </md-list>
</template>

<script>
  import {asyncRouterMap} from '../../router/index'

  export default {
    props: {
      msg: String
    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    .item {
      height: 20;
    }
    .level-1 {
      text-indent: 5;
      .level-2 {
        text-indent: 8;
      }
    }
  }
</style>
