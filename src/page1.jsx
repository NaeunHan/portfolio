import React, { useState, useEffect } from 'react';
import './style.css';

const Page1 = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Page1__Container-sc-1ea1fo-0 intsZQ flex fixed">
      <div className="TextAnimation__Container-sc-8mmaqr-0 lbjQGU">
        <div className="text">
          {isVisible && (
            <div className="text__content">
              Han na Eun
            </div>
          )}
          {isVisible && (
            <div className="text__content second">
              FRONTEND
            </div>
          )}
        </div>
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="TextAnimation__Circle-sc-8mmaqr-1 iREbQw"></div>
        </div>
        <div className="text">
          {isVisible && (
            <div className="text__content__border">
              Han na Eun
            </div>
          )}
          {isVisible && (
            <div className="text__content__border second">
              FRONTEND
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page1;