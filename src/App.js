import React, { useEffect } from 'react';
import './style.css';
import BodyComponent from './bodyComponent';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@next/dist/aos.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.AOS.init();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header"> {/* header를 BodyComponent 위로 이동 */}
     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <BodyComponent /> {/* BodyComponent는 아래에 위치 */}
    </div>
  );
}

export default App;