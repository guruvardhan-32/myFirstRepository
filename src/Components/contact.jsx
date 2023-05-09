import { React, useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
const Contact = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);
  return (
    <>
      <h1> Contact Us..</h1>
      <p>
        You can contact us and feel free to wirte to @fruits&vegetables@mail.com
      </p>
      <h1>
        {data.map((value, index) => (
          <li key={index}>{value.email}</li>
        ))}
      </h1>
    </>
  );
};

export default Contact;
