import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Singlepage from '../pages/Singlepage'
import Bag from '../pages/Bag'
import Home from './Home'
import Adress from '../pages/Adress'
import Adress2 from '../pages/Adress2'
import Payment from '../pages/Payment'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/singlepage' element={<Singlepage/>}></Route>
        <Route path="/bag" element={<Bag/>}></Route>
        <Route path="/adress" element={<Adress/>}></Route>
        <Route path='/adress2' element={<Adress2/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
      </Routes>
    </div>
  )
}
export default AllRoutes