<template>
  <div class="advertising">
    <ul>
      <li>
        <a :href="adPrdUrl[0]"><img :src='adPicUrl[0]' alt="" width="100%"></a>
      </li>
      <li>
        <a :href="adPrdUrl[1]"><img :src='adPicUrl[1]' alt="" width="100%"></a>
        <a :href="adPrdUrl[2]"><img :src='adPicUrl[2]' alt="" width="100%"></a>
      </li>
    </ul>
    <ul>
      <li>
        <a :href="adPrdUrl[3]"><img :src='adPicUrl[3]' alt="" width="100%"></a>
      </li>
      <li>
        <a :href="adPrdUrl[4]"><img :src='adPicUrl[4]' alt="" width="100%"></a>
      </li>
    </ul>
    <ul>
      <li>
        <a :href="adPrdUrl[5]"><img :src='adPicUrl[5]' alt="" width="100%"></a>
      </li>
      <li>
        <a :href="adPrdUrl[6]"><img :src='adPicUrl[6]' alt="" width="100%"></a>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      adPicUrl: [],
      adPrdUrl: []
    }
  },
  methods: {
    showInfo () {
      const apiProxy = 'https://bird.ioliu.cn/v1/?url='
      var url = 'https://openapi.vmall.com/mcp/queryAdvertisement?portal=2&lang=zh-CN&country=CN&placeholder=%5B%22wap_ads_index_slider%22%2C%22wap_index_adsArea%22%2C%22wap_ads_Floor1%22%2C%22wap_ads_Floor2%22%2C%22wap_ads_Floor3%22%2C%22wap_ads_Floor4%22%2C%22wap_ads_Floor5%22%2C%22wap_ads_Floor6%22%2C%22wap_ads_Floor7%22%2C%22wap_ads_Floor8%22%2C%22wap_ads_Floor9%22%2C%22wap_ads_Floor10%22%5D&callback=queryAdvertisement'
      axios.get(apiProxy + url).then(result => {
        var res = JSON.parse(result.data.split('queryAdvertisement(')[1].split(');')[0])
        // this.nav = res.homeIndexTabConfigList
        var contentStr = res.advertisementInfos.wap_index_adsArea.content
        var content = JSON.parse(contentStr).compositeAds
        console.log(content)
        for (var i = 0; i < content.length; i++) {
          // console.log(content[i].adPicUrl)
          this.adPicUrl.push(content[i].adPicUrl)
          this.adPrdUrl.push(content[i].adPrdUrl)
        }
        // console.log(content[0].adPicUrl)
        // this.content = content
      })
    }
  },
  mounted () {
    this.showInfo()
  }
}
</script>
<style scoped>
  img {
    float: left;
    margin-top: 0.05rem;
  }
  .advertising {
    width: 100%;
    height: 5.433rem;
    /* background: #000; */
    border-radius: 0.2rem;
    padding:0 0.1rem;
    box-sizing: border-box;
    overflow: hidden;
  }
  .advertising ul {
    display: flex;
    justify-content: space-around
  }
  .advertising ul li {
    width: 1.96rem;
    min-height:1.33rem;
    /* background: pink; */
  }
</style>
