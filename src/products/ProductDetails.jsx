import { NavLink, useParams } from "react-router";
import { useEffect, useState } from "react";

import Layout from "../Layout";
import Product from "./Product";
import { getAllProductById } from "../services/product.service";

export const ProductDetails = () => {
  const [product, setProduct] = useState();
  let { productId } = useParams();

  useEffect(() => {
    getAllProductById(productId).then(setProduct).catch(console.error);
  }, [productId]);

  return (
    <Layout>
      <div className="container mt-5">
        <NavLink to="/" end className="btn btn-primary mb-4">
          Home
        </NavLink>

        {product && <Product data={product} showButtonEdit showButtonDelete />}
      </div>
    </Layout>
  );
};
