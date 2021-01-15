import React from 'react';
import Logo from '../../Assets/images/logo.png';
import {Cart} from "./Cart";

import './Navbar.scss';

export const Navbar = () => {
    return (
        <nav className="NAVBAR">
            <div className="NAVBAR__logoCont">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="NAVBAR__cartCont">
                <Cart/>
            </div>
        </nav>
    )
}