<template>
    <div id="phoneLogin">
      <loginHeader words="短信登录"></loginHeader>
      <div class="input_list">
        <ul>
          <li class="phoneArea_box">
            <i class="left_item phoneArea_bg"></i>
            <div class="right_item border-bottom" >
              <p  class="realArea" @click="showList">选择手机号的归属国家和地区</p>
              <div class="select_box" v-show="isShowList">
                <ul class="title">
                  <li class="phoneArea_box">
                    <i class="left_item phoneArea_bg"></i>
                    <div class="right_item border-bottom" >
                      <p>选择手机号的归属国家和地区</p>
                    </div>
                  </li>
                </ul>
                <ul class="main">
                  <li v-for="i in phoneAreaList" @click="selectPhoneArea($event)">
                    <div class="country">{{i.phoneCountry}}</div>
                    <div class="number">{{i.phoneNumber}}</div>
                  </li>
                </ul>
                <div class="close">
                  <img src="../assets/images/uc_close_codearea.png" @click="closeList">
                </div>
              </div>
            </div>
          </li>
          <li class="phoneNumber_box">
            <i class="left_item phoneNumber_bg"></i>
            <div class="right_item  border-bottom">
              <span class="realNumber">+86</span>
              <input type="text" name="password" placeholder="请输入手机号">
            </div>
          </li>
          <li class="yanzhengma_box">
            <i class="left_item yanzhengma_bg"></i>
            <div class="right_item">
              <input type="text" name="yanzhengma" placeholder="请输入验证码">
              <div class="yanzhengma">
                <span>获取验证码</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="radio_box">
        <input type="checkbox" id="fuwutiaokuan" checked>
        <label for="fuwutiaokuan">
          下次自动登录
        </label>
      </div>
      <div class="button_box">
        <button>登录</button>
      </div>
      <div class="other">
        <p class="text-align-left" @click="toLogin">账号登录</p>
      </div>
    </div>
</template>

<script>
    import loginHeader from '../components/login-header/login-header.vue'
    export default {
        name:'phoneLogin',
        data(){
            return{
              phoneAreaList:[
                {phoneCountry:'中国',phoneNumber:'+86'},
                {phoneCountry:'香港',phoneNumber:'+852'},
                {phoneCountry:'澳门',phoneNumber:'+853'},
                {phoneCountry:'台湾',phoneNumber:'+886'},
                {phoneCountry:'韩国',phoneNumber:'+82'},
                {phoneCountry:'日本',phoneNumber:'+81'},
                {phoneCountry:'中国',phoneNumber:'+86'},
                {phoneCountry:'中国',phoneNumber:'+86'},
              ],
              isShowList:false,
            }
        },
        components:{
          loginHeader,
        },
        methods:{
          toLogin:function(){
            this.$router.push({path:'/login'})
          },
          showList:function(){
              this.isShowList=true;
          },
          closeList:function(){
            this.isShowList=false;
          },
          selectPhoneArea:function(e){
            var area = e.target.parentNode.querySelector('.country').innerHTML;
            var number = e.target.parentNode.querySelector('.number').innerHTML;
            console.log(document.getElementsByClassName('realArea')[0]);
            console.log(document.getElementsByClassName('realNumber')[0]);
            document.getElementsByClassName('realArea')[0].innerHTML=area;
            document.getElementsByClassName('realNumber')[0].innerHTML=number;
            this.isShowList=false;
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#phoneLogin{
  height:100%;
  background: #FAFAFA;
  .input_list{
    margin-top:2rem;
    ul{
      border-top:2px solid  #e4e4e4;
      border-bottom:2px solid  #e4e4e4;
    li{
      display: flex;
      .left_item{
        width:24px;
        height:24px;
        margin:11px;
        background: url(../assets/images/new_wap.png) no-repeat;
        background-position: -19px 0;
        background-size: 138px 26px;
      }
      .left_item.phoneNumber_bg{
        background-position: -63px 0;
      }
      .left_item.yanzhengma_bg{
        background-position: -40px 0;
      }
      .right_item{
        width:100%;
        input{
          width:100%;
          border:none;
          height: 46px;
          line-height: normal;
          font-size: 100%;
          padding-left:5px;
        }
      }
      .right_item.border-bottom{
        border-bottom:2px solid #e4e4e4;
      }
    }
    li.phoneNumber_box{
      .right_item{
        span{
          width:15%;
          display: inline-block;
          border-right:1px solid #e4e4e4;
        }
      }
      position:relative;
      input{
        width:70%;
      }
    }
    li.yanzhengma_box{
      position:relative;
      input{
        width:70%;
      }
      .yanzhengma{
        position: absolute;
        top:0;
        height:28px;
        line-height:28px;
        border:1px solid  #34756c;
        right: 15px;
        color:#34756c;
        padding: 0 15px;
        margin-top:10px;
        border-radius: 14px;
        text-align: center;
        font-size:75%;
        img{
          width:70%;
        }
      }
    }
    li.phoneArea_box{
      position:relative;
      p{
        line-height: 46px;
        padding-left:5px;
      }
      p:after{
        content:'';
        position: absolute;
        top: 16px;
        right: 24px;
        width: 6px;
        height: 6px;
        border: #b4b4b4 solid;
        border-width: 2px 2px 0 0;
        transform: rotate(135deg);
      }
      div.select_box{
        position:fixed;
        top:0;
        left:0;
        background: rgba(0,0,0,0.5);
        height:100%;
        width:100%;
        z-index:10000;
        ul.title{
          margin-top:88px;
          border-bottom:none;
          .phoneArea_box{
            background: #fff;
            div.right_item{
              border-bottom:1px solid  #b4b4b4;
            }
          }
        }
        ul.main{
          background: #fff;
          border-top:none;
          overflow:scroll;
          height:270px;
          li{
            display: flex;
            border-bottom:1px solid  #b4b4b4;
            div{
              width:50%;
              height:45px;
              line-height: 45px;
              padding:0 2rem;
            }
            div:nth-child(2){
              text-align: right;
            }
          }
        }
        div.close{
          text-align:center;
          margin-top:45px;
          img{
            width:30px;
            heihgt:30px;
          }
        }
      }
    }
    }
  }
  .button_box{
    padding:0.5rem 1rem 0.2rem 1rem;
    button{
      width:100%;
      border:none;
      background: #97B8B3;
      color:#Fff;
      height: 50px;
      line-height: 50px;
      border-radius: 5px;
      font-size:100%;
    }
  }
  .other{
    padding:0.4rem 1.2rem;
    p{
      color:#34756c;
      font-size:80%;
    }
  }
  .radio_box{
    padding:1rem 1.5rem 0.2rem 1.5rem;
    a{
      color:#34756c;
    }
  }
}
</style>
