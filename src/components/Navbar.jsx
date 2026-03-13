import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <a href="/">Hana Suzuki</a>
            </div>
            <div className='navbar-right'>
                <a>About me</a>
                <a>Works</a>
                <a>Resume</a>
                <a>Contact me!</a>
            </div>
        </nav>    
    );
};

export default Navbar;