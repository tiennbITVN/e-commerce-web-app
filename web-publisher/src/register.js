import Vue from "vue";

import Register from "./Register.vue";

import store from "@/framework/store";
import vuetify from "@/framework/vuetify";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(Register)
}).$mount("#register");
