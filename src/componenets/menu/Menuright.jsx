import React from 'react'
import MenuClose from './MenuClose'
import MenuDets from './MenuDets'

function Menuright(props) {
  return (
    <div className="w-1/3 py-10 px-10 h-full relative ">
      <MenuClose menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen}/>

      <MenuDets />
    </div>
  )
}

export default Menuright