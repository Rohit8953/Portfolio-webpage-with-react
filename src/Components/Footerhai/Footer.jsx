import React, { useContext } from 'react'
import SocialM from '../ContactMe/SocialM'
import { Portfoliocontext } from '../../Portfoliocontext'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const {
    changebg
   }=useContext(Portfoliocontext);

  return (
    <div className=' relative z-10 w-[100vw]  h-[15vh] sm:h-[21vh]'>  
      <div className='absolute w-full h-full  bg-[#0ef] skew-y-12'></div>  
      <div className='absolute w-full h-full  bg-[#0ef] -skew-y-12'></div> 

      <div style={{ background: changebg ? 'white' : 'black' }} className='absolute w-full h-full  bg-black flex flex-col gap-2 items-center justify-center'>

           <SocialM className='flex flex-col' />
            <div className='select-none text-gray-400'>
              <p>Designed and Developed by Rohit Chaurasia</p>
              <p className='  flex items-center gap-2'>Copyright<FaRegCopyright />2024 Rohit,All rilghts reserved</p>
            </div>
       
      </div>  
      
    </div>
  )
}
export default Footer