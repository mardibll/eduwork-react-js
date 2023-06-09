import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";
export default function Layout() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse">
            <div class="navbar-nav">
              <Link class="nav-link text" to="/">
                Home
              </Link>
              <Link class="nav-link text" to="/About">
                About
              </Link>
              <Link class="nav-link text" to="/Contact">
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
