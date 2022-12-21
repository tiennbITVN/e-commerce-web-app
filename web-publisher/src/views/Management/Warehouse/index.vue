<template>
  <v-container fluid style="height:100%">
    <v-layout>
      <v-flex d-flex justify-space-between align-end>
        <span class="display-1 font-weight-black ">{{ name }}</span>
        <span class="headerline">Management > {{ name }}</span>
      </v-flex>
    </v-layout>
    <v-layout class="height-content">
      <v-flex col-3>
        <v-card tile :height="listHeight">
          <v-card-actions>
            <v-btn icon>
              <v-icon>add</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-text class="height-list pt-0">
            <v-list dense flat>
              <v-list-item
                v-for="(item, index) in whList"
                :key="`warehouse${index}`"
              >
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-action>
                    <v-checkbox
                      :v-model="active"
                      color="primary"
                      @click="toggle"
                    ></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.whId + " : " + item.whNm }}
                    </v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex col-9>
        <data-filter :config="whFilter" :division="4" />
        <data-grid :config="whGrid" :height="dataHeight" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

import PageMixin from "@/common/mixins/PageMixin";
import dataGrid from "@/common/components/dataGrid";
import dataFilter from "@/common/components/dataFilter";
import whGrid from "./grid.config";
import whFilter from "./filter.config";

import { whList } from "@/response/resWh";

export default {
  name: "warehouse",
  components: {
    dataGrid,
    dataFilter
  },
  mixins: [PageMixin],
  data() {
    return {
      whList,
      whGrid,
      whFilter
    };
  },
  computed: {
    listHeight() {
      return window.innerHeight - 200;
    },
    dataHeight() {
      return window.innerHeight - 348;
    }
  },
  mounted() {
    axios.get('http://localhost:10909/external/whlst').then(res => {
      console.log(res);
    })
  },
  methods: {}
};
</script>
