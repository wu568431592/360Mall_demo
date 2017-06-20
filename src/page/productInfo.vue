<template>
    <div id="productInfo">
      <blackHeader showHeader_do='false' word="商品详情"></blackHeader>
      <div class="silder_box">
        <Swiper class="diy_swiper" loop :list="demo06_list" height="20rem"  dots-position="center" ></Swiper>
      </div>
      <div class="proInfo">
        <div class="like_button">
          <span @click="likeme($event)" v-bind:class="{active:islike}"></span>
        </div>
        <div class="info-title">
          【套装版】360手机 N5S 全网通 6GB 64GB 幻影黑色 移动联通电信4G手机 双卡双待
        </div>
        <div class="info-feihua">
          <span>
            现货抢购！双2.5D弧面玻璃/前置双摄/6GB大内存+骁龙653/豪华游戏大礼包!
            <a href="#"> 更有6GB大内存的N5现货，快来买！</a>
          </span>
        </div>
        <div class="info-price">
          ￥<span data-price="1849.00">1849.00</span>
        </div>
      </div>
      <div class="addCart_box">
        <div class="img_box"></div>
        <div class="button_box"><span>￥9.90</span>加入购物车</div>
      </div>
    </div>
</template>

<script>
    import blackHeader from '../components/black-header/black-header.vue'
    import { Swiper }  from 'vux'
    export default {
      name:'productInfo',
      data(){
          return {
            demo06_list: [],
            islike : false,
          }
      },
      components:{ blackHeader,Swiper },
      beforeMount:function(){
        this.$store.state.isBarshow = false
      },
      mounted:function(){

        this.demo06_list = [{
          url: 'javascript:',
          img: 'http://'+this.$store.state.serverIP+'/images/59264e07N797a8757.jpg',
        }, {
          url: 'javascript:',
          img: 'http://'+this.$store.state.serverIP+'/images/59223f97N7bcb0c25.jpg',
        },{
          url: 'javascript:',
          img: 'http://'+this.$store.state.serverIP+'/images/59223fa1Nb756d22c.jpg',
        },{
          url: 'javascript:',
          img: 'http://'+this.$store.state.serverIP+'/images/59223f9aN29b9257e.jpg',
        },{
          url: 'javascript:',
          img: 'http://'+this.$store.state.serverIP+'/images/59223fa1N995c4b75.jpg',
        },{
          url: 'javascript:',
          img: 'http://'+this.$store.state.serverIP+'/images/59223fa2Nb85d661f.jpg',
        },{
          url: 'javascript:',
          img: 'http://'+this.$store.state.serverIP+'/images/59264e08Nbb6c649b.jpg',
        }];
      },
      methods:{
        likeme(e){
          if(localStorage.getItem('userName') == null){
            this.$parent.$parent.showAlert = true
            return
          }
          this.islike = !this.islike;
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#productInfo{
  .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
    display:none;
  }
  .vux-slider > .vux-indicator > a, .vux-slider .vux-indicator-right > a{
    margin-left:10px;
  }
  .vux-slider > .vux-indicator > a > .vux-icon-dot, .vux-slider .vux-indicator-right > a > .vux-icon-dot {
    width: 8px;
    height: 8px;
    border-radius: 4px;
  }
  .addCart_box{
    background: #fff;
    z-index:1000;
    width:100%;
    position: fixed;
    left:0;
    bottom:0;
    height:50px;
    line-height: 50px;
    overflow: hidden;
  }
  .addCart_box>div.button_box{
    float:right;
    width:80%;
    background: #FF8301;
    text-align: center;
    color:#fff;
  }
  .addCart_box>div.img_box{
    float:left;
    width:30px;
    height:30px;
    margin:10px 10px 0 20px;
    background:#Fff url(../assets/images/car_bg.png) no-repeat;
    -webkit-background-size:;
    background-size:100%;
  }
  .silder_box{
    padding:10px 0px;
    border-bottom: 1px solid #E5E5E5;
  }
  .proInfo{
    padding:10px;
    font-size:80%;
    .like_button{
      float: right;
      text-align: right;
      font-size: 1.2rem;
      span{
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        margin: .2rem .5rem;
        background: url(../assets/images/like.png) no-repeat .0rem .0rem;
        background-size: 100%;
        vertical-align: middle;
      }
      span.active{
        background: url(../assets/images/like.png) no-repeat 0px -24px;
        background-size: 100%;
      }
    }
    .info-title{
      color: #333;
      line-height: 1.5rem;
      margin-bottom: .5rem;
    }
    .info-feihua{
      color: #ff5a00;
      font-size: 75%;
      display: block;
      line-height: 1.3rem;
      word-wrap: break-word;
      a{
        color: #ff5a00;
        text-decoration: underline;
      }
    }
    .info-price{
      color: #F6382C;
      line-height: 2.0rem;
    }
  }
}
</style>
