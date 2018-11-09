<template>
    <div class="fiveTips">
      <div class="tips">
        <span class="mine">
          我的订单
        </span>
        <span @click="isLogins" v-if="!isLogin1">
          <a href="#" class="more-tips">全部订单</a>
        </span>
      </div>
        <ul class="my-row">
            <li v-for="(item,index) in fiveList"
                :key="index"
                @click="isLogins"
            >
                <router-link to="/login" class="myrowTip" v-if="isLogin2">
                    <p class="myrowImg">
                            <img :src="item.src"/>
                    </p>
                    <p class="myMoney">
                    {{item.name}}
                    </p>
                </router-link>
                <router-link to="/User" class="myrowTip" v-else>
                    <p class="myrowImg">
                        <img :src="item.src"/>
                    </p>
                    <p class="myMoney">
                    {{item.name}}
                    </p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin1:false,
      isLogin2:false,
      fiveList: [
        {
          src:
            "https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_waitpay.png",
          name: "待付款"
        },
        {
          src:
            "https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_waitreceived.png",
          name: "待收货"
        },
        {
          src:
            "https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_waitremark.png",
          name: "待评价"
        },
        {
          src:
            "https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_exchange.png",
          name: "退换货"
        },
        {
          src:
            "https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_recycle.png",
          name: "回收单"
        }
      ]
    }
  },
  methods: {
    isLogins () {
        var phone = localStorage.getItem('phone');
        if (phone) {
          this.isLogin2 = true;
          this.$router.push('User','/User');
        } else {
          this.isLogin2 = false;
          this.$router.push('login','/login')
        }
      },
      isLoginto () {
        var phone = localStorage.getItem('phone');
        if (phone) {
          this.isLogin1 = true;
          this.$router.push('User','/User');
        } else {
          this.isLogin1 = false;
          this.$router.push('login','/login')
        }
      }
    }

}
</script>

<style scoped>

 .tips {
  padding: 0 0.2rem;
  box-sizing: border-box;
  width: 100%;
  height: 0.48rem;
  border-bottom: 1px solid #eaeaea;
  font-size: 0.12rem;
  line-height: 0.48rem;
}
.mine {
  float: left;
  font-size: 0.14rem;
  color: #333;
}
.more-tips {
  display: block;
  position: relative;
  top: -0.02rem;
  float: right;
  color: #888;
  padding-right: 0.14rem;
  box-sizing: border-box;
  background: url(../../static/images/u-mineright.png) no-repeat center right;
  background-size: 0.12rem 0.12rem;
  font-size: 0.11rem;
}
.fiveTips {
  width: 100%;
  background: #fff;
  height: 0.68rem;
}
.fiveTips .my-row {
  width: 100%;
  background: #fff;
  height: 0.68rem;
  display: flex;
}
.fiveTips .my-row li {
  width: 25%;
  height: 100%;
  flex: 1;
}
.fiveTips .myrowTip {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.1rem 0;
  box-sizing: border-box;
  text-align: center;
}
.fiveTips .myrowImg {
  width: 0.3rem;
  height: 0.3rem;
  padding: 0.02rem;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
}
.fiveTips .myrowImg img {
  width: 100%;
}
.fiveTips .myMoney {
  padding-top: 0.04rem;
  display: block;
  font-size: 0.12rem;
  color: #333;
  line-height: 1;
}
</style>
