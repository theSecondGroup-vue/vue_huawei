<template>
    <div class="register">
       <div id="header">
           <div class="header-top">
            <h2>华为帐号通知</h2>
           </div>
           <div class="header-foter">
                <div class='h-l'>
                    <div class="h-t">
                            国家/地区
			
                    </div>
                    <div class="h-b">
                            正在注册中国华为帐号。
                    </div>
                </div>
                <div class="h-r">
                        <h2>中国</h2>
                        <span>></span>
                </div>
           </div>
       </div>
       <div id="agreement">
           <p>华为帐号是用于访问所有华为服务的帐号，在特定场景下需要收集和使用您的信息：</p>
           <p><span>• </span>您注册华为帐号时提供的信息：手机号或邮件地址、华为帐号密码；</p>
           <p><span>• </span>IP 地址；</p>
           <p><span>• </span>为防止欺诈行为，华为需采集浏览器信息 (类型、时区、插件、语言、字体、canvas图片渲染哈希值、webgl图片渲染哈希值)；登录异常时，华为需采集图片验证码页面的鼠标或屏幕滑动信息，以验证身份。</p>
           <p>华为收集、使用信息的详情请见<a href="#">关于华为帐号与隐私的声明</a></p>
           <p>上述数据将会传输并保存至中华人民共和国境内的服务器。</p>
           <p>如果您不同意我们采集上述信息，我们将无法为您提供相应的服务。</p>
           <p>点击“同意”，即表示您同意上述内容及<a href="#">华为帐号用户协议</a>。</p>
       </div>
       <div class='footer'>
               <a href="#/login"><span>&lt;</span>取消</a>
               <a href="#/register1">确定<span>></span></a>
       </div>
    </div>
</template>
<script>
    export default{
        name:'register'
    }
</script>
<style scoped>
    #header{
    width: 100%;
   
   overflow: hidden;
}
.header-top h2{
    font-size: 0.18rem;
    color:#999999;
    min-height: 0.32rem;
    
    line-height: 1.1;
    padding: 0.08rem 0.16rem;
    background: #F0F0F0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-top: 8px solid #FCFCFC;
    margin-bottom: 16px;
}
.header-foter{
    width:3.68rem;
   padding:0 0.16rem;
    border-bottom:1px solid #cccccc;
    height:0.42rem;
}
.h-l{
   
   width:2.05rem;
  
   display: inline-block;
}
.h-l .h-t{
    font-size: 0.16rem;
    color:#000;
}
.h-r{
    width:1rem;
    float: right;
    display: flex;
    justify-content: space-around;
}
.h-r h2{
    color: #999999;
}
.h-r span{
    display:block;
    font-size: 0.16rem;
    color: #999999;
}
#agreement{
    width:3.68rem;
    padding:0 0.16rem;
    height:5.04rem;
    width:100%;
    box-sizing: border-box;
}
#agreement p{
    color: #000000;
    /* opacity: 0.5; */
    font-size:0.16rem;
    line-height: 1.5;
    margin:0 0.16rem;
}
#agreement p a{
    color: blue;
}
.footer{
    display: flex;
    justify-content:space-between;
}
.footer a{
    font-size: 0.15rem;
}
.footer a span{
    width:0.45rem;
    height:0.45rem;
    display: inline-block;
    text-align: center;
}
    
</style>