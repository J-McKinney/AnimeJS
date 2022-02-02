import React, { Component } from "react";
import anime from "animejs";
import Styles from "./AnimatedBG.module.css";
import "./AnimatedBG.css";

class AnimatedBG extends Component {
  state = {};

  componentDidMount() {
    this.animateBlocks();
  }
  componentWillUnmount() {}
  componentDidUpdate() {}

  animateBlocks = () => {
    let container = document.querySelector(".BGContainer");
    // for (var i = 0; i <= 500; i++) {
    for (var i = 0; i <= 150; i++) {
      // let array= []
      let blocks = document.createElement("div");
      // blocks.style.background = "red";
      blocks.classList.add("block");
      container.appendChild(blocks);
      // array.unshift(blocks)
    }

    anime({
      targets: ".block",
      translateX: function () {
        // return anime.random(-1700, 1700);
        return anime.random(-900, 900);
      },
      translateY: function () {
        // return anime.random(-1500, 1500);
        return anime.random(-500, 500);
      },
      scale: function () {
        // return anime.random(1, 5);
        return anime.random(1, 4);
      },
      easing: "linear",
      // duration: 7000,
      duration: 5000,
      boxShadow: function () {
        return "10px 10px 50px rgba(0, 0, 0, 0.6)";
      },
      // random ass colors
      // backgroundColor: function () {
      //   return "#" + Math.floor(Math.random() * 16777215).toString(16);
      // },
      delay: anime.stagger(10),
      // delay: anime.stagger(200),
      // Complete the animation effect on screen
      // complete: this.animateBlocks,
    });
  };

  render() {
    return (
      <>
        <div className="BGWrapper">
          <div className="BGContainer">
            <h2 className={Styles.title}>
              <span className={Styles.span}>Jesse McKinney</span>
            </h2>
          </div>
        </div>
      </>
    );
  }
}

export default AnimatedBG;
