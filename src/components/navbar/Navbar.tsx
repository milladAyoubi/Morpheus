import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="logo.svg" alt="logo" />
          <span>Morpheus</span>
        </div>
        <div className="icons">
          <img src="/search.svg" className="icon" alt="" />
          <img src="/app.svg" className="icon" alt="" />
          <img src="/expand.svg" className="icon" alt="" />
          <div className="notifications">
            <img src="/notifications.svg" alt="" />
            <span>3</span>
          </div>
          <div className="user">
            <img
              src="https://images.pexels.com/photos/6214726/pexels-photo-6214726.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <span>Micheal</span>
          </div>
          <img src="/settings.svg" className="icon" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
