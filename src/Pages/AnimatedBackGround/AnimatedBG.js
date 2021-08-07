import React, { Component } from "react";
import anime from "animejs";
import "./AnimatedBG.css";

class AnimatedBG extends Component {
  state = {};

  componentDidMount() {
    this.animateBlocks();
  }
  componentWillUnmount() {}
  componentDidUpdate() {}

  animateBlocks = () => {
    let container = document.querySelector(".container");
    // for (var i = 0; i <= 100; i++) {
      for (var i = 0; i <= 500; i++) {
      // let array= []
      let blocks = document.createElement("div");
      blocks.classList.add("block");
      container.appendChild(blocks);
      // array.unshift(blocks)
    }

    anime({
      targets: ".block",
      translateX: function () {
        // return anime.random(-700, 700);
        return anime.random(-1700, 1700);
      },
      translateY: function () {
        // return anime.random(-500, 500);
        return anime.random(-1500, 1500);
      },
      scale: function () {
        return anime.random(1, 5);
        // return anime.random(1, 15);
      },
      easing: "linear",
      // easing: "easeInOutSine",
      // easing: "easeInOutCirc",
      // duration: 3000,
      duration: 7000,
      delay: anime.stagger(10),
      // Complete the animation effect on screen
      // complete: this.animateBlocks,
    });
  };

  stopAnimation = () => {
    console.log("hello world");
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="container">
            <h2>
              <span>My First video on</span>
              <br />
              Anime.JS
            </h2>
          </div>
        </div>
      </>
    );
  }
}

export default AnimatedBG;
