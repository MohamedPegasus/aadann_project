import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
         <h1 className='gradient__text'> Www.Aadann.Com</h1>
      </div>
      <div className='gpt3__footer-btn'>
         <p className='gradient__text'> Access To Future</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
           <h1 className='gradient__text'>aadann</h1>
        </div>
        <div className='gpt3__footer-links-div'>
            <h4>links</h4>
            <p>social media</p>
            <p>contact</p>
            <p>counters</p>
        </div>
        <div className='gpt3__footer-links-div'>
            <h4>Company</h4>
            <p>Privcy & Conditions</p>
            <p>contact</p>
            <p>counters</p>
        </div>
        <div className='gpt3__footer-links-div'>
            <h4>Get in Touch</h4>
            <p>social media</p>
            <p>contact</p>
            <p>01060586855</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
            &copy;
            <p>www.aadann.com</p>
      </div>
    </div>
  )
}

export default Footer