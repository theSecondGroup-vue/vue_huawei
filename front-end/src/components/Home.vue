<template>
  <div class="Home">
    <div class="flexBox">
      <header>
        <div class="search-info">
          <a href="/" title="华为商城" class="logo">华为商城</a>
          <!-- <div class="search"></div> -->
          <input type="text" class="search" readonly>
          <ul class="user">
            <li>
              <a href="#"></a>
            </li>
            <li v-if='isLogin' class="login">
              <a href="#"></a>
            </li>
            <li v-else>
              <a href="#">登录</a>
            </li>
          </ul>
        </div>
        <ul class="nav">
          <li v-for='(item,index) in nav' :key='index'><a :href="item.outLink">{{item.tabName}}</a></li>
          <!-- <li><a href="#">11.11狂欢</a></li>
          <li><a href="#">推荐</a></li>
          <li><a href="#">推荐</a></li>
          <li><a href="#">推荐</a></li>
          <li><a href="#">推荐</a></li> -->
        </ul>
      </header>
    </div>
    <div class="banner">
      <mt-swipe :show-indicators="true">
        <mt-swipe-item><img src="../../static/images/banner1.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../static/images/banner2.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../static/images/banner3.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../static/images/banner4.png" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../static/images/banner5.png" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../static/images/banner6.png" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../static/images/banner7.png" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="../../static/images/banner8.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="container">
      <ul class="container-nav">
        <li><a href="#">优惠购</a></li>
        <li><a href="#">邀请有礼</a></li>
        <li><a href="#">会员领券</a></li>
        <li><a href="#">以久换新</a></li>
        <li><a href="#">优惠码</a></li>
      </ul>
       <div class="headline">
        <div class="title">
          <a href="#">
            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/home/icon_headLine.png" width="100%">
          </a>
        </div>
        <div class="headerline-info">
          <div class="move">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
          </div>
        </div>
        <div class="more"><a href="#">更多</a></div>
      </div>
    </div>
    <timershop></timershop>
    <advertising></advertising>
  </div>
</template>

<script>
import axios from 'axios'
import timershop from '../views/timershop'
import advertising from '../views/advertising'

export default {
  name: 'Home',
  data () {
    return {
      msg: '登录',
      isLogin: false,
      nav: []
    }
  },
  components: {
    timershop,
    advertising
  },
  methods: {
    isUser () {
      var user = localStorage.getItem('users')
      console.log(user);
      if (user) {
        this.isLogin = true
      } else {
        this.isLogin = false
        console.log(555);
      }
    },
    showNav () {
      const apiProxy = 'https://bird.ioliu.cn/v1/?url='
      var url = 'https://openapi.vmall.com/mcp/home/queryHomeIndexTabConfigList?portal=2&lang=zh-CN&country=CN&callback=queryHomeIndexTabConfigList'
      axios.get(apiProxy + url).then(result => {
        // console.log(result.data)
        var res = JSON.parse(result.data.split('queryHomeIndexTabConfigList(')[1].split(');')[0])
        this.nav = res.homeIndexTabConfigList
        // console.log(res)
      })
    },
    headerlineMove () {

    }
  },
  mounted () {
    this.isUser()
    this.showNav()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flexBox {
    position: relative;
    height: 1.0636rem;
  }
  header {
    position: fixed;
    width: 100%;
    height: 1.0638rem;
    z-index: 999;
    background: #fff;
    /* background: #000; */
    /* border-bottom: 1px solid #000; */
  }
  header .search-info {
    height: 0.575rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  header .search-info a.logo {
    display: block;
    width: 0.877rem;
    height: 0.187rem;
    background: url(../../static/images/logo.png);
    background-size: 100% 100%;
    background-position: center center;
    text-indent: -999em;
  }
  header .search {
    outline: none;
    width: 1.998rem;
    height: 0.431rem;
    background: #f6f6f6;
    border-radius: 0.1rem;
    border: 0px;
  }
  header .user li {
    overflow: hidden;
    float: left;
  }
  header .user li a {
    font-size:0.16rem;
    text-align: center;
    line-height: 0.345rem;
    color: #4C4C4C;
    margin:0 0.05rem;
    display: block;
    width: 0.345rem;
    height: 0.345rem;
  }
  header .user li:first-of-type a {
    background: url(../../static/images/s-info.png);
    background-size: 100% 100%;
    background-position: center center;
  }
  header .user li.login a {
     background: url(../../static/images/s-login.png);
    background-size: 100% 100%;
    background-position: center center;
  }
  header .nav  {
    display: flex;
    width: 100%;
    height: 0.5488rem;
    overflow-x: auto;
    /* justify-content: space-between; */
    align-items: center;
  }
  header .nav li {
    /* flex: 1; */
    white-space:nowrap;
  }
  header .nav li a {
    display: block;
    font-size: 0.20rem;
    padding:0.1rem 0;
    margin: 0 0.2156rem
  }
  header .nav li:first-of-type a {
    border-bottom: 3px solid #bc1318;
    color:#bc1318;
  }

  .banner  {
    box-sizing: border-box;
    padding:0.1rem 0.1rem 0;
    margin-bottom: 0.1rem;
    width: 100%;
    height: 2.11rem;
    border-radius: 0.2rem;
  }
  .banner .mint-swipe-item{
    border-radius: 0.2rem;
    overflow: hidden;
    background: #000;

  }

  .container {
    overflow: hidden;
    width: 100%;
    height: 2.24rem;
    background: url(https://res.vmallres.com/pimages/common/config/logo/logo201811052309435299.png);
    background-size:102% 97%;
    overflow: hidden;
  }
  .container-nav {
    margin-top:1.1rem;
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
  }
  .container-nav li a {
    display: block;
    width: 0.575rem;
    height: 0.575rem;
    text-align: center;
    line-height: 0.575rem;
    font-size: 0.14rem;
    color: rgb(155, 155, 155);
  }

  .headline {
    width: 3.62rem;
    margin: 0 auto;
    /* background: #000; */
    height: 0.575rem;
    display: flex;
    align-items: center;
  }
  .headline .title a{
    display: block;
    width: 0.71rem;
  }
  .headerline-info {
    position: relative;
    width: 2.30rem;
    height: 0.575rem;
    overflow: hidden;
  }
  .headerline-info a{
    display: block;
    width: 2.30rem;
    height: 0.575rem;
    line-height: 0.505rem;
    padding-left: 0.2rem;
    font-size: 0.16rem;
  }
  .move {
    position: absolute;
    top:0px;
  }
  .more a{
    font-size: 0.16rem;
  }
</style>
