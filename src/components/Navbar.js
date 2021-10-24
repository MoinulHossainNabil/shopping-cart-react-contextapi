import React, { useContext } from "react";
import { Context } from "../ContextApi";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const context = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarID"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarID">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart ({context.cart.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
