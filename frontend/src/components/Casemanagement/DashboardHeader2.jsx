import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import RightSidebar from "./RightSidebar2";
const DashboardHeader = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="header2">
      <div className="name2">
        <h1>Hello Admin</h1>
      </div>
      <div className="rightbar2">
        <div className="notification2">
          <RightSidebar />
        </div>
        <div className="date2">
          <DateRangeIcon></DateRangeIcon>
          <h3>{date}</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
