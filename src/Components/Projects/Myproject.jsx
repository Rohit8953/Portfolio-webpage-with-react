import React from 'react'
import weather from '../Projects/weather.png'
import projectji from'../Projects/projectji.png'
import { Parallax } from 'react-parallax'
import rohitprojecthai from '../Projects/rohitprojecthai.png'
import projecthai from '../Projects/projecthai.png'

const Myproject = () => {
  return (
    <div id='project'>
    
      <Parallax className='h-[20rem] sm:h-full' strength={100} bgImage={rohitprojecthai}>
          <div className=' h-[50vh] md:h-[90vh]'>
          <a className='border-2 rounded-md relative top-5 bg-slate-500 bg-opacity-75 p-2 mt-16 ml-5' href="https://rohit8953.github.io/Shoes-Shopping-Store/">Click here</a>    
          </div>
      </Parallax>

      <Parallax strength={100} blur={{ min: -15, max: 15 }} bgImage={weather}>
          <div className='h-[50vh] md:h-[90vh]'>
                <a className='border-2 bg-slate-500 bg-opacity-75 relative top-5 rounded-md p-2 ml-5' href="https://rohit8953.github.io/Responsive-weather-application/">Click here</a>
          </div>
      </Parallax>

      <Parallax strength={100} blur={{ min: -15, max: 15 }} bgImage={projecthai}>
          <div className='h-[50vh] md:h-[90vh]'>
          <p className='text-center text-white text-4xl font-serif'>Tic-Tac-Toe Game</p>
          </div>
      </Parallax>

      <Parallax strength={-200} bgImage={projectji}>
          <div className='h-[60vh] md:h-[90vh]'>
            <p className='text-center text-4xl font-serif'>Razorpay Application</p>
          </div>
      </Parallax>

    </div>
  )
}

export default Myproject