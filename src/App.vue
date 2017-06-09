<template>
  <div id="app" class="animated slideInRight">
    <Loading v-model="isLoading"></Loading>

    <view-box ref="viewBox" body-padding-bottom="55px">
      <router-view></router-view>
      <tabbar v-show='isBarShow' class="diy-tabbar">
        <tabbar-item selected id="tabIndex" @click.native="">
          <img slot="icon" src="./assets/images/t011de32570ba76b7d2.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="./assets/images/t01e287c3490e3f14da.png">
          <span slot="label">分类</span>
        </tabbar-item>
        <tabbar-item >
          <img slot="icon" src="./assets/images/t01069055004f2dcc51.png">
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon" src="./assets/images/t01821a03716758d2e1.png">
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
      })
    },
    methods:{

    },
    data(){
        return{
            isBarShow:true,
        }
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
