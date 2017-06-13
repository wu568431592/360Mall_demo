<template>
    <div id="cart">
        <div class="alert" v-show="showAlert">
          <div class="alert_box">
            <p>请先登录</p>
            <button @click="goLogin">确定</button>
          </div>
        </div>
        <div @click="goIndex">111</div>
        <div @click="goallproduct">122</div>
        <div @click="gocenter">133</div>
    </div>
</template>

<script>
    export default {
        name:'cart',
        data(){
          return{
            showAlert:false,
          }
        },
        beforeMount:function(){
          this.$store.state.isBarshow = false
        },
        methods:{
            goIndex:function(){
              this.$router.push({path:'/index'})
            },
            goallproduct:function(){
              this.$router.push({path:'/allproduct'})
            },
            gocenter:function(){
              this.$router.push({path:'/center'})
            },
            goLogin:function(){
              this.$router.push({path:'/login'})
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #cart{

  }

</style>
