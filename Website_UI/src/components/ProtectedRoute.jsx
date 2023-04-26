import React from 'react'
import validateLocalStorage from '../validateLocalStorage'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children}) => {
 const details = validateLocalStorage();
 if(details) return children;

  return (
    <Navigate to={'/login'}/>
  )
}

export default ProtectedRoute