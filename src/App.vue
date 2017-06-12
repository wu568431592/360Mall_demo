<template>
  <div id="app" class="animated slideInRight">
    <Loading v-model="isLoading"></Loading>
    <view-box ref="viewBox" padding-bottom="55px">
      <router-view></router-view>
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
