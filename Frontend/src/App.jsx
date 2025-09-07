import React from 'react'
import { Route, Routes } from 'react-router'
import UserLogin from './pages/UserLogin'
import RegisterPage from './pages/RegisterPage'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element = {<UserLogin/>}/>
      <Route path='/register' element= {<RegisterPage/>}/>
    </Routes>
    </>
  )
}

export default App