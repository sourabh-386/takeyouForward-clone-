import React, { useState } from 'react'
import './LoweBtn.css'
const LowerBtn = () => {

  const [btnValue, setbtnValue] = useState('1')

  function btnclick(e) {

  }

  return (
    <div className='lowerbtn'>
      {btnValue !== '1' ? <button onClick={btnclick} >Prev</button> : ''}
      <button  name='1' onClick={btnclick} >1</button>
      <button  name='2' onClick={btnclick} >2</button>
      <button  name='3'  onClick={btnclick} >3</button>
      <button  name='4' onClick={btnclick} >4</button>
      <button onClick={btnclick} >Next</button>
    </div>
  )
}

export default LowerBtn