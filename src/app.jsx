import React from 'react';
import BodyComponent from './bodyComponent';

const App = () => {
  return (
    <div>
      <BodyComponent />
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>
        {`AOS.init();`}
      </script>
    </div>
  );
};

export default App;