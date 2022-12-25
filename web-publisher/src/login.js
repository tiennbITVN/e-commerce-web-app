import Vue from "vue";

import Login from "./Login.vue";

import store from "@/framework/store";
import vuetify from "@/framework/vuetify";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(Login)
}).$mount("#login");
