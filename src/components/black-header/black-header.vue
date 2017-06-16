<template>
    <div id="black-header">
      <div class="header_box">
        <div class="go_back_box" @click="goBack"></div>
        <div class="header_name">{{word}}</div>
        <div class="bread_box" @click="show_bottom">
          <svg viewBox="0 0 30 21">
            <path d="M0,0v3h30V0H0z M0,12h30V9H0V12z M0,21h30v-3H0V21z"></path>
          </svg>
        </div>
        <div class="header_do" v-if="isshowHeader_do" @click="showDelete($event)">编辑</div>
      </div>
      <div class="header_bottom" v-show="isbottomshow">
        <div class="header_bottom_item">
          首页
        </div>
        <div class="header_bottom_item">
          购物车
        </div>
        <div class="header_bottom_item">
          我的订单
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name:'black-header',
        data(){
            return {
              isbottomshow:false
            }
        },
        props:['showHeader_do','word'],
        computed:{
          isshowHeader_do:function(){
            if(this.showHeader_do == 'true'){
                return true
            }
            return false
          }
        },
        methods:{
          show_bottom:function(){
            this.isbottomshow = !this.isbottomshow
          },
          goBack(){
              window.history.go(-1)
          },
          showDelete(e){
            if(e.target.innerHTML == '完成'){
              e.target.innerHTML = '编辑'
            }else{
              e.target.innerHTML = '完成'
            }
            this.$parent.showMe = !this.$parent.showMe;
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #black-header{
    width:100%;
    text-align:center;
    position:relative;
    div.header_box{
      height:43px;
      background:#000000;
      color:#fff;
      padding:0.2rem 0.4rem;
      line-height:36px;
      overflow: hidden;
      div{
        float:left;
      }
      div:last-child{
        float:right
      }
      div.go_back_box{
        position:absolute;
        top:8px;
        left:7px;
        z-index: 10000;
        width:25px;
        height:25px;
        background: url(../../assets/images/t014c7a9a806382db2a.png) no-repeat center;
        background-size: 40%;
      }
      .bread_box{
        float:right;
      }
      .header_name{
        position:absolute;
        top:0;
        left:0;
        line-height: 43px;
        width:100%;
        font-size:90%;
      }
      .header_do{
        font-size:90%;
        position:absolute;
        top:3px;
        right:37px;
        z-index: 10000;
      }
      .bread_box{
        position:absolute;
        top:3px;
        right:7px;
        z-index: 10000;
        color:#fff;
        margin-top:2px;
        margin-left:10px;
        width:20px;
        height:30px;
        svg{
          fill: #fff;
        }
      }
    }
    .header_bottom{
      overflow: hidden;
      padding:0.2rem 0.4rem;
      border-bottom: 0.5px solid #bbb;
      background:#fff;
      div.header_bottom_item{
        float:left;
        width:33%;
        heigth:43px;
        line-height: 36px;
        font-size: 80%;
      }
    }
  }
</style>
