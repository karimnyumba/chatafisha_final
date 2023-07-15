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
isCollectionAdded: {amount:0},
isPickerUpdated: false,
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
   function formatDate(dateString) {
    if(!dateString) return null;
     const now = new Date()
     const date = new Date(dateString)

     // Calculate the time difference
     const diff = Math.abs(now - date)

     const minute = 60 * 1000
     const hour = 60 * minute
     const day = 24 * hour
     const month = 30 * day
     const year = 365 * day

     if (diff < minute) {
       return 'just now'
     } else if (diff < hour) {
       const minutes = Math.floor(diff / minute)
       return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
     } else if (diff < day) {
       const hours = Math.floor(diff / hour)
       return `${hours} hour${hours > 1 ? 's' : ''} ago`
     } else if (diff < month) {
       const days = Math.floor(diff / day)
       return `${days} day${days > 1 ? 's' : ''} ago`
     } else if (diff < year) {
       const months = Math.floor(diff / month)
       return `${months} month${months > 1 ? 's' : ''} ago`
     } else {
       const years = Math.floor(diff / year)
       return `${years} year${years > 1 ? 's' : ''} ago`
     }
   }
 function generateFormattedDateTime(dateString) {
  if(!dateString) return null;
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
  <AppContext.Provider value={{...state, dispatch, handleLogout, setPickerList, pickerList, api, generateFormattedDateTime, setCheckAddition, addition, formatDate} }>
   {children}
  </AppContext.Provider>
 )
}

const useGlobalContext =()=>{
 return useContext(AppContext)
}
export {AppContext, AppProvider, useGlobalContext}