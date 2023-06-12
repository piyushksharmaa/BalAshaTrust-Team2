import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import RightSidebar from "./RightSidebar3";
const DashboardHeader = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="header3">
      <div className="name3">
        <h1>Hello Admin</h1>
      </div>
      <div className="rightbar3">
        <div className="notification3">
          <RightSidebar />
        </div>
        <div className="date3">
          <DateRangeIcon></DateRangeIcon>
          <h3>{date}</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
