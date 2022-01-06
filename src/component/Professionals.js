import React from 'react';
import professionals from '../assets/professionals.png';
import '../Styles/Details.css'




function Professionals() {
  return (
        <div className='details'>
        <img src={professionals}/>
        <div className='textContent'>
        <h1 className='title1'>Professional Team</h1>
        <p>Well, obviously, we're professionals. Don't hesitate - get to know us better.</p>
        <a>learn more</a>
        </div>

    </div>
    
  );
}

export default Professionals;