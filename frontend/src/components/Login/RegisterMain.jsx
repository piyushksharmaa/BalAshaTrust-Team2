import React, { useState } from "react";
import ".//..//..//styles/register.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const RegisterMain = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { name, email, password, reEnterPassword, level } = user;
    if (
      name &&
      email &&
      password &&
      password === reEnterPassword &&
      level &&
      level <= 3 &&
      level >= 0
    ) {
      // alert("Posted");
      axios
        .post("http://localhost:9002/register", user)
        .then((res) =>{
          console.log(res);
          alert("Registered Successfully Please proceed to login!");
          window.location.reload();
        });
    } else {
      alert("Invalid input");
    }
  };
  return (
    <div className="container8">
      {/* {console.log(user)};  */}
      <div className="register">
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handlechange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handlechange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handlechange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handlechange}
        ></input>
        <input
          type="number"
          name="level"
          value={user.level}
          placeholder="Level at which you want to Work(0-3).."
          onChange={handlechange}
        ></input>
        <div className="button" onClick={register}>
          <Link to="/register">Register</Link>
        </div>
        <div>or</div>
        <div className="button">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterMain;
