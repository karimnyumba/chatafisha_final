import React, { useEffect, useState } from 'react'
import { useGlobalContext } from 'context'
const TimeUpdate = ({time}) => {
 const {formatDate} = useGlobalContext()
  const [currentTime, setCurrentTime] = useState(formatDate(time))

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = formatDate(time)
      setCurrentTime(updatedTime)
    }, 60000) // Update every 1 minutes

    return () => {
      clearInterval(interval)
    }
  }, [time])

  return <span>{currentTime ? currentTime :'N/A'}</span>

 }

export default TimeUpdate;
