import { useEffect, useState } from "react";

import Layout from "../Layout";
import { Product } from "./Product";
import { getAllProducts } from "../services/product.service";

export const ProductPage = () => {
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    getAllProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <>
      <Layout>
        <div className="container mt-5">
          <h1>Bienvenue sur Project Manager</h1>

          <div className="row align-items-stretch">
            {products.map((product) => (
              <Product key={product.id} data={product} showButtonDetails />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
