import React from "react";
import {
  LeftSidebarData_Children,
  LeftSidebarData_Brands,
  LeftSidebarData_Orphanages,
  LeftSidebarData_Workers,
} from "./LeftSidebarData3";
import { Searchbar3 } from "./Searchbar3";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const LeftSidebar = () => {
  return (
    <div className="Leftsidebar3">
      <div className="childrens3">
        <Searchbar3
          placeholder="Enter a Children Name..."
          data={LeftSidebarData_Children}
        />
        <ul className="LeftsidebarList3">
          {LeftSidebarData_Children.map((val, key) => {
            return (
              <li key={key} className="row3">
                <div id="icon3">{val.icon}</div>
                <div id="title3">{val.title}</div>
              </li>
            );
          })}
        </ul>
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
        <div id="title3">Analytics</div>
      </div>
    </div>
  );
};

export default LeftSidebar;
