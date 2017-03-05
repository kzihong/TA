<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import "./assets/css/weui.css"
// import "./assets/css/reset.css"
import "./assets/css/weui.min.css"
import "./assets/css/plugins/jisou-common.css"
import "./assets/css/plugins/jisou-main.css"
import "./assets/css/clearfix.css"

// import "./assets/js/zepto.min.js"
// import "./assets/js/touch.js"
// import "./assets/js/fx.js"

import Nav from "./components/Nav.vue"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    "my-nav":Nav
  }
}
</script>

<style>

</style>
