import React, { useContext, useState } from "react";
import { createContext } from "react";
import { Maindata3 } from "./Maindata3";
import { AppContext } from "./Dashboard3";
import PieChart from "./Piechart";
import { UserData } from "./Data";
const Main = () => {
  const { sidebar } = useContext(AppContext);
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.title),
    datasets: [
      {
        label: "Cases",
        data: UserData.map((data) => data.count),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="enclosing3">
      <div className="container4">
        <div className={sidebar ? "col4change" : "col4"}>
          <div className="col4-1">
            <div className="row4-1">
              <div class="grid-container">
                <div class="grid-item">Total Cases: </div>
                <div class="grid-item">9</div>
              </div>
            </div>
            <div className="row4-2">
              <div class="grid-container">
                <div class="grid-item">Cases Assigned: </div>
                <div class="grid-item">6</div>
              </div>
            </div>
            <div className="row4-3">
              <div class="grid-container">
                <div class="grid-item">Cases Solved: </div>
                <div class="grid-item">3</div>
              </div>
            </div>
          </div>
          <div className="col4-2">
            <div style={{ width: 300 }}>
              <PieChart chartData={userData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
