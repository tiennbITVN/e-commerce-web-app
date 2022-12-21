<template>
  <v-container fluid style="height:100%">
    <v-layout>
      <v-flex d-flex justify-space-between align-end>
        <span class="display-1 font-weight-black ">{{ name }}</span>
        <span class="headerline">Management > Customer > {{ name }}</span>
      </v-flex>
    </v-layout>
    <v-layout class="height-content">
    </v-layout>
  </v-container>
</template>

<script>
import PageMixin from "@/common/mixins/PageMixin";

export default {
  name: "customer-invoice",
  components: {

  },
  mixins: [PageMixin],
  data() {
    return {
      
    }
  },
}
</script>
