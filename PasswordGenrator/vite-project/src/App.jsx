import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const[length,setLength]=useState(8)

  const[num,setNum]=useState(false)

  const[char,setChar]=useState(false)

  const[pass,setPass]=useState("")

   const passwordRef = useRef(null)

 const passwordgenrator=useCallback(  ()=>{
let passs=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(num) str +="123456789"
if(char) str +="&^$%#^@^$&^&#&#"
for(let i=1;i<=length;i++){
  let charran = Math.floor(Math.random() * str.length )
passs +=str.charAt(charran)
}
setPass(passs)
},[length,num,char,setPass])
 
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  },[pass])


useEffect(()=>{
  passwordgenrator()
},[passwordgenrator,length,num,char,setPass])

  return (
    <div className="w-full h-screen flex items-start justify-center bg-black pt-10">
  <div className="w-full max-w-md mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
    
    <h1 className="text-white text-center text-lg font-semibold mb-4">
   Password Generator
    </h1>

    <div className="flex bg-gray-700 rounded-md overflow-hidden shadow-inner">
      <input
        type="text"
        value={pass}
        className="w-full px-4 py-2 bg-gray-200 text-black rounded-md outline-none"
        placeholder="Password"
        readOnly
                   ref={passwordRef}
      />
      <button

        onClick={copyPasswordToClipboard}

      className='outline-none bg-blend-darken text-white px-3 py-0.5 shrink-0'>
        copy</button>

    </div>
 <div className='flex text-sm gap-x-2 '>
  <div className='flex items-center gap-x-1'>
   < input type='range' 
   min={6}
   max={40}
   value={length}
   className='cursor-pointer'
   onChange={(e)=>{setLength(e.target.value)}}/>
   <label className='text-amber-600'> Length:{length}</label>
  </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          onChange={() => {
              setNum((prev) => !prev);
          }}
      />
      <label className='text-amber-600' htmlFor="numberInput">Numbers</label>
      </div>
        <input
              type="checkbox"
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
          />
          <label className='text-amber-600' htmlFor="characterInput">Characters</label>
</div>
  </div>
</div>
  )
}

export default App
