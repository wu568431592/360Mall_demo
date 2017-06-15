/**
 * Created by sks on 2017/6/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
var state;
state ={
  serverIP : '192.168.78.65',
  isBarshow: true,
  userList:[
    {"userPhoneNum":'17310161773',"userPassword":'123123'},
    {"userPhoneNum":'17610011773',"userPassword":'123123'}
  ],
}

const mutations ={
  go:function(state,options){
    options[0].push({path:'/'+options[1]});
  }
}
const getters = {
  getSearchDetails:function(){
    var details;
    var xmlhttp =new XMLHttpRequest();
    xmlhttp.onreadystatechange =function(){
      if( xmlhttp.readyState==4 && xmlhttp.status==200 ){
        details = eval('('+xmlhttp.responseText+')');
      }else{
        details = {}
      }
    }
    xmlhttp.open('GET','http://'+state.serverIP+'/json/searchDetails.php',false);
    xmlhttp.send();
    return details
    //var details
    // axios.get('http://192.168.78.65/json/searchDetails.php')
    //   .then(function (response) {
    //     //console.log(response.data);
    //     details = response.data
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // console.log(details)
    // return details
  },
  getServerIP:function(){
    return state.serverIP;
  },
  getIsBarshow:function(){
    return state.isBarshow;
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  getters
}) // 这里你可能已经有其他 module

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: true
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

export default {
  store
}


