import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  const handleClick = () => {
    // Викликати обробник події onImageClick з передачею зображення
    onImageClick(image);
  };

  return (
    <li className={styles.card}>
      <img
        src={image.urls.small} // Використовуємо urls.small для зображення маленького розміру
        alt={image.alt_description}
        className={styles.image}
        onClick={handleClick} // Обробник кліку на зображенні
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
