import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Container/Home/Home'
import Company from './Container/Company/Company'
import Industries from './Container/Industries/Industries'
import OurWork from './Container/OurWork/OurWork'
import Services from './Container/Services/Services'
import Blogs from './Container/Blogs/Blogs'
const MyRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/info-Latch/comapny' element={<Company/>}/>
            <Route path='/info-Latch/Industries' element={<Industries/>}/>
            <Route path='/info-Latch/OurWork' element={<OurWork/>}/>
            <Route path='/info-Latch/Services' element={<Services/>}/>
            <Route path='/info-Latch/Blogs' element={<Blogs/>}/>
        </Routes>
    </div>
  )
}

export default MyRoutes