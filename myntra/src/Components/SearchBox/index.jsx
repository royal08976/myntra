import React from 'react'
import { CiSearch } from "react-icons/ci";


const SearchBox = () => {
  return (
    <div className='searchbox w-60 ml-8 h-10 flex items-center gap-3
      '>
        <CiSearch  size={20}  />

        <input type="text" placeholder='quick search' 
        className=' bg-none border-0 outline-0 text-[14px] placeholder:text-gray-500'/>
    </div>
  )
}

export default SearchBox