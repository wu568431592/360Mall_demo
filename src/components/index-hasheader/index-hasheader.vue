<template>
    <div id="index-hasheader">
      <ul>
        <li v-for="i in baseList">
            <div class="pro_header"><img src="../../assets/images/t013b3ce2157e4d7ef0.png"><span>{{i.header}}</span></div>
            <div class="pro_img"><img :src="i.imgUrl" alt=""></div>
            <div class="pro_name">{{i.name}}</div>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
      name:'index-hasheader',
      data(){
          return{
              serverIP : this.$store.state.serverIP,
              baseList:[]
          }
      },
      methods:{

      },
      mounted:function(){
        //发送ajax
        this.baseList = [
          {
            header:'送原装壳膜耳机',
            imgUrl:'http://'+this.serverIP+'/images/57ea2b16N80a8fde1.jpg',
            name:'360手机 N5S套装版'
          },
          {
            header:'可以拍照的电话手表',
            imgUrl:'http://'+this.serverIP+'/images/58db9174Ne76c5c3e.jpg',
            name:'360儿童手表5C'
          },
          {
            header:'倒车影像 随手切换',
            imgUrl:'http://'+this.serverIP+'/images/571f36f6N1f0791f5.jpg',
            name:'360手机 N5S套装版'
          },
          {
            header:'更安全的24小时保护',
            imgUrl:'http://'+this.serverIP+'/images/573545b8N8e52cb17.jpg',
            name:'360摄像机夜视plus'
          },
          {
            header:'送原装壳膜耳机',
            imgUrl:'http://'+this.serverIP+'/images/57df55ecN32dfbf6e.jpg',
            name:'360手机 N5S套装版'
          },
          {
            header:'可以拍照的电话手表',
            imgUrl:'http://'+this.serverIP+'/images/57ea2b16N80a8fde1.jpg',
            name:'360儿童手表5C'
          },
        ]
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#index-hasheader{
  ul{
    overflow:hidden;
    li{
      width:50%;
      float:left;
      border-right:1px solid #F1F1F1;
      border-bottom:1px solid #F1F1F1;
      text-align: center;
      padding:1rem 0.1rem;
      .pro_header{
        display: inline-block;
        padding:0.1rem 0.3rem;
        margin:0 auto;
        border: 1px solid #E1E1E1;
        border-radius:1.3rem;
        img{
          width:1.3rem;
          height:1.3rem;
          margin-right:0.2rem;
        }
        span{
          font-size:75%;
          color:#222;
        }
      }
      .pro_img{
        width:100%;
        text-align:center;
        padding:0.5rem;
        img{
          width:100%;
        }
      }
      .pro_name{
        font-size:85%;
        text-align:center;
        color:#555;
      }
    }
  }
}
</style>
