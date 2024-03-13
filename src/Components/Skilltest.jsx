import React from 'react'
import { skilldata, skilldata2hai } from '../DATACMP/data';


const Skilltest = () => {
  
  return (
   <div id='skill' className='w-[100vw] h-full sm:h-[100vh] p-[2rem]  overflow-hidden'>
    <div className='bg-[#0ef] flex flex-col rounded-2xl w-full h-full'>
         <h1 data-aos="fade-down" className='text-4xl font-bold text-center mt-5'>My Skills</h1>
        <div className='flex flex-col items-center justify-center w-full h-full sm:flex-row '>

            {/* left section */}

            <div data-aos="fade-right" className=' w-[80vw]  sm:w-[50vw] flex flex-col mx-auto items-center justify-center mt-1'>
                 <p data-aos="flip-down" className='font-bold text-2xl -mb-3'>Technical Skills</p>
                 <div className='w-[100%] sm:w-[70%]'>
                  {
                    skilldata2hai.map((skillhai)=>{
                      return(
                        <div key={skillhai.name} className='mt-1 sm:mt-8 w-[80%] sm:w-full mx-auto'>
                              <div className='flex flex-row justify-between'>
                                  <div className='flex flex-row items-center gap-1'>
                                    <p style={{color:`${skillhai.colorr}`}}>{skillhai.icons}</p>
                                    <p>{skillhai.name}</p>
                                  </div>
                                  <p>{skillhai.values}%</p>
                              </div>

                              <div >
                                  {skillhai.linearhai}
                              </div>
                        </div>
                      )
                    })
                  }
                </div>
            </div>

          {/* right section */}

            <div data-aos="fade-left" className=' w-[60vw] sm:w-[60vw] flex flex-col items-center sm:mt-5  mt-3' >
               <p data-aos="flip-down" className='text-2xl  font-bold'>Professinanal Skills</p>
              <div className='flex justify-center sm:flex-row w-[100%] md:w-[50%] flex-wrap  gap-2 md:gap-5 sm:mt-6'>
                {
                   skilldata.map((skills)=>{
                    return(
                      <div className='w-[5rem] md:w-[10rem] mt-2'>
                           <div>{skills.circular}</div>
                           <p className='text-center'>{skills.name}</p>
                      </div>
                    )
                   })
                }
              </div>
            </div>
        </div>
    </div>
  </div> 
  )
}
export default Skilltest 