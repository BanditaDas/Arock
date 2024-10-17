import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef } from 'react'

function loadc() {

    const line = useRef(null)
    const tl = gsap.timeline()

    useGSAP(()=>{
        tl.to(line.current,{
            width: '100%',
            duration: 1.8,
            delay: 0.7,
            ease: "expo.out"
        })
        .to(line.current,{
          opacity: 0
        })
    })

  return (
    <div ref={line} className="w-0 h-full bg-white rounded">

    </div>
  )
}

export default loadc