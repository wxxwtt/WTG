import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) 
export default new Vuex.Store({
  state : {
    cityObj : {
      name:"北京"
    }
  },
  mutations : {
    changecity(state,city){
    state.cityObj = city;
    }
  }
})