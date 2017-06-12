<template>
    <div id="allproduct">
      allproduct
      <Metabbar></Metabbar>
      <alert v-show="showAlert"></alert>
    </div>
</template>

<script>
    import Metabbar from '../components/Metabbar/Metabbar.vue'
    import alert from '../components/alert/alert.vue'
    export default {
        name:'allproduct',
        components:{Metabbar,alert},
        data(){
          return {
            showAlert : false
          }
        },
        mounted:function(){
          this.changeTarBar(1)
        },
        methods:{
          changeTarBar(index){
            var me = document.getElementsByClassName('weui-tabbar__item')
            setTimeout(()=>{
              me[index].click();
            },100)
          }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
