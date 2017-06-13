<template>
    <div id="Metabbar">
      <tabbar class="diy-tabbar">
        <tabbar-item selected id="tabIndex" link="/index">
          <img slot="icon" src="../../assets/images/t011de32570ba76b7d2.png">
          <img slot="icon-active" src="../../assets/images/t011a7cd356bb976213.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/allproduct">
          <img slot="icon" src="../../assets/images/t01e287c3490e3f14da.png">
          <img slot="icon-active" src="../../assets/images/t0160f3f274548cc6ea.png">
          <span slot="label">分类</span>
        </tabbar-item>
        <tabbar-item @click.native='toCart'>
          <img slot="icon" src="../../assets/images/t01069055004f2dcc51.png">
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item @click.native='toCenter'>
          <img slot="icon" src="../../assets/images/t01821a03716758d2e1.png">
          <img slot="icon-active" src="../../assets/images/t01bcd9237ad4dc6e8c.png">
          <span slot="label">我</span>
        </tabbar-item>
      </tabbar>
    </div>
</template>

<script>
  import { Tabbar, TabbarItem }  from 'vux'

  export default {
      name:'Metabbar',
      components:{Tabbar, TabbarItem},
      data(){
          return {

          }
      },
      methods:{
        toCart(){
          if(this.isLogin()){
            this.$router.push({path:'/cart'})
          }else{
            this.$parent.showAlert = true;
          }
        },
        toCenter(){
          if(this.isLogin()){
            this.$router.push({path:'/center'})
          }else{
            this.$parent.showAlert = true;
          }
        },
        isLogin(){
          var userName = localStorage.getItem('userName');
          if(userName == null){
            return false
          }
          return  true
        },
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
