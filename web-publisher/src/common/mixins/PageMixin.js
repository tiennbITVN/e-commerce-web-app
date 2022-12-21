const PageMixin = {
  data() {
    return {
      name
    };
  },
  created() {
    this.name = this.$route.name;
  }
};

export default PageMixin;
