import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import Image from "next/image";

const FullScreenImage = ({ imageUrl, onClose }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={imageUrl} alt="Fullscreen" fill={true} objectFit="contain" />
      </div>
    </div>,
    document.body,
  );
};

export default FullScreenImage;
