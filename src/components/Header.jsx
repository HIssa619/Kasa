import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import '../styles/Header.scss'
function Header() {
    return (
        <div className="header">
            <img src={logo} alt="header_logo" className="header_logo" />
            <nav className="header_navbar">
                <NavLink to="/" className="navbar-item">
                    Accueil
                </NavLink>
                <NavLink to="/About" className="navbar-item">
                    A propos
                </NavLink>
            </nav>
        </div>
    )
}
export default Header
