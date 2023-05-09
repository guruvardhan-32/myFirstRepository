import { React, Fragment, useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const Blogs = (props) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setApiData(response.data);
        console.log(response);
        console.log("API IS CALLED");
      });
  }, []);
  return (
    <>
      <h1>Our Blogs..</h1>
      <p>
        Check our daily blogs for fresh fuits and vegetables avialble here...
      </p>
      <h1>
        {apiData.map((value, index) => (
          <li key={index}>{value.name}</li>
        ))}
      </h1>
    </>
  );
};

export default Blogs;
