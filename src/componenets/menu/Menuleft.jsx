import React from 'react'
import { Tilt } from '@jdion/tilt-react'

function Menuleft() {
  return (
    <div className="w-2/3 py-10 px-10 h-full relative ">
      <Tilt className="h-full w-full flex items-center justify-center relative">

          <img className='absolute scale-[0.94] opacity-50 h-full w-full object-cover object-center' src="./menu.webp" alt="" />
          <img className='absolute scale-[0.90] opacity-55 h-full w-full object-cover object-center' src="./menu.webp" alt="" />
          <img className='absolute scale-[0.86] opacity-55 h-full w-full object-cover object-center' src="./menu.webp" alt="" />
          <img className='absolute scale-[0.82] opacity-50 h-full w-full object-cover object-center' src="./menu.webp" alt="" />
          <img className='absolute opacity-60 h-full w-full object-cover object-center' src="./menu.webp" alt="" />
      </Tilt>
    </div>
  )
}

export default Menuleft