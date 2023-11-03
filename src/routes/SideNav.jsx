import React from 'react';
import { Link, Outlet } from "react-router-dom";
import "./SideNav.css"

const SideNav = () => {
  return (
    <div className="wholeSite">
      <div className="sideNav">
          <Link className="homeButton" to="/">
              Home
          </Link>
          <Link className="createButton" to="/create">
              Create a Crewmate!
          </Link>
          <Link className="galleryButton" to="/gallery">
              Crewmate Gallery
          </Link>
      </div>
      <Outlet />
    </div>
  )
};

export default SideNav;