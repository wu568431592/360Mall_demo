<template>
    <div id="alert">
      <div class="alert">
        <div class="alert_box">
          <p>请先登录</p>
          <button @click="goLogin">确定</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name:'alert',
        methods:{
          goLogin:function(){
            this.$parent.showAlert = false;
            this.$router.push({path:'/login'})
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #alert{
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.5);
    position: absolute;
    top:0;
    left:0;
    z-index:1000000000000;
    .alert_box{
      width:85%;
      padding:1.8rem 1rem;
      position: absolute;
      top:35%;
      left:28px;
      background: #FFF;
      text-align: center;
      p{
        margin-bottom: 1rem;
        font-size:90%;
      }
      button{
        background-color: #ed1c24;
        border: solid .1rem #ed1c24;
        border-radius: .2rem;
        color: #fff;
        margin: .4rem;
        padding: 0.4rem 6.0rem;
      }
    }
  }
</style>
