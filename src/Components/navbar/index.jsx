import React from "react";
import './style.css';
const Navbar = () =>{
    return(
        <div>
        <div className="navbar-container">
            < a href="Home">Home</a>
            < a href="Shop">Shop</a>
            < a href="About Us">About Us</a>
            < a href="Blog">Blog</a>
        </div>
        </div>
    );
}
export default Navbar;