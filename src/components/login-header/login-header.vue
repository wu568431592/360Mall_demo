<template>
    <div id="login-header">
      <div class="login-heade">
        <i @click="goback"></i>
        <p>{{words}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name:'login-header',
        data(){
            return {

            }
        },
        props:['words'],
        methods:{
          goback:function(){
              window.history.go(-1);
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #login-header{
    .login-heade{
      width:100%;
      padding:1rem 1.1rem;
      i{
        display: inline-block;
        width:15px;
        height:15px;
        border: #34756c solid;
        border-width: 2px 0 0 2px;
        transform: rotate(-45deg);
      }
      p{
        display: inline-block;
        width:90%;
        text-align: center;
        color: #34756c;
        font-size: 115%;
      }
    }
  }
</style>
