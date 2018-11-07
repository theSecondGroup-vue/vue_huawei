<template>
  <div class="timershop">
    <h3>
      <span class="time">限时特惠</span>
      <span class="icon-img">123</span>
      <span class="count-down">{{timerStr}}</span>
      <span class="end">后结束</span>
    </h3>
    <div class="timerInfoBox">
      <div class="timer-bottom">
        <div class="timer-list">
          <a href="#">
            <img src="https://res.vmallres.com/pimages/product/6901443215270/142_142_1531378553233mp.jpg" alt="" width="100%">
            <p>华为平板</p>
          </a>
          <p class="fav">最高直降28</p>
        </div>
        <div class="timer-list">
          <a href="#">
            <img src="https://res.vmallres.com/pimages/product/6901443215270/142_142_1531378553233mp.jpg" alt="" width="100%">
            <p>华为平板</p>
          </a>
          <p class="fav">最高直降28</p>
        </div>
        <div class="timer-list">
          <a href="#">
            <img src="https://res.vmallres.com/pimages/product/6901443215270/142_142_1531378553233mp.jpg" alt="" width="100%">
            <p>华为平板</p>
          </a>
          <p class="fav">最高直降28</p>
        </div>
        <div class="timer-list">
          <a href="#">
            <img src="https://res.vmallres.com/pimages/product/6901443215270/142_142_1531378553233mp.jpg" alt="" width="100%">
            <p>华为平板</p>
          </a>
          <p class="fav">最高直降28</p>
        </div>
        <div class="timer-list">
          <a href="#">
            <img src="https://res.vmallres.com/pimages/product/6901443215270/142_142_1531378553233mp.jpg" alt="" width="100%">
            <p>华为平板</p>
          </a>
          <p class="fav">最高直降28</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      timerStr: ''
    }
  },
  methods: {
    timer (date) {
      var newDate = new Date()
      var endDate = new Date(date)
      var countDowm = endDate - newDate
      var h = parseInt(countDowm / 1000 / 3600)
      var m = parseInt((countDowm / 1000 - h * 3600) / 60)
      var s = parseInt(countDowm / 1000 - h * 3600 - m * 60)
      h = h > 10 ? h : '0' + h
      m = m > 10 ? m : '0' + m
      s = s > 10 ? s : '0' + s
      this.timerStr = h + ':' + m + ':' + s
    }
  },
  mounted () {
    setInterval(() => {
      this.timer('2018/11/8')
    }, 1000)
  }
}
</script>
<style scoped>
  .timershop {
    width: 100%;
    height: 2.21rem;
    background: #F9F9F9;
  }
  h3 {
    height: 0.3rem;
    padding:0.2rem 0;
    text-align: center;
  }
  h3 span {
    font-weight: normal;
    /* line-height: 0.3rem; */
  }
  .time,
  .count-down{
    font-size: 0.2rem;
  }
  .icon-img {
    display: inline-block;
    width: 0.23rem;
    height: 0.23rem;
    background: url(../../static/images/s-flash.png);
    background-size: 100% 100%;
    margin: 0.01rem 0.015rem;
    text-indent: -999em;
  }
  .end {
    color:#9B9B9B;
  }
  .timerInfoBox {
    width: 100%;
    overflow: hidden;
    /* background: #F9F9F9; */
  }
  .timer-bottom {
    /* width: 100%; */
    height: 1.488rem;
    display: flex;
  }
  .timer-list a {
    display: block;
    height: 1.088rem;
    width: 0.845rem;
    border-radius: 0.1rem;
    margin-left: 0.1rem;
    background: #fff;
    overflow: hidden;
  }
  .timer-list p{
    text-align: center;
  }
  .fav {
    color: #CA141D;
  }
  </style>
