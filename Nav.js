import React from 'react';
import logo from '../src/Logo .svg'

const Nav = () => {
    return (
        <nav classname={'navbar'}>
            <a href='/' classname={'logo'}>
            <img src={logo} alt='logo'/>
            </a>
            
            <ul classname={'nav-links'}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Menu</a>
            </li>
            <li>
                <a href="/">Reservations</a>
            </li>
            <li>
                <a href="/">Order Online</a>
            </li>
            <li>
                <a href="/">Log In</a>
            </li>
        </ul>
        </nav>
    )
}

export default Nav;
