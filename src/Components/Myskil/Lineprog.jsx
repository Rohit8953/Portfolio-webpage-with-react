import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
const Lineprog = (props) => {
    let value=props.values;
  return (
    <div>
        <ProgressBar className='btn2 rounded-full'
            height='13px'
            completed={value} 
            borderRadius='10px' 
            transitionTimingFunction='ease-in' 
            baseBgColor='black' 
            maxCompleted={100}   
            animateOnRender='true' 
            transitionDuration='4s' 
            bgColor='#e4e7e4'
            labelColor={'gray'} 
        />
        
    </div>
  )
}

export default Lineprog