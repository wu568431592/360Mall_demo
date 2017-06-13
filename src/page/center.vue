<template>
    <div id="center">
      <!--<Metabbar></Metabbar>-->
    </div>
</template>

<script>
    import Metabbar from '../components/Metabbar/Metabbar.vue'
    import alert from '../components/alert/alert.vue'
    export default {
        name:'center',
        components:{Metabbar,alert},
        data(){
          return{
              showAlert:false,
          }
        },
        mounted:function(){
          this.changeTarBar(3);
        },
        beforeMount:function(){
          this.$store.state.isBarshow = true
        },
        methods:{
          changeTarBar(index){
            var me = document.getElementsByClassName('weui-tabbar__item');
            setTimeout(()=>{
              me[index].click();
            },100)
          },


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #center{
    height:100%;

  }
</style>
