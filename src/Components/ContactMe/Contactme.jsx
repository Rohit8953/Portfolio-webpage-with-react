import React, { useContext } from 'react'
import { contdata } from '../../DATACMP/data'
import { Portfoliocontext } from '../../Portfoliocontext'
import message from './message.json'
import Lottie from 'lottie-react'
const Contactme=()=>{
  const {
    changebg
   }=useContext(Portfoliocontext);

  return(
    <div id='contact' className=' flex flex-col items-center w-[100vw] md:h-[100vh] h-full'>
         <p style={{ color: changebg ? 'black' : 'white' }} data-aos="zoom-out" className='font-serif text-4xl text-center my-5 text-white'>Contact me</p>
         <div className='w-[80vw] flex flex-row  justify-center flex-wrap gap-4 sm:justify-between '>
             {
              contdata.map((iconhai)=>{
                return(
                  <div data-aos="flip-up" className='flex  flex-row items-center gap-3 bg-gradient-to-r from-cyan-400 to-cyan-200 w-[16rem] pl-2 py-1 rounded-lg'>
                       <div className='w-10 h-10 rounded-full border-2 border-black flex items-center justify-center'>
                           <p>{iconhai.icon}</p>
                       </div>
                       <div>
                           <p className='text-1xl font-bold font-serif'>{iconhai.name}</p>
                           <div>{iconhai.social}</div>
                           <p>{iconhai.paira}</p>
                       </div>
                  </div>
                )
              })
             }
         </div>
         <div className='w-[100vw]  gap-5 mt-5 font-serif flex flex-col md:flex-row justify-center items-center mb-20'>
            <div data-aos="zoom-in"  className='md:w-[40vw] w-[80vw] h-[50vh] flex justify-center items-center'>
                 <Lottie className='w-full h-full' animationData={message}/>    
            </div>

            <fieldset 
               style={{
                        color: changebg ? 'black' : 'white',
                        border: `2px solid ${changebg ? 'black' : 'white'}`
                     }}
                      data-aos="flip-right"  
                      className='text-white  md:w-[40vw] w-[80vw] flex flex-col justify-center gap-2 sm:gap-5'>

                  <legend className='ml-[5%] text-2xl'>Send me a massage</legend>
                  <div className='mx-auto flex flex-row justify-between w-[90%]'>
                      <input type="text" className='pl-2 text-black w-[48%] bg-gray-200'  placeholder='Your Name......' />
                      <input type="email" className='pl-2 w-[48%] text-black bg-gray-200'  placeholder='Enter Your Email......' />
                  </div>
                  <input type="text" className='pl-2 text-black bg-gray-200 mx-auto w-[90%]' placeholder='Subject......' /> 
                  <textarea className='pl-2 text-black bg-gray-200 mx-auto w-[90%]  border-2 border-black' placeholder='Write your massage......' name="" id="" cols="30" rows="10"></textarea>
                  <button className='btn bg-[#0ef] hover:scale-110 transition-all duration-200 rounded-md boder-2 border-white mx-auto border-2 w-fit p-1 px-3  mb-5'>Send me</button>
            </fieldset>
            

         </div>
    </div>
  )
}
export default Contactme