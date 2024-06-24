import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './MyRoutes'
import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div  >
      

      <BrowserRouter>
      <MyRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App