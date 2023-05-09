import { Link } from "react-router-dom";
import { React, useState, Fragment } from "react";
import "./navcss.css";
const Layout = (props) => {
  const [changeValue, setChangeValue] = useState("Search Here");
  let onChange = (event) => {
    const enterValue = event.target.value;
    setChangeValue(enterValue);
  };
  return (
    <Fragment>
      <nav className="ReactStickyHeader_fixed">
        <ul className="nav-link">
          <Link to="/home">
            <li>Home</li>
          </Link>

          <Link to="/blogs">
            <li>Blogs</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/tutorial">
            <li>Tutorial</li>
          </Link>
        </ul>
        <input
          placeholder="enter a Fruit or Vegetable..."
          onChange={onChange}
          value={changeValue}
        />
      </nav>
    </Fragment>
  );
};

export default Layout;
