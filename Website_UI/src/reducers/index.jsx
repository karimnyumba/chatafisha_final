// import useFetch from "hooks"
const reducer =(state, action)=>{
 switch (action.type){
  case 'CREATE_TOKEN':
   console.log(action)
   return {...state, user_details: action.payload.user_details}
 }
 return state
}
export default reducer