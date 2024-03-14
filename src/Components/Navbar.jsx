import React, { useEffect, useContext } from 'react'
import { IoMoonOutline } from "react-icons/io5";
import './hhover.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rrrrr from './rrrrr.png'
import { Link } from 'react-scroll';
import { Portfoliocontext } from '../Portfoliocontext';
import { IoSunny } from "react-icons/io5";
const Navbar = () =>{
    const{
        changebg,
        setchangebg
       }=useContext(Portfoliocontext);
useEffect(()=>{
    AOS.init({
        duration:1500,
    });
  
   },[]);
  return (

    <div 
        style={{color: changebg ? 'black' : 'white', background:changebg?'white':'black'}}
        className='fixed  z-10 shadow-white shadow-sm w-full text-white h-16 sm:h-20 bg-white items-center flex flex-row justify-between  md:px-[10%]'>
        <Link  data-aos="zoom-in"  activeClass="active"  smooth={true} to='homepage' >
            <img src={rrrrr} className=' scale-150 sm:scale-100 md:scale-100 ml-10 md:ml-1 ' alt="" />
        </Link>

        <div data-aos="zoom-in" className=' font-serif invisible z-10 md:visible navbar gap-5 flex flex-row '>
            <Link activeClass="active" smooth={true} to="homepage" data-aos="zoom-in"data-aos-delay="500" className=' relative z-10  lg:text-2xl group hover:text-[#0ef] transition-all duration-500 ' href="Rohit">
                Home 
                <div className='absolute transition-all duration-500 scale-0 border-[#0ef] translate-y-5 group-hover:scale-125  group-hover:translate-y-0   top-1 w-full h-full border-b-4 rounded-b-2xl'></div>
            </Link>
            <Link activeClass="active" spy={false} smooth={true} to='about' data-aos="zoom-in"data-aos-delay="500" className='relative group z-10  lg:text-2xl hover:text-[#0ef] transition-all duration-500 ' href="/">
                About 
                <div className='absolute  scale-0 border-[#0ef] translate-y-5 group-hover:scale-125 group-hover:translate-y-0 transition-all duration-500  top-1 w-full h-full border-b-4 rounded-b-xl'></div>
            </Link>
            <Link activeClass="active" spy={false} smooth={true} to='skill' data-aos="zoom-in"data-aos-delay="500" className='relative group z-10  lg:text-2xl hover:text-[#0ef] transition-all duration-500 ' href="/">
                My Skill
                <div className='absolute scale-0 border-[#0ef] translate-y-5 group-hover:scale-125 group-hover:translate-y-0 transition-all duration-500  top-1 w-full h-full border-b-4 rounded-b-xl'></div>
            </Link>
            <Link activeClass="active" spy={false} smooth={true} to='project' data-aos="zoom-in"data-aos-delay="500" className='relative group z-10  lg:text-2xl hover:text-[#0ef] transition-all duration-500 ' href="/">
                Project
                <div className='absolute scale-0 border-[#0ef] translate-y-5 group-hover:scale-125 group-hover:translate-y-0 transition-all duration-500  top-1 w-full h-full border-b-4 rounded-b-xl'></div>
            </Link>
            <Link activeClass="active" spy={false} smooth={true} to="contact" data-aos="zoom-in"data-aos-delay="500" className='relative group z-10  lg:text-2xl hover:text-[#0ef] transition-all duration-500 ' href="/">
                Contact us
                <div className='absolute scale-0 border-[#0ef] translate-y-5 group-hover:scale-125 group-hover:translate-y-0 transition-all duration-500  top-1 w-full h-full border-b-4 rounded-b-xl'></div>
            </Link>
        </div>
            
        <div className='absolute right-5 md:relative md:right-0'>
            <div className='shadow-slate-700 shadow-inner flex flex-row border-2 rounded-3xl p-1 gap-1'>
                <IoMoonOutline className=" rotate-12 " onClick={()=>setchangebg(false)}/>
                <IoSunny onClick={()=>setchangebg(true)} />    
            </div>
        </div>
    </div>
  )
}

export default Navbar