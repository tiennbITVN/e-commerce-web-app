import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authTyp: "",
    token: "",
    refreshToken: "",
    profile: {
      userid: "",
      firstname: "",
      lastname: "",
      username: "",
      avatar: "",
      email: "",
      phone: "",
      address: null,
      role: null
    }
  },
  mutations: { 
    initState(state, keycloak) {
      state.token = keycloak.token;
      state.refreshToken = keycloak.refreshToken;
      state.authTyp = keycloak.tokenParsed.typ;

      state.profile.userid = keycloak.tokenParsed.preferred_username;
      state.profile.avatar = keycloak.tokenParsed.picture;
      state.profile.firstname = keycloak.tokenParsed.given_name;
      state.profile.lastname = keycloak.tokenParsed.family_name;
      state.profile.username = keycloak.tokenParsed.name;
      state.profile.email = keycloak.tokenParsed.email;
      state.profile.phone = keycloak.tokenParsed.phone_number;
      state.profile.address = keycloak.tokenParsed.address;
      state.profile.role = keycloak.tokenParsed.resource_access.account.roles;
    }
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
