import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import RightSidebar from "./RightSidebar1";
const DashboardHeader = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="header1">
      <div className="name1">
        <h1>Hello Admin</h1>
      </div>
      <div className="rightbar1">
        <div className="notification1">
          <RightSidebar />
        </div>
        <div className="date1">
          <DateRangeIcon></DateRangeIcon>
          <h3>{date}</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
