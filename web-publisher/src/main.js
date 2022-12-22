import Vue from "vue";

import App from "./App.vue";

import router from "@/framework/router";
import store from "@/framework/store";
import vuetify from "@/framework/vuetify";
import Keycloak from "keycloak-js";


import "@/framework/style.global.css";

Vue.config.productionTip = false;

let initOpt = {
  url: "http://localhost:8080/",
  realm: "demo",
  clientId: "js-console",
  onLoad: "login-required"
};

let keycloak = new Keycloak(initOpt);
keycloak.init({onLoad: initOpt.onLoad}).then((auth) => {
    if (!auth) {
        window.location.reload();
    } else {
        Vue.$log.info("Authenticated" + keycloak);

        new Vue({
            router,
            store,
            vuetify,
            render: h => h(App)
        }).$mount("#app");
    }

    setInterval(() => {
        keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
                Vue.$log.info("Token refreshed" +refreshed);
            } else {
                Vue.$log.warn("Token not refreshed, valid for "
                  + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + " seconds");
            }
        }).catch(() => {
            Vue.$log.error('Failed to refresh token');
        });
    }, 6000);
}).catch(() => {
    Vue.$log.error("Authenticated Failed");
});
