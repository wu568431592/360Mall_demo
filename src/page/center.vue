<template>
    <div id="center">
      center
    </div>
</template>

<script>
    export default {
        name:'center',
        mounted:function(){
          this.changeTarBar(3)
        },
        beforeMount:function(){
          this.$store.state.isBarshow = true;
        },
        methods:{
          changeTarBar(index){
            var me = document.getElementsByClassName('weui-tabbar__item')
            me[index].click();
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
