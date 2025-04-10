import React, { useState } from 'react'


const CategorySearch = () => {
  const [inputClick,setInputClick]=useState(false)
  const handleInput=()=>{
    setInputClick(!inputClick)
    console.log(inputClick)
  }
  return (
    <div className=''>
        <label htmlFor="">Category</label> <br />
        <input type="text" 
        onClick={()=>handleInput()}
        
        className='w-[100%] h-[50px] pl-4 bg-gray-100 mt-2  relative focus:border-transparent focus:outline-none  border-1 border-gray-300 rounded ' />
    
    {inputClick===true && <div className='w-[27%] absolute z-[1000] border-1  border-gray-300 bg-gray-100 rounded border-t-2'>
      
      <div className='hover:bg-blue-200 mt-1 text-center rounded-md text-sm '>hello</div>
      <div className='hover:bg-blue-200 mt-1 text-center rounded-md text-sm '>hello</div>
      <div className='hover:bg-blue-200 mt-1 text-center rounded-md text-sm '>hello</div>
      <div className='hover:bg-blue-200 mt-1 text-center rounded-md text-sm '>hello</div>
      <div className='hover:bg-blue-200 mt-1 text-center rounded-md text-sm '>hello</div>
      
      </div>}
    
    </div>
  )
}

export default CategorySearch