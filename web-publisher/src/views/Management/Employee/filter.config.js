const epFilter = [
  {
    type: "v-text-field",
    options: {
      label: "ID",
      outlined: true,
      dense: true,
      clearable: true,
      hideDetails: true,
      couter: 10
    }
  },
  {
    type: "v-text-field",
    options: {
      label: "Name",
      outlined: true,
      dense: true,
      clearable: true,
      hideDetails: true
    }
  },
  {
    type: "v-combobox",
    options: {
      label: "Position",
      outlined: true,
      dense: true,
      clearable: true,
      hideDetails: true
    }
  },
  {
    type: "v-text-field",
    options: {
      label: "Status",
      outlined: true,
      dense: true,
      clearable: true,
      hideDetails: true
    }
  }
];

export default epFilter;
