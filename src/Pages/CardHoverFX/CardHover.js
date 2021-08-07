import React from "react";
import HoverCard from "../../Components/CardHover/HoverCard";
import code from "../../images/code.jpg";
import design from "../../images/design.jpg";
import launch from "../../images/launch.jpg";
import earn from "../../images/earn.jpg";
import Styles from "./CardHover.module.css";

const CardHover = () => {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <HoverCard
            dataText="Design"
            imgSrc={design}
            imgAlt="Design"
            hoverCardTitle="Design"
            hoverCardParagraph="Nobodys killing me until after I catch my wife with another man. Snuffles was my slave name. You can call me Snowball, because my fur is pretty and white. Quote mode. We all wanna die, we are meeseeks!"
            link="/"
            linkTitle="Read More"
          />
          <HoverCard
            dataText="Code"
            imgSrc={code}
            imgAlt="Code"
            hoverCardTitle="Code"
            hoverCardParagraph="Nobodys killing me until after I catch my wife with another man. Snuffles was my slave name. You can call me Snowball, because my fur is pretty and white. Quote mode. We all wanna die, we are meeseeks!"
            link="/"
            linkTitle="Read More"
          />
          <HoverCard
            dataText="Launch"
            imgSrc={launch}
            imgAlt="Launch"
            hoverCardTitle="Launch"
            hoverCardParagraph="Nobodys killing me until after I catch my wife with another man. Snuffles was my slave name. You can call me Snowball, because my fur is pretty and white. Quote mode. We all wanna die, we are meeseeks!"
            link="/"
            linkTitle="Read More"
          />
          <HoverCard
            dataText="Earn"
            imgSrc={earn}
            imgAlt="Earn"
            hoverCardTitle="Earn"
            hoverCardParagraph="Nobodys killing me until after I catch my wife with another man. Snuffles was my slave name. You can call me Snowball, because my fur is pretty and white. Quote mode. We all wanna die, we are meeseeks!"
            link="/"
            linkTitle="Read More"
          />
        </div>
      </div>
    </>
  );
};

export default CardHover;
