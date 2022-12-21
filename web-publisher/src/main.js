import Vue from "vue";

import App from "./App.vue";

import router from "@/framework/router";
import store from "@/framework/store";
import vuetify from "@/framework/vuetify";

import "@/framework/style.global.css";

Vue.config.productionTip = false;

// axios.defaults.baseUrl = "http://localhost:{}/external/";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
