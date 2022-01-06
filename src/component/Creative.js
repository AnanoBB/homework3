import React from 'react';
import creative from '../assets/creative.png';
import '../Styles/Welcome.css'

function Creative() {
  return (
    <div className='welcome' >
        <div className='textContent'>
        <h1 className='title'>Creative Solutions</h1>
        <p>Creativity is our second name. We're full of inventive ideas and we're happy to present them to you.</p>
        <button><a>learn more</a></button>
        </div>

        <img src={creative}/>
    </div>
  );
}

export default Creative;