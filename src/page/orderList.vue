<template>
    <div id="orderList">
      <blackHeader showHeader_do='false' word="订单列表"></blackHeader>
      <p class="order_type_wrap">
        <a class="order_type dlb cur" @click="toOtherType(0)">全部</a>
        <a class="order_type dlb" @click="toOtherType(1)">待付款</a>
        <a class="order_type dlb" @click="toOtherType(2)">待收货</a>
        <a class="order_type dlb" @click="toOtherType(3)">已完成</a>
      </p>
      <div class="noprd dn">
        <div>
          <img src="../assets/images/order_blank.png" style="width:100%;">
        </div>
        <p>您没有订单</p>
        <a href="#" @click.prevent="go([$router,'allproduct'])">去逛逛</a>
      </div>
    </div>
</template>

<script>
    import blackHeader from '../components/black-header/black-header.vue'
    import { mapMutations } from 'vuex'
    export default {
      name:'orderList',
      components:{blackHeader},
      beforeMount:function(){
        this.$store.state.isBarshow = false
      },
      mounted:function(){
        var showID = parseInt(this.$route.params.id);
        var proTypeList = document.getElementsByClassName('order_type');
        for (var i = 0 ; i< proTypeList.length; i++){
          proTypeList[i].setAttribute('class','order_type dlb');
        }
       proTypeList[showID].setAttribute('class','order_type dlb cur');
      },
      methods:{
        ...mapMutations([
          'go'
        ]),
        toOtherType(id){
          this.$router.push({path:'/orderList/'+id});
          var proTypeList = document.getElementsByClassName('order_type');
          for (var i = 0 ; i< proTypeList.length; i++){
            proTypeList[i].setAttribute('class','order_type dlb');
          }
          proTypeList[id].setAttribute('class','order_type dlb cur');
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #vux_view_box_body{
    background:#EEEEEE;
  }
  #orderList{
    background:#EEEEEE;
    height:100%;
    .order_type_wrap{
      line-height: 38px;
      .order_type.cur {
        color: #7EC828;
        border-bottom: 2px solid #7EC828;
      }
      .order_type {
        display: inline-block;
        width: 23.9%;
        border-bottom: 2px solid #ccc;
        text-align: center;
        font-size: 14px;
        color: #000;
      }
    }
    .noprd{
      div{
        margin:0 auto;
        width:50%;
      }
      p{
        text-align: center;
        line-height: 50px;
      }
      a{
        background-color:#7EC828;
        color:#fff;
        line-height:36px;
        height:36px;
        font-size:14px;
        text-align:center;
        display:block;
        width:50%;
        margin:0 auto;
      }
    }
  }
</style>
