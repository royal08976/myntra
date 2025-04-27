import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { RxTimer } from "react-icons/rx";






const SmallDashbox = (props) => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
  
  // w-[48%] h-[200px]
  
  return (
    <div className="dashbox rounded-lg relative" 
    style={{backgroundImage:`linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]})`}}>
      {
        props.grow===true?<span  className='chart absolute text-gray-400   -ml-10 opacity-26'><TrendingUpIcon sx={{fontSize:"50px", height:"150px" , width:"200px"}}/></span>
        :
        <span className='chart absolute text-gray-400    opacity-20' ><TrendingDownIcon sx={{fontSize:"50px", height:"150px" , width:"150px"}}/></span>
      }
<div className='flex w-[100%]'>
 
    

    <h4 className='text-white text-xl pl-5 pt-4'>{props.text}</h4>
    <div className='ml-auto pt-5 pr-3'>
    
    <span className='icon  '> 
{props.icon}
    </span> 
    

  </div>
   


  

  
</div>
    <span className='text-white text-2xl pl-5 pt-4'>277</span>



    </div>


    
  )
} 

export default SmallDashbox