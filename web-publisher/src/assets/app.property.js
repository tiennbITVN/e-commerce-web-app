const tabList = [
  {
    title: "Dashboard",
    defaultPath: "/dashboard",
    navList: []
  },
  {
    title: "Management",
    defaultPath: "/warehouse",
    navList: [
      {
        icon: "group",
        name: "Employee",
        path: "/employee"
      },
      {
        icon: "house",
        name: "Warehouse",
        path: "/warehouse"
      },
      {
        icon: "devices_other",
        name: "Product",
        path: "/product"
      },
      {
        icon: "person",
        name: "Customer",
        children: [
          {
            icon: "local_atm",
            name: "Customer Liabilities",
            path: "/customerliabilities"
          },
          {
            icon: "local_offer",
            name: "Export Invoice",
            path: "/exportinvoice"
          }
        ]
      },
      {
        icon: "local_shipping",
        name: "Supplier",
        children: [
          {
            icon: "local_atm",
            name: "Supplier Liabilities",
            path: "/supplierliabilities"
          },
          {
            icon: "local_offer",
            name: "Import Invoice",
            path: "/importinvoice"
          }
        ]
      }
    ]
  },
  {
    title: "Package",
    defaultPath: "/pack",
    navList: [
      {
        name: "title 1",
        path: "/title1"
      },
      {
        name: "title 2",
        path: "/title2"
      },
      {
        name: "title 3",
        path: "/title3"
      }
    ]
  }
];

export default tabList;
