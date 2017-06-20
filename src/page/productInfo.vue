<template>
    <div id="productInfo">
      <blackHeader showHeader_do='false' word="商品详情"></blackHeader>
      <div class="silder_box">
        <Swiper class="diy_swiper" loop :list="demo06_list" height="20rem"  dots-position="center" ></Swiper>
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
        }, {
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
}
</style>
