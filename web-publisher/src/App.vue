<template>
  <div id="app">
    <v-app>
      <v-app-bar
        dark
        extended
        flat
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        fixed
      >
        <v-toolbar-title>BMSys</v-toolbar-title>
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab
              v-for="(serNm, index) in tabList"
              :key="`top${serNm}${index}`"
              @click="tabChange(serNm)"
            >
              {{ serNm.title }}
            </v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-navigation-drawer
        app
        v-model="drawer"
        dark
        nav
        height="100%"
        width="300"
        class="nav-postion"
        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      >
        <v-list>
          <div v-for="(item, index) in navMenu" :key="`parent${index}`">
            <template v-if="item.children">
              <v-list-group no-action>
                <template v-slot:activator>
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="(child, index) in item.children"
                  :key="`child${index}`"
                  @click.stop="itemClick(child)"
                >
                  <v-list-item-icon>
                    <v-icon>{{ child.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ child.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </template>
            <template v-else>
              <v-list-item @click.stop="itemClick(item)">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </div>
        </v-list>
      </v-navigation-drawer>
      <v-content style="margin-top:112px">
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import tabList from "./assets/app.property";

export default {
  name: "app",
  data() {
    return {
      tabList,
      navMenu: [],
      drawer: false
    };
  },
  created() {},
  mounted() {
    this.$router.push({ name: "Dashboard", path: "/dashboard" });
  },
  methods: {
    tabChange(item) {
      if (item.navList.length == 0) {
        this.drawer = false;
      } else {
        this.drawer = true;
      }
      if (this.$route.path !== item.defaultPath) {
        let defaultPath = item.defaultPath;
        this.navMenu = item.navList;
        this.$router.push({ path: defaultPath });
      }
    },
    itemClick(obj) {
      if (this.$route.path !== obj.path) {
        this.$router.push({ path: obj.path });
      }
    }
  }
};
</script>

<style>
.nav-postion {
  margin-top: 112px;
}
</style>
