import React from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';

const bodyComponent = () => {
  return (
    
    <div className="pages__Container-sc-1j514r3-0 jkBdmZ">
     <div className="Background__Container-sc-12u27rt-0 evoGKi">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <Page1 /> 
      <Page2 /> 
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  );
};

export default bodyComponent;