import React, { Component } from "react";
// import anime from "animejs";
import "./AnimatedBG.css";

class AnimatedBG extends Component {
  state = {};

  componentDidMount() {
    let container = document.querySelector(".container");
    for (var i = 0; i <= 5; i++) {
      let squares = document.createElement("div");
      squares.classList.add("square");
      container.appendChild(squares);
    }
  }

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
