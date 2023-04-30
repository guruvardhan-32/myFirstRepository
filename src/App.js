import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Fruits from "./Components/fruits";
import Blogs from "./Components/blogs";
import Contact from "./Components/contact";
import Vegies from "./Components/vegies";
import Layout from "./Components/layout";

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
    <>
      <header className="header">
        <img
          alt="fruitsImage"
          src="https://cdn-icons-png.flaticon.com/512/3194/3194766.png"
          width="50"
          height="60"
        ></img>
        Fruits and Vegetables Mart
        <div>
          <BrowserRouter>
            <Routes>
              <Route path ="/" element ={<Layout/>}/>
              <Route path="/" element={<App />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </header>

      <div className="add-items">
        <div>
          <h1>Fruits</h1>
          {addedFruits ? (
            <h2 style={{ color: "green" }}>Fruits are added in the list</h2>
          ) : (
            <h2 style={{ color: "red" }}>No Fruits Added!!</h2>
          )}
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
              Setchangefruit([]);
              setAddedFruits(false);
            }}
          >
            Remove Fruits
          </button>
          <div className="list-container">
            <ul>
              <Fruits Fruitslist={changefruit} />
            </ul>
          </div>
          {addedFruits && <h2>Your Cart is full of Fruits...</h2>}
        </div>
        <div>
          <h1>Vegetables</h1>
          {addedVegies ? (
            <h2 style={{ color: "green" }}>Vegetables are added in the list</h2>
          ) : (
            <h2 style={{ color: "red" }}>No Vegetables Added!!</h2>
          )}
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
              Setchangevegie([]);
              setAddedVegies(false);
            }}
          >
            Remove Vegies
          </button>
          <div className="list-container">
            <ul>
              <Vegies Vegieslist={changevegie} />
            </ul>
          </div>
          {addedVegies && <h2>Your Cart is full of Vegetables...</h2>}
        </div>
      </div>
      <footer className="footer">Thanks for vising our Mart</footer>
    </>
  );
}

export default App;
