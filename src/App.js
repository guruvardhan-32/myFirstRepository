import { React, useState } from "react";
import "./App.css";
import Fruits from "./Components/fruits";
import Vegies from "./Components/vegies";

function App() {
  const fruitslist = ["orange", "mango", "grapes", "papaya"];
  const vegieslist = ["carrot", "cabage", "beetroot", "cucumber"];
const [changefruit, Setchangefruit] = useState(fruitslist);
const [changevegie, Setchangevegie] = useState(vegieslist);
const Newfruitslist = [...changefruit, 'banana', 'apple', 'pineapple'];
const Newvegieslist = [...changefruit, 'brinjal', 'onion', 'chille'];
  return (
    <div>
      <ul>
        <h1>Fruits</h1>
        <button onClick={() => {Setchangefruit(Newfruitslist)}}>Add Fruits</button>
        <button onClick={() => {Setchangefruit(fruitslist)}}>Remove Fruits</button>
        <Fruits Fruitslist={changefruit} />
        <h1>Vegetables</h1>
        <button onClick={() => {Setchangevegie(Newvegieslist)}}>Add Vegetables</button>
        <button onClick={() => {Setchangevegie(vegieslist)}}>Remove Vegies</button>
        <Vegies Vegieslist={changevegie} />
      </ul>
    </div>
  );
}

export default App;
