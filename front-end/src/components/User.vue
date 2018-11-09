<template>
  <div class="user">
    <!-- 头部 -->
    <section class="userinfo" id="userinfo">
      <div class="users">
        <p class="u-bg"></p>
        <div class="user-a" v-if="isLogins">
          <p class="login-vip">
            <a href="#">
              <router-link to="/login" tag="span">登录/注册</router-link>
              <i class="arrow"></i>
            </a>
            <a href="#" class="more-vip">
              享受更多会员权益
            </a>
          </p>
        </div>

        <div class="user-b" v-else>
          <p class="phone">
            <span id="back-phone" class="back-phone">{{phones}}</span>
            <a href="#" class="phone-a">实名赚积分></a>
          </p>
          <p class="phone-text">
            <a href="#" class="text-a">
              <span class="text-power">
                <i></i>
                <em>查看我的权益</em>
              </span>
            </a>
          </p>
        </div>

        <div class="info-vip">
          <a href="#" class="short-cut"></a>
        </div>
      </div>
      <div class="person">
        <p class="user-person">
          <a href="#">
            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/defaultface_user_after.png"/>
          </a>
        </p>
      </div>
    </section>
    <!-- 积分 -->
    <section class="score-user">
      <ul class="score-ul">
        <li v-for="(item,index) in scoreUser"
            :key="index"
        >
            <a href="#" class="score-a">
            <span class="score-img">
              <img :src="item.scoreSrc" />
            </span>
            <span class="score-title">{{item.scoreTitle}}</span>
            <span class="score-num">{{item.scoreNum}}</span>
          </a>
        </li>
      </ul>
    </section>

    <!-- 我的订单 -->
    <section class="mytip">
      <five-tips></five-tips>
    </section>

    <!-- 我的Vmall -->
    <section class="mall">
      <span class="mall-title">
        我的Vmall
      </span>
      <Vmall :mallAll="
      [{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_privilege.png',name:'会员频道'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_customer_auth.png',name:'实名认证'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_address_manager.png',name:'收货地址'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_easybuy.png',name:'优享购'}]">
      </Vmall>

      <Vmall :mallAll="
      [{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_priority.png',name:'优购码'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_booking.png',name:'预约记录'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_gift.png',name:'邀请有礼'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_userCont.png',name:'帐号中心'}]">
      </Vmall>
    </section>

    <!-- 图片 -->
    <section class="picImg">
      <p class="picp">
        <a href="#" class="pica">
          <img src="https://res.vmallres.com/pimages//sale/2018-07/20180713201600260.jpg"/>
        </a>
      </p>
    </section>

    <!-- 我的服务 -->
    <section class="mall">
      <span class="mall-title">
        我的服务
      </span>
      <Vmall :mallAll="
      [{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_recycleN.png',name:'以旧换新'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_charge.png',name:'手机充值'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_servicecenter.png',name:'服务网点'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_hnrstoreaddr.png',name:'线下门店'}]">
      </Vmall>

      <Vmall :mallAll="
      [{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_help_faq.png',name:'常见问题'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_feedback.png',name:'意见反馈'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_service_protocol.png',name:'补购保障'},{hrefs:'https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_contactus.png',name:'客服中心'}]">
      </Vmall>
    </section>

    <!-- 我的消息 -->
    <div class="myMsg">
      <section class="msg-top">
          <span class="msg-title">
            我的消息
          </span>

          <Mymsg tips="为你推荐" time="11-01 14:17">
            <a href="#" class="news-a">
              <img src="https://res.vmallres.com/pimages/recommendmsg/2018110102176139.jpg"/>
            </a>

          </Mymsg>

          <Mymsg tips="为你推荐" time="10-31 23:33">
            <a href="#" class="news-a">
              <img src="https://res.vmallres.com/pimages/recommendmsg/2018102703418474.png"/>
            </a>
          </Mymsg>

          <Mymsg tips="为你推荐" time="10-31 23:32">
            <a href="#" class="news-a">
              <img src="https://res.vmallres.com/pimages/recommendmsg/2018103111320207.png"/>
            </a>
          </Mymsg>

          <Mymsg tips="为你推荐" time="10-27 10:17">
              <a href="#" class="news-b">
                <div class="news-img">
                    <span class="pics">
                        <img src="https://res.vmallres.com/pimages/recommendmsg/2018102710172431.jpg"/>
                    </span>
                </div>
                <div class="news-text">
                    <p class="p1"> 华为车载充电器 </p>
                    <p class="p2">开车充电30分钟，从容一整天，晒单有机会赢3999携程礼品卡 </p>
                </div>
            </a>
          </Mymsg>

          <Mymsg tips="为你推荐" time="10-27 10:16">
              <a href="#" class="news-b">
                <div class="news-img">
                    <span class="pics">
                        <img src="https://res.vmallres.com/pimages/recommendmsg/2018102710168590.jpg"/>
                    </span>
                </div>
                <div class="news-text">
                    <p class="p1">  华为无线充电器 </p>
                    <p class="p2">仅售99元起，支持HUAWEI Mate 20 pro 15W及iPhone系列 7.5W快充，晒单 </p>
                </div>
            </a>
          </Mymsg>
      </section>
      <div class="loading">
        <div class="all">
        <h3 class="load-h3">
          <span class="load-span">
              登录即可查看全部动态消息
              <a href="#" class="load-a">现在登录> </a>
          </span>
        </h3>
      </div>
    </div>
  </div>
    <!-- 反馈 -->
    <div>
      <section class="bottom-area">
        <p class="t1">
          <router-link to="/login" v-if="isLogins">登录</router-link>
          <router-link to="" v-else>
                <span @click="logout">退出</span>
          </router-link>
          <a href="#" class="b-back">反馈</a>
        </p>
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
import fiveTips from "../views/fiveTips.vue";
import Vmall from "../views/Vmall.vue";
import Mymsg from "../views/Mymsg.vue";
import axios from "axios";

export default {
  name: "User",
  data() {
    return {
      scoreUser: [
        {
          scoreSrc:
            "https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_score.png",
          scoreTitle: "积分",
          scoreNum: "-- 分"
        },
        {
          scoreSrc:
            "https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_coupon.png",
          scoreTitle: "优惠券",
          scoreNum: "-- 张"
        },
        {
          scoreSrc:
            "https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_voucher.png",
          scoreTitle: "代金券",
          scoreNum: "-- 元"
        }
      ],
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
      ],
      sysMessageList: [],
      isLogins:true,
      phones:''
    };
  },
  components: {
    fiveTips,
    Vmall,
    Mymsg
  },
  methods: {
      //判断是否登录
      isLogin () {
        var phone = localStorage.getItem('phone');
        if (phone) {
          this.isLogins = false;
          var num = this.getRand(0,20);
          var price = this.getRand(0,10);
          this.scoreUser[0].scoreNum = num + '分';
          this.scoreUser[1].scoreNum = price + '张';
          var tol = this.scoreUser[0].scoreNum.split('分')[0] * this.scoreUser[1].scoreNum.split('张')[0];
          this.scoreUser[2].scoreNum = tol + '.00' + '元';
        } else {
          this.isLogins = true;
        }
      },
      //获取随机数
      getRand(startNum,endNum){
        return Math.round(Math.random()*(endNum-startNum)) + startNum;
      },
      //退出登录
      logout () {
        localStorage.removeItem('phone');
        location.reload();
        // this.$router.push('login','login');
      },
      //电话号码的代替
      hidtel () {
        var str=localStorage.getItem('phone');
        if (str) {
          var str2 = str.substr(0,3) + "****" + str.substr(7);
          this.phones = str2;
        } else{
          console.log('phone不存在')
        }

      }
  },
  mounted () {
    this.isLogin();
    this. hidtel();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
  height: 100%;
  width: 100%;
  background-color: #eaeaea;
}
.userinfo {
  height: 0.98rem;
  background-color: #fff;
  position: relative;
}
.users {
  position: fixed;
  width: 100%;
  max-width: 7.2rem;
  height: 0.6rem;
  z-index: 10;
  top: 0;
  transform: translate3d(0, 0, 0);
}
.u-bg {
  width: 100%;
  height: 100%;
  background: url(../../static/images/u-bg.jpg) no-repeat center top #bf1f1f;
  background-size: auto 0.6rem;
}
.user-a {
  position: absolute;
  height: 0.54rem;
  left: 0.2rem;
  top: 0;
}
.user-b {
  width: 1.83rem;
  height: 0.6rem;
  position: absolute;
  left: 0.2rem;
  top: 0;
}
.user-b .phone {
  display: block;
  width: 1.9rem;
  height: 0.375rem;
  padding: 0.08rem 0;
  box-sizing: border-box;
}
.phone  .back-phone {
  display: block;
  font-size: 0.18rem;
  color: #fff;
  height: 100%;
  width: 0.99rem;
  float: left;
}
.phone  .phone-a {
  display: block;
  float: right;
  opacity: 0.9;
  color: #fff;
  font-size: 0.12rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 0.05rem;
  padding: 0 0.02rem;
  box-sizing: border-box;
  margin-left: 0.1rem;
}
.phone-text {
  width: 100%;
  height: 0.24rem;
}
.phone-text .text-a {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  height: 0.22rem;
  width: 1.05rem;
  border-radius: 0.1rem;
  background-color: #ffc63c;
  border-bottom: 0.02rem solid #da9d40;
  border-top: 0.02rem solid #fbd79e;
}
.phone-text .text-a .text-power {
  display: block;
  font-size: 0.5rem;
  height: 100%;
  color: #934200;
  padding: 0 0.05rem;
  display: flex;
  overflow: hidden;
  align-items: center;
}
.phone-text .text-a .text-power i {
    width: 0.12rem;
    height: 0.12rem;
    display: block;
    background: url(../../static/images/icon.png) no-repeat;
    background-size: 0.12rem 0.12rem;
    margin-right: 0.06rem;
}
.phone-text .text-a .text-power em {
  height: 0.17rem;
  width: 0.72rem;
  line-height: 0.15rem;
  align-self: center;
  overflow: hidden;
  -webkit-line-clamp: 1;
  font-size: 0.12rem;
}

.login-vip {
  padding: 0.16rem 0;
  display: block;
  box-sizing: border-box;
}
.login-vip a {
  color: #fff;
  letter-spacing: 0.02rem;
  font-size: 0.13rem;
  line-height: 1.2;
  position: relative;
  top: -0.1rem;
}
.login-vip .more-vip {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.13rem;
  display: block;
  line-height: 1.3;
}
.login-vip .arrow {
  width: 0.14rem;
  height: 0.14rem;
  vertical-align: text-top;
  display: inline-block;
  background: url(../../static/images/u-right.png) no-repeat center;
  background-size: 0.14rem 0.14rem;
}
.userinfo .info-vip {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
}
.info-vip .short-cut {
  background: transparent url(../../static/images/u-info.png) scroll no-repeat;
  position: relative;
  padding: 0.1rem 0.1rem;
  margin: 0 0.1rem;
  background-size: 0.28rem 0.26rem;
  background-position: center;
  width: 0.28rem;
  height: 0.26rem;
  display: inline-block;
}
.person {
  width: 4.14rem;
  height: 0.69rem;
  margin-bottom: 0.25rem;
  background: url(../../static/images/u-bg.jpg) no-repeat center top #bf1f1f;
  background-size: auto 0.6rem;
  position: relative;
}
.person .user-person {
  display: block;
  width: 0.64rem;
  height: 0.64rem;
  background-color: #eaeaea;
  border-radius: 50%;
  float: left;
  position: absolute;
  bottom: -0.3rem;
  left: 50%;
  margin-left: -0.28rem;
  z-index: 10;
}
.person .user-person img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  vertical-align: top;
  overflow: hidden;
}

.score-user {
  padding: 0.1rem 0;
  background-color: #fff;
  margin-bottom: 0.05rem;
  text-align: center;
}
.score-user .score-ul {
  width: 100%;
  height: 0.4rem;
  display: flex;
  align-items: center;
}
.score-user .score-ul li {
  width: 1.38rem;
  height: 0.4rem;
}
.score-user .score-ul .score-a {
  display: block;
  position: relative;
}
.score-user .score-ul .score-img {
  width: 0.23rem;
  height: 0.15rem;
  display: inline-block;
}
.score-user .score-a span {
  display: inline-block;
}
.score-user .score-ul .score-img img {
  width: 100%;
  position: relative;
  top: 0.05rem;
}
.score-user .score-ul .score-title {
  font-size: 0.13rem;
  color: #888;
  margin-left: 0.03rem;
}
.score-user .score-ul .score-num {
  font-size: 0.12rem;
  line-height: 0.15rem;
  color: #333;
  display: block;
}
.score-user .score-a:after {
  content: "";
  width: 1px;
  height: 0.2rem;
  background-color: #eee;
  position: absolute;
  right: 0;
  top: 50%;
}
.mytip {
  width: 100%;
  height: 1.16rem;
  background: #fff;
  margin-bottom: 0.05rem;
}
.mall {
  width: 100%;
  height: 2.34rem;
  background: #fff;
  margin-bottom: 0.05rem;
}
.mall .mall-title {
  display: block;
  width: 100%;
  padding: 0 0.15rem;
  box-sizing: border-box;
  font-size: 0.14rem;
  border-bottom: 1px solid #eaeaea;
  height: 0.48rem;
  line-height: 0.48rem;
  position: relative;
  background: #fff;
}
.picImg {
  width: 100%;
  height: 1.27rem;
  margin-bottom: 0.05rem;
  background: #fff;
}
.picImg .pica {
  display: block;
  width: 100%;
  height: 1.27rem;
  text-align: center;
}
.picImg .pica img {
  width: 100%;
  height: 100%;
}
.msg-top {
  width: 100%;
  height: 8.35rem;
  margin-bottom: 0.08rem;
  background: #fff;
}
.msg-top .msg-title {
  display: block;
  width: 100%;
  padding: 0 0.15rem;
  box-sizing: border-box;
  font-size: 0.14rem;
  border-bottom: 1px solid #eaeaea;
  height: 0.48rem;
  line-height: 0.48rem;
  position: relative;
  background: #fff;
}
.myMsg .loading {
  padding: 0 0.15rem;
  box-sizing: border-box;
  width: 100%;
  height: 0.7rem;
  text-align: center;
  overflow: hidden;
}
.all {
  width: 85%;
  height: 100%;
  margin: 0 auto;
}
.loading .load-h3 {
  display: block;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #d2d2d2;
  position: relative;
  top: 0.3rem;
}
.loading .load-span {
  color: #888;
  font-size: 0.14rem;
  width: 2.87rem;
  height: 0.17rem;
  line-height: 0.16rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
  top: -0.08rem;
  background-color: #eaeaea;
  font-weight: normal;
}
.loading .load-a {
  font-size: 0.14rem;
  text-decoration: underline;
  color: #888;
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
