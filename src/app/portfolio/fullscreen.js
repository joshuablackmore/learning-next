import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';

const FullScreenImage = ({ imageUrl, onClose }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    onClose();
  };

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageUrl} alt="Fullscreen" />
      </div>
    </div>,
    document.body
  );
};

export default FullScreenImage;
