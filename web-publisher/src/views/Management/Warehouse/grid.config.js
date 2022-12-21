const whGrid = {
  headerBtn: {
    add: true,
    del: true,
    upload: true,
    download: true
  },
  singleSelect: true,
  headers: [
    { text: "Model", align: "center", value: "header1", width: "170px" },
    { text: "Name", align: "center", value: "header2" },
    { text: "Category", align: "center", value: "header3", width: "110px" },
    { text: "Amount", align: "center", value: "header4", width: "110px" },
    { text: "Status", align: "center", value: "header5", width: "130px" }
  ],
  options: {
    page: 10,
    itemsPerPage: 30,
    multiSort: false,
    mustSort: false
  }
};

export default whGrid;
