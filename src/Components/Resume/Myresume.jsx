import React, { useContext } from 'react'
import { edudata,edudata2, photodata } from '../../DATACMP/data'
import{ Portfoliocontext } from '../../Portfoliocontext'

const Myresume = () => {
  const {
    changebg
   }=useContext(Portfoliocontext)
  return (
    <div id='resume' className=' w-[100vw] h-full flex flex-col lg:gap-5 p-1'>
      <p style={{ color: changebg ? 'black' : 'white' }} className='font-serif font-bold text-white text-4xl text-center mt-2'>My Resume</p>
      <div className='flex flex-row justify-center'>

{/* left side card */}

        <div  className='w-[45%] md:w-[30%] h-full flex flex-col gap-2 lg:gap-[2.8rem]'>
              {
                edudata.map((data)=>{
                  return(
                    <div  data-aos="fade-right" data-delay-aos="1000" className='font-serif flex flex-col gap-2'>
                      <div  className=' w-fit p-1 px-2 border-orange-400 rounded-tr-2xl border-2'>
                          <p style={{ color: changebg ? 'black' : 'white' }} className='text-white'>{data.year}</p>
                      </div>

{/* all cards are here */}

                        <div  className= ' p-2 pl-3 shadow-[0_2.8px_2.2px_rgba(255, 255, 255),_0_6.7px_5.3px_rgba(255, 255, 255),_0_12.5px_10px_rgba(255, 255, 255),_0_22.3px_17.9px_rgba(255, 255, 255),_0_41.8px_33.4px_rgba(255, 255, 255),_0_100px_80px_rgba(255, 255, 255)] bg-gradient-to-r from-cyan-400 to-cyan-200  rounded-md'>
                           <h1 className=' font-bold'>{data.education}</h1>
                           <p>{data.college}</p>
                           <p>{data.about}</p>
                           <div className='flex flex-row gap-1'>
                              <p>{data.perc}</p>
                              <p className='font-sans'>{data.score}</p>
                              <p>{data.sem}</p>
                           </div>
                        </div>
                    </div>
                  )
                })
              }
        </div>
{/* zig zag image  */}

        <div data-aos="zoom-in" data-delay-aos="1000" className='h-full flex flex-col pt-10 '>
           <img src={photodata.img3} className=' h-[55rem] sm:h-[36rem] md:h-[38rem] lg:h-[38rem] ' alt="" />
        </div>
{/* right side cards */}

        <div className='w-[45%] md:w-[30%]  h-full flex flex-col gap-2 lg:gap-[4.7rem] mt-24'>
              {
                edudata2.map((data)=>{
                  return(
                    <div data-aos="fade-left" data-delay-aos="1000" className='font-serif flex flex-col  gap-2 '>
                        <div className=' w-fit p-1 px-2 border-orange-400 rounded-tr-2xl border-2'>
                          <p style={{ color: changebg ? 'black' : 'white' }} className='text-white'>{data.year}</p>
                        </div>
                        <div className='p-2  bg-[#0ef] pl-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gradient-to-r from-cyan-400 to-cyan-200 rounded-md'>
                           <h1 className='font-bold '>{data.education}</h1>
                           <p>{data.college}</p>
                           <p>{data.about}</p>
                           <p>{data.perc}</p>
                           <div className='flex flex-row'>
                              <p>{data.score}</p>
                              <p>{data.sem}</p>
                           </div>
                        </div>
                    </div>
                  )
                })
              }
        </div>
    </div>
  </div>
  )
}
export default Myresume