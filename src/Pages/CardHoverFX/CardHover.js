import React from "react";
import HoverCard from "../../Components/Card/HoverCard";
import code from "../../images/code.jpg";
import design from "../../images/design.jpg";
import launch from "../../images/launch.jpg";
import earn from "../../images/earn.jpg";
import Styles from "./CardHover.module.css";

function CardHover(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <HoverCard
            dataText="design"
            imgSrc={design}
            imgAlt="Design"
            hoverCardTitle="Design"
            hoverCardParagraph="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            link="/"
            linkTitle="Read More"
          />
          <HoverCard
            dataText="code"
            imgSrc={code}
            imgAlt="Code"
            hoverCardTitle="Code"
            hoverCardParagraph="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            link="/"
            linkTitle="Read More"
          />
          {/*
          <HoverCard
            dataText="launch"
            imgSrc={launch}
            imgAlt="Launch"
            hoverCardTitle="Launch"
            hoverCardParagraph="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            link="/"
            linkTitle="Read More"
          />
          <HoverCard
            dataText="earn"
            imgSrc={earn}
            imgAlt="Earn"
            hoverCardTitle="Earn"
            hoverCardParagraph="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
            link="/"
            linkTitle="Read More"
          />
          */}
        </div>
      </div>
    </>
  );
}

export default CardHover;
