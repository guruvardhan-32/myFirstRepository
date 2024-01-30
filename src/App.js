import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/blogs";
import Contact from "./Components/contact";
import Layout from "./Components/layout";
import Home from "./Components/Home";
import Context from "./Components/context";
function App() {
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
        <img
          alt="fruitsImage"
          src="https://cdn-icons-png.flaticon.com/512/4163/4163765.png"
          width="50"
          height="60"
        ></img>
      </header>
      <div>
        <Router>
          <Layout />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="tutorial" element={<Context />} />
          </Routes>
        </Router>
      </div>
      <footer className="footer">Thanks for vising our Mart
        <p>This is our footer.</p></footer>
    </>
  );
}

export default App;
