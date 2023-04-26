import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='d-flex justify-content-center mt-5 pt-5'>
      <Link to='/login'>
        <button className='btn btn-primary'>Login</button>
      </Link>
      <Link to='/register'>
        <button className='ms-3 btn btn-success'>Register</button>
      </Link>
    </div>
  )
}

export default Home