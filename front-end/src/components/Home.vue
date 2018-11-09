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
    <div>
      <section class="bottom-area">
        <!-- <p class="t1">
          <a href="#" class="b-login">登录</a>
          <a href="#" class="b-back">反馈</a>
        </p> -->
        <p class="t2">
          <a href="#" class="ta" v-for="(item,index) in clickList"
             :key="index"
          >
            <i class="imgs">
              <img :src="item.imgs"/>
            </i>
            <span class="texts">
              {{ item.name }}
            </span>
          </a>
        </p>
        <div class="t3">
          <p class="po">
            <a href="#">隐私政策</a>
            <a href="#">用户协议</a>
          </p>
          <p class="pt">
            <a href="#">苏ICP备17040376号-6</a>
            <a href="#">苏公网安备32011402010009号</a>
          </p>
          <p class="ph">
               Copyright © 2012-2018  VMALL.COM 版权所有
          </p>
        </div>
      </section>
    </div>
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
      nav: [],
      clickList: [
        {
          imgs: "../../static/images/u-phone.png",
          name: "手机版"
        },
        {
          imgs: "../../static/images/u-hand.png",
          name: "触摸板"
        },
        {
          imgs: "../../static/images/u-computer.png",
          name: "电脑版"
        }
      ]
    }
  },
  components: {
    timershop,
    advertising
  },
  methods: {
    isUser () {
      var phone = localStorage.getItem('phone')
      if (phone) {
        this.isLogin = true
      } else {
        this.isLogin = false
        // console.log(555);
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

  .bottom-area {
  height: 2.3rem;
  width: 100%;
  background-color: #ffffff;
  margin-top: 0.1rem;
  padding: 0 0.09rem;
  box-sizing: border-box;
  text-align: center;
  background: #fff;
}
.bottom-area .t1 {
  padding: 0.05rem 0;
  height: 0.28rem;
  text-align: center;
}
.bottom-area .t1 a {
  display: inline-block;
  width: 0.85rem;
  font-size: 0.16rem;
  height: 0.34rem;
  line-height: 0.32rem;
  position: relative;
}
.bottom-area .t1 a:first-child:before {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.09rem;
  height: 0.15rem;
  width: 0;
  border-right: 1px solid #eaeaea;
}

.bottom-area .t2 {
  padding: 0.2rem 0;
  height: 1rem;
  box-sizing: border-box;
}
.bottom-area .t2 .ta {
  display: inline-block;
  width: 0.41rem;
  height: 0.58rem;
}
.bottom-area .t2 .ta:nth-child(2) {
  margin-left: 0.4rem;
}
.bottom-area .t2 .ta:nth-child(3) {
  margin-left: 0.4rem;
}
.bottom-area .t2:before {
  content: "";
  display: block;
  width: 200%;
  position: relative;
  top: -0.15rem;
  border-top: 1px solid #eaeaea;
  transform: scale(0.5);
  transform-origin: left top;
}

.bottom-area .t2 .imgs {
  display: block;
  height: 0.4rem;
  width: 0.4rem;
}
.bottom-area .t2 .imgs img {
  width: 100%;
}
.bottom-area .t2 .texts {
  display: block;
  font-size: 0.12rem;
  color: #9b9b9b;
}

.bottom-area .t3 {
  height: 0.8rem;
  background: #fff;
}
.bottom-area .t3 a,
.bottom-area .t3 p {
  color: #9b9b9b;
  font-size: 0.12rem;
}
.bottom-area .t3 .po {
  margin-bottom: 0.04rem;
}
</style>
