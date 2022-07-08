import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex justify-between items-center px-5 h-[50px] bg-gray-200 shadow-md">
            <Link to="/">Airport</Link>
            <Link to="/auth">Auth</Link>
        </nav>
    );
}

export default Navigation;
