import React, { useEffect, useState, createContext } from "react";
import DashboardHeader from "./DashboardHeader1";
import LeftSidebar from "./LeftSidebar1";
import Main from "./Main1";
import "../../styles/Dashboardgrassroot.scss";
import { Maindata1 } from "./Maindata1";
export const AppContext = createContext();
const Dashboard_grassroot = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  // const [userdata, setUserData] = useState([]);
  // useEffect(() => {
  //   // setUserData(Maindata1);
  //   fetch("http://localhost:5000/userdata").then((res) => {
  //     setUserData(res.data);
  //   });
  // }, []);
  return (
    <div className="dashboard1">
      <div className="container1">
        <div className="left1">
          <LeftSidebar />
        </div>
        <div className="right1">
          <AppContext.Provider value={{ sidebar, showSidebar }}>
            <DashboardHeader />
            <Main />
          </AppContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_grassroot;
