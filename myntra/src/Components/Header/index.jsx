import React,{useState,useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"
import user from "../../assets/user.png"

import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { colors } from '@mui/material';
import SearchBox from '../SearchBox';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { IoShieldSharp } from "react-icons/io5";
import { MyContext } from '../../App';











const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [userData,setUserData]=useState(() => {
      return localStorage.getItem("username") || "";
    });
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isNotificationOpen);
    const context=useContext(MyContext)
    const navigate=useNavigate()

    useEffect(() => {
      // Only update when context is available (not null or undefined)
      const username = context.loginData?.data?.user?.username;
      console.log("context.login data is :", context.loginData)
      if (username) {
        setUserData(username);
        localStorage.setItem("username", username);
      }
    }, [context.loginData]);
    
    useEffect(() => {
      console.log("userData is:", userData);
    }, [userData]);


    // useEffect(() => {
    //   console.log("userData is ", userData);
    // }, [userData]);
    const handleAccClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleAccClose = () => {
      setAnchorEl(null);
    };

    const handleCloseNotificationDrop = () => {
        setIsNotificationOpen(false);
      }

      const handleOpenNotificationDrop = () => {
        setIsNotificationOpen(true);
      }

      const handleAccLogout=()=>{
        localStorage.removeItem("api")
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        
        navigate("/login")
      }



  return (
<header className='flex items-center   bg-white/30 backdrop-blur-md' > 
    <div className=' w-full'>
        <div className=' main flex items-center  '>
            {/* //logo wrapper */}
            <div className='flex items-center w-80'>
                <Link to={'/'} className='flex items-center '>
                <img src={logo} alt="logo image" className='h-17 w-17 '>
                </img>
                <span className=' font-weight' >Myntra</span>
                </Link>
            </div>

            <div className='flex items-center w-1/4 pl-10'>
          
          <div className=" bg-gray-200 rounded-full ">

           <Button
           
      className="h-10 w-10 mr-5  hover:!bg-[#f0f5ff]] !text-black border rounded-full flex items-center justify-center !p-0 !min-w-0"
      onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}
      sx={{
        borderRadius: "9999px", // Force full round shape
        minWidth: "unset", // Remove MUI's default min-width
        padding: "0", // Remove default padding
      }}
    >
      <MdMenuOpen  size={20}/>
    </Button>
          </div>
    <SearchBox />

            </div>
            <div className='flex w-8/12  items-center gap-6  justify-end' >
           
      <div className=" bg-gray-200 rounded-full ">

         <Button
           
           className="h-10 w-10 mr-3  bg-[#f0f5ff]] !text-black border rounded-full flex items-center justify-center !p-0 !min-w-0"
           sx={{
               borderRadius: "9999px", // Force full round shape
               minWidth: "unset", // Remove MUI's default min-width
               padding: "0", // Remove default padding
            }}
            >
           <MdLightMode size={20} />

         </Button>
      </div>


         {/* <Button
           
           className="h-10 w-10 mr-3  hover:!bg-[#f0f5ff]] !text-black border rounded-full flex items-center justify-center !p-0 !min-w-0"
           sx={{
               borderRadius: "9999px", // Force full round shape
               minWidth: "unset", // Remove MUI's default min-width
             padding: "0", // Remove default padding
            }}
            >
           <MdDarkMode size={20}/>

         </Button> */}


         {/* <Button
           
           className="h-10 w-10 mr-3  hover:!bg-[#f0f5ff]] !text-black border rounded-full flex items-center justify-center !p-0 !min-w-0 "
           sx={{
               borderRadius: "9999px", // Force full round shape
               minWidth: "unset", // Remove MUI's default min-width
               padding: "0", // Remove default padding
            }}
            >
           <FaShoppingCart size={20}/>
         </Button> */}
        

         {/* <Button
           
           className="h-10 w-10 mr-3  hover:!bg-[#f0f5ff]] !text-black border rounded-full flex items-center justify-center !p-0 !min-w-0"
           sx={{
               borderRadius: "9999px", // Force full round shape
               minWidth: "unset", // Remove MUI's default min-width
               padding: "0", // Remove default padding
            }}
            >
           <MdEmail  size={20}/>
         </Button> */}

       <div className='notification-wrapper bg-gray-200 rounded-full relative'>
       <Button
         onClick={handleOpenNotificationDrop}
           
           className="h-10 w-10 mr-3  hover:!bg-[#f0f5ff]] !text-black border rounded-full flex items-center justify-center !p-0 !min-w-0"
           sx={{
               borderRadius: "9999px", // Force full round shape
               minWidth: "unset", // Remove MUI's default min-width
               padding: "0", // Remove default padding
           }}
           >
           <FaBell  size={20}/>
         </Button>
         <Menu
         
        anchorEl={isNotificationOpen}
        className='notificationMenu top-50'
        id="notification-menu"
        open={Boolean(openNotifications)}
        onClose={handleCloseNotificationDrop}
        onClick={handleCloseNotificationDrop}
        PaperProps={{
          sx: {
            maxHeight: "250px", // Limit height
            overflowY: "auto", // Add vertical scrollbar if needed
            mt: "-210px", // Reduce top gap
            "&::-webkit-scrollbar": {
        width: "4px", // Set scrollbar width
      },
      "&::-webkit-scrollbar-track": {
        background: "#e3f2fd", // Light blue track
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#2196f3", // Bright blue scrollbar
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#1976d2", // Darker blue on hover
      },
          },
        }}
        
        transformOrigin={{ horizontal: 'right ', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       
        <MenuItem onClick={handleCloseNotificationDrop}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />

          </ListItemIcon>
          Orders
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleCloseNotificationDrop} 
          sx={{paddingLeft: "7px !important",backgroundColor:"#ebf6ff !important",maxHeight: "300px", overflowY: "auto" }}
        
        >
          <ListItemIcon className='flex gap-2'
          >
          <div className='userImg '>
                <span >
                    <img src={user} alt="userImg" className='rounded-full w-8 h-8 ' />
            
                </span>
            </div>
            <div className='ml-4 '>
              <h4 className='text-xs   '><span>
                <b>Rajesh</b>added to his  list <br /><b>leather belt steven maden</b>
                </span></h4>
                <p className='text-blue-400 text-xs/2'> few seconds ago</p>
            </div>
          </ListItemIcon>
          
        </MenuItem>
        <Divider  sx={{ borderColor: "transparent",  }}></Divider>

        <MenuItem onClick={handleCloseNotificationDrop} 
          sx={{paddingLeft: "7px !important",backgroundColor:"#ebf6ff !important"}}
        
        >
          <ListItemIcon className='flex gap-2'
          >
          <div className='userImg '>
                <span >
                    <img src={user} alt="userImg" className='rounded-full w-8 h-8 ' />
            
                </span>
            </div>
            <div className='ml-4 '>
              <h4 className='text-xs   '><span>
                <b>Rajesh</b>added to his  list <br /><b>leather belt steven maden</b>
                </span></h4>
                <p className='text-blue-400 text-xs/2'> few seconds ago</p>
            </div>
          </ListItemIcon>
          
        </MenuItem>
        <Divider  sx={{ borderColor: "transparent",  }}></Divider>
        <MenuItem onClick={handleCloseNotificationDrop} 
          sx={{paddingLeft: "7px !important",backgroundColor:"#ebf6ff !important"}}
        
        >
          <ListItemIcon className='flex gap-2 '
          >
          <div className='userImg '>
                <span >
                    <img src={user} alt="userImg" className='rounded-full w-8 h-8 ' />
            
                </span>
            </div>
            <div className='ml-4 '>
              <h4 className='text-xs   '><span>
                <b>Rajesh</b>added to his  list <br /><b>leather belt steven maden</b>
                </span></h4>
                <p className='text-blue-400 text-xs/2'> few seconds ago</p>
            </div>
          </ListItemIcon>
          
        </MenuItem>
        <Divider></Divider>
        
        <MenuItem onClick={handleCloseNotificationDrop} 
          sx={{paddingLeft: "7px !important",backgroundColor:"#ebf6ff !important"}}
        
        >
          <ListItemIcon className='flex gap-2 '
          >
          <div className='userImg '>
                <span >
                    <img src={user} alt="userImg" className='rounded-full w-8 h-8 ' />
            
                </span>
            </div>
            <div className='ml-4 '>
              <h4 className='text-xs   '><span>
                <b>Rajesh</b>added to his  list <br /><b>leather belt steven maden</b>
                </span></h4>
                <p className='text-blue-400 text-xs/2'> few seconds ago</p>
            </div>
          </ListItemIcon>
          
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleCloseNotificationDrop} 
          sx={{paddingLeft: "7px !important",backgroundColor:"#ebf6ff !important"}}
        
        >
          <ListItemIcon className='flex gap-2 '
          >
          <div className='userImg '>
                <span >
                    <img src={user} alt="userImg" className='rounded-full w-8 h-8 ' />
            
                </span>
            </div>
            <div className='ml-4 '>
              <h4 className='text-xs   '><span>
                <b>Rajesh</b>added to his  list <br /><b>leather belt steven maden</b>
                </span></h4>
                <p className='text-blue-400 text-xs/2'> few seconds ago</p>
            </div>
          </ListItemIcon>
          
        </MenuItem>
        <Divider></Divider>


        <MenuItem onClick={handleCloseNotificationDrop} 
          sx={{paddingLeft: "7px !important",backgroundColor:"#ebf6ff !important"}}
        
        >
          <ListItemIcon className='flex gap-2 '
          >
          <div className='userImg '>
                <span >
                    <img src={user} alt="userImg" className='rounded-full w-8 h-8 ' />
            
                </span>
            </div>
            <div className='ml-4 '>
              <h4 className='text-xs   '><span>
                <b>Rajesh</b>added to his  list <br /><b>leather belt steven maden</b>
                </span></h4>
                <p className='text-blue-400 text-xs/2'> few seconds ago</p>
            </div>
          </ListItemIcon>
          
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleCloseNotificationDrop} 
          sx={{paddingLeft: "7px !important",backgroundColor:"#ebf6ff !important"}}
        
        >
          <ListItemIcon className='flex gap-2 '
          >
          <div className='userImg '>
                <span >
                    <img src={user} alt="userImg" className='rounded-full w-8 h-8 ' />
            
                </span>
            </div>
            <div className='ml-4 '>
              <h4 className='text-xs   '><span>
                <b>Rajesh</b>added to his  list <br /><b>leather belt steven maden</b>
                </span></h4>
                <p className='text-blue-400 text-xs/2'> few seconds ago</p>
            </div>
          </ListItemIcon>
          
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleCloseNotificationDrop} 
          sx={{paddingLeft: "7px !important",backgroundColor:"#ebf6ff !important"}}
        
        >
          <ListItemIcon className='flex gap-2 '
          >
          <div className='userImg '>
                <span >
                    <img src={user} alt="userImg" className='rounded-full w-8 h-8 ' />
            
                </span>
            </div>
            <div className='ml-4 '>
              <h4 className='text-xs   '><span>
                <b>Rajesh</b>added to his  list <br /><b>leather belt steven maden</b>
                </span></h4>
                <p className='text-blue-400 text-xs/2'> few seconds ago</p>
            </div>
          </ListItemIcon>
          
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleCloseNotificationDrop} 
          sx={{paddingLeft: "7px !important",backgroundColor:"#ebf6ff !important"}}
        
        >
          <ListItemIcon className='flex gap-2 '
          >
          <div className='userImg '>
                <span >
                    <img src={user} alt="userImg" className='rounded-full w-8 h-8 ' />
            
                </span>
            </div>
            <div className='ml-4 '>
              <h4 className='text-xs   '><span>
                <b>Rajesh</b>added to his  list <br /><b>leather belt steven maden</b>
                </span></h4>
                <p className='text-blue-400 text-xs/2'> few seconds ago</p>
            </div>
          </ListItemIcon>
          
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleCloseNotificationDrop} 
          sx={{paddingLeft: "7px !important",backgroundColor:"#ebf6ff !important"}}
        
        >
          <ListItemIcon className='flex gap-2 '
          >
          <div className='userImg '>
                <span >
                    <img src={user} alt="userImg" className='rounded-full w-8 h-8 ' />
            
                </span>
            </div>
            <div className='ml-4 '>
              <h4 className='text-xs   '><span>
                <b>Rajesh</b>added to his  list <br /><b>leather belt steven maden</b>
                </span></h4>
                <p className='text-blue-400 text-xs/2'> few seconds ago</p>
            </div>
          </ListItemIcon>
          
        </MenuItem>
        <Divider></Divider>
        <MenuItem
    sx={{
      fontWeight: "bold",
      textAlign: "center",
      justifyContent: "center",
      position: "sticky",
      bottom: 0, // Keeps it at the bottom
      backgroundColor: "white", // Prevents overlapping when scrolling
      zIndex: 10, // Ensures it stays above scrolling items
    }}
  >
    View All Notifications
  </MenuItem>
      </Menu>
       </div>
    
       
      <div className='myAccount mr-10 bg-gray-200 rounded-full w-auto'>


       <Button onClick={handleAccClick} className='myAccWrapper  mr-3 !text-black border rounded-full flex items-center justify-center !p-0 !min-w-0'
        sx={{
            borderRadius: "9999px", // Force full round shape
            minWidth: "unset", // Remove MUI's default min-width
            padding: "0", // Remove default padding
          }}
          >
       <div className='myAcc flex items-center'>
          <div className='userImg'>
              <span >
                  <img src={user} alt="userImg" className='rounded-full w-10 h-10' />
          
              </span>
          </div>
          <div className='userInfo ml-2 pr-3'>
              <h4>{userData}</h4>
              
          </div>
       </div>

       </Button>
       <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={openMyAcc}
      onClose={handleAccClose}
      onClick={handleAccClose}
      
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
     
      <MenuItem onClick={handleAccClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        My account
      </MenuItem>
      <MenuItem onClick={handleAccClose}>
        <ListItemIcon>
          <IoShieldSharp   />
        </ListItemIcon>
        Reset password
      </MenuItem>
      <MenuItem onClick={handleAccLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
          Log Out
      </MenuItem>
      
    </Menu>
           </div>


        

            </div>
        </div>
    
             </div>

</header>
)
}

export default Header