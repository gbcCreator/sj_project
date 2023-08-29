import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Header from './components/Header'


// style Component
import './styles/Customize.css'
import Banner from './components/Banner'
import Home from './components/Home'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Router>
      <Header/>
      {/* <h1>dev</h1> */}
        <Routes>
        <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
