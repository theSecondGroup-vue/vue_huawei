<template>
  <div class="find">
    <header class="head">
      <a href="#" class="h-a">
      </a>
      <h1 class="pageTitle"></h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Find',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head {
    width: 100%;
    height: 0.55rem;
    border-bottom: 1px solid #eaeaea;
    padding: 0 0.15rem;
    box-sizing: border-box;
    line-height: 0.55rem;
  }
  .head .h-a {
    display: block;
    width:0.28rem;
    height: 0.28rem;
    float: left;
  }
  .head .pageTitle {
    float: left;
  }
</style>
