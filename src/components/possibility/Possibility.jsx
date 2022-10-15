import React  from 'react'
import './Possibility.css';
import img  from "./pictures/main.jpg";
import mk from './pictures/possibility.png'




const Possibility = () => {
 
  return (
    <div id='possibility' className='gpt3__possibility pading' >
      <h1 className='gradient__text'> our skills</h1>
              <div className='gpt3__possibility-image'>
                  <img src={mk} alt='' />
                  </div>
                  <div className='gpt3__possibility-content'>
                    <img src={img} alt='' />
                      <div className='gpt3__possibility-content-animation' >
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                      </div>
                  </div>
      </div>
    
    
  );
}


export default Possibility;