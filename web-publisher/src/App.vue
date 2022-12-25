<template>
  <v-app>
    <v-app-bar dark extended flat fixed src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-toolbar-title>E-Commerce</v-toolbar-title>
      <v-spacer />
      <div class="mr-2">{{$store.state.profile.username}}</div>
      <v-menu left bottom>
        <template v-slot:activator="{on, attrs}">
          <v-avatar v-bind="attrs" v-on="on" color="white" size="40">
            <v-img v-if="$store.state.profile.avatar" :src="$store.state.profile.avatar"></v-img>
            <v-icon v-else light>person</v-icon>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-avatar size="50">
              <v-img v-if="$store.state.profile.avatar" :src="$store.state.profile.avatar"></v-img>
              <v-icon v-else light>person</v-icon>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ $store.state.profile.username }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $store.state.profile.email }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item v-for="item in optLst" :key="item.keyIdx" @click="onSelectedOption(item)" >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
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
    <v-navigation-drawer app v-model="drawer" dark nav height="100%" width="300" class="nav-postion"
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
    <v-dialog v-model="profilePop" persistent transition="dialog-top-transition" max-width="450">
      <template>
        <v-card>
          <v-card-title class="text-h5">
            <span>My Profile</span>
            <v-spacer/>
            <v-btn icon @click="profilePop = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-container fluid>
              <v-row dense class="mb-2">
                <v-col cols=4>
                  <v-avatar v-bind="attrs" v-on="on" color="white" size="75">
                    <v-img v-if="$store.state.profile.avatar" :src="$store.state.profile.avatar"></v-img>
                    <v-icon v-else light>person</v-icon>
                  </v-avatar>
                </v-col>
                <v-col cols=8>
                  <v-row class="mb-2">
                    <v-text-field label="First Name" readonly light dense hide-details="true" :value="$store.state.profile.firstname"></v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field label="Last Name" readonly light dense hide-details="true" :value="$store.state.profile.lastname"></v-text-field>
                  </v-row>
                </v-col>
              </v-row>
              <v-row dense class="mb-2">
                <v-text-field label="Phone" readonly light dense hide-details="true" :value="$store.state.profile.phone"></v-text-field>
              </v-row>
              <v-row dense class="mb-2">
                <v-text-field label="Email" readonly light dense hide-details="true" :value="$store.state.profile.email"></v-text-field>
              </v-row>
              <v-row dense class="mb-2">
                <v-text-field label="Address" readonly light dense hide-details="true" :value="$store.state.profile.address"></v-text-field>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-app>
</template>

<script>
import tabList from "./assets/app.property";

export default {
  name: "app",
  props: {
    keycloak: { type: Object, default: () => {}}
  },
  data() {
    return {
      optLst: [
        { keyIdx: 1, icon: "badge", name: "My Profile" },
        { keyIdx: 2, icon: "settings", name: "Setting" },
        { keyIdx: 3, icon: "logout", name: "Logout" }
      ],
      tabList,
      navMenu: [],
      drawer: false,
      profilePop: false
    };
  },
  created() {
    this.$log.info(this.keycloak)
    this.$store.commit("initState", this.keycloak);
  },
  mounted() {
    this.$router.push({ name: "Dashboard", path: "/dashboard" });
  },
  methods: {
    onSelectedOption(opt) {
      switch(opt.keyIdx) {
        case 1: this.profilePop = true; break;
        case 2: break;
        case 3: this.keycloak.logout(); break;
      }
    },
    tabChange(item) {
      console.log(item);
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
