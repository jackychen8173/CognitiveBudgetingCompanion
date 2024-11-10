// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-menu">
                <NavLink to="/home" className="nav-link" activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/signin" className="nav-link" activeClassName="active">
                    Sign In
                </NavLink>
                <NavLink to="/expenses" className="nav-link" activeClassName="active">
                    Expenses
                </NavLink>
                <NavLink to="/expensesReport" className="nav-link" activeClassName="active">
                    Expenses Report
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
