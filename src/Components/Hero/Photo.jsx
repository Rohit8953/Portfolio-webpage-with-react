import React from 'react'
import { data } from '../../DATACMP/data'

const Photo = () => {
  return (
    <div>
        {
            data.map((image)=>{
                return(
                    <div>
                        <img src={image.img1} alt="" />
                    </div>
                )
            })  
        }
    </div>
  )
}

export default Photo;