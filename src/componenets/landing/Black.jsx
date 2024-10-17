import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import React, { useRef } from 'react'

function Black() {
    const blackref = useRef(null)

    useGSAP(() => {
        gsap.to(blackref.current, {
            y: "-100%",
            delay: 1.9,
            duration: 0.8,
        })
    })

    return (
        <div ref={blackref} className=" h-screen bg-[#111] w-full absolute z-10">

        </div>
    )
}

export default Black