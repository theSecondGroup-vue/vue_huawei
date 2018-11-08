<template>
  <div class="Home">
    <router-link :to="{name:'register'}">注册</router-link>
    <router-link :to="{name:'login'}">登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
