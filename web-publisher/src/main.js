import Vue from "vue";
import VueLogger from "vuejs-logger";
import VueApi from "@/framework/plugins/VueApi";

import App from "./App.vue";
import MsgFail from "./MsgFail.vue";

import router from "@/framework/router";
import store from "@/framework/store";
import vuetify from "@/framework/vuetify";
import keycloak from "@/framework/keycloak";

Vue.use(VueLogger);
Vue.config.productionTip = false;

keycloak.init({
    onLoad: "login-required"
}).then((auth) => {
    if (!auth) {
        window.location.reload();
    } else {
        Vue.use(VueApi, {
            token: keycloak.token,
            refreshToken: keycloak.refreshToken,
            authTyp: keycloak.tokenParsed.typ,
            loginUrl: keycloak.createLoginUrl()
        });
        new Vue({
            router, store, vuetify,
            render: h => h(App, {props: {keycloak: keycloak}})
        }).$mount("#app");
    }

    setInterval(() => {
        keycloak.updateToken(1000).then((refreshed) => {
            if (refreshed) {
                Vue.$log.info("Token refreshed " +refreshed);
            } else {
                Vue.$log.warn("Token not refreshed, valid for "
                  + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + " seconds");
            }
        }).catch(() => {
            Vue.$log.error("Failed to refresh token");
        });
    }, 6000);
}).catch((auth) => {
    Vue.$log.info(auth);
    new Vue({
        vuetify,
        render: h => h(MsgFail, {props: auth})
    }).$mount("#app");
});
