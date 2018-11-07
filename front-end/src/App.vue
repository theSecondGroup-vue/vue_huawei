<template>
  <div id="app">

    <router-view/>
  <div class="footerBox">
    <div class="footer">
      <router-link to='/Home'>
        <p>首页</p>
      </router-link>
      <router-link to='/List'>
        <p>分类</p>
      </router-link>
      <router-link to='/Find'>
        <p>发现</p>
      </router-link>
      <router-link to='/ShopCar'>
        <p>购物车</p>
      </router-link>
      <router-link to='/User'>
        <p>我的</p>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url(../static/css/public.css);
html,
body {
  height: 100%;
}
#app {
  position: relative;
}
.footerBox {
  width: 100%;
  height: 0.53rem;
}
.footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 0.53rem;
  background: #f9f9f9;
  position: fixed;
  bottom: 0;
}
.footer a {
  display: block;
  flex: 1;
  text-align: center;
}
.footer a p {
  width: 100%;
  height: 0.52rem;
  background: url(../static/images/icon_nav.png) no-repeat 0px -0.02rem;
  background-size: 3.6rem;
  text-indent: -9.99rem;
  overflow: hidden;
}
.footer a.router-link-active p {
  background-position-y: -0.52rem;
}
.footer a:nth-of-type(2) p {
  background-position-x: -0.75rem;
}
.footer a:nth-of-type(3) p {
  background-position-x: -1.45rem;
}
.footer a:nth-of-type(4) p {
  background-position-x: -2.15rem;
}
.footer a:nth-of-type(5) p {
  background-position-x: -2.85rem;
}
</style>
