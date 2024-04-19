import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../Pages/About'
import Careers from '../Pages/Careers'
import Location from '../Pages/Location'

const Webrouting = () => {
  return (
    <div>
        <Routes>
            <Route path='/About' element={<About />}/>
            <Route path='/Careers' element={<Careers />}/>
            <Route path='/Location' element={<Location />}/>
        </Routes>
    </div>
  )
}

export default Webrouting