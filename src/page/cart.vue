<template>
    <div id="cart">
      <blackHeader showHeader_do='true' word="购物车"></blackHeader>
      <div class="cartList">
        <div class="cartItem">
          <div class="check_box">
            <span class="check checked"></span>
          </div>
          <div class="img_box">
            <img src="../assets/images/58db9174Ne76c5c3e.jpg" alt="">
          </div>
          <div class="itemDetails">
            <p class="p_name">360手机 N5S 全网通 6GB+64GB 幻影黑色 移动联通电信4G手机 双卡双待</p>
            <p class="p_price">￥1699.00</p>
            <div class="button_box">
              <span class="reduce disabled" @click="reduce($event)">-</span>
              <span class="pro_num">1</span>
              <span class="add" @click="add($event)">+</span>
            </div>
          </div>
        </div>
        <div class="cartItem">
          <div class="check_box">
            <span class="check checked"></span>
          </div>
          <div class="img_box">
            <img src="../assets/images/58db9174Ne76c5c3e.jpg" alt="">
          </div>
          <div class="itemDetails">
            <p class="p_name">360手机 N5S 全网通 6GB+64GB 幻影黑色 移动联通电信4G手机 双卡双待</p>
            <p class="p_price">￥1699.00</p>
            <div class="button_box">
              <span class="reduce disabled" @click="reduce($event)">-</span>
              <span class="pro_num">1</span>
              <span class="add" @click="add($event)">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="settlement_box">
        <div class="check_box">
          <span class="check checked" ></span>
          <span>全选</span>
        </div>
        <div class="pro_price">
          <p>合计：<span>￥1699.00</span></p>
          <p>优惠：<span>￥0.00</span></p>
        </div>
        <div class="settlement">
          去结算（<span>{{itemLength}}</span>）
        </div>
        <div class="delete" v-show="showMe">
          删除
        </div>
        <div class="like" v-show="showMe">
          移入喜欢
        </div>
      </div>
    </div>
</template>

<script>
  import blackHeader from '../components/black-header/black-header.vue'
  import { XNumber } from 'vux'
  export default {
        name:'cart',
        data(){
          return{
            showAlert:false,
            showMe:false,
            itemLength:0
          }
        },
        components:{
          blackHeader,XNumber
        },
        beforeUpdata:{

        },
        beforeMount:function(){
          this.$store.state.isBarshow = false
        },
        mounted:function(){
          this.itemLength=document.getElementsByClassName('cartItem').length
        },
        methods:{
            goIndex:function(){
              this.$router.push({path:'/index'})
            },
            goallproduct:function(){
              this.$router.push({path:'/allproduct'})
            },
            gocenter:function(){
              this.$router.push({path:'/center'})
            },
            goLogin:function(){
              this.$router.push({path:'/login'})
            },
            add(e){
              e.target.previousElementSibling.previousElementSibling.setAttribute('class','reduce' )
              var num = parseInt(e.target.previousElementSibling.innerHTML);
              e.target.previousElementSibling.innerHTML = num+1
            },
            reduce(e){
              if(parseInt(e.target.nextElementSibling.innerHTML)==2){
                e.target.setAttribute('class','disabled reduce' )
                var num = parseInt(e.target.nextElementSibling.innerHTML);
                e.target.nextElementSibling.innerHTML = num-1
              }else if(parseInt(e.target.nextElementSibling.innerHTML)>1){
                e.target.setAttribute('class','reduce' )
                var num = parseInt(e.target.nextElementSibling.innerHTML);
                e.target.nextElementSibling.innerHTML = num-1
              }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #cart{
    background: #F0F0F0;
    height:100%;
    .settlement_box{
      overflow: hidden;
      position: fixed;
      bottom:0;
      left:0;
      width:100%;
      heihgt:50px;
      line-height: 50px;
      .check_box{
        float:left;
        padding:0 1rem;
        span{
          font-size:85%;
        }
        span.check{
          display: inline-block;
          vertical-align: middle;
          background: url(../assets/images/icon_sprite.png);
          background-size: 34px 190px;
          background-position: -0px -20px;
          width: 23px;
          height: 23px;
        }
        span.check.checked{
          background-position: -0px -43px;
          width: 23px;
          height: 23px;
        }
      }
      .pro_price{
        padding-top:5px;
        margin-left:10px;
        float:left;
        overflow: hidden;
        p{
          height:20px;
          line-height: 20px;
          font-size: 70%;
          span{
            color:#ED1C24;
          }
        }
      }
      .settlement{
        width:35%;
        text-align: center;
        float:right;
        font-size:90%;
        background: #ED1C24;
        color:#fff;
      }
      .delete{
        position: absolute;
        top:0;
        right:0;
        z-index:20;
        width:35%;
        text-align: center;
        float:right;
        font-size:90%;
        background: #ED1C24;
        color:#fff;
      }
      .like{
        position: absolute;
        top:0;
        right:35%;
        z-index:20;
        width:38%;
        text-align: center;
        float:right;
        font-size:90%;
        background: #F7941D;
        color:#fff;
      }
    }
    .cartList{
      background: #fff;
      .cartItem{
        padding:0.5rem 1rem;
        overflow:hidden;
        border-bottom:1px solid #eee;
        .check_box{
          height:100px;
          line-height: 100px;
          float:left;
          margin-right:10px;
          span{
            font-size:85%;
          }
          span.check{
            display: inline-block;
            vertical-align: middle;
            background: url(../assets/images/icon_sprite.png);
            background-size: 34px 190px;
            background-position: -0px -20px;
            width: 23px;
            height: 23px;
          }
          span.check.checked{
            background-position: -0px -43px;
            width: 23px;
            height: 23px;
          }
        }
        .img_box{
          margin-top:5px;
          float:left;
          width:90px;
          height:90px;
          border:1px solid #eee;
          img{
            width:100%;
            padding:1px;
          }
        }
        .itemDetails{
          margin-left:135px;
          font-size:70%;
          p.p_name{
            color: #333;
            display: block;
            height: 3rem;
            line-height: 1.5rem;
            margin-bottom: 0.2rem;
            overflow: hidden;
            white-space: normal;
          }
          p.p_price{
            color:#ED1C24;
          }
          .button_box{
            padding-left:60px;
            span{
              display: inline-block;
              width: 1.8rem;
              height:1.8rem;
              line-height: 1.5rem;
              border:2px solid #D9D9D9;
              background: #fff;
              text-align: center;
              vertical-align: middle;
            }
            span.disabled{
              background: #C9C9C9;
            }
            span.pro_num{
              display: inline-block;
              width:2.2rem;
              border:none;
              border-top:2px solid #D9D9D9;
              border-bottom:2px solid #D9D9D9;
              margin:0;
              text-align: center;
            }
            span.reduce{
              margin-right:-3px;
            }
            span.add{
              margin-left:-3px;
            }
          }
        }
      }
    }
  }
</style>
