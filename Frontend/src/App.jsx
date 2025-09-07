import React from 'react'
import { Route, Routes } from 'react-router'
import UserLogin from './pages/UserLogin'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element = {<UserLogin/>}/>
    </Routes>
    </>
  )
}

export default App