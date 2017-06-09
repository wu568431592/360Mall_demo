<template>
    <div id="allproduct">
      allproduct
    </div>
</template>

<script>
    export default {
        name:'allproduct',
        mounted:function(){
          this.changeTarBar(1)
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
