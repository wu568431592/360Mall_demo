<template>
    <div id="search-main" class="animated slideInRight">
        <div class="search-top">
          <div class="header-left">
            <div class="left-arrow" @click="closesearchmain"></div>
          </div>
          <div class="header-center">
            <input type="text" placeholder="N5S">
          </div>
          <div class="header-right">搜索</div>
        </div>
        <div class="search-details">
          <ul>
            <li v-for="s in searchDetails">{{s}}</li>
          </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name:'search-main',
        data(){
            return{
                searchDetails:[]
            }
        },
        methods:{
          ...mapGetters([
              'getSearchDetails'
          ]),
          closesearchmain:function(){
              this.$parent.showSearch = false;
              this.$store.state.isBarshow = true;
          }
        },
        mounted:function(){
            //console.log(this.$store.commit('getSearchDetails'))
            this.searchDetails = this.$store.getters.getSearchDetails
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #search-main{
    width:100%;
    height:100%;
    .search-top{
      height:3.2rem;
      background:#F7F7F7;
      padding: 0 1rem;
      border-bottom: .1rem solid #DDD;
      div{
        float:left;
      }
      .header-left{
        width:10%;
        height:100%;
        position: relative;
        .left-arrow {
          position: absolute;
          width: 30px;
          height: 30px;
          top: 0px;
          left: 0px;
        &:before {
           content: "";
           position: absolute;
           width: 12px;
           height: 12px;
           border: 1px solid #858585;
           border-width: 1px 0 0 1px;
           transform: rotate(315deg);
           top: 17px;
           left: 7px;
         }
        }
      }
      .header-center{
        height:100%;
        width:75%;
        padding:0.5rem 0;
        input{
          height:100%;
          width:100%;
          padding:0 0.5rem;
          border:1px solid #E8E8E8;
          border-radius: 5px;
        }
      }
      .header-right{
        height:100%;
        width:15%;
        font-size:90%;
        padding:0.9rem 0.1rem 0.5rem 1rem;
      }
    }
    .search-details{
      padding:1rem;
      height:100%;
      background:#F0F0F0;
      ul{
        overflow: hidden;
        li{
          font-size: 0.9rem;
          line-height: 1.5rem;
          float: left;
          margin: .5rem;
          padding: .2rem 1.5rem;
          color: #989898;
          border: .1rem solid #DCDCDC;
          -webkit-border-radius: 99rem;
          -moz-border-radius: 99rem;
          border-radius: 99rem;
          background: #FFF;
        }
      }
    }
  }

</style>
