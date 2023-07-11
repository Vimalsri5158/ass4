import React, { useState } from "react";

import styles from "./card.module.css";

const Card = ({
  title,
  image,
  body,
  description,
  footer,
  addToWishList,
  removeFromWishList,
}) => {
  const [wished, setWished] = useState(false);

  const handleWished = () => {
    if (wished) {
      removeFromWishList(title);
      setWished(false);
    } else {
      addToWishList(title);
      setWished(true);
    }
  };

  return (
    <div className={styles.card}>
      <img src={image} className={styles.Image} alt={title} />
      <p className={styles.p}>{description}</p>
      <div className={styles.body}>
        {body}
        <p className={styles.content}>
          <i class="fa-solid fa-star" style={{ color: "#f2de02" }}></i>
          <i class="fa-solid fa-star" style={{ color: "#f2de02" }}></i>
          <i class="fa-solid fa-star" style={{ color: "#f2de02" }}></i>
          <i class="fa-solid fa-star" style={{ color: "#f2de02" }}></i>
          <i class="fa-solid fa-star" style={{ color: "#f2de02" }}></i>
        </p>
        <h5 className={styles.title}>{title}</h5>

        <button className={styles.footer} onClick={handleWished}>
          {footer}
        </button>
      </div>
    </div>
  );
};

export default Card;
