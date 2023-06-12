import React from "react";
import { Searchbar1 } from "./Searchbar1";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const LeftSidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://127.0.0.1:9002/api/list")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert("Hello");
        console.error("Error:", error.response.data);
      });
  }, []);
  return (
    <div className="Leftsidebar1">
      <Searchbar1 placeholder="Enter a Children Name..." />
      <ul className="LeftsidebarList1">
        {data.map((val, key) => {
          return (
            <li key={key} className="row1">
              <Link to="/childrendetails">
                <div id="title1">{val.childName}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
  );
};

export default LeftSidebar;
