import { NavLink, useNavigate } from "react-router";

import { Input } from "../ui/input";
import Layout from "../Layout";
import { createProduct } from "../services/product.service";
import { useState } from "react";

export const AddProductPage = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 750,
    available: true,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    createProduct(product)
      .then(() => {
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h1>ADD PRODUCT</h1>
        <NavLink to="/" end className="btn btn-primary">
          Home
        </NavLink>

        <form onSubmit={handleSubmit} className="mt-4">
          <Input id="name" name="name" label="Nom" onChange={handleChange} />

          <Input
            id="description"
            label="Description"
            name="description"
            onChange={handleChange}
          />

          <Input
            type="number"
            id="price"
            label="Prix"
            name="price"
            onChange={handleChange}
          />

          <div className="mb-3 form-field">
            <input type="checkbox" id="exampleCheck1" className="check" />
            <label htmlFor="exampleCheck1">Disponible</label>
          </div>

          <Input
            id="image"
            label="Image"
            name="image"
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};
