<template>
    <div id="login">
      <loginHeader words="360账号登录"></loginHeader>
      <div class="input_list">
        <ul>
          <li class="account_box">
            <i class="left_item account"></i>
            <div class="right_item border-bottom">
              <input v-model="userPhoneNum" type="text" name="account" placeholder="用户名/邮箱/手机号" v-on:focusin="show" @change="checkEmpty">
            </div>
          </li>
          <li class="password_box">
            <i class="left_item password"></i>
            <div class="right_item ">
              <input v-model="userPassword" type="password" name="password" placeholder="密码/动态密码" @change="checkEmpty">
              <div class="forget_password">
                <span>忘记密码</span>
              </div>
            </div>
          </li>
          <li class="yanzhengma_box" v-show="showYanzhengma">
            <i class="left_item yanzhengma_bg"></i>
            <div class="right_item">
              <input v-model="userYanZhengMa" type="text" name="yanzhengma" placeholder="请输入验证码" @change="checkEmpty">
              <div class="yanzhengma">
                <img src="data:image/jpg;base64,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" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="button_box">
        <button id="submit" disabled @click="loginNow">登录</button>
      </div>
      <div class="other">
        <p class="lf" @click="toRegister">手机快速注册</p>
        <p class="rf" @click="toPhoneLogin">短信登录</p>
      </div>
      <toast v-model="show1" type="text" position="bottom" width="15rem">{{toastHtml}}</toast>
    </div>
</template>

<script>
    import loginHeader from '../components/login-header/login-header.vue'
    import { Toast } from 'vux'
    export default {
        name:'login',
        components:{ loginHeader,Toast },
        data(){
            return {
              showYanzhengma:false,
              userPhoneNum:'',
              userYanZhengMa:'',
              userPassword:'',
              show1:false,
              toastHtml:''
            }
        },
        beforeMount:function(){
          this.$store.state.isBarshow = false
        },
        methods:{
            show:function(){
              document.getElementsByClassName('password_box')[0].childNodes[2].setAttribute('class','right_item border-bottom')
              this.showYanzhengma = true
            },
            toRegister:function(){
              this.$router.push({path:'/register'})
            },
            toPhoneLogin:function(){
              this.$router.push({path:'/phoneLogin'})
            },
            checkEmpty:function(){
              if((this.userPhoneNum != '')&&(this.userYanZhengMa != '')&&(this.userPassword != '')){
                document.getElementById('submit').removeAttribute('disabled');
                document.getElementById('submit').setAttribute('class','canUse');
              }else{
                document.getElementById('submit').removeAttribute('class');
                document.getElementById('submit').setAttribute('disabled',true)
              }
            },
            loginNow:function(){
                if(this.userYanZhengMa != 'xruc'){
                  this.toastHtml = '请输入正确的验证码';
                  this.show1 = true;
                    return
                }

                var phoneNum = this.userPhoneNum;
                var password = this.userPassword;

                var userList = this.$store.state.userList;
                for(var i = 0;i<userList.length;i++){
                    if((phoneNum==userList[i].userPhoneNum)&&(password == userList[i].userPassword)){
                      localStorage.setItem('userName',phoneNum);
                      this.$router.push({path:'/index'});
                    }
                    this.toastHtml = '账号密码错误！请重新输入';
                    this.show1 = true;
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #login{
    height:100%;
    background: #FAFAFA;
    .input_list{
      margin-top:2rem;
      ul{
        border-top:2px solid  #e4e4e4;
        border-bottom:2px solid  #e4e4e4;
        li{
          display: flex;
          background:#fff;
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
          .forget_password{
            position: absolute;
            z-index:100000000000000;
            top:0;
            right:0;
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
            right:0;
            margin-top:8px;
            text-align:center;
            img{
              width:70%;
            }
          }
        }
      }
    }
    .button_box{
      padding:4rem 1rem 0.2rem 1rem;
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
      button.canUse{
        background: #34756C;
      }
    }
    .other{
      padding:0.4rem;
      p{
        color:#34756c;
      }
      p.rf{
        float:right;
      }
      p.lf{
        float:left;
      }
    }
  }
</style>
