import React from 'react';
import { Link, Outlet } from "react-router-dom";
import "./SideNav.css"

const SideNav = () => {
  return (
      <div className="wholeSite">
      <div className="sideNav">
        <div className="sidenav">
          <div >
            <Link className="homeButton" to="/">
              <button className='tabs'>
                Home
              </button>
            </Link>
            <Link className="createButton" to="/create">
              <button className='tabs'>
                Create a Crewmate!
              </button>
            </Link>
            <Link className="galleryButton" to="/gallery">
              <button className='tabs'>
                Crewmate Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
};

export default SideNav;