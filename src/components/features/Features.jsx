import React, { useRef, useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import "./Features.css";
import desktop from'./pictures/desktop.png';
import devolpment from'./pictures/web devolpment.jpg';
import mobil from'./pictures/mobil.jpg';
import ecommerce from'./pictures/ecommerce.png';
import design from'./pictures/design.jpg';
import webapp from'./pictures/webapp.png';
import webapps from'./pictures/Title-Image-4_80465274aebb5.webp';







const Features = () => {
    const [show, setShow] = useState(false);
  return (
      <div className="gpt3__features">
          <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src={design} />
          <h1>web design</h1>
        </SwiperSlide>
        <SwiperSlide >
          <img src={devolpment} />
          <h1>web devolpment</h1>
          
        </SwiperSlide>
        <SwiperSlide >
          <img src={ecommerce} />
          <h1>ecommerce web site</h1>
            
        </SwiperSlide>
        <SwiperSlide >
          <img src={mobil} />
          <h1>mobil application</h1>
          
        </SwiperSlide>
        
        <SwiperSlide >
          <img src={webapp} />
          <h1>web application</h1>
          
        </SwiperSlide>
        <SwiperSlide >
          <img src={desktop} />
          <h1>desktop application</h1>
          
        </SwiperSlide>
        <SwiperSlide >
          <img src={design} />
          <h1>wordpress design</h1>
          
        </SwiperSlide>
        <SwiperSlide >
          <img src={webapps} />
          <h1>graphic design</h1>
          
        </SwiperSlide>
      </Swiper>
    </>
    <div >
    <button onClick={() => setShow(!show)}> 
          click here
          </button>
          {show && <Item />}
          </div>
      </div>
  
  )
};


const Item = () => {
  
    return(
        <div className="explan" style={{marginTop:'2%',marginLeft:'auto',marginRight:'auto', width:'75%', height:'auto', display:'flex',alignContent: 'center', justifyContent:'center',color:'#000', fontSize:'17px', borderRadius:'10px', background:'#eee'}} >
          <p>Please go below to know the service details and for more details do not hesitate and contact us through the contact page </p>
        </div>
    );
};


export default Features;