// import useFetch from "hooks"
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
 }
 return state
}
export default reducer