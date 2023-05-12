import { useState, useEffect } from 'react'
// import backendAPI from '../api/backendAPI'
import api from 'api'

const useFetch = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const obtainData = (url, method = 'get', body = null, options = {}) => {

    const fetchData = async () => {
      setIsLoading(true)

      try {
        const response = await api({
          method,
          url,
          ...options,
          data: body,
        })
        setData(response.data)
      } catch (error) {
        console.log(error)
        setError(error)
      }

      setIsLoading(false)
    }

    return fetchData()
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true)

  //     try {
  //       const response = await backendAPI({
  //         method,
  //         url,
  //         data: body,
  //         ...options,
  //       })
  //       setData(response.data)
  //     } catch (error) {
  //       setError(error)
  //     }

  //     setIsLoading(false)
  //   }

  //   fetchData()
  // }, [url, method, body, options])

  return { data, isLoading, error, obtainData }
}

export default useFetch
