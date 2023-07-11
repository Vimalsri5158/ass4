import React from "react";
import styles from "./content.module.css";
import Card from "../Components/Cards/Card";
import CardData from "./Cards.json";

const Content = ({ addToWishList, removeFromWishList }) => {
  return (
    <div className={styles.container}>
      {CardData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          body={card.body}
          content={card.content}
          footer={card.footer}
          description={card.description}
          addToWishList={addToWishList}
          removeFromWishList={removeFromWishList}
        />
      ))}
    </div>
  );
};

export default Content;
