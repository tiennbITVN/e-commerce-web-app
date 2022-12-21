<template>
  <v-container fluid style="height:100%">
    <v-layout>
      <v-flex d-flex justify-space-between align-end>
        <span class="display-1 font-weight-black">{{ name }}</span>
        <span class="headerline">Management > {{ name }}</span>
      </v-flex>
    </v-layout>
    <v-layout class="height-content">
      <v-flex col-12>
        <data-filter :config="epFilter" :division="4" />
        <data-grid :config="epGrid" :height="dataHeight" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PageMixin from "@/common/mixins/PageMixin";
import dataGrid from "@/common/components/dataGrid";
import dataFilter from "@/common/components/dataFilter";
import epGrid from "./grid.config";
import epFilter from "./filter.config";

export default {
  name: "employee",
  components: {
    dataGrid,
    dataFilter
  },
  mixins: [PageMixin],
  data() {
    return {
      name: "",
      epGrid,
      epFilter
    };
  },
  computed: {
    dataHeight() {
      return window.innerHeight - 348;
    }
  },
  methods: {}
};
</script>
