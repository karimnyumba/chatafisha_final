import React, { useContext, useReducer, useState } from "react";
// import reducer from "../reducers/reducer";
import reducer from "reducers";
import validateLocalStorage from "LocalStorage";
const AppContext = React.createContext();
const initialState = {
user_details: {},
user_redirect_message: null
}
const AppProvider = ({children})=>{
 const [state, dispatch] = useReducer(reducer, initialState)
 return (
  <AppContext.Provider value={{...state, dispatch} }>
   {children}
  </AppContext.Provider>
 )
}
const useGlobalContext =()=>{
 return useContext(AppContext)
}
export {AppContext, AppProvider, useGlobalContext}