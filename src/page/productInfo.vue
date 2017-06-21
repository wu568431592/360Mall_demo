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
          ￥<span>1699.00</span>
        </div>
      </div>
      <div class="addCart_box">
        <div class="img_box"></div>
        <div class="button_box">￥<span>1699.00</span>加入购物车</div>
      </div>
      <div class="select_kinds">
        <div class="select_box">
          <span>颜色</span>
          <ul @click="selectType($event)">
            <li>深海蓝</li>
            <li class="active">幻影黑</li>
          </ul>
        </div>
        <div class="select_box">
          <span>型号</span>
          <ul @click="selectType($event)">
            <li class="active">裸机版</li>
            <li>套装版</li>
          </ul>
        </div>
        <div class="select_box">
          <span>版本</span>
          <ul @click="selectType($event)">
            <li class="active">64G</li>
            <li>128G</li>
          </ul>
        </div>
      </div>
      <div class="num_box">
        <span>数量</span>
        <div class="button_box">
          <span @click="reduce($event)" class="disabled">-</span>
          <span>1</span>
          <span @click="add($event)">+</span>
        </div>
      </div>
      <group class="margin_bottom">
        <x-address :title="title2" v-model="value2" raw-value value-text-align="left" :list="addressData" ></x-address>
      </group>
      <div class="info_main">
        <div class="info_title">
          <ul>
            <li class="active">产品详情</li>
            <li>规格参数</li>
            <li>购买咨询</li>
          </ul>
        </div>
        <div class="info_img">
          <ul>
            <li v-for="i in baseList">
              <x-img :src="i" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import blackHeader from '../components/black-header/black-header.vue'
    import { Swiper,XAddress,Group,ChinaAddressV3Data,XImg }  from 'vux'
    export default {
      name:'productInfo',
      data(){
          return {
            demo06_list: [],
            baseList:[],
            islike : false,
            addressData: ChinaAddressV3Data,
            title2: '配送至',
            value2: ['北京市', '市辖区', '海淀区'],
          }
      },
      components:{ blackHeader,Swiper,Group,XAddress,XImg },
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
        this.baseList=[
          'http://'+this.$store.state.serverIP+'/images/592247e0N40ce974e.jpg',
          'http://'+this.$store.state.serverIP+'/images/592247e1Nc6d9a5f2.jpg',
          'http://'+this.$store.state.serverIP+'/images/592247d8Nbb042112.jpg',
          'http://'+this.$store.state.serverIP+'/images/592247e1N19d0a8d3.jpg',
          'http://'+this.$store.state.serverIP+'/images/592247e1Nad990153.jpg',
          'http://'+this.$store.state.serverIP+'/images/592247e0N5f570061.jpg',

        ]
      },
      methods:{
        likeme(e){
          if(localStorage.getItem('userName') == null){
            this.$parent.$parent.showAlert = true
            return
          }
          this.islike = !this.islike;
        },
        selectType(e){
          var liList = e.target.parentNode.children;
          for(var i = 0 ; i<liList.length;i++){
            liList[i].setAttribute('class','');
          }
          e.target.setAttribute('class','active')
        },
        add(e){
          e.target.previousElementSibling.previousElementSibling.setAttribute('class','' )
          var num = parseInt(e.target.previousElementSibling.innerHTML);
          e.target.previousElementSibling.innerHTML = num+1
        },
        reduce(e){
          if(parseInt(e.target.nextElementSibling.innerHTML)==2){
            e.target.setAttribute('class','disabled' )
            var num = parseInt(e.target.nextElementSibling.innerHTML);
            e.target.nextElementSibling.innerHTML = num-1
          }else if(parseInt(e.target.nextElementSibling.innerHTML)>1){
            e.target.setAttribute('class','' )
            var num = parseInt(e.target.nextElementSibling.innerHTML);
            e.target.nextElementSibling.innerHTML = num-1
          }
        },
        success (src, ele) {
          //console.log('success load', src)
          const span = ele.parentNode.querySelector('span')
          ele.parentNode.removeChild(span)
        },
        error (src, ele, msg) {
          //console.log('error load', msg, src)
          const span = ele.parentNode.querySelector('span')
          span.innerText = 'load error'
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#productInfo{
  background:#F5F5F5;
  .margin_bottom{
    margin-bottom:10px;
  }
  .vux-no-group-title{
    margin-top:0;
    font-size: 80%;
  }
  .weui-cell__hd{
    margin-right:40px;
    font-size: 80%;
    label{
      width:60px;
    }
  }
  .weui-cell{
    padding:20px 10px;
  }
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
    background:#FFF;
    border-bottom: 1px solid #E5E5E5;
  }
  .proInfo{
    font-size:80%;
    padding-bottom:10px;
    .like_button{
      background:#FFF;
      padding:10px;
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
      padding:5px 10px;
      background:#FFF;
      color: #333;
      line-height: 1.5rem;
    }
    .info-feihua{
      padding:3px 10px;
      background:#FFF;
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
      padding:3px 10px;
      background:#FFF;
      color: #F6382C;
      line-height: 2.0rem;
      border-bottom:1px solid #E5E5E5;
    }
  }
  .select_kinds{
    border-top:1px solid #e5e5e5;
    border-bottom:1px solid #e5e5e5;
    background: #fff;
    padding:0 10px;
    .select_box{
      overflow:hidden;
      padding-tOP:10px;
      border-bottom:1px solid #e5e5e5;
      span{
        float:left;
        font-size:80%;
        margin:0 0px 5px 0px;
        padding:8px 0px;
      }
      ul{
        margin-left:50px;
        li{
          float:left;
          font-size:80%;
          border:1px solid #e5e5e5;
          border-radius:5px;
          margin:0 5px 10px 5px;
          padding:8px 16px;
        }
        li.active{
          color:#FD532D;
          border:1px solid #FD532D;
        }
      }
    }
    .select_box:last-child{
      border-bottom: none;
    }
  }
  .num_box{
    padding:0 10px;
    background: #fff;
    overflow:hidden;
    font-size:80%;
    >span{
      float:left;
     padding:10px 0;
       height:30px;
       line-height: 30px;
     }
    >div{
      float:right;
      padding:10px;
      span{
        height:30px;
        line-height: 30px;
        display: inline-block;
        text-align: center;
      }
      span:nth-child(2n+1){
        width:30px;
        border:1px solid #eee;
        background: #F6F6F6;
        border-radius: 5px 0 0 5px;
      }
      span:nth-child(3){
        border-radius: 0px 5px 5px 0px;
      }
      span.disabled{
        background: #B6B6B6;
      }
      span:nth-child(2n){
        border-top:1px solid #eee;
        width:40px;
        margin-left:-5px;
        margin-right:-5px;
        border-bottom:1px solid #eee;
      }
     }
  }
  .info_main{
    background: #fff;
    .info_title{
      padding:10px;
      border-top:1px solid #e5e5e5;
      border-bottom:1px solid #e5e5e5;
      ul{
        overflow: hidden;
        li{
          float:left;
          padding:5px 10px;
          font-size: 80%;
          width:33%;
          text-align: center;
        }
        li:nth-child(2){
          border-left:1px solid #e5e5e5;
          border-right:1px solid #e5e5e5;
        }
        li.active{
          color:#80CB19;
        }
      }
    }
    .info_img{
      padding-bottom:15px;
      padding-top:15px;
      li{
        text-align: center;
        img{
          width:93%;
        }
      }

    }
  }
}
</style>
