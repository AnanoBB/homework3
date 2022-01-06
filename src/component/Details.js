import React from 'react';
import illustartion from '../assets/Illustration.png';
import '../Styles/Details.css'




function Details() {
  return (
        <div className='details'>
        <img src={illustartion}/>
        <div className='textContent'>
        <h1 className='title1'>Detailed Examination</h1>
        <p>A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
        <a>learn more</a>
        </div>

    </div>
    
  );
}

export default Details;