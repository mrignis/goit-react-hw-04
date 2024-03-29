import React from "react";
import Modal from "react-modal";

import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!image) {
    return null;
  }

  const imageUrl = image.urls?.regular;
  const altDescription = image.alt_description || "Image";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img src={imageUrl} alt={altDescription} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
