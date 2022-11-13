import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import MenPage from '../pages/men/MenPage'
import Signup from '../pages/Signup'
import Singlepage from '../pages/Singlepage'
import Bag from '../pages/Bag'
import Home from './Home'
import Adress from '../pages/Adress'
import Adress2 from '../pages/Adress2'
import Payment from '../pages/Payment'
import SinglepageWomen from '../pages/SinglepageWomen'
import WomenPage from '../pages/women/WomenPage'
import Lastpage from '../pages/Lastpage'
import Landing from './landingpage'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/menpage' element={<MenPage/>}></Route>
        <Route path='/menpage/:id' element={<Singlepage/>}></Route>
        <Route path='/menpage/addtobag/:id' element={<Bag/>}></Route>
        <Route path="/menpage/address/:id" element={<Adress/>}></Route>
        <Route path='/menpage/address/address2/:id' element={<Adress2/>}></Route>
        <Route path='/womenpage' element={<WomenPage/>}></Route>
        <Route path='/womenpage/:id' element={<SinglepageWomen/>}></Route>
        <Route path="/bag" element={<Bag/>}></Route>
        <Route path='/menpage/payment/:id' element={<Payment/>}></Route>
        <Route path='/lastpage' element={<Lastpage/>}></Route>
      </Routes>
    </div>
  )
}
export default AllRoutes