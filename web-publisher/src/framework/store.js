import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: { },
    alert: {
      status: false
    }
  },
  mutations: { 
    initUserProfile(state, profile) {
      state.profile = profile;
    },
    cnvrtUserProfile(state, tokenParsed) {
      state.profile.userid = tokenParsed.preferred_username;
      state.profile.avatar = tokenParsed.picture;
      state.profile.firstname = tokenParsed.given_name;
      state.profile.lastname = tokenParsed.family_name;
      state.profile.username = tokenParsed.name;
      state.profile.email = tokenParsed.email;
      state.profile.phone = tokenParsed.phone_number;
      state.profile.address = tokenParsed.address;
      state.profile.role = tokenParsed.resource_access.account.roles;
    },
    showAlert(state, opt) {
      state.alert.status = true;
      state.alert.msg = opt.msg;
      state.alert.type = opt.type;
      switch(opt.type) {
        case "success": 
          state.alert.color = "green";
          state.alert.icon = "done";
          break;
        case "info": 
          state.alert.color = "blue";
          state.alert.icon = "info";  
          break;
        case "warning": 
          state.alert.color = "orange";
          state.alert.icon = "warning";
          break;
        case "error": 
          state.alert.color = "red";
          state.alert.icon = "error";
          break;
      };
      setTimeout(() => {
        state.alert.status = false;
      }, 2000);
    }
  }
});
