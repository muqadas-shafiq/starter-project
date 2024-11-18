import React from 'react';
import Navbar from './Pages/Navbar';
import HeroSection from './Pages/HeroSection';
import Menu from './Pages/Menu';
import Welcome from './Pages/Welcome';
import Items from './Pages/Items';
import Taste from './Pages/Taste';
import About from './Pages/About';

import { ScrollRestoration } from 'react-router-dom';
// import MyRoutes from './MyRoutes';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './Pages/Footer';


const App = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <div>
      {/* <MyRoutes /> */}
      <Navbar/>
      <HeroSection/>
      <Menu/>
      <Welcome/>
      <Items/>
      <Taste/>
      <About/>
      <Footer/>
    
    </div>
  );
};

export default App;
