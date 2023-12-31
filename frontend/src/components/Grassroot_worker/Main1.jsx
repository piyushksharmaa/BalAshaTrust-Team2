import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { Maindata1 } from "./Maindata1";
import { AppContext } from "./Dashboard1";
import axios from "axios";
const Main = (userdetauls) => {
  const { sidebar } = useContext(AppContext);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(userdata);
  // }, []);
  useEffect(() => {
    setData();
  }, []);
  const [userdata, setUserData] = useState([]);
  const setData = () => {
    let email = localStorage.getItem("email");
    axios.post("http://localhost:9002/workerdata", { email }).then((res) => {
      let data = [];
      data.push({ ...res["data"]["data"] });
      setUserData(data);
    });
  };
  return (
    <div className="enclosing1">
      {/* {console.log(data)} */}
      <div className="container1">
        <div className={sidebar ? "profile-shift1" : "profile1"}>
          <div className="data1">
            <ul className="maindatalist1">
              {userdata.map((val, i) => {
                return (
                  <div className="grid-container">
                    <div className="grid-item">
                      <li key={val["_id"]}>
                        <div className="grid-item">
                          <span className="Heading">Name: </span>
                          <span>{val["name"]}</span>
                        </div>
                      </li>
                      <li key={val["_id"]}>
                        <div className="grid-item">
                          <span className="Heading">Email: </span>
                          <span>{val["email"]}</span>
                        </div>
                      </li>

                      <li key={val["_id"]}>
                        <div className="grid-item">
                          <span className="Heading">Level: </span>
                          <span>{val["level"]}</span>
                        </div>
                      </li>
                    </div>
                    <div className="image3 grid-item">
                      <img
                        src="data:image/png;base64,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"
                        alt="profilephoto"
                      />
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
