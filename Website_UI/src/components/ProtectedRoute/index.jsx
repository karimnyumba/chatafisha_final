import React from 'react'
import validateLocalStorage from 'LocalStorage';
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from 'context';
const ProtectedRoute = ({children}) => {
 const user_details = validateLocalStorage();
 const {dispatch} = useGlobalContext();
 //create global token
 React.useEffect(() => {
  if(user_details){
   dispatch({ type: 'CREATE_TOKEN', payload: { user_details } })
}
}, [])
  

 if(user_details){
  return children
  // return React.cloneElement(children, { token: details.token })
 } 
 dispatch({type:'CREATE_REDIRECT_MESSAGE', payload:{message:'Please login!', color:'danger'}})
  return (

    <Navigate to={'/loginform'}/>
  )
}

export {ProtectedRoute}