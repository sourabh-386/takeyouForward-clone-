import React from 'react'
import './Social.css'

import { facebook,linkedin,telegram,twitter,instagram,youtube } from '../../images'

const Social = () => {
  return (
    <div>
      <div className='social'>
        <div className='social_logo'>
          <h1><a href="#">takeUforward</a></h1>
          <p>- Strive for Excellence </p>
        </div>
        <div className='social_media_link'>
          <a href="#"><img src={youtube} alt="social" /></a>
          <a href="#"><img src={telegram} alt="social" /></a>
          <a href="#"><img src={linkedin} alt="social" /></a>
          <a href="#"><img src={instagram} alt="social" /></a>
          <a href="#"><img src={twitter} alt="social" /></a>
          <a href="#"><img src={facebook} alt="social" /></a>

        </div>
      </div>
    </div>
  )
}

export default Social