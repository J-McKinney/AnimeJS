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
            cardP="Nobody's killing me until after I catch my wife with another man. 
            Snuffles was my slave name. You can call me Snowball, because my fur is 
            pretty and white. Quote mode. We all wanna die, we're meeseeks!"
          />
          <CardSlide
            img={Design}
            imgAlt="Design Image"
            cardTitle="Card Two"
            cardP="Nobody's killing me until after I catch my wife with another man. 
            Snuffles was my slave name. You can call me Snowball, because my fur is 
            pretty and white. Quote mode. We all wanna die, we're meeseeks!"
          />
          <CardSlide
            img={Launch}
            imgAlt="Launch Image"
            cardTitle="Card Three"
            cardP="Nobody's killing me until after I catch my wife with another man. 
            Snuffles was my slave name. You can call me Snowball, because my fur is 
            pretty and white. Quote mode. We all wanna die, we're meeseeks!"
          />
        </div>
      </div>
    </>
  );
};

export default CardSlideFX;
