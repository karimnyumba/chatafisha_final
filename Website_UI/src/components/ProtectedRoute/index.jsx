import React from 'react'
import validateLocalStorage from 'LocalStorage';
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from 'context';
const ProtectedRoute = ({children}) => {
 const stored_user_details = validateLocalStorage();
 const {dispatch,user_details} = useGlobalContext();
 //create global token
 React.useEffect(() => {
  if(stored_user_details){
   dispatch({ type: 'CREATE_TOKEN', payload: { user_details:stored_user_details } })
}
}, [])
  

 if(stored_user_details || (user_details?.token)){
  return children
  // return React.cloneElement(children, { token: details.token })
 } 
 dispatch({type:'CREATE_REDIRECT_MESSAGE', payload:{message:'Please login!', color:'danger'}})
  return (

    <Navigate to={'/loginform'}/>
  )
}

export {ProtectedRoute}