import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const DeleteModal = ({
  onConfirm,
  showModal,
  setShowModal,
  product,
}) => {
  const closeModal = () => {
    setShowModal(false);
  };

  console.log(product);

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  return (
    <Modal show={showModal} onHide={closeModal} centered>
      <Modal.Body>
        Vous êtes sur le point de supprimer le produit "{product.name}"
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>

        <Button variant="danger" onClick={handleConfirm}>
          Supprimer définitivement
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
