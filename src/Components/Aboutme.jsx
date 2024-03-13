import React, { useContext, useEffect } from 'react'
import Photo2 from './Hero/Photo2'
import { data2 } from '../DATACMP/data'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Portfoliocontext } from '../Portfoliocontext';

const Aboutme = () => {
    const{
        changebg
    }=useContext(Portfoliocontext)
    useEffect(()=>{
        AOS.init({
            duration:1000,
        });
      
       },[]);

  return (
    <div style={{ color: changebg ? 'black' : 'white' }} id='about' className='text-white relative w-[100vw] h-full sm:h-[100vh] flex flex-col items-center '>
        <p data-aos="zoom-out" className=' font-serif font-bold mt-3 md:mb-20 text-4xl'>About me</p>
        <div className='flex  flex-col md:flex-row  items-center justify-center md:justify-around gap-2 sm:gap-0'>

        <div data-aos="fade-right" className='relative w-[17rem] md:w-[30rem] mt-2'>
            <Photo2/>  
        </div>


        <div className='md:w-[30rem]  w-[25rem] px-[1.8rem]'>
            <h1 data-aos="fade-left" className='text-2xl font-bold mt-2 '>Web developer & Coder</h1>
            <p data-aos="fade-left" data-aos-delay="300"
             className='sm:mt-3 md:mt-5'>As a web developer and coder, I specialize in crafting dynamic and functional websites and applications. Proficient in a variety of programming languages and frameworks, I create seamless user experiences while implementing innovative solutions. I continuously refine my skills to stay ahead in an ever-evolving digital landscape.</p>
           <div className='sm:mt-3 md:mt-5'>
           {
                data2.map((dta)=>{
                    return(                     
                            <div data-aos="fade-left" className='flex  flex-row gap-2 items-center'>
                                <p data-aos="flip-up" data-delay-aos="2000" className='text-[#0ef] '>{dta.icon}</p>
                                <p data-aos="flip-down" data-delay-aos="2000" className='underline text-[#0ef]'>{dta.name}</p>
                            </div> 
                    )
                })
            }
           </div>

        </div>
        </div>
    </div>
  )
}

export default Aboutme