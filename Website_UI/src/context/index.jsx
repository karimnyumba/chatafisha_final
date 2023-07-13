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
isCollectionAdded: false,
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
 function generateFormattedDateTime(dateString) {
   let date = new Date(dateString)

   let year = date.getFullYear()
   let month = ('0' + (date.getMonth() + 1)).slice(-2)
   let day = ('0' + date.getDate()).slice(-2)

   let hour = ('0' + date.getHours()).slice(-2)
   let minute = ('0' + date.getMinutes()).slice(-2)
   let second = ('0' + date.getSeconds()).slice(-2)

   let formattedDateTime = `${year}-${month}-${day}, ${hour}:${minute}:${second}`

   return formattedDateTime
 }
 const [addition, setCheckAddition] = useState(null);
 return (
  <AppContext.Provider value={{...state, dispatch, handleLogout, setPickerList, pickerList, api, generateFormattedDateTime, setCheckAddition, addition} }>
   {children}
  </AppContext.Provider>
 )
}

const useGlobalContext =()=>{
 return useContext(AppContext)
}
export {AppContext, AppProvider, useGlobalContext}