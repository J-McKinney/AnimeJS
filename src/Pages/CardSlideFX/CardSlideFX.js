import React from "react";
import CardSlide from "../../Components/CardSlide/CardSlide";
import Code from "../../images/code.jpg";
import Design from "../../images/design.jpg";
import Launch from "../../images/launch.jpg";
import Styles from "./CardSlideFX.module.css";

const CardSlideFX = () => {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <CardSlide
            img={Code}
            imgAlt="Code Image"
            cardTitle="Card One"
            cardP="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
          />
          <CardSlide
            img={Design}
            imgAlt="Design Image"
            cardTitle="Card Two"
            cardP="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
          />
          <CardSlide
            img={Launch}
            imgAlt="Launch Image"
            cardTitle="Card Three"
            cardP="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
          />
        </div>
      </div>
    </>
  );
};

export default CardSlideFX;
