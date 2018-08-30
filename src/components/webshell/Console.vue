<template>
  <div class="console" id="terminal"></div>
</template>

<script>
  import Terminal from './Xterm'
  import SockJS from 'sockjs-client'

  export default {
    name: "console",
    props: {
      terminal: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        term: null,
        terminalSocket: null
      }
    },
    methods: {
      onMessage(e) {
        let data = JSON.parse(e.data)
        switch (data.Op) {
          case  "stdout":
            this.term.write(data.Data)
        }
      },
      onClose(e) {
      },
      onOpen() {
        let data = {
          Op: "bind",
          SessionID: this.terminal.pid
        }
        this.terminalSocket.send(JSON.stringify(data))
      },
      onInput(key, e) {
        let data = {
          Op: "stdin",
          Data: key
        }
        this.terminalSocket.send(JSON.stringify(data))
      }
    },
    mounted () {
      let terminalContainer = document.getElementById('terminal')
      this.term = new Terminal()
      this.term.open(terminalContainer)
      // open websocket
      this.terminalSocket = new SockJS('http://39.107.255.29:8081/api/sockjs')
      this.terminalSocket.onopen = this.onOpen
      this.terminalSocket.onmessage = this.onMessage
      this.terminalSocket.onclose = this.onClose

      this.term.on('key', this.onInput)
      // this.term._initialized = true
    },
    beforeDestroy () {
      this.terminalSocket.close()
      this.term.destroy()
    }
  }
</script>

<style scoped>

</style>