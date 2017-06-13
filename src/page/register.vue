<template>
    <div id="register">
      <loginHeader words="注册360账号"></loginHeader>
      <div class="input_list">
        <ul>
          <li class="account_box">
            <i class="left_item account"></i>
            <div class="right_item border-bottom">
              <input type="text" name="account" placeholder="请输入手机号" v-model="userPhoneNum" @blur="checkPhoneNum">
            </div>
          </li>
          <li class="yanzhengma_box">
            <i class="left_item yanzhengma_bg"></i>
            <div class="right_item  border-bottom">
              <input type="text" name="yanzhengma" placeholder="请输入校验码" v-model="userYanZhengMa">
              <div class="yanzhengma">
                <span>获取校验码</span>
              </div>
            </div>
          </li>
          <li class="password_box">
            <i class="left_item password"></i>
            <div class="right_item">
              <input type="password" name="password" placeholder="请输入密码" v-model="userPassword">
            </div>
          </li>
        </ul>
      </div>
      <div class="radio_box">
        <input type="checkbox" id="fuwutiaokuan" checked>
        <label for="fuwutiaokuan">
          我已经阅读并同意<a href="#">360用户服务条款</a></label>
      </div>
      <div class="button_box">
        <button>注册</button>
      </div>
      <div class="other">
        <p class="text-align-center" @click="toLogin">已有360账号</p>
      </div>
      <toast v-model="show1" type="text" position="bottom" width="15rem">{{toastHtml}}</toast>
    </div>
</template>

<script>
    import loginHeader from '../components/login-header/login-header.vue'
    import { Toast } from 'vux'
    export default {
        name:'register',
        components:{ loginHeader,Toast },
        data(){
          return {
            userPhoneNum:'',
            userYanZhengMa:'',
            userPassword:'',
            show1:false,
            toastHtml:''
          }
        },
        methods:{
          toLogin:function(){
              this.$router.push({path:'/login'})
          },
          checkPhoneNum:function(){
            if(!(/^1[34578]\d{9}$/.test(this.userPhoneNum))){
              this.toastHtml = '请输入正确的手机号';
              this.show1 = true;
            }
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #register{
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
            height:23px;
            margin:11px;
            background: url(../assets/images/new_wap.png) no-repeat;
            background-position: -19px 0;
            background-size: 138px 26px;
          }
          .left_item.password{
            background-position: 1px 0;
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
        li.password_box{
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
      padding:0.4rem;
      p{
        color:#34756c;
        font-size:80%;
      }
    }
    .radio_box{
      padding:3rem 1.5rem 0.2rem 1.5rem;
      a{
        color:#34756c;
      }
    }
  }
</style>
