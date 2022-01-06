import React from 'react';
import homeImage from '../assets/Hero image.png';
import '../Styles/Welcome.css'

function Welcome() {
  return (
    <div className='welcome' >
        <div className='textContent'>
        <h1 className='title'>Let's get fusely together</h1>
        <p>Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
        <button>Get started</button>
        </div>

        <img src={homeImage}/>
    </div>
  );
}

export default Welcome;