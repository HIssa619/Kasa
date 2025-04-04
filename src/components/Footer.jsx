import React from 'react'
import '../styles/Footer.scss'
import logo from '../assets/logo-footer.png'

function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="logo" />
            <p className="footer_texte">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer
