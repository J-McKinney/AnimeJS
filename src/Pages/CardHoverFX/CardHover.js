// import React, { Component } from "react";
// import Styles from "./CardHover.module.css";

// class CardHover extends Component {
//   state = {};

//   componentDidMount() {
//     console.log("Mounted: ");
//   }
//   componentDidUpdate() {
//     console.log("Updated: ");
//   }
//   componentWillUnmount() {
//     console.log("Unmount: ");
//   }

//   render() {
//     return (
//       <>
//         <div className={Styles.wrapper}></div>
//       </>
//     );
//   }
// }

// export default CardHover;

import React from "react";
import Styles from "./CardHover.module.css";

function CardHover(props) {
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <div className={Styles.card}>
            <div className={Styles.imgBx} data-text="Design">
              <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div className={Styles.content}>
              <div>
                <h3>{props.cardTitle}</h3>
                <p>{props.cardParagraph}</p>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHover;
