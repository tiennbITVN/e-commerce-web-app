<template>
  <v-container fluid style="height:100%">
    <v-layout>
      <v-flex d-flex justify-space-between align-end>
        <span class="display-1 font-weight-black">{{ name }}</span>
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
            <v-treeview
              :items="prdList"
              selection-type="leaf"
              activatable
              selectable
              hoverable
              return-object
              open-all
              dense
            />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex col-9>
        <data-filter :config="prdFilter" :division="4" />
        <data-grid :config="prdGrid" :height="dataHeight" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PageMixin from "@/common/mixins/PageMixin";
import dataGrid from "@/common/components/dataGrid";
import dataFilter from "@/common/components/dataFilter";
import prdFilter from "./filter.config";
import prdGrid from "./grid.config";

import prdList from "@/response/resPrd";

export default {
  name: "product",
  components: {
    dataGrid,
    dataFilter
  },
  mixins: [PageMixin],
  data() {
    return {
      prdList,
      prdFilter,
      prdGrid
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
  methods: {}
};
</script>
