import React from "react";
import Styles from "./HoverCard.module.css";

function HoverCard(props) {
  return (
    <div className={Styles.card}>
      <div className={Styles.imgBx} data-text={props.dataText}>
        <img
          className={Styles.hoverCardImg}
          src={props.imgSrc}
          alt={props.imgAlt}
        />
      </div>
      <div className={Styles.content}>
        <div>
          <h3>{props.hoverCardTitle}</h3>
          <p>{props.hoverCardParagraph}</p>
          <a href={props.link}>{props.linkTitle}</a>
        </div>
      </div>
    </div>
  );
}

export default HoverCard;
