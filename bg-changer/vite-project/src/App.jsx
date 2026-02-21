import React from 'react'

function App() {
  const [color, setColor] = React.useState('olive')

  return (
    <div 
      className='w-full h-screen duration-200 '
      style={{ backgroundColor: color }}
    >

<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
  <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl '>
    <button  onClick= { ( )=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600'> blue</button>
    <button onClick= { ( )=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600'> green</button>
    <button onClick= { ( )=>setColor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-600'> Gray</button>
    <button  onClick= { ( )=>setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-600'> Pink</button>
    <button onClick= { ( )=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-600'> Yellow</button>

  </div>
  

</div>

    </div>
  )
}

export default App