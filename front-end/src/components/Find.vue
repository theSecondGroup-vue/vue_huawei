<template>
  <div class="find">
    <header class="head">
      <span class="pageTitle">发现频道</span>
    </header>
    <!-- 发现列表 -->
    <div class="shop">
      <find-list></find-list>
    </div>
    <!-- 商城头条 -->
    <div class="findBox">
      <div class="f-heads">
        <div class="f-head">
          <h3 class="f-h3">
            <span>
              <img src="https://res.vmallres.com/nwap/20181015/images/echannelWap/misc/title_headline.png"/>
            </span>
            <a href="#" class="f-a">-声明-</a>
          </h3>
        </div>
          <find-img></find-img>
      </div>
      <!-- 大图 -->
      <div class="f-news">
        <a href="https://m.vmall.com/content/detail?id=2016" class="fb-news" v-for="(item,index) in first"
           :key="index"
        >
          <p class="fb-img">
            <img :src="'https://res.vmallres.com/pimages//' + item.thumbnail"/>
          </p>
          <p class="fb-tip">{{item.title}}</p>
          <p class="fb-p1">{{item.summary}}</p>
          <p class="fb-p2">
            <span class="fb-span">2018/11/08</span>
            <em class="fb-em">{{item.viewAmount}}</em>
          </p>
        </a>
      </div>

      <!-- 列表 -->
      <find-ul></find-ul>

    </div>
  </div>
</template>

<script>
import findList from "../views/findList.vue";
import findImg from "../views/findImg.vue";
import findUl from "../views/findUl.vue";
import axios from "axios";
export default {
  name: 'Find',
  data () {
    return {
      first:[],
      findInfos:[],
      isShow:true
    }
  },
  components:{
    findList,
    findImg,
    findUl
  },
  methods: {
    findboxInfo () {
      const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
      axios.get(api_proxy + 'https://m.vmall.com/content/index/more.json?pageNumber=1&contentType=1&type=')
      .then(res => {
        const result = res.data.contentGoodStuffDetailList;
        for(var i =0; i < result.length; i++) {
          this.findInfos.push(result[i]);
        }
        this.first.push(result[0]);
        // console.log(this.first);
      })
      .catch (err => {
        console.log(err);
      })
    },
    moreInfo () {
      this.isShow = false;
    }
  },
  mounted () {
    this.findboxInfo ();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .find {
    height: auto;
    background-color: #eaeaea;
    overflow: hidden;
  }
  .head {
    width: 100%;
    height: 0.55rem;
    background: #fff;
    border-bottom: 1px solid #eaeaea;
    padding: 0 0.15rem;
    box-sizing: border-box;
    line-height: 0.55rem;
  }
  .head .pageTitle {
    width: 100%;
    height: 100%;
    font-size: 0.16rem;
  }
  .findBox {
    background: #fff;
    height: auto;
  }
  .findBox .f-head {
    width: 100%;
    height: 0.575rem;
  }
  .findBox .f-h3 {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .findBox .f-h3 span {
    display: block;
    width: 0.955rem;
    height: 0.57rem;
    float: left;
    margin-left: 1.65rem;
  }
  .findBox .f-h3 span img {
    width: 0.92rem;
    height: 0.54rem;
    padding: 0.15rem 0;
    box-sizing: border-box;
  }
  .findBox .f-a {
    font-size: 0.12rem;
    letter-spacing: 1px;
    color: #b8b8b8;
    position: absolute;
    right: 0.04rem;
    bottom: 0.08rem;
    display: inline-block;
  }
  .f-news {
    width: 100%;
    height: 3.5rem;
  }
  .fb-news {
    width: 100%;
    height: 100%;
    display: block;
  }
  .fb-news .fb-img {
    width: 100%;
    height: 2.25rem;
  }
  .fb-news .fb-img img {
    width: 100%;
    height: 100%;
  }
  .fb-news .fb-tip {
    width: 100%;
    height: 0.35rem;
    font-size: 0.16rem;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.08rem 0.2rem 0.08rem;
    box-sizing: border-box;
  }
 .fb-news .fb-p1 {
    color: #656565;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    padding: 0.04rem 0.2rem;
    box-sizing: border-box;
    width: 100%;
    height: 0.46rem;
  }
  .fb-news .fb-p2 {
    border-top: 1px solid #eee;
    padding: 0.1rem 0.2rem 0;
    box-sizing: border-box;
    color: #b8b8b8;
    position: relative;
    width: 100%;
    height: 0.45rem;
  }
  .fb-news .fb-p2 .fb-span {
    display: block;
    font-size: 0.09rem;
    float: left;
  }
  .fb-news .fb-p2 .fb-em {
    background: url(../../static/images/f-eyes.png) no-repeat left center;
    background-size: 0.2rem 0.2rem;
    padding-left: 0.26rem;
    box-sizing: border-box;
    float: right;
    font-size: 0.09rem;
  }

</style>
