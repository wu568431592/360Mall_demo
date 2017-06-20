<template>
    <div id="allproduct">
      <blackHeader showHeader_do='false' word="全部商品"></blackHeader>
      <div class="titleList">
        <ul @click="clickLi($event)">
          <li class="left_title active">全部商品</li>
          <li class="left_title">手机</li>
          <li class="left_title">数码</li>
          <li class="left_title">电脑周边</li>
          <li class="left_title">家用电器</li>
          <li class="left_title">汽车用品</li>
          <li class="left_title">摄影摄像</li>
          <li class="left_title">教育/文具</li>
          <li class="left_title">户外/运动</li>
        </ul>
      </div>
      <div class="proList">
        <div class="sort_box">
           <ul @click="changeSort($event)">
             <li class="sortItem green">默认</li>
             <li class="sortItem" id="price">价格<b class=""></b></li>
             <li class="sortItem">销量</li>
             <li class="sortItem" id="haspro"><span></span>仅看有货</li>
           </ul>
        </div>
        <div class="main_box">
          <ul @click="go([$router,'productInfo'])">
            <li>
              <div class="img_box">
                <img src="../assets/images/571f36f6N1f0791f5.jpg" alt="">
              </div>
              <div class="instr">
                <h5 class="proName">色相头摄像头摄像头色相头</h5>
                <span>￥399.00</span>
              </div>
            </li>
            <li>
              <div class="img_box">
                <img src="../assets/images/571f36f6N1f0791f5.jpg" alt="">
              </div>
              <div class="instr">
                <h5 class="proName">色相头摄像头摄像头色相头</h5>
                <span>￥399.00</span>
              </div>
            </li>
            <li>
              <div class="img_box">
                <img src="../assets/images/571f36f6N1f0791f5.jpg" alt="">
              </div>
              <div class="instr">
                <h5 class="proName">色相头摄像头摄像头色相头</h5>
                <span>￥399.00</span>
              </div>
            </li>
            <li>
              <div class="img_box">
                <img src="../assets/images/571f36f6N1f0791f5.jpg" alt="">
              </div>
              <div class="instr">
                <h5 class="proName">色相头摄像头摄像头色相头</h5>
                <span>￥399.00</span>
              </div>
            </li>
            <li>
              <div class="img_box">
                <img src="../assets/images/571f36f6N1f0791f5.jpg" alt="">
              </div>
              <div class="instr">
                <h5 class="proName">色相头摄像头摄像头色相头</h5>
                <span>￥399.00</span>
              </div>
            </li>
          </ul>
          <div class="button_box">
              <button @click="loadMore">点击查看更多</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import blackHeader from '../components/black-header/black-header.vue'
    import {mapMutations} from 'vuex'
    export default {
        name:'allproduct',
        components:{ blackHeader },
        data(){
          return {
            showAlert : false
          }
        },
        beforeMount:function(){
          this.$store.state.isBarshow = true
        },
        mounted:function(){
          this.changeTarBar(1);
        },
        methods:{
          ...mapMutations([
              'go'
          ]),
          changeTarBar(index){
            var me = document.getElementsByClassName('weui-tabbar__item');
            setTimeout(()=>{
              me[index].click();
            },100)
          },
          clickLi(e){
              var me = e.target;
              var list = document.getElementsByClassName('left_title');
              for(var i = 0; i<list.length;i++){
                  list[i].setAttribute('class','left_title');
              }
              me.setAttribute('class','left_title active');
              var name = me.innerHTML;
              var url = 'http://'+this.$store.state.serverIP+'/images/57df55ecN32dfbf6e.jpg';
              document.getElementsByClassName('main_box')[0].childNodes[0].innerHTML = '';
              for(var j= 0 ;j<5; j++){
                document.getElementsByClassName('main_box')[0].childNodes[0].innerHTML += `
                <li>
                  <div class="img_box">
                    <img src= "${url}" alt="">
                  </div>
                  <div class="instr">
                    <h5 class="proName">${name}${j}</h5>
                    <span>￥399.00</span>
                  </div>
                </li>`
              }
          },
          changeSort(e){
              var me = e.target;
              if( me.tagName == 'LI'){
                var list = document.getElementsByClassName('sortItem');
                for(var i = 0; i<list.length;i++){
                  list[i].setAttribute('class','sortItem');
                }
                me.setAttribute('class','sortItem green');
              }else{
                me = e.target.parentNode;
                var list = document.getElementsByClassName('sortItem');
                for(var i = 0; i<list.length;i++){
                  list[i].setAttribute('class','sortItem');
                }
                me.setAttribute('class','sortItem green');
              }
          },
          loadMore(){
            var name = document.getElementsByClassName('proName')[0].innerHTML;
            var url = 'http://'+this.$store.state.serverIP+'/images/57df55ecN32dfbf6e.jpg';
            for(var j= 0 ;j<5; j++){
              document.getElementsByClassName('main_box')[0].childNodes[0].innerHTML += `
                <li>
                  <div class="img_box">
                    <img src= "${url}" alt="">
                  </div>
                  <div class="instr">
                    <h5>${name}${j}</h5>
                    <span>￥399.00</span>
                  </div>
                </li>`
            }
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
  #allproduct{
    background:#fff;
    height:100%;
    overflow: hidden;
    .titleList{
      float:left;
      width:30%;
      height:100%;
      background:#F8F8F8;
      ul li{
        font-size:70%;
        padding:10px 0 10px 15px;
        border-left:2px solid transparent;
      }
      ul li.active{
        background:#fff;
        border-left:2px solid #82C92F;
      }
    }
    .proList{
      float:left;
      width:70%;
      .sort_box ul{
        overflow: hidden;
        font-size:75%;
        width:100%;
        li{
          height:45px;
          line-height: 25px;
          float:left;
          width:20%;
          padding:10px 0;
          text-align:center;
          b{
            display: inline-block;
            vertical-align: middle;
            width:7px;
            height:15px;
            margin-left:5px;
            background: url(../assets/images/icon.png) no-repeat 0px 0px;
            background-size: 100%;
          }
          b.up{
            background: url(../assets/images/icon.png) no-repeat 0px -14px;
            background-size: 100%;
          }
          b.down{
            background: url(../assets/images/icon.png) no-repeat 0px -28px;
            background-size: 100%;
          }
          span{
            vertical-align: middle;
            display: inline-block;
            width:20px;
            height:20px;
            margin-right:5px;
            background: url(../assets/images/stock.png) no-repeat center;
            background-size: 100%;
          }
        }
        li.green{
          color:#74B72C;
          span{
            background: url(../assets/images/hasstock.png) no-repeat center;
            background-size: 100%;
          }
        }
        li:last-child{
          width:40%;
        }
      }
      .main_box{
        height: 420px;
        overflow:scroll;
        padding-bottom:40px;
      }
      .main_box ul{
        li{
          border-bottom:1px solid #ddd;
          padding:10px 0;
          margin-left:15px;
          overflow:hidden;
          .img_box{
            width:96px;
            height:96px;
            float:left;
            img{
              width:100%;
            }
          }
          .instr{
            h5{
              height:50px;
              font-size:80%;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom:10px;
              color:#333;
            }
            span{
              font-size:80%;
              color:#e4393c;
            }
          }
        }
      }
      .main_box div.button_box{
        padding:20px 30px;
        width:100%;
        text-align: center;
        button{
          border:1px solid #ccc;
          background: #fff;
          color:#666666;
          width:100%;
          height:30px;
          -webkit-border-radius:5px;
          -moz-border-radius:5px;
          border-radius:5px;
        }
      }
    }
  }
</style>
