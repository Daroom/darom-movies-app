import React from "react";
import { useState, useEffect } from "react";
// import logo from '../../public/Logo_Netflix.png'
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "isblack"}`}>
      <div className="nav__content">
        <img
          className="logo__website"
          src="https://fontmeme.com/permalink/201019/d8cd7922ef0c21735c86f7c239aa98c0.png"
          alt="netflixlogo"
        />
        <img
          className="logo__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
          alt="avatarlogo"
        />
      </div>
    </div>
  );
}

export default Nav;
