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
           <ul>
             <li @click="changeSort($event)" class="sortItem green">默认</li>
             <li @click="changeSort($event)" class="sortItem" id="price">价格<b class=""></b></li>
             <li @click="changeSort($event)" class="sortItem">销量</li>
             <li @click="changeSort($event)" class="sortItem" id="haspro"><span></span>仅看有货</li>
           </ul>
        </div>
        <div class="main_box">
          <ul>
            <!--<li>-->
              <!--<div class="img_box">-->
                <!--<img src="../assets/images/571f36f6N1f0791f5.jpg" alt="">-->
              <!--</div>-->
              <!--<div class="instr">-->
                <!--<h5>色相头摄像头摄像头色相头</h5>-->
                <!--<span>￥399.00</span>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="img_box">-->
                <!--<img src="../assets/images/571f36f6N1f0791f5.jpg" alt="">-->
              <!--</div>-->
              <!--<div class="instr">-->
                <!--<h5>色相头摄像头摄像头色相头</h5>-->
                <!--<span>￥399.00</span>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="img_box">-->
                <!--<img src="../assets/images/571f36f6N1f0791f5.jpg" alt="">-->
              <!--</div>-->
              <!--<div class="instr">-->
                <!--<h5>色相头摄像头摄像头色相头</h5>-->
                <!--<span>￥399.00</span>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="img_box">-->
                <!--<img src="../assets/images/571f36f6N1f0791f5.jpg" alt="">-->
              <!--</div>-->
              <!--<div class="instr">-->
                <!--<h5>色相头摄像头摄像头色相头</h5>-->
                <!--<span>￥399.00</span>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="img_box">-->
                <!--<img src="../assets/images/571f36f6N1f0791f5.jpg" alt="">-->
              <!--</div>-->
              <!--<div class="instr">-->
                <!--<h5>色相头摄像头摄像头色相头</h5>-->
                <!--<span>￥399.00</span>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="img_box">-->
                <!--<img src="../assets/images/571f36f6N1f0791f5.jpg" alt="">-->
              <!--</div>-->
              <!--<div class="instr">-->
                <!--<h5>色相头摄像头摄像头色相头</h5>-->
                <!--<span>￥399.00</span>-->
              <!--</div>-->
            <!--</li>-->
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import blackHeader from '../components/black-header/black-header.vue'
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
              var html = [];
              var url = 'http://'+this.$store.state.serverIP+'/images/57df55ecN32dfbf6e.jpg';
              console.log(url)
              document.getElementsByClassName('main_box')[0].childNodes[0].innerHTML = '';
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
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
            }
            span{
              font-size:80%;
              color:#e4393c;
            }
          }
        }
      }
    }
  }
</style>
