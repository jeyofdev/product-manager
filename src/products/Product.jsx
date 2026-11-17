import { deleteProduct, patchProduct } from "../services/product.service";

import { Badge } from "react-bootstrap";
import { DeleteModal } from "../ui/DeleteModal";
import { NavLink } from "react-router";
import { useState } from "react";

export const Product = ({
  data,
  setProducts,
  showButtonDetails = false,
  showButtonEdit = false,
  showButtonDelete = false,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteProduct(data.id)
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== data.id),
        );
      })
      .catch(console.error);
  };

  const handleChangeAvailability = async () => {
    try {
      const updatedProduct = await patchProduct(data.id, {
        available: !data.available,
      });

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === data.id ? updatedProduct : product,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="col-4 border-2 mb-5">
        <img src={data.image} alt="" className="card-img-top" />

        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.description}</p>
          <p className="fw-bold text-primary">{data.price}€</p>

          <Badge
            bg={data.available ? "success" : "warning"}
            text={data.available ? "white" : "black"}
            className="mb-2"
            onClick={handleChangeAvailability}
            style={{ cursor: "pointer" }}
          >
            {data.available ? "Disponible" : "En rupture"}
          </Badge>

          <div className="d-flex gap-2">
            {showButtonDetails && (
              <NavLink
                to={`/products/details/${data.id}`}
                className="btn btn-primary"
              >
                Voir détails
              </NavLink>
            )}

            {showButtonEdit && (
              <NavLink
                to={`/products/modifier/${data.id}`}
                className="btn btn-success"
              >
                Modifier
              </NavLink>
            )}

            {showButtonDelete && (
              <button
                className="btn btn-danger"
                onClick={() => setShowModal(true)}
              >
                Supprimer
              </button>
            )}
          </div>
        </div>
      </div>

      <DeleteModal
        onConfirm={handleDelete}
        showModal={showModal}
        setShowModal={setShowModal}
        product={data}
      />
    </>
  );
};
