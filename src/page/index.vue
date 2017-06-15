<template>
    <div id="index">
        <div class="gotop" v-show="gotopshow"><img src="../assets/images/top.png" alt=""></div>
        <searchMain class="searchmain" v-show="showSearch"></searchMain>
        <div class="search-box" @click="showsearchmain">
          <input type="text" placeholder="N5S">
        </div>
        <Swiper class="diy_swiper" loop auto  :list="demo06_list" height="13rem"  dots-position="center" ></Swiper>
        <div class="padding-sm topic">
          <div class="img_box"><img src="../assets/images/360pic.png"></div>
          <div class="Marquee_box">
            <Marquee>
              <marquee-item v-for="i in topics" :key="i" class="align-middle text-size-sm">{{i}}</marquee-item>
            </Marquee>
          </div>
        </div>
        <indexTitle words="明星单品"></indexTitle>
        <indexHasHeader></indexHasHeader>
        <indexTitle words="新品上市"></indexTitle>
        <div class="big-imgs">
          <a href="#">
            <img src="../assets/images/2bdfe31f-9fe0-4430-8ef7-b9824997e80b.jpg" alt="">
            <h3>360手机 N5S 全网通 6GB+64GB 幻影黑色 移动联通电信4G手机 双卡双待</h3>
            <p>1699.00</p>
          </a>
        </div>
        <indexTitle words="手机"></indexTitle>
        <div class="imggg-box">
          <span><img src="../assets/images/default_img.jpg"></span>
          <x-img :src="src"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
        </div>
        <indexNoHeader></indexNoHeader>
        <indexTitle words="数码"></indexTitle>
        <div class="imggg-box">
          <span><img src="../assets/images/default_img.jpg"></span>
          <x-img :src="src1"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
        </div>
        <indexNoHeader></indexNoHeader>
        <indexTitle words="影音娱乐"></indexTitle>
        <div class="imggg-box">
          <span><img src="../assets/images/default_img.jpg"></span>
          <x-img :src="src2"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
        </div>
        <indexNoHeader></indexNoHeader>
        <indexTitle words="手机"></indexTitle>
        <div class="imggg-box">
          <span><img src="../assets/images/default_img.jpg"></span>
          <x-img :src="src"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
        </div>
        <indexNoHeader></indexNoHeader>
        <indexTitle words="数码"></indexTitle>
        <div class="imggg-box">
          <span><img src="../assets/images/default_img.jpg"></span>
          <x-img :src="src1"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
        </div>
        <indexNoHeader></indexNoHeader>
        <indexTitle words="影音娱乐"></indexTitle>
        <div class="imggg-box">
          <span><img src="../assets/images/default_img.jpg"></span>
          <x-img :src="src2"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
        </div>
        <indexNoHeader></indexNoHeader>
        <indexTitle words="点击查看更多商品>>"></indexTitle>
        <grid class="diy-grid">
          <grid-item>
              <div>7</div>
              <h4>7天无理由退货</h4>
          </grid-item>
          <grid-item >
            <div>15</div>
            <h4>质量问题15天换货</h4>
          </grid-item>
          <grid-item >
            <div>包</div>
            <h4>满99元包邮</h4>
          </grid-item>
        </grid>
        <div class="padding-lg">
          <p><em>客服热线：</em><span><i><a href="tel:400-6822-360">400-6822-360</a> 周一到周日 9:00-18:00</i><i><a href="tel:400-0111-366">400-0111-366</a> (手机类产品)</i><i>周一至周日 8:00-22:00（仅收市话费）</i></span></p>
          <p class="copyright">360商城©2013-2016 版权所有</p>
        </div>
        <!--<Metabbar class="diy-metabbar"></Metabbar>-->
    </div>
</template>

<script>
    import searchMain from '../components/search-main/search-main.vue'
    import indexTitle from '../components/index-title/index-title.vue'
    import indexHasHeader from '../components/index-hasheader/index-hasheader.vue'
    import indexNoHeader from '../components/index-noheader/index-noheader.vue'
    import Metabbar from '../components/Metabbar/Metabbar.vue'
    import alert from '../components/alert/alert.vue'
    import { Swiper,Marquee,MarqueeItem,XImg,Grid, GridItem }  from 'vux'
    import { mapState } from 'vuex'
    export default {
        name:'index',
        components:{alert,Metabbar,searchMain,indexHasHeader,indexNoHeader,indexTitle,Swiper,Marquee,MarqueeItem,XImg,Grid, GridItem},
        data(){
            return{
                showSearch:false,
                demo06_list:[],
                topics:[
                    "360手机N5S 6月7日10点放量抢购！",
                    "360商城邀您参加用户调研",
                    "360商城网站信息重组和系统升级公告",
                    "智能in货放肆购！N5爆品最高特惠100元！"
                ],
                serverIP : this.$store.state.serverIP,
                src:'http://'+this.$store.state.serverIP+'/images/3f257ca7-072d-4839-a237-1904367e9ed0.jpg',
                src1:'http://'+this.$store.state.serverIP+'/images/0dfc7f14-bd8c-4176-a764-116a82f0f2c3.jpg',
                src2:'http://'+this.$store.state.serverIP+'/images/58b085b2-1ae3-4520-b728-5f333bc3b2c5.jpg',
                gotopshow:false,
                showAlert:false
            }
        },
        beforeMount:function(){
          this.$store.state.isBarshow = true
        },
        methods:{
            showsearchmain:function(){
                this.showSearch = true;
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
            },
            changeTarBar(index){
              var me = document.getElementsByClassName('weui-tabbar__item');
              setTimeout(()=>{
                me[index].click();
              },100)
            }
        },
        mounted:function(){
            this.demo06_list = [{
              url: 'javascript:',
              img: 'http://'+this.serverIP+'/images/2bdfe31f-9fe0-4430-8ef7-b9824997e80b.jpg',
            }, {
              url: 'javascript:',
              img: 'http://'+this.serverIP+'/images/64c9b89c-6f74-4940-a682-1635046f66db.jpg',
            }, {
              url: 'javascript:',
              img: 'http://'+this.serverIP+'/images/a10679c5-c5d0-4443-89c4-b4e463c8889b.jpg',
            },{
              url: 'javascript:',
              img: 'http://'+this.serverIP+'/images/a10679c5-c5d0-4443-89c4-b4e463c8889b.jpg',
            }];
            this.changeTarBar(0);
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/variables.less";
  #index{
    background:#fff;
    .gotop{
      width:3rem;
      height:3rem;
      position: fixed;
      right:10px;
      z-index:10000;
      img{
        width:100%;
      }
    }
    .search-box{
      width:100%;
      height:3.2rem;
      padding:0.5rem;
      background:#f7f7f7;
      input{
        height:100%;
        width:100%;
        border:1px solid #E8E8E8;
        text-indent:10px;
        border-radius: 5px;
      }
    }
    .searchmain{
      width:100%;
      height:100%;
      position: fixed;
      z-index:10000000000;
      background: @white ;
    }
    .topic{
      overflow:hidden;
      height:2.5rem;
      .img_box{
        width:25%;
        padding:0.1rem 0.5rem;
        height:100%;
        float:left;
        border-right:1px solid #E1E1E1;
        img{
          width:100%;
        }
      }
      .Marquee_box{
        padding-left:0.5rem;
        float:left;
        width:75%;
        height:100%;
        .text-size-sm{
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
          overflow: hidden;
          font-size:95%;
        }
      }
    }
    .big-imgs{
      img{
        width:100%;
      }
      h3{
        display: block;
        padding:1rem 1rem;
        font-size: 85%;
        color: #222;
      }
      p{
        padding:0rem 1rem 1rem 1rem;
        font-size: 80%;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .tabbar-box{
      width:100%;
      height:5rem;
      position: absolute;
      bottom:0;
      left:0;
      z-index: 1000;
    }
    .imggg-box img{
      width:100%;
      height: 11rem;
    }
    .diy-grid{
      a{
        color:#666;
        padding:1rem 0.02rem;
        div{
          width:2.5rem;
          height:2.5rem;
          line-height:2.5rem;
          margin:0 auto;
          text-align: center;
          border:1px solid #aaa;
          border-radius:2.5rem;
          font-size:75%;
        }
        h4{
          text-align: center;
          font-size:80%;
          padding:0.2rem 0rem;
        }
      }
    }
    .padding-lg{
      padding:2rem;
      p{
        overflow: hidden;
        width: 100%;
        margin: 0 auto;
        color:#999;
        em{
          float: left;
          vertical-align: top;
          height: 2rem;
          line-height: 2rem;
          font-size:85%;
        }
        span{
          font-size:85%;
          float: left;
          vertical-align: top;
          i{
            display: block;
            text-align: left;
            height: 2rem;
            line-height: 2rem;
            a{
              color:#666;
            }
          }
        }
      }
      p.copyright{
        margin-top:0.5rem;
        font-size: 85%;
        text-align: center;
      }
    }
    .diy-metabbar{
      position:fixed;
      bottom:0;
      width:100%;
    }
  }
</style>
