//Imports funcionales
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

//Imports Main
import Landing from './views/landing'
import Home from './views/main/home'


//Imports Condo

const App = () => {
  return (
    <div className='app_container'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
      </Routes>

    </div>
  )
}

export default App
