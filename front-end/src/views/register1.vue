<template>
<div>
   <div class="register1">
        <div id="header">
        使用手机号注册
    </div>
    <div id="flexyout">
        <P>
            <span class="mop1">国家</span>/
            <span class="mop1">地区</span>
        </P>
        <P>
            <span class="mop">中国</span>
            <span class="mop">+86</span>
        </P>
    </div>
    <form class='fox'>
        <div class="box2">
        <p v-if="isphone" class="isTrue">请输入正确的手机号</p>
        <input type="text" placeholder="手机号码" id="iphone" v-model="phone"  @blur="rephone">

        </div>
        <dl>
            <dd id='dw1'>
                <p v-if="hyz" class="isyzm">验证码不相符</p>
                <input type="text" placeholder="图形验证码" id="yz" v-model="yzs" @blur="reyz">
            </dd>
            <dt>
                <span class="huyz" id='code' @click="createCode">{{codeX}}</span>
            </dt>
        </dl>
        <dl>
            <dd>
                <input type="text" placeholder="短信验证码" id="yz1" v-model="yz1s">

            </dd>
            <dt>
                <span class="shoujiyz">获取验证码</span>
            </dt>
        </dl>
        <dl>
            <dd id="dw">
                <p v-if="isPassword" class="ispwd">请输入6-20位非空密码</p>
                <input :type="type" placeholder="密码" id="pswd" v-model="password" @blur="repswd">
            </dd>
            <dt>
                <span :class="isClose" @click="closes()"></span>
                <!-- <span class="close1" @click="closes"></span> -->
            </dt>
        </dl>
        <div class="box1">
         <p v-if="isPwd" class="ispwd">密码不一致</p>
         <input type="text" id='pswd1' placeholder='确认密码' @blur="issame" v-model="pwd">
        </div>
    </form>
    <div class="top1">
        <p>
            至少 8 个字符，不能含有空格。字母、数字、符号至少包含2种。
        </p>
    </div>
    <div  class="top2">
        <h3><a href="#/register2">使用邮箱地址注册</a></h3>
        <p>若使用邮件地址注册，您仍需为帐号提供一个安全手机号用于验证身份。</p>
    </div>
    <div class="footer">
       <p><span class="next"></span><a href="#/register">上一页</a></p> 
       <p><a @click="handlregister">完成</a></p>
    </div>
    </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "register1",
  data() {
    return {
      codeX: "",
      isClose: "close",
      type: "password",
      phone: "",
      password: "",
      pwd: "",
      yzs: "",
      yz1s: "",
      isphone: false,
      isPassword: false,
      isPwd: false,
      hyz: false
    };
  },
  methods: {
    handlregister() {
      this.$axios
        .post(
          "http://localhost:3000/register",
          {
            phone: this.phone,
            password: this.password
          },
          {}
        )
        .then(result => {
          var res = result.data;
          console.log(res);
          if (res.code === 0) {
            console.log("注册成功");
            this.$router.push({ name: "login" });
          } else {
              alert('请正确填写表单')
            console.log("注册失败", res.msg);
          }
        });
    },
    rephone() {
      //如果该用户符合就进行赋值，然后注册，如果符合还需要查询看是否有相同用户
      var reg = /^1[3578]\d{9}$/;
      if (!reg.test(this.phone)) {
        this.isphone = true;
      } else {
        this.isphone = false;
      }
    },
    //密码
    repswd() {
      var reg = /^\S{6,20}$/;
      if (!reg.test(this.password)) {
        this.isPassword = true;
      } else {
        this.isPassword = false;
      }
    },
    //确认密码
    issame() {
      if (this.password !== this.pwd) {
        this.isPwd = true;
      } else {
        this.isPwd = false;
      }
    },
    //判断验证码是否匹配
    reyz() {
        var Up = this.codeX.toUpperCase();
        var codeup = this.yzs.toUpperCase();
      if ((codeup !== Up) || (codeup !== Lower)) {
          console.log(this.yzs)
        this.hyz = true;
      } else {
        this.hyz = false;
      }
    },
    //判断短信验证码是否为空

    createCode() {
      //首先默认code为空字符串
      var code = "";
      //设置长度，这里看需求，我这里设置了4
      var codeLength = 4;
      var codeV = document.getElementById("code");
      //设置随机字符
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      //循环codeLength 我设置的4就是循环4次
      for (var i = 0; i < codeLength; i++) {
        //设置随机数范围,这设置为0 ~ 36
        var index = Math.floor(Math.random() * 36);
        //字符串拼接 将每次随机的字符 进行拼接
        code += random[index];
      }
      //将拼接好的字符串赋值给展示的Value
    //   console.log(code);
    //   console.log(codeV);

      this.codeX = code;
    },
    closes() {
      // alert(1)
      if (this.isClose == "close") {
        this.isClose = "close1";
        this.type = "text";
      } else {
        this.isClose = "close";
        this.type = "password";
      }
      // this.isClose = !this.isClose
    }
  },
  mounted() {
    this.createCode();
    // this.closes()
  }
  //最后总的完成点击提交看所有的条件受否都进行了验证，所有条件都满足进行注册
};
</script>
<style scoped>
.isTrue {
    color: red;
    margin-left: 0.2rem;
    /* margin-top:0.06rem; */
}
.isyzm,.ispwd {
     color: red;
}
#header {
  font-size: 0.18rem;
  color: #191919;
  min-height: 0.32rem;

  line-height: 1.1;
  padding: 0.08rem 0.16rem;
  background: #f0f0f0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-top: 0.08rem solid #fcfcfc;
  margin-bottom: 0.16rem;
  box-sizing: border-box;
}
* {
  padding: 0;
  margin: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
#flexyout {
  display: flex;
  padding: 0 0.16rem;
  justify-content: space-between;
  box-sizing: border-box;
}
.mop1 {
  font-size: 0.16rem;
  color: #000;
}
.mop {
  font-size: 0.15rem;
}
.fox {
  overflow: hidden;
}
.fox dl {
  height: 0.34rem;
  display: flex;
  width: 100%;
  margin-top: 0.3rem;
  padding: 0 0.2rem;

  box-sizing: border-box;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
}
input {
  border: 0;
  outline: medium;
}
#iphone {
  padding: 0 0.2rem;
  margin-top: 0.15rem;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #cccccc;
}
#pswd1 {
  box-sizing: border-box;
  height: 0.34rem;
  padding: 0 0.2rem;
  width: 100%;
  margin-top: 0.15rem;
  border-bottom: 1px solid #cccccc;
}
.shoujiyz {
  color: blue;
}
.footer {
  font-size: 0.16rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
}
.footer p span {
  display: inline-block;
  padding-right: 0.1rem;
}
.top1 p {
  padding-left: 0.2rem;
  margin: 0.3rem 0;
}
.top2 {
  padding: 0 0.2rem;
  margin: 0.3rem 0;
}
.top2 h3 a {
  color: blue;
  font-size: 0.16rem;
}
.top2 p {
  margin: 0.3rem 0;
}
.huyz {
  display: inline-block;
  height: 0.3rem;
  width: 1rem;
  /* background: red; */
  border: 1px solid #cccccc;
  border-radius: 0.05rem;
  position: relative;
  top: -0.05rem;
  text-align: center;
  line-height: 0.3rem;
  opacity: 0.5;
}
.close {
  width: 0.3rem;
  height: 0.3rem;
  display: inline-block;
  background: url(../../static/images/eyeoff_wap_ui9.png) no-repeat;
  background-size: 100%;
  position: relative;
  top: -0.05rem;
}
.close1 {
  width: 0.3rem;
  height: 0.3rem;
  display: inline-block;
  background: url(../../static/images/eyeon_wap_ui9.png) no-repeat;
  background-size: 100%;
  position: relative;
  top: -0.05rem;
}
.box1 p {
  display: block;
  width: 100%;
  padding: 0 0.2rem;
}
.box2n p {
  display: block;
  width: 100%;
  padding: 0 0.2rem;
}
#dw {
  position: relative;
  top: -0.05rem;
}

#dw1 {
  position: relative;
  top: -0.05rem;
}
</style>