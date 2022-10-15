import React from 'react';
import './Landing.css';
import pepo from './picture/people.png';
import main from './picture/blog01.png';


const Landing = () => {

return (
    
    <div className='gpt3__header section__padding' id='home'>
    <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
            wellcame to aadann world
        </h1>
        <p>We hope to provide you with everything you need</p>
        <div className='gpt3__header-content__input'>
            <input type="text" placeholder="search"></input>
            <button type='button'> Search</button>
        </div>
        <div className='gpt3__header-content__people'>
            <img src={pepo}/>
            <p></p>
            
        </div>
    </div>
    <div className='gpt3__header-image'>
        <img src={main} />
    </div> 
    </div>
)
}

export default Landing;

