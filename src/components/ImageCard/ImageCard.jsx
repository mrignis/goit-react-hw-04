import React from "react";

import styles from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <li className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
};

export default ImageCard;
