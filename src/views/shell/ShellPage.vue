<template>
  <div class="container">
    <Console :terminal="terminal"></Console>
  </div>
</template>

<script>
  import Console from '../../components/webshell/Console'
  import axios from 'axios'
  export default {
    components: {
      Console
    },
    data: () => {
      return {
        terminal: {
          pid: "",
          name: "terminal"
        }
      }
    },
    async mounted() {
      let res = await axios.get("http://39.107.255.29:8081/api/v1/pod/zrb/asset-allocation-86d87544c6-rxj85/shell/filebeat")
      this.terminal.pid = res.id
    }
  }
</script>

<style lang="scss" scoped>
  .container {
  }
</style>
