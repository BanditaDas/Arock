import React from 'react'
import Herotxt from './Herotxt';
import Subheading from './Subheading';

function Centertxt() {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
      <Herotxt />
      <Subheading />
    </div>
  )
}

export default Centertxt