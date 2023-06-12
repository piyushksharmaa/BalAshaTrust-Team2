import React from "react";
import {
  LeftSidebarData_Children,
  LeftSidebarData_Brands,
  LeftSidebarData_Orphanages,
  LeftSidebarData_Workers,
} from "./LeftSidebarData2";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Searchbar2 } from "./Searchbar2";
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
    <div className="Leftsidebar2">
      <div className="childrens2">
      <Searchbar2 placeholder="Enter a Children Name..." />
      <ul className="LeftsidebarList2">
        {data.map((val, key) => {
          return (
            <li key={key} className="row2">
              <Link to="/childrendetails">
                <div id="title1">{val.childName}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
      <div className="workers2">
        <Searchbar2
          placeholder="Enter a Worker Name..."
          data={LeftSidebarData_Workers}
        />
        <ul className="LeftsidebarList2">
          {LeftSidebarData_Workers.map((val, key) => {
            return (
              <li key={key} className="row2">
                <div id="icon2">{val.icon}</div>
                <div id="title2">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="orphanages2">
        <Searchbar2
          placeholder="Enter an Orphanage Name..."
          data={LeftSidebarData_Orphanages}
        />
        <ul className="LeftsidebarList2">
          {LeftSidebarData_Orphanages.map((val, key) => {
            return (
              <li key={key} className="row2">
                <div id="icon2">{val.icon}</div>
                <div id="title2">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
