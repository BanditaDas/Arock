import React from 'react'
import Logo from './Logo';
import Menu from './Menu';

function Nav(props) {
  return (
    <div className="flex w-full items-start justify-between px-5 py-2">
      <Logo />
      <Menu menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen}/>
    </div>
  )
}

export default Nav