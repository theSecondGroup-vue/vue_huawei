<template>
    <div>
        <div class="shop">
            <ul class="mall-ul">
                <li v-for="(item,index) in findLists"
                    :key="index"
                >
                    <a href="https://m.vmall.com/content/category" class="mall">
                        <p class="mallImg">
                            <img :src="item.pic"/>
                        </p>
                        <p class="mall-text">{{ item.name }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      findLists: [
        {
          pic:
            "https://res.vmallres.com/mwap/20170421/images/echannelApp/misc/icon_headline.png",
          name: "商城头条"
        },
        {
          pic:
            "https://res.vmallres.com/mwap/20170421/images/echannelApp/misc/icon_headline.png",
          name: "企业购"
        },
        {
          pic:
            "https://res.vmallres.com/mwap/20170421/images/echannelApp/misc/icon_coupons.png",
          name: "领优惠券"
        },
        {
          pic:
            "https://res.vmallres.com/pimages//template/content/2018/20181029095630980.png",
          name: "华为众测"
        }
      ]
    };
  }
};
</script>

<style scoped>
.shop {
  width: 100%;
  height: 1.03rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 0.03rem;
  background: #fff;
}
.shop .mall-ul {
  width: 100%;
  background: #fff;
  height: 100%;
  display: flex;
  padding: 0 0.18rem;
  box-sizing: border-box;
}
.shop .mall-ul li {
  width: 25%;
  height: 100%;
  background: #fff;
}
.shop .mall-ul .mall {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.15rem 0;
  box-sizing: border-box;
  text-align: center;
}
.shop .mall-ul .mallImg {
  width: 0.46rem;
  height: 0.46rem;
  display: block;
  margin: 0 auto;
}
.shop .mall-ul .mallImg img {
  width: 100%;
}
.shop .mall-ul .mall-text {
  padding-top: 0.1rem;
  display: block;
  font-size: 0.14rem;
  color: #333;
  line-height: 1;
}
/* .shop .mall-ul:last-child:after {
    height: 0;
} */
</style>

