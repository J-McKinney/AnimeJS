import React, { Component } from "react";
import anime from "animejs";
import Styles from "./AnimatedBG.module.css";

class AnimatedBG extends Component {
  state = {};

  componentDidMount() {
    // WORKING!!!
    let container = document.querySelector(".container");
    for (var i = 0; i <= 5; i++) {
      let squares = document.createElement("div");
      squares.classList.add("square");
      container.appendChild(squares);
    }
    // EXPERIMENTAL SECTION!!!
    // let container = document.querySelector(".container");
    // for (var i = 0; i <= 5; i++) {
    //   let div = document.createElement("div");
    //   div.classList.add("box");
    //   container.appendChild(div);
    // }
  }

  render() {
    return (
      <>
        <div className={Styles.wrapper}>
          <div id={Styles.container} className="container">
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
