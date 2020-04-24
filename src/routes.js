import { lazy } from "react";

//customers
const Products = lazy(() => import("./pages/customer/products"));
const MyOrders = lazy(() => import("./pages/customer/orders/orders"));

export default {
  customer: [

    { path: "/customer", exact: true, component: Products, name: "Products" },
      {
          path: "/customer/orders",
          exact: true,
          component: MyOrders,
          name: "My Orders",
      },
  ],
  carrier: [],
  seller: [],
  healthWorker: [],
};

