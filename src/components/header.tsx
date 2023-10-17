import React from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li style={{ display: "inline"}}>
            <NavLink to=".">Home</NavLink>
          </li>
          <li style={{ display: "inline"}}>
            <NavLink to="systems">Product Systems</NavLink>
          </li>
          <li style={{ display: "inline"}}>
            <NavLink to="comparison">Comparison</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;