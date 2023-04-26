import React, { useEffect, useRef } from 'react'

const Information = ({msg, color, temp=false}) => {
 const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
 const remove = useRef();
 const terminate = ()=>{
  remove.current.remove()
 }
 useEffect(
  ()=>{
   if(temp){
    delay(2000).then(()=>terminate())
    
   }

  }, [msg]
 )
  return (
    <span
      ref={remove}
      className='p-3 bg-dark  rounded text-center mb-3'
    >
      <small className={`text-${color} me-5`}>{msg}</small>
      <button type='button' className='btn btn-close btn-danger' onClick={terminate}>
        <span>&times;</span>
      </button>
    </span>
  )
}

export default Information