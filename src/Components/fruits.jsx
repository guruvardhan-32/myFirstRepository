import { React, Fragment, useState } from "react";

const Fruits = (props) => {
  const [newFruit, setNewFruit] = useState("");
  const showFruits = props?.Fruitslist?.map((fruits, index) => (
    <li key={index}>{fruits}</li>
  ));
  return (
    <Fragment>
      <input
        value={newFruit}
        placeholder="Search for a Fruit"
        onChange={(event) => {
          setNewFruit(event.target.value);
        }}
      ></input>
      <button onClick={() => { props.add(newFruit) }}>Add New Fruit</button>
      {showFruits}
      <p>All the available fruits</p>
    </Fragment>
  );
};

export default Fruits;
