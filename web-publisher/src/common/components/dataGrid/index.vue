<template>
  <v-card tile>
    <v-card-actions v-show="isHeaderBtn">
      <v-btn v-show="config.headerBtn.add" icon @click.stop="onAddRow">
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn v-show="config.headerBtn.del" icon @click.stop="onDelRow">
        <v-icon>delete</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn v-show="config.headerBtn.download" icon @click.stop="onDownload">
        <v-icon>cloud_download</v-icon>
      </v-btn>
      <v-btn v-show="config.headerBtn.upload" icon @click.stop="onUpload">
        <v-icon>cloud_upload</v-icon>
      </v-btn>
    </v-card-actions>
    <v-data-table
      :headers="config.headers"
      :options="config.options"
      :single-select="config.singleSelect"
      :height="gridHeight"
    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "data-grid",
  props: {
    height: { type: Number, required: false },
    config: {
      type: Object,
      default: () => {
        return {
          headerBtn: {
            add: true,
            del: true,
            download: true,
            upload: true
          },
          singleSelect: true,
          headers: [
            { text: "Header 1", align: "center", value: "header1" },
            { text: "Header 2", align: "center", value: "header2" },
            { text: "Header 3", align: "center", value: "header3" }
          ],
          options: {
            page: 10,
            itemsPerPage: 30,
            multiSort: false,
            mustSort: false
          }
        };
      },
      required: true
    }
  },
  computed: {
    isHeaderBtn() {
      return this.config.headerBtn.add || this.config.headerBtn.del || this.config.headerBtn.download || this.config.headerBtn.upload;
    },
    gridHeight() {
      if (!this.isHeaderBtn) {
        return this.height - 59;
      }
      return this.height - 111;
    }
  },
  methods: {
    onAddRow() {
      this.$emit("add");
    },
    onDelRow() {
      this.$emit("del");
    },
    onDownload() {
      this.$emit("download");
    },
    onUpload() {}
  }
};
</script>
