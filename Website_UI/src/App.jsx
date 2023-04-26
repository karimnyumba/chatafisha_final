import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/Register'
import Home from './pages/Home'
function App() {
  
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
