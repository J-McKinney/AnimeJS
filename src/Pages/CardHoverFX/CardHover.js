import React from "react";
import HoverCard from "../../Components/CardHover/HoverCard";
import Design from "../../images/design.jpg";
import Code from "../../images/code.jpg";
import Launch from "../../images/launch.jpg";
import Earn from "../../images/earn.jpg";
import Styles from "./CardHover.module.css";

const CardHover = () => {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <HoverCard
            dataText="Design"
            imgSrc={Design}
            imgAlt="Design"
            hoverCardTitle="Design"
            link="/"
            linkTitle="Read More"
            hoverCardParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco"
          />
          <HoverCard
            dataText="Code"
            imgSrc={Code}
            imgAlt="Code"
            hoverCardTitle="Code"
            link="/"
            linkTitle="Read More"
            hoverCardParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco"
          />
          <HoverCard
            dataText="Launch"
            imgSrc={Launch}
            imgAlt="Launch"
            hoverCardTitle="Launch"
            link="/"
            linkTitle="Read More"
            hoverCardParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco"
          />
          <HoverCard
            dataText="Earn"
            imgSrc={Earn}
            imgAlt="Earn"
            hoverCardTitle="Earn"
            link="/"
            linkTitle="Read More"
            hoverCardParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco"
          />
        </div>
      </div>
    </>
  );
};

export default CardHover;
