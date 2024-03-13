import React from 'react'
import Chart from 'react-apexcharts'
import { chartdata,chartdata2 } from '../../DATACMP/data'
import { useContext } from 'react'
import { Portfoliocontext } from '../../Portfoliocontext'

const Progressreport=()=>{
 const {
  changebg
 }=useContext(Portfoliocontext)
 const series=[
    {
      name: "Numer of questions",
      data: [0, 3, 4, 1, 2, 1, 1,3,4,3,1,5,1,2,3,4,1],
    }
   ]; 
 const series2=[
    {
      name: "Percentage(1=20%)",
      data: [1, 3, 2, 0, 2, 1, 1,3,4,0,1,3,1,2,3,4,1],
    }
   ]; 

  return (
  
    <div id='report' style={{ color: changebg ? 'black' : 'white' }}  className=' text-white  relative w-[100vw] h-full md:h-[100vh] flex flex-col  items-center gap-10 overflow-hidden'>
              <div className='flex flex-row gap-1'>
                <p data-aos="fade-down-right" className='font-serif text-3xl mt-8'>Progress</p>
                <span data-aos="fade-down-left" className='font-serif text-3xl mt-8'>Report</span>
              </div>
            <div className='flex flex-col md:flex-row justify-center mt-5 gap-5 sm:mt-5  md:gap-10 items-center'>

            {/* left report//////////////// */}

               <div data-aos="zoom-in" className=' w-[95vw]  md:h-full  md:w-[47.5vw]  '>
                 <Chart className='bg-[#0ef] rounded-2xl p-2'
                    type='line'
                    series={series}
                    options={chartdata.options}
                  />
               </div>
            
            {/* right report/////////////// */}

               <div data-aos="zoom-in" className='w-[95vw] md:w-[47.5vw] md:h-full '>
                 <Chart  className="bg-[#0ef] rounded-2xl p-2"
                
                    type='area'
                    series={series2}
                    
                    options={chartdata2.options}
                    
                  />
               </div>
            </div>
          
      </div> 
      
    
  )
}

export default Progressreport;