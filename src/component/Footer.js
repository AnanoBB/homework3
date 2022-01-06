
import React from 'react';
import '../Styles/Footer.css'


function Footer(){
    return(
        <footer className='footer'>
            <ul>
                <li className='titles'>Products</li>
                <li>How it works</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Download</li>
            </ul>

            <ul>
                <li className='titles'>Company</li>
                <li>About</li>
                <li>Blog</li>
                <li>Partnership</li>
                <li>Terms of use</li>
                <li>Privacy policy</li>
            </ul>

            <ul>
                <li className='titles'>Support</li>
                <li>Help Center</li>
                <li>Contact us</li>
            
            </ul>
        </footer>
    )
}


export default Footer;



