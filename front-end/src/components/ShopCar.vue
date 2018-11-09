<template>
  <div class="shopCar">
    <div class="headerBox">
      <header>
      <h1>购物车</h1>
      <div v-show="isUserCar">
        <ul v-show="flag" class="operation">
          <li style="color:red">领券<span>|</span></li>
          <li @click="isFlag()">编辑</li>
        </ul>
        <ul v-show="!flag" class="operation">
          <li @click="isFlag()">完成</li>
        </ul>
      </div>
    </header>
    </div>
    <div class="shopInfo">
      <div  v-show="!isUserCar"  class="noCarInfo">
        <div class="nologin">
          <i></i>
          <p>购物车中还没有商品，赶紧选购吧</p>
          <button>去逛逛</button>
        </div>
        <div class="carRec">
          <h2>热销推荐</h2>
          <ul class="carRecInfo">
            <li v-for="(item,index) in product" :key="index">
              <a href="#">
                <p class="p-img">
                  <img :src="'https://res.vmallres.com/pimages/'+item.photoPath+'428_428_'+item.photoName" alt="" width="100%">
                  <!-- https://res.vmallres.com/pimages/product/6901443260232//428_428_1539230426520mp.png -->
                </p>
                <p class="p-brand">{{item.displayName}}</p>
                <p class="p-price">
                  <span>￥{{item.price}}</span>&nbsp;&nbsp;&nbsp;
                  <span v-if="item.price != item.promPrice" class="promPrice">￥{{item.promPrice}}</span>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="isUserCar" class="hasCarInfo">
        <ul>
          <li v-for="(item,index) in phoneCar" :key="index">
            <div class="shopLeft">
              <input type="checkbox" class="checkbox"
               @click="oneCheckout(item)"
               :checked='item.isCheckbox'
               v-model="item.isCheckbox">
            </div>
            <div class="shopRight">
              <div class="shopImg">
                <a href="#">
                  <img :src="item.src" alt="" width="100%">
                </a>
              </div>
              <div class="shopCar-Info">
                <p class='p-name'>{{item.sbomAbbr}} {{item.version}} （{{item.color}}）</p>
                <span class="p-price">￥{{item.originalPrice}}</span>
                <span class="count">
                  <i class="symbol minus" @click="item.count--">-</i>
                  <input type="text" :value="item.count = (item.count == 0 ? 1 : item.count)" readonly>
                  <i class="symbol add" @click="item.count++">+</i>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="isUserCar" class="clonePrice">
      <div class="clonePrice-left">
        <input type="checkbox" class='checkbox' :checked='checked_all' @click="allInput()">
      </div>

      <div class="clonePrice-right">
        <span class="allPrcie">￥{{totalPrice}}</span>
        <button v-show="flag" class="clonePrice-btn">购买({{totalCount}})</button>
        <button class="clonePrice-btn"
         v-show="!flag"
         @click="deleShop()"
         >删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ShopCar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      phoneCar:[],
      isUserCar: false,
      flag: true,
      product: [],
      // count: 1,
      checked_all: false,
      totalPrice: 0,
      totalCount: 0
    }
  },
  methods: {
    showCar () {
      const apiProxy = 'https://bird.ioliu.cn/v1/?url='
      var url = 'https://openapi.vmall.com/mcp/cart/queryEptCartRecommendPrds?portal=2&lang=zh-CN&country=CN&callback=__jp3'
      axios.get(apiProxy + url).then(result => {
        var res = JSON.parse(result.data.split('__jp3(')[1].split(');')[0])
        // console.log(res.products);
        for(var i = 0 ; i < res.products.length ; i++){
          this.product.push(res.products[i])
        }
      })
    },
    getLocal () {
      var phone = localStorage.getItem('phone') || ''
      var phoneCarStr = localStorage.getItem(phone+'Car')
      if(phoneCarStr) {
        // console.log('商品存在，等待完善',phoneCarStr)
        this.phoneCar = JSON.parse(phoneCarStr)
        // console.log(this.phoneCar)
        this.isUserCar = true
      }else {
        this.isUserCar = false
      }
    },
    isFlag () {
      this.flag = !this.flag
    },
    oneCheckout (item) {
      if(typeof item.isCheckbox == 'undefined'){
        // console.log(1)
        this.$set(item,'isCheckbox',true)
      }else{
        // console.log(2)
        item.isCheckbox = !item.isCheckbox
      }
      this.allCheckout()
    },
    allCheckout () {
      var flag = true
      this.phoneCar.forEach(function(value,index) {
        if(!value.isCheckbox){
          flag = false
        }
      })
      this.checked_all = flag ? true : false
    },
    allInput () {
      this.checked_all = !this.checked_all
      this.phoneCar.forEach((value,index) => {
        value.isCheckbox = this.checked_all
        // console.log(this.phoneCar)
      })
      this.allPrice()
    },
    allPrice () {
      var pitchList = this.phoneCar.filter((el) => {
        return el.isCheckbox
      })
      var totalPrice = 0;
      var totalCount = 0;
      for(var i = 0 ; i < pitchList.length ; i++){
        totalCount += pitchList[i].count
        totalPrice += pitchList[i].count * pitchList[i].originalPrice
      }
      this.totalCount = totalCount
      this.totalPrice = totalPrice
      // console.log(totalPrice)
    },
    deleShop () {
       var pitchList = this.phoneCar.filter((el) => {
        return el.isCheckbox
      })
      console.log(pitchList)
      var phone = localStorage.getItem('phone') || ''
      var phoneCarStr = localStorage.getItem(phone+'Car')
      var phoneCar = JSON.parse(phoneCarStr)
      for(var i = 0 ; i < phoneCar.length ; i++){
        for(var j = 0 ; j < pitchList.length ; j++){
          if(phoneCar[i].sbomAbbr == pitchList[j].sbomAbbr && phoneCar[i].color == pitchList[j].color && phoneCar[i].version == pitchList[j].version){
            phoneCar.splice(i,1)
          }
          // console.log(2)
        }
      }
      // console.log(phoneCar)
      phoneCarStr = JSON.stringify(phoneCar)
        if(phoneCar.length == 0){
          localStorage.removeItem(phone+'Car')
        }else{
          localStorage.setItem(phone+'Car',phoneCarStr)
        }
        location.reload()
    }
  },
  computed: {
    // checked: function(){
    //   return this.checked_all
    // }
  },
  mounted () {
    this.showCar()
    this.getLocal()
  },
  updated () {
    // console.log(1)
    this.allPrice()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .shopCar {
    background: #e0e0e0;
  }
  .headerBox {
    height: 0.62rem;
  }
  header {
    display: flex;
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    /* top:0; */
    padding:0 0.2rem;
    justify-content: space-between;
    background: #fff;
  }
  header h1{
    height: 0.62rem;
    line-height: 0.62rem;
    font-weight: normal;
    font-size: 0.20rem;
    color:#000;
  }
  .operation {
    display: flex;
    height: 0.62rem;
    line-height: 0.62rem;
    font-size:0.20rem;
  }
  .operation li span {
    padding:0 0.05rem;
    color:#f0f0f0;
  }
  .nologin {
    width: 100%;
    height: 2rem;
    background: #EAEAEA;
    overflow: hidden;
  }
  .nologin p {
    text-align: center;
    font-size: 0.2rem;
    color: #888888;
    margin-bottom: 0.1rem;
  }
  .nologin i {
    display: block;
    width: 0.36rem;
    height: 0.36rem;
    /* background: #000; */
    background: url(https://res.vmallres.com/nwap/20181015/staticm/img/icon32.a3370aa.png);
    margin: 0.4rem auto 0.1rem;
    background-size: 100%;
  }
  .nologin button {
    display: block;
    width: 1rem;
    height: 0.4rem;
    margin: 0 auto;
    border: 1px solid #CC252E;
    color: #CC252E;
    border-radius: 0.4rem;
  }
  .carRec h2 {
    font-weight: normal;
    padding: 0.1rem 0.2rem;
    font-size: 0.14rem;
  }
  .carRecInfo {
    display: flex;
    flex-wrap: wrap;
  }
  .carRecInfo li {
    background: #fff;
    box-sizing: border-box;
    width: 50%;
    height: 2.4rem;
    /* background: pink; */
    border-top: 1px solid #EAEAEA;
  }
  .carRecInfo li:nth-child(2n+1){
    border-right: 1px solid #EAEAEA;
  }
  .carRecInfo li a {
    display: block;
  }
  .p-img {
    width: 1.10rem;
    height: 1.10rem;
    margin: 0.3rem auto 0rem;
  }
  .p-brand {
    text-align: center;
    margin: 0.2rem 0 0.1rem;
  }
  .p-price {
    text-align: center;
    color:#CC252E;
    font-size: 0.18rem;
  }
  .promPrice {
    color:#888888;
    text-decoration: line-through;
  }
  .hasCarInfo ul {
    min-height: 6.2rem;
    height: 100%;
    position: relative;
  }
  .hasCarInfo ul li {
    box-sizing: border-box;
    padding:0 0.13rem;
    width: 100%;
    min-height: 1.4rem;
    /* background: #000; */
    border-top: 1px solid #EAEAEA;
    background: #fff;
    margin-bottom: 0.08rem;
    display: flex;
  }
  .shopLeft {
    width: 10%;
    min-height: 1.4rem;
    position: relative;
    /* background: #000; */
  }
  .shopRight {
    width: 90%;
    height: 100%;
    min-height: 1.4rem;
    display: flex;
  }
  .checkbox {
    /* display: block; */
    /* width: 2rem; */
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .shopImg a {
    display: block;
    margin: 0.2rem 0;
    width: 1rem;
    height: 1rem;
  }
  .shopCar-Info {
    margin: 0.2rem 0;
    width: 5rem;
    height: 1rem;
    padding-left: 0.2rem;
    /* background: pink; */
  }
  .p-name {
    font-size: 0.18rem;
    line-height: 0.25rem;
    margin-bottom: 0.05rem;
  }
  span.p-price {
    display: inline-block;
    padding:0.05rem 0.1rem 0 0 ;
  }
  .count {
    display: inline-block;
    width: 1.2rem;
    height: 0.4rem;
    border:1px solid #EAEAEA;
    border-radius: 0.3rem;
    overflow: hidden;
    background: #EAEAEA;
  }
  .count input {
    width: 0.6rem;
    height: 0.4rem;
    border : 0px;
    text-align: center;
    border-left: 1px solid #EAEAEA;
    border-right: 1px solid #EAEAEA;
  }
  .symbol {
    display: inline-block;
    width: 0.24rem;
    height: 100%;
    text-align: center;
    /*
    font-size:0.20rem;
    height: 0.4rem; */
  }
  .clonePrice {
    box-sizing: border-box;
    width: 100%;
    height: 0.53rem;
    padding:0 0 0 0.13rem;
    background: #fff;
    position: absolute;
    bottom: 0.53rem;
    display: flex;
    justify-content: space-between;
  }
  .clonePrice-left {
    width: 10%;
    height: 100%;
    position: relative;
  }
  .clonePrice-right {
    /* width: 90%; */
    display: flex;
    height: 100%;
  }
  .clonePrice-btn {
    display: block;
    width: 1rem;
    height: 100%;
    border: 0px;
    background: #CA151E;
    color: #fff;
    margin-left: 0.1rem;
  }
  .allPrcie {
    display: block;
    height: 100%;
    line-height: 0.47rem;
    font-size:0.20rem;
    color:#CC252E;
  }
</style>
