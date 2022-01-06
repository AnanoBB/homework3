import React from 'react';
import logo from '../assets/fusely logo.png';
import '../Styles/Navbar.css';


function Navbar() {
    return (
        <div>
            <header className='navbar'>

                <img className='logo' src={logo}></img>
            <div className='links'>
            <a>Home</a>
            <a>Features</a>
            <a>Pricing</a>
            <a>Blog</a>
            <a>Contact</a>
            </div>

            <div className='btns'>
                <button className='btn1'>Log in</button>
                <button className='btn2'>get Started</button>
            </div>
            
            </header>
           
        </div>
    )
}

export default Navbar;