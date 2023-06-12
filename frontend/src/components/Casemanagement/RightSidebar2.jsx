import React, { useContext, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CancelIcon from "@mui/icons-material/Cancel";
import { RightSidebarData2 } from "./RightSidebarData2";
import { AppContext } from "./Dashboard2";
const RightSidebar = () => {
  const { sidebar, showSidebar } = useContext(AppContext);
  return (
    <div className="rightsidebar2">
      <button className="notificationbutton2" onClick={showSidebar}>
        <NotificationsIcon />
      </button>
      <div className={sidebar ? "rightsidebaractive2" : "rightsidebarnot2"}>
        <button className="cancelbutton2" onClick={showSidebar}>
          <CancelIcon />
        </button>
        <h2>Notifications</h2>
        <ul className="rightsidebarList2">
          {RightSidebarData2.map((val, key) => {
            return (
              <li key={key} className="row2">
                <div id="title2">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
