import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Singlepage from '../pages/Singlepage'
import Home from './Home'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/singlepage' element={<Singlepage/>}></Route>
      </Routes>
    </div>
  )
}
export default AllRoutes