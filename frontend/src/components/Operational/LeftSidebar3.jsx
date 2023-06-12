import React from "react";
import {
  LeftSidebarData_Children,
  LeftSidebarData_Brands,
  LeftSidebarData_Orphanages,
  LeftSidebarData_Workers,
} from "./LeftSidebarData3";
import { Searchbar3 } from "./Searchbar3";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
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
    <div className="Leftsidebar3">
    <div className="childrens3">
      <Searchbar3 placeholder="Enter a Children Name..." 
      data={data}/>
      <ul className="LeftsidebarList3">
        {data.map((val, key) => {
          return (
            <li key={key} className="row3">
              <Link to="/childrendetails">
                <div id="title1">{val.childName}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
      <div className="workers3">
        <Searchbar3
          placeholder="Enter a Worker Name..."
          data={LeftSidebarData_Workers}
        />
        <ul className="LeftsidebarList3">
          {LeftSidebarData_Workers.map((val, key) => {
            return (
              <li key={key} className="row3">
                <div id="icon3">{val.icon}</div>
                <div id="title3">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="orphanages3">
        <Searchbar3
          placeholder="Enter an Orphanage Name..."
          data={LeftSidebarData_Orphanages}
        />
        <ul className="LeftsidebarList3">
          {LeftSidebarData_Orphanages.map((val, key) => {
            return (
              <li key={key} className="row3">
                <div id="icon3">{val.icon}</div>
                <div id="title3">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="Analytics">
        <div id="icon3">
          <AnalyticsIcon />
        </div>
        <div id="title3">
          <Link to="/operational/dashboard/analytics">Analytics</Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
