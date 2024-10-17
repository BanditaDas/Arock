import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Subheading() {
  return (
    <div className='flex justify-between items-center -mt-28 uppercase text-[0.8vw] font-[a4]'>
      <div className="flex items-start gap-4">
        <i className="ri-play-fill px-3 py-2 border-2 rounded-full"></i>
        <h3 className=''>Play <br /> the film</h3>
      </div>
      <div className="flex gap-20">
        <h3 className=''>creator <br /> curator</h3>
        <h3>new york <br /> los angeles</h3>
      </div>
    </div>
  )
}

export default Subheading