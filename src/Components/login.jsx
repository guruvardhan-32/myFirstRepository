import React, { useContext } from "react";
import { AppContext } from "./context";

const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input placeholder="Enter your name..."
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
