<template>
  <div>
    <header>
      <div class="search">
        <input type="text" placeholder="荣耀 8X">
        <span class="iconfont icon-sousuo"></span>
      </div>
      <span class="iconfont icon-gengduo"></span>
    </header>
    <article>
      <nav>
        <ul>
          <li v-for="(item,index) in list" :key="index" :class="{'current': curTab === item.name }" @click="curTab = item.name">
            <a>{{item.name}}</a>
          </li>
        </ul>
      </nav>
      <section v-if="curTab=='为您推荐'">
        <div>
          <img v-for="(item,index) in banner" :key="index" :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="" class="pic">
        </div>
        <div class="pic">
          <div class="wapper">
            <img v-for="(item,index) in wapperImg" :key="index" :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="" class="wapperImg">
          </div>
        </div>
        <div class="phonelist">
          <!-- 热销 -->
          <div style="overflow:hidden">
            <h3>{{rexiaoName}}</h3>
            <div class="b">
              <ul>
                <li v-for="(item,index) in rexiao" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- 超值 -->
          <div style="overflow:hidden">
            <h3>{{chaozhiName}}</h3>
            <div class="b">
              <ul>
                <li v-for="(item,index) in chaozhi" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- 移动4G -->
          <div style="overflow:hidden">
            <h3>{{xidongName}}</h3>
            <div class="b">
              <ul>
                <li v-for="(item,index) in xidong" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section v-if="curTab=='华为手机'">
        <div class="phonelist">
          <!-- 精选 -->
          <div style="overflow:hidden">
            <h3>{{jingxuanName}}</h3>
            <div class="b">
              <ul>
                <li v-for="(item,index) in jingxuan" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- 手机分类 -->
          <div style="overflow:hidden">
            <h3>{{fenleiName}}</h3>
            <div class="b">
              <ul>
                <li v-for="(item,index) in fenlei" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section v-if="curTab=='荣耀手机'">
        <div class="phonelist">
          <!-- 精选 -->
          <div style="overflow:hidden">
            <h3>{{jingxuanName1}}</h3>
            <div class="b">
              <ul>
                <li v-for="(item,index) in jingxuan1" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- 手机分类 -->
          <div style="overflow:hidden">
            <h3>{{fenleiName1}}</h3>
            <div class="b">
              <ul>
                <li v-for="(item,index) in fenlei1" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'List',
  data () {
    return {
      curTab: '为您推荐',
      msg: 'Welcome to Your Vue.js App',
      // 为您推荐开始
      rexiaoName: '',
      chaozhiName: '',
      xidongName: '',
      list: [],
      banner: [],
      wapperImg: [],
      rexiao: [],
      chaozhi: [],
      xidong: [],
      // 为您推荐结束 华为手机开始
      jingxuanName: '',
      jingxuan: [],
      fenleiName: '',
      fenlei: [],
      // 华为手机结束 荣耀手机开始
      jingxuanName1: '',
      jingxuan1: [],
      fenleiName1: '',
      fenlei1: []
    }
  },
  methods: {
    getrRecommend () {
      // const apiProxy = 'https://bird.ioliu.cn/v1/?url='
      // var url = 'https://openapi.vmall.com/mcp/getCategoryInfo?portal=2&lang=zh-CN&country=CN&callback=getCategoryInfo'
      axios.get('../../static/json/xxx.json').then(result => {
        // var res = JSON.parse(result.data.split('getCategoryInfo(')[1].split(');')[0])
        console.log(result.data[0].subCategorys[0].subCategorys)
        // 为您推荐开始
        this.list = result.data
        this.banner = result.data[0].subCategorys[4].subCategorys
        this.wapperImg = result.data[0].subCategorys[3].subCategorys
        this.rexiao = result.data[0].subCategorys[0].subCategorys
        this.rexiaoName = result.data[0].subCategorys[0].name
        this.chaozhiName = result.data[0].subCategorys[1].name
        this.chaozhi = result.data[0].subCategorys[1].subCategorys
        this.xidongName = result.data[0].subCategorys[2].name
        this.xidong = result.data[0].subCategorys[2].subCategorys
        // 为您推荐结束 华为手机开始
        this.jingxuanName = result.data[1].subCategorys[0].name
        this.jingxuan = result.data[1].subCategorys[0].subCategorys
        this.fenleiName = result.data[1].subCategorys[1].name
        this.fenlei = result.data[1].subCategorys[1].subCategorys
        // 华为手机结束 荣耀手机开始
        this.jingxuanName1 = result.data[2].subCategorys[0].name
        this.jingxuan1 = result.data[2].subCategorys[0].subCategorys
        this.fenleiName1 = result.data[2].subCategorys[1].name
        this.fenlei1 = result.data[2].subCategorys[1].subCategorys
      })
    }
  },
  mounted () {
    this.getrRecommend()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(../../static/css/iconfont/iconfont.css);
header{
    background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 720px;
    min-height: 0.46rem;
    margin: 0 auto;
    z-index: 100;
    display: flex;
    align-items: center;
}
.search{
  padding-left: 0.2rem;
  position: relative;
  width: 100%;
}
.search input{
    box-sizing: border-box;
    width: 100%;
    font-size: 0.13rem;
    color: #333333;
    height: 0.32rem;
    line-height: 0.32rem;
    text-align: left;
    border-radius: 5px;
    background-color: #F5F5F5  ;
    border: 0;
    padding: 0 0 0 0.41rem;
    outline: none;
}
.search .icon-sousuo{
  position: absolute;
  top: 0.07rem;
  left: 0.29rem;
  font-size:0.22rem;
  color: #333333;
}
.icon-gengduo{
    display: block;
    margin: 0 0.15rem;
    font-size:0.28rem;
}
article{
    position: fixed;
    top: 0.46rem;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 720px;
    margin: 0 auto;
    background-color: #fff;
}
nav{
    width: 23.62%;
    height: 100%;
    border-right: 1px solid #eaeaea;
    overflow-y: scroll;
    overflow-x: hidden;
    float: left;
    position: relative;
    z-index: 9;
    box-sizing: border-box;
    box-shadow: 0 0 3px #eaeaea;
}
nav ul{
    padding-bottom: 2.45rem;
    position: relative;
    min-height: 91.5%;
}
nav ul a{
  height: 0.52rem;
  border-bottom: 1px solid #eaeaea;
  box-sizing: border-box;
  padding: 0 0.07rem;
  text-align: center;
  font-size:0.15rem;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}
.current{
  color: #e01d20!important;
  z-index: 10;
  overflow: hidden;
  border-left: 2px solid #ca141d;
  background-color: #f6f6f6;
}
section{
    width: 76.38%;
    float: left;
    height: 100%;
    z-index: 8;
    overflow-x: auto;
    overflow-y: scroll;
}
.pic{
  width: 100%;
  margin-top: 0.057rem;
}
.wapper{
  display: flex;
  overflow: auto;
  margin: 0 auto;
  position: relative;
}
.wapperImg{
  width: 0.92rem;
  height: 0.48rem;
}
.phonelist{
  margin-bottom: 0.5rem;
}
.phonelist h3{
    padding: 0.13rem 0 0.13rem;
    text-align: center;
    overflow: hidden;
}
.b{
  padding: 0 0.08rem;
}
.b ul{
  box-sizing: border-box;
}
.b ul li{
    width: 33.33%;
    position: relative;
    display: block;
    float: left;
    margin-bottom: 0.2rem;
}
.b ul li img{
  display: block;
  width: 0.63rem;
  margin: 0 auto;
}
.b ul li p{
    color: #333;
    line-height: 1;
    margin-top: 0.046rem;
    height: 0.29rem;
    padding: 0 0.07rem;
    text-align: center;
}
</style>
