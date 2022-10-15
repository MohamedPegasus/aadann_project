import React from 'react';
import './Brand.css';
import emailjs from 'emailjs-com';
import { Button } from 'react-bootstrap';

const Brand = () => {
  const sendEmail =(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_5ishthj','template_7davl0m', e.target,'3cIQ6p-_vPbd0Y3Ym' )
    .then(res=>{
      console.log(res);
    }).catch(err=>console.log(err));
  }
  return (
    <div className='container'>
        <form className='forms'  onSubmit={sendEmail}>
          <label> Your Name</label>
          <input type='text' name='name'></input>
          <label>Email</label>
          <input type='email' name='user_email'></input>
          <label> Subject</label>
          <input type='text' ></input>
          <label>Details</label>
          <textarea name='message' rows='6' placeholder='type a short massage here'></textarea> 
          <br/>
          <Button variant="outline-warning" type='submit' value='send'>submit</Button>
        </form>
    </div>
  )
}

export default Brand;