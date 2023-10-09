import { useGlobalContext } from 'context';
import React, { useEffect, useRef } from 'react'

const Information = ({msg, color, temp=false, clearState, clear}) => {
  const {dispatch} = useGlobalContext();
  //Note: clear state take action on temp=true only!
 const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
//  const remove = useRef();
 const btnRef = useRef()
//  const terminate = ()=>{
//   remove.current.remove()
//  }
const terminate = ()=>{
   const buttonElement = btnRef.current;

    if (buttonElement) {
      // Step 3: Trigger the click event on the button element
      buttonElement.click();
    }
  }
 useEffect(
  ()=>{
   if(temp){
    delay(1500).then(()=>{
      //clear state if required
      if(clearState){
      dispatch({type:clearState});
      }
      if(clear){
        clear(null);
      }
      
      terminate()
    })
    
   }

  }, [msg]
 )
  return (
    <>
      <div
        className={`alert alert-${color} alert-dismissible fade show`}
        role='alert'
      >
        <small className={`text-${color} me-5`}>{msg}</small>
        <button
        ref={btnRef}
          type='button'
          className='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
          onClick={()=>{
           clear && clear(null)
          }}
        />
      </div>

      {/* <span
        ref={remove}
        className={`${msg ? 'p-3 bg-dark  rounded text-center mb-3' : ''}`}
      >
        {msg && (
          <>
            <small className={`text-${color} me-5`}>{msg}</small>
            <button
              type='button'
              className={`btn  btn-${color}`}
              onClick={terminate}
            >
              <span>&times;</span>
            </button>
          </>
        )}
      </span> */}
    </>
  )
}

export {Information}