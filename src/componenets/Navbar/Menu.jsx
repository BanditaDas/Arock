import React, { useEffect } from 'react';

function Menu(props) {
  const menubarOpen = () => {
    props.setmenuOpen(true);
  };

  useEffect(() => {
    console.log(props.menuOpen);
  }, [props.menuOpen]);

  return (
    <div onClick={menubarOpen} className='font-[a4] uppercase opacity-80 cursor-pointer'>
      Menu
    </div>
  );
}

export default Menu;
