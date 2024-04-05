import React, { useContext, useEffect, useState } from 'react';
import './hhover.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Photo from './Hero/Photo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from "react-typed";
import { Portfoliocontext } from '../Portfoliocontext';
import Sidebar from './Hero/Sidebar';

const Hero=()=>{
    const[runtext, setruntext]=useState('');
    const{ 
        changebg
   }=useContext(Portfoliocontext);

    useEffect(()=>{
        AOS.init({
            duration:1000,
        });
      
       },[]);

    useEffect(()=>{
        const textLoad = () => {
            setTimeout(() => {
                setruntext('Frontent');
                console.log(runtext);
            }, 0);
    
            setTimeout(() => {
                setruntext('Developer');
                console.log(runtext);
            }, 4000);
    
            setTimeout(() => {
               setruntext('Coder');
               console.log(runtext);
            }, 8000); 
        }
        textLoad();
        const intervalId = setInterval(() => {
            textLoad();
        }, 12000);

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(intervalId);
    },);

     const[textrotate,settextrotate]=useState('0deg');
    useEffect(()=>{
           const rotatation=()=>{
            setTimeout(()=>{
                  settextrotate('0deg');   
            },0);

            setTimeout(()=>{
                  settextrotate('180deg');   
            },2000);
           }
           rotatation();
        const intervalId = setInterval(() => {
            rotatation();
        }, 4000);

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(intervalId);
    },[])

  return (
    <div id='homepage' className=' text-white relative w-[100vw] h-[105vh] flex flex-col gap-12 sm:gap-0 md:flex-row pt-[22%] sm:pt-[15%] md:pt-0 justify-center items-center  md:justify-around '>
         <Sidebar/>
     {/* / left section hai bhai */}
        <div style={{ color: changebg ? 'black' : 'white' }}
         data-aos="fade-right"
         className='w-[20rem] md:w-[28rem] flex flex-col justify-center'>

            <p  className='relative font-bold text-3xl  '><span className='text-4xl'>H</span>
                 <p style={{display:'inline', position: 'absolute', rotate:`${textrotate}`}} className='mt-1 '>i</p>
                 <span style={{display:'inline', position: 'absolute', left:'35px' , rotate:`${textrotate}`}}>! </span>  <span className='ml-5'>  I'm </span>
                 <span className='text-[#0ef]'>R
                   <span>o</span>h
                   <span>i</span>t
                 </span>
            </p> 

            <p className='font-bold text-3xl  flex flex-row gap-1'>
                <p>And</p>
                <div className='text-[#0ef]'>
                    <ReactTyped  strings={["Frontent","Developer","Coder"]} typeSpeed={50}  backSpeed={50} loop={true} />
                </div>
            </p>
            
            <p 
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="500"
                className='mt-2 md:my-4 '>
                As a frontend developer, I craft resposive and user-friendly website interfaces using HTML,Tailwind CSS, JavaScript and React js, which attract user to stay long time.
            </p>
            
            <div className='flex mt-3 flex-row lg:gap-10 gap-3 '>
               <div
                    data-aos="zoom-in"
                    data-aos-duration="5000"
                    data-aos-delay="1000">
                    <button className='btn hover:scale-110 bg-cyan-400 transition-all duration-200  hover:bg-cyan-400 hover:text-white p-1 w-[9rem]  border-2  rounded-lg px-4'>
                        <a href="https://drive.google.com/file/d/1-GHYNUlDsfGmhRVzLMfdXeDJ45xClAlw/view?usp=drivesdk">Download CV</a>
                    </button>
               </div>

               <div 
                    data-aos="zoom-in"
                    data-aos-duration="5000"
                    data-aos-delay="500">
                    <button className='btn bg-cyan-400 hover:scale-110 transition-all duration-200 hover:bg-cyan-400 hover:text-white p-1 w-[6rem]  border-2  rounded-lg px-4'>Hire me</button>
               </div>

            </div>

            <br />
            
            <div className='flex flex-row text-2xl gap-4 md:mt-[2rem]'>
              <div
                  data-aos-duration="5000"
                  data-aos="fade-right"
                  data-aos-delay="500">
                  <a href="https://www.linkedin.com/in/rohit-kumar-chaurasia-220742243/">
                     <FaLinkedin className='btn hover:text-white hover:bg-cyan-400 rounded-sm text-[#0ef]  hover:scale-150 hover:-translate-y-4 transition-all duretion-400' />
                  </a>
              </div>

              <div
                  data-aos-duration="5000"
                  data-aos="fade-right"
                  data-aos-delay="1000">
                  <a href="https://github.com/Rohit8953">
                    <FaGithubSquare className='btn hover:text-white hover:bg-cyan-400 rounded-sm text-[#0ef] hover:scale-150 hover:-translate-y-4 transition-all duretion-400'/>
                  </a>
              </div>

              <div
                  data-aos-duration="5000"
                  data-aos="fade-right"
                  data-aos-delay="1500">
                  <a href="https://www.instagram.com/rohitchaurasia2452/">
                    <FaInstagramSquare className='btn hover:text-white hover:bg-cyan-400 rounded-sm   text-[#0ef] hover:scale-150 hover:-translate-y-4 transition-all duretion-400'/>
                  </a>
              </div>
              <div
                  data-aos-duration="5000"
                  data-aos="fade-right"
                  data-aos-delay="2000">
                  <a href="https://www.facebook.com/profile.php?id=100054259549450">
                    <FaFacebookSquare className='btn hover:text-white hover:bg-cyan-400 rounded-sm  text-[#0ef] hover:scale-150 hover:-translate-y-4 transition-all duretion-400'/>
                  </a>
              </div>
              
            </div>

         </div>

        {/* ///right section hai bhai */}
         <div data-aos="fade-left" className='w-[17rem] md:w-[25rem]  mt-2 lg:-ml-28'>
                <Photo />
         </div>
        

    </div>
  )
}
export default Hero