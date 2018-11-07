<template>
    <div>
        <div class="shop">
            <ul class="mall-ul">
                <li v-for="(item,index) in mallAll"
                    :key="index"
                >
                    <a href="#" class="mall">
                        <p class="mallImg">
                            <img :src="item.hrefs"/>
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
    props:['mallAll']
};
</script>

<style scoped>
.shop {
    position: relative;
}
.shop .mall-ul {
  width: 100%;
  background: #fff;
  height: 0.85rem;
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
  padding: 0.12rem 0;
  box-sizing: border-box;
  text-align: center;
}
.shop .mall-ul .mallImg {
  width: 0.35rem;
  height: 0.35rem;
  display: block;
  margin: 0 auto;
}
.shop .mall-ul .mallImg img {
  width: 100%;
}
.shop .mall-ul .mall-text {
  padding-top: 0.06rem;
  display: block;
  font-size: 0.13rem;
  color: #333;
  line-height: 1;
}
.shop .mall-ul:after {
    content: "";
    height: 1px;
    margin: 0 0.18rem;
    background-color: #eaeaea;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}
/* .shop .mall-ul:last-child:after {
    height: 0;
} */
</style>

