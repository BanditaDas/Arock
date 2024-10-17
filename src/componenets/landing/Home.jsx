import React, { useRef } from 'react'
import Nav from '../Navbar/Nav'
import Centertxt from '../center/Centertxt'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import Black from './Black'

function Home(props) {
    const pgref = useRef(null)


    useGSAP(() => {
        gsap.from(pgref.current, {
            opacity: 0,
            delay: 1.8,
            duration: 1,
            y: 50,
            scale:1.05

        })
    })
    
    return (
        <div className="h-screen">
            <Black />
            
            <div ref={pgref} className='h-screen w-full bg-[url(./bg.webp)] bg-cover bg-center opacity-1'>
                <Nav menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen}/>
                <Centertxt />
            </div>
        </div>
    )
}

export default Home