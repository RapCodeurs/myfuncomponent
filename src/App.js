import Card from "./components/Card";
import { useState } from "react";
import ClassCardComponent from "./components/ClassCardComponent.js";

function App() {
  const [rgbValue, setRgbValue] = useState("rgb(100, 100, 1OO)");

  const createrandomColor = () => {
    let r = Math.random() * 255,
      g = Math.random() * 255,
      b = Math.random() * 255;

    setRgbValue(`rgb(${r},${g},${b})`);
  };

  return (
    <>
      <Card id={1} rgbValue={rgbValue} createrandomColor={createrandomColor} />
      <ClassCardComponent id={1} rgbValue={rgbValue} />
    </>
  );
}

export default App;
