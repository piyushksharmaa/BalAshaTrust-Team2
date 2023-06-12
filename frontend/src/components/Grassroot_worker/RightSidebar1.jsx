import React, { useContext, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CancelIcon from "@mui/icons-material/Cancel";
import { RightSidebarData1 } from "./RightSidebarData1";
import { AppContext } from "./Dashboard1";
const RightSidebar = () => {
  const { sidebar, showSidebar } = useContext(AppContext);
  return (
    <div className="rightsidebar1">
      <button className="notificationbutton1" onClick={showSidebar}>
        <NotificationsIcon />
      </button>
      <div className={sidebar ? "rightsidebaractive1" : "rightsidebarnot1"}>
        <button className="cancelbutton1" onClick={showSidebar}>
          <CancelIcon />
        </button>
        <h2>Notifications</h2>
        <ul className="rightsidebarList1">
          {RightSidebarData1.map((val, key) => {
            return (
              <li key={key} className="row1">
                <div id="title1">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
