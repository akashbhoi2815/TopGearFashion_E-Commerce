import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({children}) => {

 const location = useLocation();
  
  const isAuth = useSelector((store)=>store.authReducer.isAuth)

  if(!isAuth){
    return <Navigate to="/login" state={{from:location}} replace/>
  }

  return children 
}

export default ReqAuth