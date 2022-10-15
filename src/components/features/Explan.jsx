import React, { useRef, useState, useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import './Boxes.css';


const Explan = ()=>{
    useEffect(()=>{
    Aos.init({duration:3000});
    },[]);
  return (
    <div className="grids">
        <div data-aos="fade-up" className="boxes">
          <h1>web design</h1>
          <p>You are always looking for a tool that helps you meet the growing and crowded needs of your customers, get new customers and increase your success. You can design your complete website to suit your needs and requirements of your company and help you respond quickly to your customers and achieve more success.
              Let's be a success partner</p>
        </div>
        <div data-aos="fade-up" className="boxes">
          <h1>web devolpment</h1>
          <p>You own a website, but it is old and you are looking forward to modifying this old website to match the growth of your company, your future ambitions and the requirements of your customers. Now you can develop your old website and add a lot to it to become interactive, responsive and dainamic</p>
        </div>
        <div data-aos="fade-up" className="boxes">
          <h1>ecommerce web site</h1>
          <p>You have an innovative business idea and out of the box, do not miss the opportunity. Now you can design a complete e-commerce website and you can display your products with ease</p>
        </div>
        <div data-aos="fade-up" className="boxes">
          <h1>mobil application</h1>
          <p>This service is not available at the moment, but we are working hard to provide it as soon as possible</p>
          <p>You can follow the Blog page to know the latest news</p>
        </div>
        <div data-aos="fade-up" className="boxes">
          <h1>web application</h1>
          <p>This service is not available at the moment, but we are working hard to provide it as soon as possible</p>
          <p>You can follow the Blog page to know the latest news</p>
        </div>
        <div data-aos="fade-up" className="boxes">
        <h1>desktop application</h1> 
        <p>This service is not available at the moment, but we are working hard to provide it as soon as possible</p>
        <p>You can follow the Blog page to know the latest news</p>
        </div>
        <div data-aos="fade-up" className="boxes">
          <h1>wordpress design</h1>
          <p>This service is not available at the moment, but we are working hard to provide it as soon as possible</p>
          <p>You can follow the Blog page to know the latest news</p>
        </div>
        <div data-aos="fade-up" className="boxes">
          <h1>graphic design</h1>
          <p>This service is not available at the moment, but we are working hard to provide it as soon as possible</p>
          <p>You can follow the Blog page to know the latest news</p>
        </div>

    </div>
)
};

export default Explan;