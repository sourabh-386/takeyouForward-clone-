import React, { useRef } from 'react'
import './Home.css'
import { useState } from 'react'
import { Data, Aside, Aside2, Aside3, LowerBtn } from '../../components'
import { homedata } from '../../dataset/dataset'

const Home = () => {


  const [btnValue, setbtnValue] = useState('1')

  function btnclick(e) {
    if (e.target.name !== btnValue) {
      scrollToTop()
    }
    setbtnValue(e.target.name)

  }
  function prevbtnclick(e) {

    setbtnValue(prev => {
      return ((Number(prev) - 1).toString())
    })

    scrollToTop()
    console.log(btnValue)

  }
  function nextbtnclick() {
    setbtnValue(prev => {
      return ((Number(prev) + 1).toString())
    })
    scrollToTop()

  }

  // scrool screen 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'

    });
  };


  return (
    <div>
      <div className="home">
        <div className='home_caintainbtn'>
          <div className="home_main_fix">
            <div className='home_main' style={{ bottom: `${(Number(btnValue) - 1) * 2000}px` }}>
              {
                homedata.map(data => {
                  return (
                    <Data date={data.date} value={data.value} heading={data.heading} para={data.para} />
                  )
                })
              }
            </div>
          </div>
          <div className='lowerbtn'>
            {btnValue !== '1' ? <button onClick={prevbtnclick} ><i class="bi bi-chevron-double-left"></i></button> : ''}
            <button name='1' onClick={btnclick} style={{ backgroundColor: btnValue === '1' ? '#EE4B2B' : '' }} >1</button>
            <button name='2' onClick={btnclick} style={{ backgroundColor: btnValue === '2' ? '#EE4B2B' : '' }}>2</button>
            <button name='3' onClick={btnclick} style={{ backgroundColor: btnValue === '3' ? '#EE4B2B' : '' }}>3</button>
            <button name='4' onClick={btnclick} style={{ backgroundColor: btnValue === '4' ? '#EE4B2B' : '' }}>4</button>
            {btnValue !== '4' ? <button onClick={nextbtnclick} ><i class="bi bi-chevron-double-right"></i></button> : ''}

          </div>

        </div>
        <div className='home_aside'>
          <Aside />
          <br />
          <br />
          <Aside2 />
          <br />
          <br />
          <Aside3 />
        </div>
      </div>
      <hr />
      <br />
      <br />

    </div>
  )
}

export default Home