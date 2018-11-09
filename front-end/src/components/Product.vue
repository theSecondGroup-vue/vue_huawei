<template>
  <div class="product">
    <header>
      <div class="back">
        <a href="#/Home"></a>
      </div>
      <ul class="hd-nav">
        <li v-for="(item,index) in head" :key="index" :class="{'current': curTab === item.name }" @click="curTab = item.name"><a>{{item.name}}</a></li>
      </ul>
      <div class="hd-right">
        <a class="share"></a>
        <a class="more"></a>
      </div>
    </header>
    <div class="banner" style="padding:0.0575rem 0 ">
      <mt-swipe :show-indicators="true">
        <mt-swipe-item><img :src="'https://res.vmallres.com/pimages'+shopInfo.photoPath" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//product/6901443261482//428_428_1536627883158mp.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//product/6901443267248/group//428_428_1540544176527.png" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//product/6901443270521/group//428_428_1540524852961.png" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//product/6901443232413//428_428_1535358175728mp.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//product/6901443210220//428_428_1511858765170mp.jpg" alt="" width="100%" height="100%"></mt-swipe-item>
        <mt-swipe-item><img src="https://res.vmallres.com/pimages//product/6901443270279//428_428_1540353235542mp.png" alt="" width="100%" height="100%"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="title">
      <h1>【{{shopInfo.customizedPromo}}】 {{shopInfo.sbomAbbr}} {{curTab2}}（{{curTab1}}）</h1>
      <p>￥ {{shopInfo.originalPrice}}</p>
      <div :class="{'detail-a':!isA,'detail-b':isA}" >
        <span>送半入耳式耳机！购新机送价值328元豪华礼包（活动结束后站内信发放）！得双倍积分（积分可抵现）</span> <i style="font-style:normal;">千元屏霸 91%屏占比 2000万AI双摄</i>
        <i class="detail_more" :class="{'detail_more-a':!isA,'detail_more-b':isA}" @click="toggle"></i>
      </div>
    </div>
    <div class="gift">
      <div style="display:flex;align-items: center;">
        <span style="padding-right:0.16rem">赠送</span>
        <img src="../../static/images/p-erji.jpg" style="width:0.325rem;">
      </div>
      <span style="background: url('../../static/images/p_arrow_more.png') no-repeat right center;background-size: 0.115rem,0.115rem;padding-right:0.16rem;">选择</span>
    </div>
    <div class="discount">
      <p style="line-height:0.23rem;padding-right:0.138rem;positon:relative">
        <span>整点赠送</span>
        <span>支持分期</span>
        <span>积分翻倍</span>
      </p>
    </div>
    <div style="height:0.07rem;background-color: #eaeaea;"></div>
    <article style="margin-bottom:0.52rem;">
      <dl>
        <dt>颜色</dt>
        <dd>
          <a v-for="(item,index) in color" :key="index" :class="{'current1': curTab1 === item.name }" @click="curTab1 = item.name">{{item.name}}</a>
        </dd>
      </dl>
      <dl>
        <dt>版本</dt>
        <dd>
          <a v-for="(item,index) in version" :key="index" :class="{'current1': curTab2 === item.name }" @click="curTab2 = item.name">{{item.name}}</a>
        </dd>
      </dl>
      <dl>
        <dt>类型</dt>
        <dd>
          <a class="current1">官方标配</a>
        </dd>
      </dl>
      <dl>
        <dt>数量</dt>
        <span class="count">
          <i class="symbol minus" @click="minus()">-</i>
          <input type="text" v-model="count" readonly>
          <i class="symbol add" @click="count++">+</i>
        </span>
      </dl>
    </article>
    <footer>
      <div class="ft-left">
        <div>
          <a></a>
          <p>首页</p>
        </div>
        <div style="position:relative;">
          <a style="background-image: url(../../static/images/p_shoppingCart.png)"></a>
          <p>购物车</p>
          <i id="cartNum" v-show="sumCount!=0">{{sumCount}}</i>
        </div>
        <div>
          <a style="background-image: url(../../static/images/p_service.png)"></a>
          <p>客服</p>
        </div>
      </div>
      <div class="ft-right">
        <div>
          <a href="javasciprt:;" @click="addCar">加入购物车</a>
          <a style="background-color: #ca151e;box-shadow: 0 0 0 1rem #ca151e inset;">立即购买</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Product",
  data() {
    return {
      count: 1,
      sumCount:0,
      isA:false,
      head: [
        {
          name:'商品'
        },
        {
          name:'详情'
        },
        {
          name:'参数'
        },
        {
          name:'评价'
        },
      ],
      curTab: '商品',
      curTab1: '魅海蓝',
      curTab2: '全网通 4GB+64GB',
      color: [
        {
          name:'幻夜黑'
        },
        {
          name:'魅海蓝'
        },
        {
          name:'魅焰红'
        },
        {
          name:'梦幻紫'
        },
        {
          name:'幻影蓝'
        }
      ],
      version: [
        {
          name:'全网通 4GB+64GB'
        },
        {
          name:'全网通 6GB+64GB'
        },
        {
          name:'全网通 8GB+128GB'
        }
      ],
      id: '',
      shopInfo: []
    }
  },
  methods:{
      toggle:function(){
        this.isA=!this.isA;
      },
      minus (){
        if(this.count == 1){
          this.count = 1;
        }else{
          this.count--;
        }
      },
      gitId (){
        var idStr = location.href
        var id = idStr.split("?")[1]
        this.id = id
      },
      getInfo (){
        const apiProxy = 'https://bird.ioliu.cn/v1/?url='
        var url = 'https://openapi.vmall.com/mcp/home/getNewSeckillInfos?portal=2&lang=zh-CN&country=CN&callback=getNewSeckillInfos'
        axios.get(apiProxy + url).then(result=>{
          var res = JSON.parse(result.data.split('getNewSeckillInfos(')[1].split(');')[0])
          var list = res.seckillInfo.seckillPrdList
          // console.log(list)
          for(var i = 0 ; i < list.length ; i++){
            if(list[i].prdId == this.id){
                console.log(list[i]);
                this.shopInfo = list[i]
            }
          }
        });

      },
      addCar () {
        var phone = localStorage.getItem('phone') || ''
        if(localStorage.getItem(phone+'Car')){
          var carInfo = {
          "sbomAbbr":this.shopInfo.sbomAbbr,
          "originalPrice": this.shopInfo.originalPrice,
          "color": this.curTab1,
          "version":this.curTab2,
          "count":this.count
        }
          var oldCarInfoStr = localStorage.getItem(phone+'Car')
          var oldCarInfo = JSON.parse(oldCarInfoStr)
          // console.log(oldCarInfo)
          for(var i = 0 ; i < oldCarInfo.length ; i++){
            if(oldCarInfo[i].sbomAbbr == carInfo.sbomAbbr && oldCarInfo[i].color == carInfo.color && oldCarInfo[i].version == carInfo.version){
              oldCarInfo[i].count+= carInfo.count
              var newCarInfoStr = JSON.stringify(oldCarInfo)
              // console.log(newCarInfoStr)
              localStorage.setItem(phone+'Car',newCarInfoStr)
              this.sumCount = carInfo.count + this.sumCount
              return
            }
          }
          oldCarInfo.push(carInfo)
          // console.log(newCarInfo)
          newCarInfoStr = JSON.stringify(oldCarInfo)
          localStorage.setItem(phone+'Car',newCarInfoStr)
          this.sumCount += carInfo.count
        }else{
          carInfo = [{
          "sbomAbbr":this.shopInfo.sbomAbbr,
          "originalPrice": this.shopInfo.originalPrice,
          "color": this.curTab1,
          "version":this.curTab2,
          "count":this.count
        }]
          var carInfoStr = JSON.stringify(carInfo)
          localStorage.setItem(phone+'Car',carInfoStr)
          console.log(carInfo.count)
          this.sumCount += parseInt(carInfo[0].count)
        }
      },
      showCount () {
        var phone = localStorage.getItem('phone') || ''
        var phoneCarStr = localStorage.getItem(phone+"Car")
        if(phoneCarStr){
          var sum = 0
          var phoneCar = JSON.parse(phoneCarStr)
          for(var i = 0 ; i < phoneCar.length ; i++){
            // console.log(phoneCar[i].count)c
            sum += phoneCar[i].count
          }
          // console.log(sum)
          this.sumCount = sum
        }
      }
  },
  mounted() {
    this.gitId()
    this.getInfo()
    this.showCount()
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 720px;
    height: 0.55rem;
    margin: 0 auto;
    z-index: 100;
}
.back{
  float: left;
}
.back a{
    width: 0.275rem;
    height: 0.275rem;
    margin: 0.138rem 0 0.138rem 0.184rem;
    background: url('../../static/images/p-back.png');
    background-size: 0.275rem 0.275rem;
    display: block;
}
.hd-nav{
  display: flex;

  position: absolute;
  left: 0.69rem;
  right: 0.69rem;
}
.hd-nav li{
    height: 0.55rem;
    text-align: center;
    flex: 1;
    box-sizing: border-box;
}
.hd-nav li a{
    font-size: 16px;
    width: 0.55rem;
    text-align: center;
    margin-right: 0.14rem;
    display: block;
    position: relative;
    line-height: 0.55rem;
    height: 100%;
    font-weight: bold;
    color:#333;
    box-sizing: border-box;
}
.hd-right{
    position: absolute;
    right: 0;
    top: 0.253rem;
    padding: 0 0.09rem;
    z-index: 10;
    margin-top: -0.138rem;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
}
.hd-right .share{
    background: url(../../static/images/p-share.png) no-repeat;
    position: relative;
    background-size: 0.275rem 0.275rem;
    background-position: center;
    width: 0.275rem;
    height: 0.275rem;
    display: block;
}
.hd-right .more{
    margin: 0 0.07rem;
    background: url(../../static/images/p_header_nav.png) no-repeat;
    position: relative;
    background-size: 0.275rem 0.275rem;
    background-position: center;
    width: 0.275rem;
    height: 0.275rem;
    display: block;
}
.current1{
    border: 1px solid #ca141d;
    color: #ca141d!important;
}
.current a{
    border-bottom: 2px solid #ca141d;
    color: #ca141d!important;
}
.banner{
  margin-top: 0.55rem;
  height: 3.91rem;
}
.title{
  padding: 0.115rem 0.184rem;
}
.title h1{
  padding-bottom: 0.092rem;
  font-size: 0.17rem;
  line-height:0.23rem;
}
.title p{
    color: #e01d20;
    padding: 0 0 0.07rem;
    display: flex;
    align-items: center;
    line-height: normal;
    font-size: 0.2rem;
    font-weight: bold;
}
.title .detail-a{
    padding-right: 0.161rem;
    color: #888;
    line-height: 0.16rem;
    max-height: 0.31rem;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 0.13rem;
    margin-top: 0.05rem;
}
.title .detail-b{
    padding-right: 0.161rem;
    color: #888;
    line-height: 0.16rem;
    word-break: break-all;
    text-overflow: ellipsis;
    display: block;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 0.13rem;
    margin-top: 0.05rem;
}
.title span{
    color: #ca151e;
}
.title .detail_more-a{
    display: block;
    position: absolute;
    right: 0.12rem;
    top: 79%;
    transform:rotate(90deg);
    width: 0.115rem;
    height: 0.115rem;
    background: url('../../static/images/p_arrow_more.png') no-repeat center;
    background-size: 0.115rem,0.115rem;
}
.title .detail_more-b{
    display: block;
    position: absolute;
    right: 0.12rem;
    top: 79%;
    transform:rotate(270deg);
    width: 0.115rem;
    height: 0.115rem;
    background: url('../../static/images/p_arrow_more.png') no-repeat center;
    background-size: 0.115rem,0.115rem;
}
.gift{
  margin: 0 0.184rem;
  padding: 0.0805rem 0;
  display: flex;
  align-items: center;
  border-top: 1px solid #eaeaea;
  justify-content: space-between;
}
.discount{
  border-top: 1px solid #eaeaea;
  background-color: #f6f6f6;
  padding: 0 0.184rem;
}
.discount span{
  color:#888;
  display: inline-block;
  height: 0.345rem;
  line-height: 0.3795rem;
  padding: 0 0.23rem 0 0.15rem;
  background: url('../../static/images/p_discount.png') no-repeat left center;
  background-size:0.115rem 0.115rem;
}
article{
  padding: 0 0.184rem;
}
article dl{
    padding: 0.07rem 0;
    border-bottom: 1px solid #eaeaea;
    display: flex;
}
article dl dt{
    width: 0.55rem;
    float: none;
    padding-top: 0.0805rem;
    flex-shrink: 0;
    overflow: hidden;
}
article dl dd{
    width: 100%;
    flex-shrink: 1;
    overflow: hidden;
}
article dl dd a{
    text-align: left;
    max-width: 100%;
    font-size: 0.138rem;
    height: 0.26rem;
    line-height: 0.26rem;
    padding: 0 0.138rem;
    border-radius: 0.138rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: text-bottom;
    min-width: 0.138rem;
    border: 1px solid #b2b2b2;
    display: inline-block;
    margin: 0.04rem 0.07rem 0.04rem 0;
    background-color: #fff;
    color: #333;
    box-sizing: border-box;
}
.count{
    display: inline-block;
    width: 1.2rem;
    height: 0.4rem;
    border: 1px solid #EAEAEA;
    border-radius: 0.3rem;
    overflow: hidden;
    background: #EAEAEA;
}
.symbol{
    display: inline-block;
    width: 0.24rem;
    height: 100%;
    text-align: center;
}
.count input{
    width: 0.6rem;
    height: 0.4rem;
    border: 0px;
    text-align: center;
    border-left: 1px solid #EAEAEA;
    border-right: 1px solid #EAEAEA;
}
footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 720px;
    background-color: #fff;
    z-index: 100;
    border-top: 1px solid #eaeaea;
    box-sizing: border-box;
    display: flex;
}
.ft-left{
    max-height: 0.52rem;
    height: 100%;
    text-align: center;
    flex-shrink: 0;
}
.ft-right{
    width: 100%;
    position: relative;
    flex-shrink: 1;
}
.ft-left div{
    width: 0.6325rem;
    padding: 0.046rem 0;
    float: left;
    border-right: 1px solid #eaeaea;
    box-sizing: border-box;
}
.ft-left div a{
    width: 100%;
    height: 0.27rem;
    display: block;
    margin: 0 auto;
    position: relative;
    background: transparent url(../../static/images/p_home.png) no-repeat center;
    background-size: 0.27rem 0.27rem;
    background-position: 50% 50%;
}
.ft-left div p{
    color: #888;
    padding-top: 0.02rem;
}
.ft-right div{
    position: relative;
    z-index: 100;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 720px;
    margin: 0 auto;
    background-color: #fff;
    display: flex;
    box-sizing: border-box;

}
.ft-right div a{
    border: 0;
    border-radius: 0;
    height: 0.52rem;
    box-sizing: border-box;
    flex: 1;
    font-size: 0.15rem;
    background-color: #d55119;
    box-shadow: 0 0 0 0.7rem #d55119 inset;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
#cartNum{
    min-width: 0.14rem;
    height: 0.14rem;
    line-height: 0.14rem;
    border-radius: 50%;
    box-shadow: 0 0 0 3px #fff;
    display: inline-block;
    font-style: normal;
    color: #fff;
    text-align: center;
    background-color: #ca141d;
    margin: 0 auto;
    position: absolute;
    bottom: 0.44rem;
    right: 0.07rem;
}
</style>
