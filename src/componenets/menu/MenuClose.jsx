import React from 'react'

function MenuClose(props) {

    const menubarClose = ()=>{
        props.setmenuOpen(false);
    }

  return (
    <div onClick={menubarClose} className="uppercase font-[a4] cursor-pointer text-right hover:opacity-70">
        Close
    </div>
  )
}

export default MenuClose