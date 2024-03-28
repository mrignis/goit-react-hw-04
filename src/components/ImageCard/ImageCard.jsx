import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <li className={styles.card}>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        title={image.description} // Додано атрибут title з назвою зображення
        className={styles.image}
      />
      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          <h3 className={styles.title}>{image.user.name}</h3>
          <p className={styles.views}>{image.views} views</p>
        </div>
      </div>
    </li>
  );
};

export default ImageCard;
