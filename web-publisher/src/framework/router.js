import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/warehouse",
    name: "Warehouse",
    component: () => import("@/views/Management/Warehouse")
  },
  {
    path: "/employee",
    name: "Employee",
    component: () => import("@/views/Management/Employee")
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("@/views/Management/Product")
  },
  {
    path: "/customerliabilities",
    name: "Customer Liabilities",
    component: () => import("@/views/Management/Customer/Liabilities")
  },
  {
    path: "/exportinvoice",
    name: "Export Invoice",
    component: () => import("@/views/Management/Customer/Invoice")
  },
  {
    path: "/supplierliabilities",
    name: "Supplier Liabilities",
    component: () => import("@/views/Management/Supplier/Liabilities")
  },
  {
    path: "/importinvoice",
    name: "Import Invoice",
    component: () => import("@/views/Management/Supplier/Invoice")
  },
  {
    path: "*",
    name: "Empty",
    component: () => import("@/views/Empty")
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
});

export default router;
