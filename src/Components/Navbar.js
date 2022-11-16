import React from 'react'
import { NavLink } from 'react-router-dom'
import {Helmet} from "react-helmet";

import Logo from '../Assets/Logo'

import './Navbar.css'

function Navbar() {
    return (
        <nav>
                <div className="logo" >
                    <NavLink style={{textDecoration: 'none', color: 'white'}} to='/'>
                    <Logo />
                    </NavLink>
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to='/team'>Team</NavLink>
                    </li>
                    <li>
                        Internship
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
                <div className="burger">
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                </div>
                <Helmet>
                    <script src="../../public/ind.js"></script>
                </Helmet>
        </nav>
    )
}

export default Navbar
