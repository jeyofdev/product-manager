import { AddProductPage } from "./products/AddProductPage";
import { EditProductPage } from "./products/EditProductPage";
import { ProductDetails } from "./products/ProductDetails";
import { ProductPage } from "./products/ProductPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ProductPage,
  },
  {
    path: "/products/ajouter",
    Component: AddProductPage,
  },
  {
    path: "/products/modifier/:productId",
    Component: EditProductPage,
  },
  {
    path: "/products/details/:productId",
    Component: ProductDetails,
  },
]);
