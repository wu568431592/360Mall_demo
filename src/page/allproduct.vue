<template>
    <div id="allproduct">
      allproduct
    </div>
</template>

<script>
    import Metabbar from '../components/Metabbar/Metabbar.vue'
    export default {
        name:'allproduct',
        components:{Metabbar},
        data(){
          return {
            showAlert : false
          }
        },
        beforeMount:function(){
          this.$store.state.isBarshow = true
        },
        mounted:function(){
          this.changeTarBar(1)
        },
        methods:{
          changeTarBar(index){
            var me = document.getElementsByClassName('weui-tabbar__item');
            setTimeout(()=>{
              me[index].click();
            },100)
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #allproduct{
    background:#fff;
    height:100%;
  }
</style>
