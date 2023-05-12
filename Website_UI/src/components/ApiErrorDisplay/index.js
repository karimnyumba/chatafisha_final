import { Information } from 'components'
import React from 'react'

const ApiErrorDisplay
 = ({errObject, errCode}) => {
  const error = errObject.get(errCode);
  return (
    <div className='m-3'>
      <Information msg={error.msg} color={error.color}/>
    </div>
  )
}

export default ApiErrorDisplay
