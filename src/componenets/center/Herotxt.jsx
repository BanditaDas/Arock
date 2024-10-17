import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef } from 'react'

function Herotxt() {
  const textref = useRef(null)

  useGSAP(()=>{
    let clutter = ""
    const split = textref.current.textContent.split("")

    split.forEach((e)=>{
      clutter += `<span>${e}</span>`
    });

    textref.current.innerHTML = clutter

    gsap.from("h1 span",{
      y:70,
      opacity: 0,
      delay:2.2,
      stagger:0.12,
    })
  })
  
  return (
    <div>
      <h1 ref={textref} className='whitespace-nowrap font-black text-[21vw] font-[u8] leaning-none text-center'>AROCK</h1>
    </div>
  )
}

export default Herotxt