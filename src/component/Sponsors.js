import React from 'react';
import binator from '../assets/binator logo.svg';
import buyme from '../assets/buyme logo.svg';
import loogipsum from '../assets/loogipsum logo.svg';
import square from '../assets/square logo.svg';
import umbrella from '../assets/umbrella logo.svg';
import '../Styles/Sponsors.css';


function Sponsors() {
    return (
      <div className='Sponsors' >
          <ul>
            <li><img src={binator} /></li>
              <li><img src={buyme} /></li>
              <li><img src={loogipsum} /></li>
              <li><img src={square} /></li>
              <li><img src={umbrella} /></li>
          </ul>
  
      </div>
    );
  }
  

export default Sponsors;
