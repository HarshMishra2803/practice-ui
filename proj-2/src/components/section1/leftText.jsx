import React from 'react'
import Arrow from './arrow'
import Herotext from './herotext'



const leftText = () => {
  return (
    <div className=' h-full w-1/3  flex flex-col justify-between  '   >
        <Herotext/>
        <Arrow/>
    </div>
  )
}

export default leftText