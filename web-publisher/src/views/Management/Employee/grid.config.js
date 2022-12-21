const epGrid = {
  headerBtn: {
    add: true
  },
  singleSelect: true,
  headers: [
    { text: "ID", align: "center", value: "header1", width: "170px" },
    { text: "Name", align: "center", value: "header2" },
    { text: "Position", align: "center", value: "header3", width: "110px" },
    { text: "Date joined", align: "center", value: "header6", width: "200px" },
    { text: "Date exitted", align: "center", value: "header7", width: "200px" },
    { text: "Salary", align: "center", value: "header4", width: "110px" },
    { text: "Status", align: "center", value: "header5", width: "130px" }
  ],
  options: {
    page: 10,
    itemsPerPage: 30,
    multiSort: false,
    mustSort: false
  }
};

export default epGrid;
