import React, { useState, createContext } from "react";
import Login from "./login";
import User from "./user";
import Refstutorial from "./refs";
export const AppContext = createContext(null);
const Context = () => {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{username, setUsername}}>
      <Login />
      <User />
      <Refstutorial />
    </AppContext.Provider>
  );
};

export default Context;
