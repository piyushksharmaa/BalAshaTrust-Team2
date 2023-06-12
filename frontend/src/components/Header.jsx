import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
const Header = (login_details) => {
  useEffect(() => {
    console.log(login_details);
  }, []);

  return (
    <nav>
      <img
        src="https://balashatrust.org/wp-content/themes/children-charity/theme-vars/theme-style/img/logo_scroll_retina.png"
        alt="Logo"
      />
      {login_details["login_details"]["login"] === true ? (
        <main>
          <Link to="/About">About Us</Link>
          <Link to="/Projects">Our Projects</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/Login">Login/SignUp</Link>
          <Link to="/support">Support!</Link>
        </main>
      ) : (
        <main>
          <Link to="/About">About Us</Link>
          <Link to="/Projects">Our Projects</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/support">Support!</Link>
          <div className="icon">
            <PersonIcon />
          </div>
        </main>
      )}
    </nav>
  );
};

export default Header;
