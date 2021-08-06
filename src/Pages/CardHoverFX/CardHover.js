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
            hoverCardParagraph="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            link="/"
            linkTitle="Read More"
          />
          <HoverCard
            dataText="Code"
            imgSrc={code}
            imgAlt="Code"
            hoverCardTitle="Code"
            hoverCardParagraph="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            link="/"
            linkTitle="Read More"
          />
          <HoverCard
            dataText="Launch"
            imgSrc={launch}
            imgAlt="Launch"
            hoverCardTitle="Launch"
            hoverCardParagraph="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            link="/"
            linkTitle="Read More"
          />
          <HoverCard
            dataText="Earn"
            imgSrc={earn}
            imgAlt="Earn"
            hoverCardTitle="Earn"
            hoverCardParagraph="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            link="/"
            linkTitle="Read More"
          />
          {/*
           */}
        </div>
      </div>
    </>
  );
};

export default CardHover;
