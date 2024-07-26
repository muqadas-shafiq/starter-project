import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './MyRoutes'
import Aos from "aos";
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import "aos/dist/aos.css";
const App = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div  >
      

      <BrowserRouter>
      <Navbar/>
      <MyRoutes/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App