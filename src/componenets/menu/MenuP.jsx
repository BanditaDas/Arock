import React, { useRef } from 'react'
import Menuleft from './Menuleft'
import Menuright from './Menuright'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function MenuP(props) {
  const menuRef = useRef(null);

  useGSAP(() => {
    if (props.menuOpen) {
      gsap.to(menuRef.current, {
        top: 0,
        duration: 0.5, // You can adjust the duration as needed
        ease: 'power2.out' // Optional: add easing for smoother animation
      });
    } else {
      gsap.to(menuRef.current, {
        top: '100%',
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }, [props.menuOpen]);

  return (
    <div ref={menuRef} className="fixed h-screen w-full bg-[#111] top-full z-50 flex">
      <Menuleft />
      <Menuright menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen}/>
    </div>
  );
}

export default MenuP;
