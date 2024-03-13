import React from 'react'

import Slider from 'react-slick'
import rohitimage1 from './rohitimage1.jpg'
import rohitimage2 from './rohitimage2.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imdata=[
    {
      id: 1,
      img: rohitimage1,
      
    },
    {
       id: 2, 
       img: rohitimage2,
     
     },
    
  ];

const Photo2 = () => {

    var settings = {
        
        dots:false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        slidesToShow:1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
      };

  return (
    <div >
        <div className=' w-[18rem] h-[20rem] overflow-hidden border-4 border-[#0ef] rounded-lg' >
         <Slider {...settings} >  
          {
            imdata.map((image)=>{
                return(
                      <div>
                     
                           <img src={image.img}  alt="" />
                      
                      </div>
                )
            })  
          }
         </Slider>
        </div>
    </div>
  )
}

export default Photo2;