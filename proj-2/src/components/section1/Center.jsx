import React from 'react'
import LeftText from './leftText'
import RightContent from './rightContent'

const Center = () => {
  return (
    <div className='py-10 flex justify-between items-center gap-10 h-[90vh] px-18'>
       <LeftText/>
       <RightContent/>
    </div>
  )
}

export default Center