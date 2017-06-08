<template>
  <div id="app" class="animated slideInRight">
    <Loading v-model="isLoading"></Loading>
    <router-view></router-view>
  </div>
</template>

<script>
  import { Loading }  from 'vux'
  import { mapState } from 'vuex'

  export default {
    name:'app',
    components: {
      Loading
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading
      })
    }
  }
</script>

<style socped lang="less">
  #app{
    width:100%;
    height:100%;
  }
</style>
