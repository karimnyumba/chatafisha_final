import React, { useContext, useReducer, useState } from "react";
// import reducer from "../reducers/reducer";
import reducer from "reducers";
import validateLocalStorage from "LocalStorage";
const AppContext = React.createContext();
const initialState = {

}
const AppProvider = ({children})=>{
 const [state, dispatch] = useReducer(reducer, initialState)

 const[userDetails, setUserDetails] = useState(validateLocalStorage())
 return (
  <AppContext.Provider value={{...state, userDetails, setUserDetails, dispatch} }>
   {children}
  </AppContext.Provider>
 )
}
const useGlobalContext =()=>{
 return useContext(AppContext)
}
export {AppContext, AppProvider, useGlobalContext}