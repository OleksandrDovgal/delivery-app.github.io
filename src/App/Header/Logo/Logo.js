import React from "react"
import { Link } from "react-router-dom"
import logo from './logo.png'

const Logo = () => {
    return(
        <div className="logo">
            <Link to="/">
                <img src={logo} alt=""/>
            </Link> 
        </div>
    )
}
export default Logo