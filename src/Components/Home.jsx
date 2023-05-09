import { React, useReducer } from "react";
import "../App.css";
import { useState } from "react";
import "../App.css";
import Fruits from "./fruits";
import Vegies from "./vegies";

const Home = (props) => {
  const fruitslist = ["orange", "mango", "grapes", "papaya"];
  const vegieslist = ["carrot", "cabage", "beetroot", "cucumber"];

  // const [changefruit, Setchangefruit] = useState([]);
  // const [addedFruits, setAddedFruits] = useState(false);
  // const [addedVegies, setAddedVegies] = useState(false);
  // const [changevegie, Setchangevegie] = useState([]);
  const Newfruitslist = ["banana", "apple", "pineapple", ...fruitslist];
  const Newvegieslist = ["brinjal", "onion", "chille", ...vegieslist];
  const [addNewFruits, setAddNewFruits] = useState(fruitslist);
  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGEFRUITS":
        return {
          changefruit: Newfruitslist,
          changevegie: state.changevegie,
          addedFruits: state.addedFruits,
          addedVegies: state.addedVegies,
          addNewFruit: state.addNewFruit,
        };
      case "ADDNEWFRUIT":
        return {
          changefruit: addNewFruits,
          changevegie: state.changevegie,
          addedFruits: state.addedFruits,
          addedVegies: state.addedVegies,
          addNewFruit: state.addNewFruit,
        };
      case "CHANGEVEGETABLES":
        return {
          changevegie: Newvegieslist,
          changefruit: state.changefruit,
          addedFruits: state.addedFruits,
          addedVegies: state.addedVegies,
          addNewFruit: state.addNewFruit,
        };
      case "ADDFRUITS":
        return {
          addedFruits: true,
          changefruit: state.changefruit,
          changevegie: state.changevegie,
          addedVegies: state.addedVegies,
          addNewFruit: state.addNewFruit,
        };
      case "ADDVEGETABLES":
        return {
          addedVegies: true,
          changefruit: state.changefruit,
          changevegie: state.changevegie,
          addedFruits: state.addedFruits,
          addNewFruit: state.addNewFruit,
        };
      case "MOVEFRUITS":
        return {
          addedFruits: false,
          changefruit: state.changefruit,
          changevegie: state.changevegie,
          addedVegies: state.addedVegies,
          addNewFruit: state.addNewFruit,
        };
      case "MOVEVEGETABLES":
        return {
          addedVegies: false,
          changefruit: state.changefruit,
          changevegie: state.changevegie,
          addedFruits: state.addedFruits,
          addNewFruit: state.addNewFruit,
        };
      case "REMOVEFRUITS":
        return {
          changefruit: [],
          changevegie: state.changevegie,
          addedFruits: state.addedFruits,
          addedVegies: state.addedVegies,
          addNewFruit: state.addNewFruit,
        };
      case "REMOVEVEGETABLES":
        return {
          changevegie: [],
          changefruit: state.changefruit,
          addedFruits: state.addedFruits,
          addedVegies: state.addedVegies,
          addNewFruit: state.addNewFruit,
        };
      default:
        return state;
    }
  };
  const addFruit = (fruit) => {
    return (setAddNewFruits([...addNewFruits, fruit]),
    dispatch({type: "ADDNEWFRUIT"}));
  };
  const [state, dispatch] = useReducer(reducer, {
    changefruit: fruitslist,
    changevegie: vegieslist,
    addedFruits: false,
    addedVegies: false,
    addNewFruit: addNewFruits,
  });
  const addFruitDispatch = (val) => {
    return dispatch({ type: "ADDFRUITS" }), dispatch({ type: "CHANGEFRUITS" });
  };
  const removeFruitDispatch = (val) => {
    return (
      dispatch({ type: "MOVEFRUITS" }),
      dispatch({ type: "REMOVEFRUITS" }),
      alert(val)
    );
  };
  const addVegieDispatch = (val) => {
    return (
      dispatch({ type: "ADDVEGETABLES" }),
      dispatch({ type: "CHANGEVEGETABLES" })
    );
  };
  const removeVegieDispatch = (val) => {
    return (
      dispatch({ type: "MOVEVEGETABLES" }),
      dispatch({ type: "REMOVEVEGETABLES" }),
      alert(val)
    );
  };
  return (
    <>
      <div className="add-items">
        <div>
          <h1>Fruits</h1>

          {state.addedFruits ? (
            <h2 style={{ color: "green" }}>Fruits are added in the Cart</h2>
          ) : (
            <h2 style={{ color: "red" }}>No Fruits Added!!</h2>
          )}
          <button
            className="add-button"
            onClick={() => {
              addFruitDispatch("Added your Fruits");
            }}
          >
            Add Fruits
          </button>

          <button
            className="clear-button"
            onClick={() => {
              removeFruitDispatch("Please Confirm..");
            }}
          >
            Remove Fruits
          </button>
          <div className="list-container">
            <ul>
              <Fruits Fruitslist={state.changefruit} add={addFruit} />
            </ul>
          </div>
          {state.addedFruits && (
            <h2 style={{ color: "white" }}>Your Cart is full of Fruits...</h2>
          )}
        </div>
        <div>
          <h1>Vegetables</h1>
          {state.addedVegies ? (
            <h2 style={{ color: "green" }}>Vegetables are added in the Cart</h2>
          ) : (
            <h2 style={{ color: "red" }}>No Vegetables Added!!</h2>
          )}
          <button
            className="add-button"
            onClick={() => {
              addVegieDispatch("Added your Vegetables");
            }}
          >
            Add Vegetables
          </button>
          <button
            className="clear-button"
            onClick={() => {
              removeVegieDispatch("Please Confirm..");
            }}
          >
            Remove Vegies
          </button>
          <div className="list-container">
            <ul>
              <Vegies Vegieslist={state.changevegie} />
            </ul>
          </div>
          {state.addedVegies && (
            <h2 style={{ color: "white" }}>
              Your Cart is full of Vegetables...
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
