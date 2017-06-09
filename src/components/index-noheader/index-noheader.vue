<template>
    <div id="index-noheader">
      <ul>
        <li v-for="i in baseList">
            <div class="pro_img">
              <span><img src="../../assets/images/default_img.jpg"></span>
              <x-img :src="i.imgUrl"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
            </div>
            <div class="pro_name">{{i.name}}</div>
            <div class="pro_instr">{{i.instr}}</div>
        </li>
      </ul>
    </div>
</template>

<script>
  import {XImg} from 'vux'
  export default {
      name:'index-noheader',
      data(){
          return{
              serverIP : this.$store.state.serverIP,
              baseList:[]
          }
      },
      components:{XImg},
      methods:{
        success (src, ele) {
          console.log('success load', src)
          const span = ele.parentNode.querySelector('span')
          ele.parentNode.removeChild(span)
        },
        error (src, ele, msg) {
          console.log('error load', msg, src)
          const span = ele.parentNode.querySelector('span')
          span.innerText = 'load error'
        }
      },
      mounted:function(){
        //发送ajax
        this.baseList = [
          {
            instr:'送原装壳膜耳机',
            imgUrl:'http://'+this.serverIP+'/images/57ea2b16N80a8fde1.jpg',
            name:'360手机 N5S套装版'
          },
          {
            instr:'可以拍照的电话手表',
            imgUrl:'http://'+this.serverIP+'/images/58db9174Ne76c5c3e.jpg',
            name:'360儿童手表5C'
          },
          {
            instr:'倒车影像 随手切换',
            imgUrl:'http://'+this.serverIP+'/images/571f36f6N1f0791f5.jpg',
            name:'360手机 N5S套装版'
          },
          {
            instr:'更安全的24小时保护',
            imgUrl:'http://'+this.serverIP+'/images/573545b8N8e52cb17.jpg',
            name:'360摄像机夜视plus'
          },
          {
            instr:'送原装壳膜耳机',
            imgUrl:'http://'+this.serverIP+'/images/57df55ecN32dfbf6e.jpg',
            name:'360手机 N5S套装版'
          },
          {
            instr:'可以拍照的电话手表',
            imgUrl:'http://'+this.serverIP+'/images/57ea2b16N80a8fde1.jpg',
            name:'360儿童手表5C'
          },
        ]
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#index-noheader{
  ul{
    overflow:hidden;
    li{
      width:50%;
      float:left;
      border-right:1px solid #F1F1F1;
      border-bottom:1px solid #F1F1F1;
      text-align: center;
      padding:1rem 0.2rem;
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
        text-align:left;
        color:#555;
        padding:0.2rem 0.4rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;
      }
      .pro_instr{
        color: #999;
        font-size:80%;
        text-align:left;
        padding:0.2rem 0.4rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
