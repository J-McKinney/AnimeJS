import React, { Component } from "react";
import anime from "animejs";
import "./AnimatedBG.css";

class AnimatedBG extends Component {
  state = {};

  componentDidMount() {
    this.animateBlocks();
  }
  componentWillUnmount() {}

  animateBlocks = () => {
    let container = document.querySelector(".container");
    for (var i = 0; i <= 100; i++) {
      let blocks = document.createElement("div");
      blocks.classList.add("block");
      container.appendChild(blocks);
    }

    anime({
      targets: ".block",
      translateX: function () {
        return anime.random(-700, 700);
      },
      translateY: function () {
        return anime.random(-500, 500);
      },
      scale: function () {
        return anime.random(1, 5);
      },
      easing: "linear",
      // easing: "easeInOutSine",
      duration: 3000,
      delay: anime.stagger(10),
      // opacity: function () {
      //   return anime.random(0.75, 1);
      // },
      // Complete the animation effect on screen
      complete: this.animateBlocks,
    });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="container">
            {/* <h2>
              <span>My First video on</span>
              <br />
              Anime.JS
            </h2> */}
          </div>
        </div>
      </>
    );
  }
}

export default AnimatedBG;
