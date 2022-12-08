import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './components/Principal'

function App() {

  return (
    <BrowserRouter  >
    <Routes>
      <Route index={true} element={<Principal/>}></Route>
    </Routes>
    </BrowserRouter>     
  )
}

export default App
