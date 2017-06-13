<template>
  <div id="app" class="animated slideInRight">
    <Loading v-model="isLoading"></Loading>
    <view-box ref="viewBox" padding-bottom="55px">
      <router-view></router-view>
    </view-box>
    <Metabbar v-show="$store.state.isBarshow"></Metabbar>
    <alert v-show="showAlert"></alert>
  </div>
</template>

<script>
  import { Loading,ViewBox,Tabbar, TabbarItem }  from 'vux'
  import { mapState } from 'vuex'
  import Metabbar from './components/Metabbar/Metabbar.vue'
  import alert from './components/alert/alert.vue'
  export default {
    name:'app',
    components: {
      Loading,ViewBox,Tabbar, TabbarItem,Metabbar,alert
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading
      }),
    },
    methods:{

    },
    data(){
        return{
          showAlert:false
        }
    },

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
