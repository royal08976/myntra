import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaBell } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { capitalize } from '@mui/material';
import { BiSolidLogOut } from "react-icons/bi";
import { useContext } from 'react';
import { MyContext } from '../App';
import ProductList from '../Pages/ProductList';
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';









const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0)
  // const [isToggle, setIsToggle] = useState(false)
  const context=useContext(MyContext)
const navigate=useNavigate()
  const isOpenSubmenu = (index) => {
    console.log("Clicked tab:", index);
    
setActiveTab(index)
// setIsToggle(!isToggle)
console.log(activeTab)

}

const handleLogout=()=>{
  localStorage.removeItem("username")
  navigate("/login")
}
  return (
    <div className={` sidebar   ${context.isToggleSidebar===true?'-left-full ':'fixed w-[20%]'} h-screen   top-[70px] left-0 bg-white overflow-y-scroll   [&::-webkit-scrollbar]:hidden overflow-x-hidden max-h-[calc(100%-70px)]`}>
      
      <ul className='list-none   '>
        <li>
          <Link to="/"></Link><Link to="/">
          <Button className={`w-[100%]  flex items-center `}
          sx={{
            color: 'black !important',
            backgroundColor:activeTab===0 ?"#d3d3d3":'',

            justifyContent: 'space-between',
            paddingLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '400',
            textTransform: 'capitalize',
            
            padding: '12px 15px'
            
            
            
            
          }}
          onClick={() => isOpenSubmenu(0)}
          >
            <div className='flex items-center gap-3 font-bold text-gray-500 text-[16px]' > 
            <span className='dashboard-icon ml-3 ' ><MdDashboard size={24} /></span>Dashboard
            </div>
            <span className={`arrow justify-end transition-transform ${activeTab===0 ?'rotate-90':''}` }><FaChevronRight /></span>
            </Button>
            </Link>
            </li>

            <li>
          <Button className={`w-[100%]  flex items-center `}
          sx={{
            color: 'black !important',
            backgroundColor:activeTab===1 ?"#d3d3d3":'',
            justifyContent: 'space-between',
            paddingLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '400',
            textTransform: 'capitalize',
            padding:'12px 15px',
            
            
          }}
          onClick={() => isOpenSubmenu(1)}
          >
            <div className={`flex items-center gap-3 font-bold text-gray-500 text-[16px] `} > 
            <span className='dashboard-icon ml-3' ><FaPix size={24} /></span>Products
            </div>
            <span className={`arrow justify-end transition-transform ${activeTab===1 ?'rotate-90':''}` }><FaChevronRight /></span>
            </Button>
           <div className={`w-full ml-5 ${activeTab===1 ?'h-auto opacity-100':'h-0 opacity-0'}`}>
           <ul className='w-full  pl-4 text-[14px] pb-3' >
          
            
            <li className='pt-2 pb-1 hover:bg-blue-100 hover:text-blue-400 border-l-2 pl-6 border-blue-400'><Link to="/product_list"> Product List</Link></li>
            <li className='pt-2 pb-1 hover:bg-blue-100 hover:text-blue-400 border-l-2 pl-6 border-blue-400'><Link to="/product_view">Product View</Link></li>
            <li className='pt-2 pb-1 hover:bg-blue-100 hover:text-blue-400 border-l-2 pl-6 border-blue-400'><Link to="/upload">Product Upload</Link></li>
            
           </ul>
           </div>
               
            </li>

          
           <li>
             <Link to="/">
             <Button className={`w-[100%]  flex items-center `}

          sx={{
            color: 'black !important',
            backgroundColor:activeTab===2 ?"#d3d3d3":'',

            justifyContent: 'space-between',
            paddingLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '400',
            textTransform: 'capitalize',
            padding:'12px 15px',
            
            
          }}
          onClick={() => isOpenSubmenu(2)}
          >
            <div className='flex items-center gap-3 font-bold text-gray-500 text-[16px]' > 
            <span className='dashboard-icon ml-3' ><FaShoppingCart size={24} /></span>Orders
            </div>
            <span className='arrow justify-end'><FaChevronRight /></span>
            </Button>
            </Link> 
            </li>

          <li>
          <Link to="/">
          <Button className={`w-[100%]  flex items-center `}

          sx={{
            color: 'black !important',
            backgroundColor:activeTab===3 ?"#d3d3d3":'',

            justifyContent: 'space-between',
            paddingLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '400',
            textTransform: 'capitalize',
            padding:'12px 15px',
            
            
          }}
          onClick={() => isOpenSubmenu(3)}
          >
            <div className='flex items-center gap-3 font-bold text-gray-500 text-[16px]' > 
            <span className='dashboard-icon ml-3' ><BiSolidMessageSquareDetail size={24} /></span>Messages
            </div>
            <span className='arrow justify-end'><FaChevronRight /></span>
            </Button>
            </Link>  
            </li>

            <li>
          <Link to="/">
          <Button className={`w-[100%]  flex items-center `}

          sx={{
            color: 'black !important',
            backgroundColor:activeTab===4 ?"#d3d3d3":'',

            justifyContent: 'space-between',
            paddingLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '400',
            textTransform: 'capitalize',
            padding:'12px 15px',
            
            
          }}
          onClick={() => isOpenSubmenu(4)}
          >
            <div className='flex items-center gap-3 font-bold text-gray-500 text-[16px]' > 
            <span className='dashboard-icon ml-3' ><FaBell size={24} /></span>Notifications
            </div>
            <span className='arrow justify-end'><FaChevronRight /></span>
            </Button>
            </Link>
            </li>

           <li>
          <Link to="/">
          <Button className={`w-[100%]  flex items-center `}

          sx={{
            color: 'black !important',
            backgroundColor:activeTab===5 ?"#d3d3d3":'',

            justifyContent: 'space-between',
            paddingLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '400',
            textTransform: 'capitalize',
            
            padding: '12px 15px'
            
            
            
            
          }}
          onClick={() => isOpenSubmenu(5)}
          >
            <div className='flex items-center gap-3 font-bold text-gray-500 text-[16px]' > 
            <span className='dashboard-icon ml-3' ><IoSettings size={24} /></span>Settings
            </div>
            <span className='arrow justify-end'><FaChevronRight /></span>
            </Button>
            </Link> 
            </li>




            <li>
          <Link to="/login">
          <Button className={`w-[100%]  flex items-center `}

          sx={{
            color: 'black !important',
            backgroundColor:activeTab===6 ?"#d3d3d3":'',

            justifyContent: 'space-between',
            paddingLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '400',
            textTransform: 'capitalize',
            
            padding: '12px 15px'
            
            
            
            
          }}
          onClick={() => isOpenSubmenu(6)}
          >
            <div className='flex items-center gap-3 font-bold text-gray-500 text-[16px]' > 
            <span className='dashboard-icon ml-3' ><FaUser size={24} /></span>Login
            </div>
            
            </Button>
            </Link> 
            </li>

            <li>
          <Link to="/register">
          <Button className={`w-[100%]  flex items-center `}

          sx={{
            color: 'black !important',
            backgroundColor:activeTab===7 ?"#d3d3d3":'',

            justifyContent: 'space-between',
            paddingLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: '400',
            textTransform: 'capitalize',
            
            padding: '12px 15px'
            
            
            
            
          }}
          onClick={() => isOpenSubmenu(7)}
          >
            <div className='flex items-center gap-3 font-bold text-gray-500 text-[16px]' > 
            <span className='dashboard-icon ml-3' ><FaUser size={24} /></span>Sign Up
            </div>
            
            </Button>
            </Link> 
            </li>


      </ul>
      <br />
      <div className='logout relative w-60 h-[100px] rounded-[20px] ml-5 [background-color:#bcd2fd] [padding:25px] justify-center mr-20 mt-90 overflow-hidden'> 

        <div className='h-10  absolute w-10 bg-blue-400 rounded-full left-4 top-3'></div>
        <div className='h-15  absolute w-15 bg-blue-400 rounded-full -right-3 -top-3 '></div>

        <Button variant="contained" 
        onClick={handleLogout}
        sx={{textTransform:"capitalize",
          fontWeight: '600',
          fontSize: '14px',
          marginLeft:"40px",
          marginTop:"12px",
          borderRadius:"25px"
        }}>
          <span> <BiSolidLogOut size={24} /></span>LogOut  </Button></div>
      </div>
  )
}

export default Sidebar