<template>
  <v-card tile class="mb-4">
    <v-card-text class="pb-0">
      <v-layout v-for="(line, index1) in orders" :key="`condition${index1}`">
        <v-flex
          v-for="(item, index2) in line"
          :key="`node${index2}`"
          :class="size"
        >
          <component :is="item.type" v-bind="item.options" />
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click.stop="onRefresh">
        <v-icon dark>refresh</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "",
  props: {
    division: { type: Number, default: 2, required: false },
    config: {
      type: Array,
      default: () => {
        return [];
      },
      required: true
    }
  },
  data() {
    return {
      orders: []
    };
  },
  computed: {
    size() {
      if (this.division === 1) {
        return "col-12";
      } else if (this.division === 2) {
        return "col-6";
      } else if (this.division === 3) {
        return "col-4";
      }
      return "col-3";
    }
  },
  created() {
    let subArray = [];
    if (this.division > 4) {
      this.division = 4;
    }
    for (let i = 0; i < this.config.length; i++) {
      subArray.push(this.config[i]);
      if (subArray.length == this.division || i == this.config.length - 1) {
        this.orders.push([...subArray]);
        subArray = new Array();
      }
    }
  },
  methods: {
    onRefresh() {
      this.$emit("refresh");
    }
  }
};
</script>
