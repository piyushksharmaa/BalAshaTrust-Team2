import React, { useContext, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CancelIcon from "@mui/icons-material/Cancel";
import { RightSidebarData3 } from "./RightSidebarData3";
import { AppContext } from "./Dashboard3";
const RightSidebar = () => {
  const { sidebar, showSidebar } = useContext(AppContext);
  return (
    <div className="rightsidebar3">
      <button className="notificationbutton3" onClick={showSidebar}>
        <NotificationsIcon />
      </button>
      <div className={sidebar ? "rightsidebaractive3" : "rightsidebarnot3"}>
        <button className="cancelbutton3" onClick={showSidebar}>
          <CancelIcon />
        </button>
        <h2>Notifications</h2>
        <ul className="rightsidebarList3">
          {RightSidebarData3.map((val, key) => {
            return (
              <li key={key} className="row3">
                <div id="title3">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
