// import useFetch from "hooks"
// I want to import uuidv4
import {  uuidv4 } from 'uuid';
const reducer =(state, action)=>{
 switch (action.type){
  case 'CREATE_TOKEN':
   return {...state, user_details: action.payload.user_details}
  case 'CREATE_REDIRECT_MESSAGE':
    return {...state, user_redirect_message:action.payload}
  case 'REMOVE_REDIRECT_MESSAGE':
    return {...state, user_redirect_message:{}};
  case 'REMOVE_USER_DETAILS':
    return {...state, user_details:{}, user_redirect_message:{}};
  case 'CURRENT_BLOG_ARTICLE':
      return {...state, article:action.payload};
  case 'CURRENT_CREDIT_DETAIL':
      return {...state, credit:action.payload};
  case 'CREATE_ERROR_MESSAGE':
      return {...state, error_list:[...state.error_list, action.payload]};
  case 'FILL_BLOGS':
      return {...state, blogs:action.payload};
  case 'OPEN_REGISTER_PICKER_MODAL':
      return {...state, openRegisterPickerModal:action.payload};
  case 'COLLECTION_ADDED':
    return {...state, isCollectionAdded:!state.isCollectionAdded};

 }
 return state
}
export default reducer