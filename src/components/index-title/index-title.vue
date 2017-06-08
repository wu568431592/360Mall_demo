<template>
    <div id="index-title" class="text-align-center ">
        <h2><em>—</em>{{words}}<em>—</em></h2>
    </div>
</template>

<script>
    export default {
        name:'index-title',
        props:['words']
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 #index-title{
   h2{
     height:3rem;
     line-height: 3rem;
     background: #F4F4F4;
     font-size:90%;
     color:#666;
     font-style:normal;
     em{
       margin:0 0.5rem;
     }
   }
 }
</style>
