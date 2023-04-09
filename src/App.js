import React from 'react'
import './App.css'
import { Navbar, Top, Social } from './components'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className="app_top">

      <div className="top_box" style={{ position: 'absolute', width: '100%' }}>
        <Top />
      </div>

      <div className='main_app_block'>

        <br />
        <br />
        <br />
        <br />
        <br />
       
        <div className='app_box'>

          <div className="social_box">
            <Social />
          </div>
          <hr  style={{opacity:'0.5'}}/>

          <div className="navbar_box">
            <Navbar />
          </div>

          <div className="home_box">
            <Home />
          </div>

        </div>

      </div>

    </div>
  )
}

export default App