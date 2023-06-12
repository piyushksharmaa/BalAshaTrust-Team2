import React, { useState } from "react";
import ".//..//..//styles/login.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      console.log(res, "res");
      let loginUserData = res["data"];
      if (loginUserData["status"] === 200) {
        let adminLevel = loginUserData["data"][0]["level"];
        localStorage.setItem("level", loginUserData["data"][0]["level"]);
        localStorage.setItem("email", loginUserData["data"][0]["email"]);
        localStorage.setItem("token", loginUserData["data"][0]["token"]);
        // console.log(adminLevel);
        const redirect = () => {
          // console.log("dsaasdsda");
          if (Number(adminLevel) === 1) {
            // console.log("sadads");
            navigate("/grassroot/dashboard");
          } else if (Number(adminLevel) === 2) {
            // console.log("asds");
            navigate("/casemanagement/dashboard");
          } else if (Number(adminLevel) === 3) {
            // console.log("qweqweqe");
            navigate("/operational/dashboard");
          } else if (Number(adminLevel) === 0) {
            navigate("/orphanage/dashboard");
          }
        };
        redirect();
      } else {
        window.alert(res.data.message);
      }
    });
  };
  return (
    <div class="container7">
      {/* {console.log(user)} */}
      <div className="login7">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handlechange}
          placeholder="Enter your Email"
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handlechange}
          placeholder="Enter your Password"
        ></input>
        <input
          type="number"
          name="level"
          value={user.level}
          onChange={handlechange}
          placeholder="Enter your Level"
        ></input>
        <div className="button" onClick={login}>
          <Link to="/login">Login</Link>
        </div>
        <div>or</div>
        <div className="button">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
