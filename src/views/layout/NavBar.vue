<template>
  <div>
    <md-menu md-direction="bottom-end">
      <md-button md-menu-trigger>
        <md-icon>person</md-icon>
      </md-button>

      <md-menu-content class="user-info">
        <md-menu-item disabled @click="data='click disabled'">Disabled</md-menu-item>
        <md-menu-item>
          <router-link to="login">登入</router-link>
        </md-menu-item>
        <md-menu-item @click="logout">登出</md-menu-item>
      </md-menu-content>
    </md-menu>
  </div>

</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      logout () {
      }
//      login () {
//        this.$router.push('login')
//      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
