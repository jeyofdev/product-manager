import { NavLink, useNavigate, useParams } from "react-router";
import { getAllProductById, updateProduct } from "../services/product.service";
import { useEffect, useState } from "react";

import { Input } from "../ui/input";
import Layout from "../Layout";

export const EditProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 750,
    available: true,
    image: "",
  });

  useEffect(() => {
    getAllProductById(productId)
      .then((data) => {
        setProduct({
          name: data.name ?? "",
          description: data.description ?? "",
          price: data.price ?? 0,
          available: data.available ?? false,
          image: data.image ?? "",
        });
      })
      .catch(console.error);
  }, [productId]);

  console.log(product);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
            ? Number(value)
            : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProduct(productId, product)
      .then(() => navigate("/"))
      .catch(console.error);
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h1>Modifier le produit</h1>

        <NavLink to="/" end className="btn btn-primary">
          Home
        </NavLink>

        <form onSubmit={handleSubmit} className="mt-4">
          <Input
            id="name"
            name="name"
            label="Nom"
            value={product.name}
            onChange={handleChange}
          />

          <Input
            id="description"
            label="Description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />

          <Input
            type="number"
            id="price"
            label="Prix"
            name="price"
            value={product.price}
            onChange={handleChange}
          />

          <div className="mb-3 form-field">
            <input
              type="checkbox"
              id="available"
              name="available"
              className="check"
              checked={product.available}
              onChange={handleChange}
            />
            <label htmlFor="available">Disponible</label>
          </div>

          <Input
            id="image"
            label="Image"
            name="image"
            value={product.image}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-primary">
            Modifier
          </button>
        </form>
      </div>
    </Layout>
  );
};
