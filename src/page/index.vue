<template>
    <div id="index">
        <searchMain class="searchmain" v-show="showSearch"></searchMain>
        <div class="search-box" @click="showsearchmain">
          <input type="text" placeholder="N5S">
        </div>
        <Swiper loop auto :list="demo06_list" height="250px" dots-position="center"></Swiper>
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
    </div>
</template>

<script>
    import searchMain from '../components/search-main/search-main.vue'
    import indexTitle from '../components/index-title/index-title.vue'
    import indexHasHeader from '../components/index-hasheader/index-hasheader.vue'
    import { Swiper,Marquee,MarqueeItem }  from 'vux'
    export default {
        name:'index',
        components:{searchMain,indexHasHeader,indexTitle,Swiper,Marquee,MarqueeItem},
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
            }
        },
        methods:{
            showsearchmain:function(){
                this.showSearch = true;
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
            }]
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/variables.less";
  #index{
    height:100%;
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
      z-index:10;
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
  }

</style>
