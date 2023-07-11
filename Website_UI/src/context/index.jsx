import React, { useContext, useReducer, useState } from "react";
// import reducer from "../reducers/reducer";
import reducer from "reducers";
import validateLocalStorage from "LocalStorage";
const AppContext = React.createContext();
const initialState = {
user_details: {},
user_redirect_message: null,
article:null,
error_list:[],
pickers_list:[],
blogs:[],
openRegisterPickerModal: false,
}
const AppProvider = ({children})=>{
 const [state, dispatch] = useReducer(reducer, initialState)
 const api = 'https://service-chatafishabackend.onrender.com/'
 //Handles logout
 const handleLogout = () => {
   window.location.pathname = '/'
   dispatch({ type: 'REMOVE_USER_DETAILS' })
   localStorage.clear()
   // dispatch({type:'CREATE_REDIRECT_MESSAGE', payload: {message:'Logout Successful', color:'success'}})
 }
 const [pickerList, setPickerList] = useState([])
 
 return (
  <AppContext.Provider value={{...state, dispatch, handleLogout, setPickerList, pickerList, api} }>
   {children}
  </AppContext.Provider>
 )
}

const useGlobalContext =()=>{
 return useContext(AppContext)
}
export {AppContext, AppProvider, useGlobalContext}