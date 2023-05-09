import React, { useRef } from "react";

const Refstutorial = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <input type="text" placeholder="Ex.." ref={inputRef}></input>
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default Refstutorial;
