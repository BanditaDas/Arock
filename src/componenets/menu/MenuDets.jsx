import React from 'react'

function MenuDets() {
  return (
    <div className="flex flex-col items-left justify-between bg-[#111] text-white p-8 font-bold ">
      {/* Top Section */}
      <div className="text-4xl space-y-4 uppercase tracking-wider mb-5">
        <div>About</div>
        <div>Story</div>
        <div>Projects</div>
        <div>Releases</div>
      </div>

      {/* Middle Section */}
      <div className="flex w-full justify-between text-xs uppercase tracking-wider font-[a4]">
        {/* Left Side */}
        <div className="space-y-4">
          <div>Follow<br />(AROCK®)</div>
          <div>Listen<br />(AROCK®)</div>
        </div>
        
        {/* Center Section */}
        <div className="space-y-4 text-right">
          <div>Instagram</div>
          <div>Youtube</div>
          <div>Spotify</div>
          <div>Mixcloud</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full text-xs uppercase tracking-wider space-y-4 font-[a4]">
        <div className="text-center">Get in touch</div>
        <div className="text-center">
          <button className="border border-white px-4 py-1">Email</button>
        </div>

        {/* Addresses */}
        <div className="flex justify-between">
          {/* San Diego */}
          <div>
            <p>San Diego</p>
            <p>BPM Music</p>
            <p>1060 National Ave</p>
            <p>San Diego, CA 92123</p>
          </div>

          {/* Los Angeles */}
          <div>
            <p>Los Angeles</p>
            <p>6255 Sunset Blvd.</p>
            <p>Suite #700</p>
            <p>Los Angeles, CA 90028</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuDets