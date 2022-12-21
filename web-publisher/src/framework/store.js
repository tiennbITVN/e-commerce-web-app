import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: null
  },
  mutations: {
    
  },
  actions: {
    login(context, credentials) {
      axios.post('', {
        userId: credentials.username,
        userPass: credentials.password
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  modules: {

  }
});
