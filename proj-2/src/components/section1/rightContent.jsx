import React from 'react'
import Rightcard from './rightcard'

const rightContent = () => {
  return (
    <div id = "right "className="scrollbar-hide h-full w-2/3 p-6 flex gap-4 flex-nowrap overflow-x-auto rounded-4xl">

        <Rightcard/>
        <Rightcard/>
        <Rightcard/>
      


    </div>
  )
}

export default rightContent