import React from "react";
import Styles from "./CardSlide.module.css";

function CardSlide(props) {
  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.imgBx}>
          <img src={props.img} alt={props.imgAlt} />
        </div>
        <div className={Styles.content}>
          <h2 className={Styles.h2}>{props.cardTitle}</h2>
          <p className={Styles.p}>{props.cardP}</p>
        </div>
      </div>
    </>
  );
}

export default CardSlide;
