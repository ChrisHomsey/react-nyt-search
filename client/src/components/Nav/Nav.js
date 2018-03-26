import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container">
      <div className="navbar-header">
      </div>
      <ul className="nav navbar-nav navbar-left">
        <li activeClassName><NavLink to="/" className="active" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/saved" activeClassName="active">Saved</NavLink></li>
      </ul>
    </div>
  </nav>;

export default Nav;
