import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../App'
import Button from '@mui/material/Button';
import { MdEmail } from "react-icons/md";

import { useNavigate } from 'react-router-dom';

import { RiLockPasswordFill } from "react-icons/ri";
import logo from "../../src/assets/logo.png"
import { IoHome } from "react-icons/io5";

import { FaUserCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import{ Link } from 'react-router-dom';
import { registerApi } from '/api/registerApi.js';







const Register = () => {
    const [eyeOn,setEyeOn]=useState(false)
    const context=useContext(MyContext)
    const[error,setError]=useState("")
    const [confirmPassError, setConfirmPassError] = useState("");

    const [emailError,setEmailError]=useState("")
    const[formdata,setFormdata]=useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const navigate=useNavigate()

    useEffect(()=>{
context.setIsToggleSidebar(true)
    },[])

    // if(!formdata.email||!formdata.password||!formdata.username){
    //     setError("all fields are required.")

    // }

   

  

    const handleSubmit = async (e) => {
        e.preventDefault();
       
      
        if (!formdata.username || !formdata.email || !formdata.password || !formdata.confirmPassword) {
          setError("All fields are required.");
          return;
        }
      
        if (!isValidEmail(formdata.email)) {
          setEmailError("Enter a valid email.");
          return;
        } else {
          setEmailError("");
        }
      
        if (formdata.password !== formdata.confirmPassword) {
            console.log("password not matched")
          setConfirmPassError("Passwords do not match.");
          return;
        } else {
          setConfirmPassError("");
        }
      
        try {
          const data = await registerApi(formdata);

          if (data.status === 201) {
            navigate("/dashboard");
          }
        } catch (err) {
          console.log(err);
        }
      };
      

    const handleClick=()=>{
setEyeOn(!eyeOn)

    }
    const handleChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }
   
    const isValidEmail=(email)=>{
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

  

   
  return (

    <section className='loginSection relative '>
    <div className='absolute  bg-[url(/image.png)] bg-repeat bg-contain h-screen w-screen  opacity-30 '>
            </div>
            <div className='flex w-full'>
                <div className='w-[65%]'>
                    <h1 className='mt-40 ml-20 text-5xl/15 font-bold uppercase '>best UI/UX Fashion <br /> best  
                        <span className='text-blue-600'> E-commerce Dashboard</span> & Admin Panel
                    </h1>
                    <p className='w-[65%] ml-20 text-xl/6 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti iure, neque dicta unde veniam molestiae, veritatis maiores
                         corporis ipsa temporibus illum ratione nihil saepe vitae optio. Corrupti, expedita ea.</p>

                         <Link to="/dashboard">
                        <Button variant='contained'  sx={{ 
                            marginTop:"50px",
                            marginLeft:"80px",
                            
                        }}  > <IoHome  size={25} className='mr-3'/>
                        
                        <span className='text-xl'>Go TO Home</span></Button>
                        </Link>
                </div>
                
          

    <div className='absolute z-1000  mt-0  ml-235 w-[33%] h-full  '>
        <div className='bg-gray/30 backdrop-blur-md border rounded-lg border-gray-300 h-screen w-[100%]'>
        <div className='logo text-center ml-36 mt-10 '> 
            <img src={logo} alt="" className='h-20 w-20 '/>
            </div>
            <h5 className='font-bold ml-20 text-gray-600 text-xl'>Register a new account</h5>
            {error && 
            <p className="text-red-500 ml-30 font-bold  mt-4">All fields are required</p>
            }
            
            <div className='mt-3 h-auto w-100 '>

                <form className='mt-7' onSubmit={handleSubmit} >

                <div className='relative mt-3 group'>
                    
                    <FaUserCircle   className='absolute text-gray-400 text-2xl top-4 left-10 group-focus-within:text-blue-500 '/>
                    

                        


                    <input required type="text" name="username" value={formdata.name} onChange={handleChange} placeholder='username' className='border-0.2 ml-8 pl-15 outline-none focus:border-blue-300 focus:border-1  focus:bg-gray-300 rounded-lg  h-10 w-[90%] bg-gray-300 mt-2'/>
                    </div>
                    
                    
                    <div className='relative mt-3 group'>
                    <MdEmail  className='absolute text-gray-400 text-2xl top-4 left-10 group-focus-within:text-blue-500'/>



                    <input required type="email" name="email" value={formdata.email} onChange={handleChange} placeholder='email ' className='border-0.2 ml-8 pl-15 outline-none focus:border-blue-300 focus:border-1  focus:bg-gray-300 rounded-lg  h-10 w-[90%] bg-gray-300 mt-2'/>
                   {emailError && 
                   <p className="text-red-500 ml-40 mt-3">enter valid email</p>

                   }
                    </div>
                   
                        <div className=' relative mt-3 group'>
                        <RiLockPasswordFill className='absolute text-gray-400 text-2xl top-4 left-10 group-focus-within:text-blue-500'/>
                    {
                        eyeOn===true?<FaEye className='absolute text-gray-400 text-2xl top-4 left-88' onClick={()=>handleClick()}/>:<FaEyeSlash className='absolute text-gray-400 text-2xl top-4 left-88' onClick={handleClick}/>
                    }
                    
                   
                        {
                            eyeOn===true?
                    <input required type="text"  placeholder='password' name='password' value={formdata.password} onChange={handleChange} className='border-0.2 ml-8 pl-15 outline-none focus:border-blue-300 focus:border-1  focus:bg-gray-300 rounded-lg  h-10 w-[90%] bg-gray-300 mt-2'/>
                    :  
                    <input required type="password" placeholder='password' name='password' value={formdata.password} onChange={handleChange}  className='border-0.2 ml-8 pl-15 outline-none focus:border-blue-300 focus:border-1  focus:bg-gray-300 rounded-lg  h-10 w-[90%] bg-gray-300 mt-2'/>
                    }

                    </div>
                   
                        <div className=' relative mt-3 group'>
                        <FaShieldAlt className='absolute text-gray-400 text-2xl top-4 left-10 group-focus-within:text-blue-500' onClick={handleClick}/>
                        {
                        eyeOn===true?<FaEye className='absolute text-gray-400 text-2xl top-4 left-88' onClick={handleClick}/>:<FaEyeSlash className='absolute text-gray-400 text-2xl top-4 left-88' onClick={handleClick}/>
                    }
                    
                   
                        {
                            eyeOn===true?
                            <>
                    <input required type="text"  name="confirmPassword"  placeholder='confirm password' value={formdata.confirmPassword} onChange={handleChange}  className='border-0.2 ml-8 pl-15 outline-none focus:border-blue-300 focus:border-1  focus:bg-gray-300 rounded-lg  h-10 w-[90%] bg-gray-300 mt-2'/>
                   { confirmPassError && 
                       ( <p className="text-red-500 ml-30 mt-3">{confirmPassError}</p>)}
                            </>

                    
                    :  
                    <>
                    <input required type="password" name="confirmPassword"  placeholder='confirm password' value={formdata.confirmPassword} onChange={handleChange}  className='border-0.2 ml-8 pl-15 outline-none focus:border-blue-300 focus:border-1  focus:bg-gray-300 rounded-lg  h-10 w-[90%] bg-gray-300 mt-2'/>
                    { confirmPassError && 
                       ( <p className="text-red-500 ml-30 mt-3">{confirmPassError}</p>)}
                    </>
                   
                   }

                    </div>

                    <div className='mt-8 ml-5'>
                        <Button
                        
                        ><input required type="checkbox" className='scale-150' /></Button>
                        <span>I agree to all terms and conditions</span>
                    </div>
                    <Button variant='contained' 
                    sx={{marginTop:"40px",
                        marginLeft:"40px",
                        
                        color:"white",
                        position:"absolute",
                        width:"78%"
                        
                        
                    }}
                    onClick={handleSubmit}
                    >Sign up</Button>
                </form>

                {/* <div><h6 className='  mt-10 ml-30 hover:text-blue-500 cursor-pointer font-bold text-gray-500'>Forgot password</h6></div> */}
                {/* <div className=' absolute w-full h-30 border border-amber-600 flex top-100'>

                <hr/>
                <div>

                </div>
                <hr />
                </div> */}
                
                </div>

            <div className='w-100 text-center rounded-lg pb-10 mt-40  cursor-pointer'>
                
                  already registered? <b className='text-blue-500'> <Link to="/login">Login</Link> </b>  
            </div>
                    </div>  
            </div>

            </div>
            </section>
  )
}

export default Register