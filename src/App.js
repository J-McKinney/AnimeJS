// import ABG from "./Pages/AnimatedBackGround/AnimatedBG";
import CardHover from "./Pages/CardHoverFX/CardHover";
import CardSlideFX from "./Pages/CardSlideFX/CardSlideFX";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ABG /> */}
      <CardHover />
      <CardSlideFX />
    </div>
  );
}

export default App;
