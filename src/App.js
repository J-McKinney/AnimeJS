import ABG from "./Pages/AnimatedBackGround/AnimatedBG";
import CardHover from "./Pages/CardHoverFX/CardHover";
import CardSlideFX from "./Pages/CardSlideFX/CardSlideFX";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ABG />
      <CardSlideFX />
      <CardHover />
    </div>
  );
}

export default App;
