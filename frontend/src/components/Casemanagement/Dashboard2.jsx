import React from "react";
import DashboardHeader from "./DashboardHeader2";
import LeftSidebar from "./LeftSidebar2";
import Main from "./Main2";
import "../../styles/DashboardCaseManagement.scss";
import RightSidebar from "./RightSidebar2";
import { useState, createContext } from "react";

export const AppContext = createContext();
const Dashboard_casemanagement = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="dashboard2">
      <div className="container2">
        <div className="left2">
          <LeftSidebar />
        </div>
        <div className="right2">
          <AppContext.Provider value={{ sidebar, showSidebar }}>
            <DashboardHeader />
            <Main />
          </AppContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_casemanagement;
