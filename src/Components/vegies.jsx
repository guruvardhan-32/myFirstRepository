import { React, Fragment } from "react";

const Vegies = (props) => {
  const showVegies = props?.Vegieslist?.map((vegies, index) => (
    <li key={index}>{vegies}</li>
  ));
  return <Fragment>{showVegies}</Fragment>;
};

export default Vegies;
