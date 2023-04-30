import { React, Fragment } from "react";

const Fruits = (props) => {
  const showFruits = props.Fruitslist.map((fruits, index) => (
    <li key={index}>{fruits}</li>
  ));
  return <Fragment>{showFruits}</Fragment>;
};

export default Fruits;
