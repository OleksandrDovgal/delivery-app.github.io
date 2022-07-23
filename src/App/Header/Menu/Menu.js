import React from "react";
import { Link } from "react-router-dom";
import './menu.css'

const Menu = () => {
    return(
        <div className="menu">
            <ul>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/cart">Shopping Cart</Link></li>
            </ul>
        </div> 
    )
}

export default Menu
