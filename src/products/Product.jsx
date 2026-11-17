import { NavLink, useNavigate } from "react-router";

import { DeleteModal } from "../ui/DeleteModal";
import { deleteProduct } from "../services/product.service";
import { useState } from "react";

export const Product = ({
  data,
  showButtonDetails = false,
  showButtonEdit = false,
  showButtonDelete = false,
}) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteProduct(data.id)
      .then(() => {
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <>
      <div key={data.id} className="col-4 border-2 mb-5">
        <img src={data.image} alt="" className="card-img-top" />

        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.description}</p>
          <p className="fw-bold text-primary">{data.price}€</p>

          <span class="chip chip-successgit ">
            {data.available ? "Disponible" : "En rupture"}
          </span>

          <div className="d-flex gap-2">
            {showButtonDetails && (
              <NavLink
                to={`/products/details/${data.id}`}
                end
                className="btn btn-primary"
              >
                Voir details
              </NavLink>
            )}

            {showButtonEdit && (
              <NavLink
                to={`/products/modifier/${data.id}`}
                end
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
