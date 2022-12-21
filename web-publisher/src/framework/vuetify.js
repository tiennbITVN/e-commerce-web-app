import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "md"
  // },
  // theme: {
  //   dark: {
  //     primary: "light-blue lighten-4",
  //     secondary: "light-blue darken-4",
  //     accent: "#82B1FF",
  //     error: "orange accent-4",
  //     info: "light-blue darken-3",
  //     success: "green lighten-1",
  //     warning: "yellow accent-3"
  //   }
  }
};

export default new Vuetify(opts);
