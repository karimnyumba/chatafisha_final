import React from 'react'
import { Information } from 'components'
const Error = ({error_list}) => {

  return (
   <div>
    {error_list.map(
     (error,index)=>{
      return <Information key={index} msg={error.msg} color={error.color} temp={true}/>
     }
    )}
    
   </div>

    
  )
}


export default Error