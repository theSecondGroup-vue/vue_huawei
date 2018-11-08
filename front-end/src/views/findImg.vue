<template>
    <div class="f-imgs">
        <ul class="f-news clearfix">
            <li v-for="(item,index) in findImgs"
                :key="index"
            >
                <a href="#" class="f-newsa">
                    <img :src="item.pic"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      findImgs: [
        {
          pic:
            "https://res.vmallres.com/pimages///cop/20170426143727329/1493188647329.jpg"
        },
        {
          pic:
            "https://res.vmallres.com/pimages///cop/20170512164914318/1494578954318.jpg"
        },
        {
          pic:
            "https://res.vmallres.com/pimages///cop/20170426143742617/1493188662617.jpg"
        },
        {
          pic:
            "https://res.vmallres.com/pimages///cop/20170426143749542/1493188669542.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
.f-imgs {
  width: 100%;
  height: 0.64rem;
  overflow-x: auto;
}
.f-imgs .f-news {
  width: 4.2rem;
  height: 100%;
  display: flex;
  white-space: nowrap;
}
.f-imgs .clearfix:before {
    content: " ";
    display: table;
}

.f-imgs .f-news li {
  display: inline-block;
  padding-bottom: 0.07rem;
  text-align: center;
  width: 1.5rem;
  height: 0.63rem;
 box-sizing: border-box;
}
.f-imgs .f-news .f-newsa {
  display: block;
  padding-left:0.05rem;

}
.f-imgs .f-news img {
  height: 100%;
  width: 100%;
}
</style>
