<template>
    <div id="index">
        <searchMain class="searchmain" v-show="showSearch"></searchMain>
        <div class="search-box" @click="showsearchmain">
          <input type="text" placeholder="N5S">
        </div>
    </div>
</template>

<script>
    import searchMain from '../components/search-main.vue'
    export default {
        name:'index',
        components:{searchMain},
        data(){
            return{
                showSearch:false
            }
        },
        methods:{
            showsearchmain:function(){
                this.showSearch = true;
            }
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
  }
</style>
