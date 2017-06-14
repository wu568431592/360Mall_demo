<template>
    <div id="center">
      <blackHeader showHeader_do='false' word="个人中心"></blackHeader>
      <div class="userHeader">
        <img src="../assets/images/570ef05dNc02e5acf.jpg" alt="">
        <p>我的名字</p>
        <div class="pro_type_warp">
          <div class="pro_type_warp_item">
            <div class="pro_type_warp_img_box">
              <div class="pro_type_warp_img"></div>
              <div class="red_dd"></div>
            </div>
            <p>代付款</p>
          </div>
          <div class="pro_type_warp_item">
            <div class="pro_type_warp_img_box">
              <div class="pro_type_warp_img"></div>
              <div class="red_dd"></div>
            </div>
            <p>待收货</p>
          </div>
          <div class="pro_type_warp_item">
            <div class="pro_type_warp_img_box">
              <div class="pro_type_warp_img"></div>
              <div class="red_dd"></div>
            </div>
            <p>已完成</p>
          </div>
        </div>
      </div>
      <div class="menu_item_wrap first">
        <a class="menu_item">
          <em class="user_icon menu_item_icon menu_item_icon_order"></em>
          我的订单
          <em class="user_icon menu_item_jiantou"></em>
        </a>
        <a class="menu_item">
          <em class="user_icon menu_item_icon menu_item_icon_order"></em>
          我的优惠券
          <em class="user_icon menu_item_jiantou"></em>
        </a>
        <a class="menu_item">
          <em class="user_icon menu_item_icon menu_item_icon_order"></em>
          我的预约
          <em class="user_icon menu_item_jiantou"></em>
        </a>
        <a class="menu_item">
          <em class="user_icon menu_item_icon menu_item_icon_order"></em>
          我的喜欢
          <em class="user_icon menu_item_jiantou"></em>
        </a>
        <a class="menu_item">
          <em class="user_icon menu_item_icon menu_item_icon_order"></em>
          收货地址
          <em class="user_icon menu_item_jiantou"></em>
        </a>
        <a class="menu_item">
          <em class="user_icon menu_item_icon menu_item_icon_order"></em>
          退换货记录
          <em class="user_icon menu_item_jiantou"></em>
        </a>
      </div>
      <div class="menu_item_wrap second">
        <a class="menu_item">
          <em class="user_icon menu_item_icon menu_item_icon_order"></em>
          用户服务协议
          <em class="user_icon menu_item_jiantou"></em>
        </a>
        <a class="menu_item">
          <em class="user_icon menu_item_icon menu_item_icon_order"></em>
          帮助和售后
          <em class="user_icon menu_item_jiantou"></em>
        </a>
        <a class="menu_item">
          <em class="user_icon menu_item_icon menu_item_icon_order"></em>
          关于我们
          <em class="user_icon menu_item_jiantou"></em>
        </a>
      </div>
      <div class="signOut">
        退出登录
      </div>
    </div>
</template>

<script>
    import alert from '../components/alert/alert.vue'
    import blackHeader from '../components/black-header/black-header.vue'
    export default {
        name:'center',
        components:{ alert,blackHeader },
        data(){
          return{
              showAlert:false,
          }
        },
        mounted:function(){
          this.changeTarBar(3);
        },
        beforeMount:function(){
          this.$store.state.isBarshow = true
        },
        methods:{
          changeTarBar(index){
            var me = document.getElementsByClassName('weui-tabbar__item');
            setTimeout(()=>{
              me[index].click();
            },100)
          },


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #center{
    background:#EEEEEE;
    .userHeader{
      padding:1rem 1rem 5rem 1rem;
      width:100%;
      position:relative;
      background: url(../assets/images/header_bg.jpg) no-repeat center;
      background-size: cover;
      text-align:center;
      img{
        width:68px;
        height:68px;
        border-radius: 100px;
      }
      p{
        margin-top:6px;
        color:#fff;
        font-size: 110%;
      }
      .pro_type_warp{
        background: rgba(255,255,255,0.3);
        width:100%;
        overflow: hidden;
        position: absolute;
        bottom:0;
        left:0;
        .pro_type_warp_item{
          float:left;
          margin:0.5rem 0;
          height:3rem;
          width:33%;
          font-size: 85%;
          p{
            font-size:95%;
          }
          .pro_type_warp_img{
            width:30px;
            height:25px;
            margin:0 auto;
            background: url(../assets/images/usercenter.png) no-repeat 0px -30px;
            background-size: 30px;
          }
        }
        .pro_type_warp_item:nth-child(2){
          border-left:1px solid #fff;
          border-right:1px solid #fff;
          .pro_type_warp_img{
            background: url(../assets/images/usercenter.png) no-repeat 0px 0px;
            background-size: 30px;
          }
        }
        .pro_type_warp_item:last-child{
          .pro_type_warp_img{
            background: url(../assets/images/usercenter.png) no-repeat 0px -60px;
            background-size: 30px;
          }
        }
      }
    }
    .menu_item_wrap{
      margin: 10px 0;
      background: #FFF;
      font-size: 14px;
      padding-left: 20px;
      a{
        display: block;
        line-height: 50px;
        height: 50px;
        border-bottom:1px solid #ccc;
        em.menu_item_icon_order{
          background: url(../assets/images/usercenter.png) no-repeat;
          background-size: 28px;
          background-position: -5px -88px;
          float: left;
          margin-top: 15px;
          display: block;
          width: 28px;
          height: 20px;
        }
        em.menu_item_jiantou{
          background: url(../assets/images/usercenter.png) no-repeat;
          float: right;
          margin-top: 7px;
          display: block;
          width: 28px;
          height: 30px;
          background-size: 28px;
          background-position: 0 -420px;
        }
      }
    }
    .menu_item_wrap.first{
      a:nth-child(2) em.menu_item_icon_order{
          background-position: -5px -116px;
      }
      a:nth-child(3) em.menu_item_icon_order{
        background-position: -5px -144px;
      }
      a:nth-child(4) em.menu_item_icon_order{
        background-position: -5px -172px;
      }
      a:nth-child(5) em.menu_item_icon_order{
        background-position: -5px -200px;
      }
      a:nth-child(6) em.menu_item_icon_order{
        background-position: -5px -228px;
      }
      a:nth-child(6){
        border-bottom:none;
      }
    }
    .menu_item_wrap.second{
      a em.menu_item_icon_order{
        background-position: -5px -256px;
      }
      a:nth-child(2) em.menu_item_icon_order{
        background-position: -5px -284px;
      }
      a:nth-child(3) em.menu_item_icon_order{
        background-position: -5px -312px;
      }
      a:nth-child(3){
        border-bottom:none;
      }
    }
    .signOut{
      width:100%;
      font-size: 80%;
      display: block;
      text-align: center;
      line-height: 50px;
      height: 50px;
      margin: 10px 0;
      color:#666;
      background-color: #fff;
    }
  }
</style>
