import React from 'react'
import './WhatGPT3.css'
import Main from './assets/pexels-xxss-is-back-777001 (1).jpg'
import ma from './assets/lee-campbell-DtDlVpy-vvQ-unsplash.jpg'
import mk from './assets/design.jpg'
import ml from './assets/web.jpg'




const WhatGPT3 = () => {
        
    return (
      <div className='gpt3__what'>
        <div className='gpt3__what-main'>
          <img src= {Main} alt='' />
        </div>
        <div className='gpt3__what-section'>
            <div className='gpt3__what-section-feat'>
              <img src={ma} alt=''/>
              <p> devolpment</p>
              </div>
            <div className='gpt3__what-section-feat'>
              <img src={mk} alt=''/>
              <p> design</p>
              </div>
            <div className='gpt3__what-section-feat'>
              <img src={ml} alt=''/>
              <p> applications</p>
            </div>
        </div>


      </div>
    )
    }


export default WhatGPT3 ;