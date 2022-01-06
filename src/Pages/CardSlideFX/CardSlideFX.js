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
            cardP="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco"
          />
          <CardSlide
            img={Design}
            imgAlt="Design Image"
            cardTitle="Card Two"
            cardP="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco"
          />
          <CardSlide
            img={Launch}
            imgAlt="Launch Image"
            cardTitle="Card Three"
            cardP="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco"
          />
        </div>
      </div>
    </>
  );
};

export default CardSlideFX;
