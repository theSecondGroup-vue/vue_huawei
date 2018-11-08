<template>
    <div class="m-news">
        <div class="news-top">
            <span class="news-tips">{{ tips }}</span>
            <span class="news-time">{{ time }}</span>
        </div>
        <div class="news-bottom">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        tips:String,
        time:String,
    }
}
</script>

<style scoped>
    .m-news {
        width: 100%;
        height: 1.58rem;
        border-bottom: 1px solid #eaeaea;
        padding: 0 0.2rem;
        box-sizing: border-box;
    }
    .m-news .news-top {
        height: 0.45rem;
        line-height: 0.45rem;
        position: relative;
    }
    .m-news .news-bottom {
        height: 1.05rem;
        padding-bottom: 0.12rem;
        margin-bottom: 0;
    }
    .m-news .news-top .news-tips {
        font-size: 0.13rem;
        color: #333;
    }
    .m-news .news-top .news-time {
        font-size: 0.12rem;
        color: #888;
        padding-left: 0.15rem;
    }

    .m-news .news-bottom .news-a {
        height: 1.05rem;
        width: 100%;
        display: block;
        text-align: center;
    }
    .m-news .news-bottom .news-b {
        display: block;
        width: 100%;
        height: 0.92rem;
        background-color: #f6f6f6;
        position: relative;
    }

    .m-news .news-bottom .news-a img {
        width: 100%;
    }
    .m-news .news-bottom .news-img {
        width: 0.59rem;
        height: 0.92rem;
        position: absolute;
        top: 0;
        left: 0.15rem;
    }
    .news-bottom .news-img .pics {
        width: 100%;
        height: 100%;
        display: block;
        padding: 0.15rem 0;
        box-sizing: border-box;
        float: left;
    }
    .news-bottom .news-img .pics img {
        width: 100%;
    }
    .news-bottom .news-text {
        float: right;
        width: 80%;
        height: 60%;
        box-sizing: border-box;
        padding: 0.15rem 0.15rem 0.15rem 0.15rem;
        vertical-align: middle;
        height: 100%;
    }
    .news-bottom .news-text .p1 {
        color: #ca141d;
        font-size: 0.14rem;
    }
    .news-bottom .news-text .p2 {
        padding-top: 0.03rem;
        -webkit-line-clamp: 2;
        font-size: 0.12rem;
        color: #888;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

