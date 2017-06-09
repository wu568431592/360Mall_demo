<template>
    <div id="cart">
        <div @click="goIndex">111</div>
        <div @click="goallproduct">122</div>
        <div @click="gocenter">133</div>
    </div>
</template>

<script>
    export default {
        name:'cart',
        beforeMount:function(){
          this.$store.state.isBarshow = false;
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
