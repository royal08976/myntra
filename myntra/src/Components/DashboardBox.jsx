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






const DashboardBox = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;

  const options=[
    'Last Day',
    'Last week',
     'Last Year',
  ]
  
  // w-[48%] h-[200px]
  
  return (
    <div className="dashbox rounded-lg relative" 
    style={{backgroundImage:`linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]})`}}>
      {
        props.grow===true?<span  className='chart absolute text-gray-400 mt-2  opacity-35'><TrendingUpIcon sx={{fontSize:"100px", height:"250px" , width:"250px"}}/></span>
        :
        <span className='chart absolute text-gray-400 mb-10 opacity-35' ><TrendingDownIcon sx={{fontSize:"100px", height:"250px" , width:"250px"}}/></span>
      }
<div className='flex w-[100%]'>
 
    

    <h4 className='text-white text-xl pl-5 pt-4'>Total users</h4>
    <div className='ml-auto'>
  {/* <Button 
  sx={{
    minWidth:"40px",
    cursor:"pointer",
    width:"40px",
    height:"40px",
    borderRadius:"50%",
    marginLeft:"auto",
    display:"flex",
    marginTop:"70px",
    fontSize:"30px",
  

  }}
  className='ml-auto mr-5 text-gray-700 opacity-45 pt-20'>

  <HiDotsVertical />
  </Button> */}

  <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

  <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
            {options.map((option) => (
          <MenuItem key={option}  onClick={handleClose}>
          <span className='ml-2 mr-3'><RxTimer /></span>{option}
          </MenuItem>
        ))}
      </Menu>

  </div>
    


  

  
</div>
    <span className='text-white text-2xl pl-5 pt-4'>277</span>

<div className='flex  items-center'>
  <h6 className='text-white mt-0 mb-0 pl-5 pt-20 text-md'>
    Last Month
  </h6>
  <div className='ml-auto mt-14'>
    
    <span className='icon '> 
{props.icon}
    </span> 
    

  </div>
  

</div>

    </div>


    
  )
} 

export default DashboardBox