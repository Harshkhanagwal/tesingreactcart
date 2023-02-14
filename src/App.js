import React from 'react'
import Header from './components/header'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cartpage from './pages/cart'
const App = () => {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='cart' element={<Cartpage/>}/>
          <Route path='/*' element={<h1>ERROR</h1>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App