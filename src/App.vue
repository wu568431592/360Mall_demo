<template>
  <div id="app" class="animated slideInRight">
    <Loading v-model="isLoading"></Loading>

    <view-box ref="viewBox" body-padding-bottom="55px">
      <router-view></router-view>
      <tabbar class="diy-tabbar" v-show="meshow" >
        <tabbar-item selected id="tabIndex" link="/index">
          <img slot="icon" src="./assets/images/t011de32570ba76b7d2.png">
          <img slot="icon-active" src="./assets/images/t011a7cd356bb976213.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/allproduct">
          <img slot="icon" src="./assets/images/t01e287c3490e3f14da.png">
          <img slot="icon-active" src="./assets/images/t0160f3f274548cc6ea.png">
          <span slot="label">分类</span>
        </tabbar-item>
        <tabbar-item link="/cart">
          <img slot="icon" src="./assets/images/t01069055004f2dcc51.png">
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item link="/center">
          <img slot="icon" src="./assets/images/t01821a03716758d2e1.png">
          <img slot="icon-active" src="./assets/images/t01bcd9237ad4dc6e8c.png">
          <span slot="label">我</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
  import { Loading,ViewBox,Tabbar, TabbarItem }  from 'vux'
  import { mapState } from 'vuex'

  export default {
    name:'app',
    components: {
      Loading,ViewBox,Tabbar, TabbarItem
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading
      }),
      meshow:function(){
          return this.$store.getters.getIsBarshow
      }
    },
    methods:{

    },
    data(){
        return{

        }
    },
    watch:{

    }
  }
</script>

<style socped lang="less">
  #app{
    position: relative;
    width:100%;
    height:100%;
    .diy-tabbar{
      .weui-tabbar__item{
        div{
          width:50px;
          height:35px;
        }
      }
    }
  }
</style>
