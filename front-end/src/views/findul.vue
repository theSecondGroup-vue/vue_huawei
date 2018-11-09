<template>
    <div class="hhhhh">
        <ul class="f-list">
            <li class="f-li" v-for="(item,index) in findUl2s"
                :key="index"
            >
                <a href="https://m.vmall.com/content/detail?id=1954" class="f-la">
                    <p class="f-limg">
                        <img :src="'https://res.vmallres.com/pimages//' + item.thumbnail"/>
                    </p>
                    <span class="f-text">{{item.summary}}</span>
                    <span class="p2">
                        <i>2018/11/07</i>
                        <i>{{item.viewAmount}}</i>
                    </span>

                </a>
            </li>
        </ul>
        <div class="seeMore" @click="moreInfo">
          <a style="display:block;">点击查看更多 ></a>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      findUl2s:[],
      page:0
    }
  },
  methods: {
    moreInfo () {
      this.isShow = false;
      const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
      this.page +=1;
      // console.log(this.page)
      axios.get(api_proxy + 'https://m.vmall.com/content/index/more.json',{
        params:{
          pageNumber:  this.page,
          contentType:1,
          type:'',
        }
      })
      .then(res => {
        const result = res.data.contentGoodStuffDetailList;
        for(var i =1; i < result.length; i++) {
          this.findUl2s.push(result[i]);
        }
        console.log(this.findUl2s);
      })
      .catch (err => {
        console.log(err);
      })
    }
  },
  mounted () {
    this.moreInfo();
  }
};
</script>

<style scoped>
.f-list {
  width: 100%;
  height: auto;
}
.f-list .f-li {
  width: 100%;
  height: 1.06rem;
  margin-bottom: 0.05rem;
  background: #f8f8f8;
}
.f-list .f-li .f-la {
  height: 99%;
  display: block;
}
.f-list .f-li .f-limg {
  height: 1.05rem;
  width: 1.72rem;
  background: #eaeaea;
  float: left;
}
.f-list .f-li .f-limg img {
  width: 100%;
  height: 100%;
}
.f-list .f-li .f-text {
  float: right;
  width: 2.02rem;
  height: 0.4rem;
  padding: 0.12rem 0.19rem 0;
  margin-bottom: 0.15rem;
  font-size: 0.16rem;
  color: #000;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.f-list .f-li .p2 {
  display: block;
  float: right;
  width: 2.02rem;
  height: 0.2rem;
  padding: 0.12rem 0.19rem 0;
}
.f-list .f-li .p2 i:nth-child(1) {
  float: left;
}
.f-list .f-li .p2 i:nth-child(2) {
  float: right;
  background: url(../../static/images/f-eyes.png) no-repeat left center;
  background-size: 0.2rem 0.2rem;
  padding-left: 0.28rem;
  box-sizing: border-box;
}
.seeMore {
  width: 100%;
  height: 0.575rem;
  background: #fff;
  font-size: 0.16rem;
  color: #000;
  line-height: 0.575rem;
  text-align: center;
}
</style>

