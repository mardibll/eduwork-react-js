import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";
export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <Link className="nav-link text" to="/">
                Home
              </Link>
              <Link className="nav-link text" to="/About">
                About
              </Link>
              <Link className="nav-link text" to="/Contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
