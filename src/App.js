import React from 'react'
import './App.css'
import { Navbar, Top, Social } from './components'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className='main_app_block'>

      <div className="top_box">
        <Top />
      </div>

      <div className="social_box">
        <Social />
      </div>

      <div className="navbar_box">
        <Navbar />
      </div>

      <div className="home_box">
        <Home />
      </div>

    </div>
  )
}

export default App