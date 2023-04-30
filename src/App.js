import { React, useState } from "react";
import "./App.css";
import Fruits from "./Components/fruits";
import Vegies from "./Components/vegies";

function App() {
  const fruitslist = ["orange", "mango", "grapes", "papaya"];
  const vegieslist = ["carrot", "cabage", "beetroot", "cucumber"];
  const [changefruit, Setchangefruit] = useState(fruitslist);
  const [addedFruits, setAddedFruits] = useState(false);
  const [addedVegies, setAddedVegies] = useState(false);
  const [changevegie, Setchangevegie] = useState(vegieslist);
  const Newfruitslist = [...changefruit, "banana", "apple", "pineapple"];
  const Newvegieslist = [...changevegie, "brinjal", "onion", "chille"];
  // const addFruit = (Fruit) => {
  //   Setchangefruit((Newfruitslist) => {
  //     return [Fruit, ...Newfruitslist];
  //   });
  // };
  return (
    <div className="add-items">
      <div>
        <h1>Fruits</h1>
        {addedFruits ? <h2 style={{color: "green"}}>Fruits are added in the list</h2> : <h2 style={{color: "red"}}>No Fruits Added..</h2>}
        <button
          className="add-button"
          onClick={() => {
            Setchangefruit(Newfruitslist);
            setAddedFruits(true);
          }}
        >
          Add Fruits
        </button>
        {/* <button
          className="add-button"
          onClick={() => {
            addFruit();
          }}
        >
          Add One Fruit
        </button> */}
        <button
          className="clear-button"
          onClick={() => {
            Setchangefruit(fruitslist);
            setAddedFruits(false);
          }}
        >
          Remove Fruits
        </button>
        <ul>
          <Fruits Fruitslist={changefruit} />
        </ul>
      </div>
      <div>
        <h1>Vegetables</h1>
        {addedVegies ? <h2 style={{color: "green"}}>Vegetables are added in the list</h2> : <h2 style={{color: "red"}}>No Vegetables Added..</h2>}
        <button
          className="add-button"
          onClick={() => {
            Setchangevegie(Newvegieslist);
            setAddedVegies(true);
          }}
        >
          Add Vegetables
        </button>
        <button
          className="clear-button"
          onClick={() => {
            Setchangevegie(vegieslist);
            setAddedVegies(false);
          }}
        >
          Remove Vegies
        </button>
        <ul>
          <Vegies Vegieslist={changevegie} />
        </ul>
      </div>
    </div>
  );
}

export default App;
