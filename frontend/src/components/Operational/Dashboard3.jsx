import React from "react";
import DashboardHeader from "./DashboardHeader3";
import LeftSidebar from "./LeftSidebar3";
import Main from "./Main3";
import "../../styles/DashboardOperational.scss";
import RightSidebar from "./RightSidebar3";
import { useState, createContext } from "react";

export const AppContext = createContext();
const Dashboard_operational = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="dashboard3">
      <div className="container3">
        <div className="left3">
          <LeftSidebar />
        </div>
        <div className="right3">
          <AppContext.Provider value={{ sidebar, showSidebar }}>
            <DashboardHeader />
            <Main />
          </AppContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_operational;
