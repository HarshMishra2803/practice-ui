import React from 'react'

const rightcard = () => {
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden relative shrink-0'>
        <img  className = "h-full w-full  object-cover"src="https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D" alt="" />
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>

            <h2 className='bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold'
            >1</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-10 '
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum asperiores qui mollitia quaerat dolore.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full   '>Satisfied</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full   '>        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>

        </div>
        

    </div>
  )
}

export default rightcard