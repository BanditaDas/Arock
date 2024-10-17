import React, { useState } from 'react'
import Nav from './componenets/Navbar/Nav';
import Centertxt from './componenets/center/Centertxt';
import Loadp from './componenets/loading/loadp';
import Home from './componenets/landing/Home';
import MenuP from './componenets/menu/MenuP';

function App() {

  const [menuOpen, setmenuOpen] = useState(false)

  return (
    <div className='h-screen bg-[#111] overflow-hidden'>
      <MenuP menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Loadp />
      <Home menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    </div>
  )
}

export default App