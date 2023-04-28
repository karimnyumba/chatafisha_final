import React from 'react'
import validateLocalStorage from 'LocalStorage';
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children}) => {
 const details = validateLocalStorage();
 if(details) return children;

  return (
    <Navigate to={'/loginform'}/>
  )
}

export {ProtectedRoute}