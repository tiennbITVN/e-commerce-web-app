import Vue from "vue";
import VueApi from "@/framework/plugins/VueApi";

Vue.use(VueApi);

export default new VueApi({
    authTyp: '',
    token: 'Vue.$store.state.token'
});
