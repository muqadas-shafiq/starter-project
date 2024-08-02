import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <div>
      <MyRoutes />
    
    </div>
  );
};

export default App;
