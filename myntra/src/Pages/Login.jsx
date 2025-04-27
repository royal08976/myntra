import React, { useContext, useEffect ,useState} from 'react'
import logo from "../../src/assets/logo.png"
import { MyContext } from '../App'
// import image from "../../src/assets/image.png"
import Button from '@mui/material/Button';
import { MdEmail } from "react-icons/md";

import { useNavigate } from 'react-router-dom';

import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';    
import { loginApi } from '/api/loginApi.js';



const Login = () => {
    const context=useContext(MyContext)
    const [error,setError]=useState("")
    const [emailError,setEmailError]=useState("")
    const[loginData,setLoginData]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()

    useEffect(()=>{
  
  context.setIsToggleSidebar(true)
    },[]);

    const handleSubmit=async (e)=>{
        console.log("submitted")
        e.preventDefault()

        
        if(!loginData.email||!loginData.password)
{

    setError("All fields are required.")
}   

if(!isValidEmail(loginData.email)){
setEmailError("invalid email address")
}

// navigate("/Dashboard")
        try{
            const data=await loginApi(loginData)
            
            console.log("this is my login response data: ",data)
            const token=data?.data?.token
            const api=data?.data?.user?.apiKey
            console.log("api is getting after login is",api)
            localStorage.setItem("token",token)
            localStorage.setItem("api",api)
        context.setLoginData(data)



            if(data.status===200){
                navigate("/dashboard")
            }
        }catch(err){
            console.log(err)
        }
    }


    const handleChange=(e)=>{
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    const isValidEmail=(email)=>{
        const emailRegex=/^[^/s@]+@[^/s@]+\.[^/s@]+$/;
        return emailRegex.test(email)
    }
  return (
    <section className='loginSection relative '>
        <div className='absolute  bg-[url(/image.png)] bg-repeat bg-contain h-screen w-screen  opacity-30 '>
                </div>

        <div className='absolute z-1000 ml-120 mt-20     mr-120 '>
            <div className='logo text-center ml-36 '> 
                <img src={logo} alt="" className='h-20 w-20 '/>
                </div>
                <h5 className='font-bold ml-27 text-gray-600 text-xl'>Login to Myntra</h5>
                {error && 
                <p className='text-red-600 text-center mt-4'>{error}</p>
                }
            <div className='bg-gray/30 backdrop-blur-md border rounded-lg border-gray-300 mt-4'>
                
                <div className='mt-3 h-auto w-100 '>

                    <form className='mt-10' >
                        <div className='relative'>
                        <MdEmail  className='absolute text-gray-400 text-4xl top-5 left-10'/>


                        <input  required type="email" name="email" value={loginData.email}  onChange={handleChange} placeholder='enter email here' className='border-0.2 ml-8 pl-15 outline-none focus:border-gray-300  focus:bg-gray-300 rounded-lg border-gray-400 h-15 w-[80%] bg-gray-300 mt-2'/>
                        {emailError && 
                        <p className="text-red-500 ml-10">{emailError}</p>
                        }
                        </div>
                       
                            <div className='mt-6 relative'>
                            <RiLockPasswordFill className='absolute text-gray-400 text-4xl top-5 left-10'/>

                        <input  required type="password" name="password" value={loginData.password} onChange={handleChange} placeholder='enter password here' className='border-0.2 ml-8 pl-15 outline-none focus:border-gray-300  focus:bg-gray-300 rounded-lg border-gray-400 h-15 w-[80%] bg-gray-300 mt-2'/>
                        </div>
                        <Button variant='contained' 
                        sx={{marginTop:"50px",
                            marginLeft:"140px",
                            color:"white",
                            position:"absolute"
                            
                            
                        }}
                        onClick={handleSubmit}
                        >Sign IN</Button>
                    </form>

                    <div><h6 className='absolute top-78 left-30 hover:text-blue-500 cursor-pointer font-bold text-gray-500'>Forgot password</h6></div>
                    {/* <div className=' absolute w-full h-30 border border-amber-600 flex top-100'>

                    <hr/>
                    <div>

                    </div>
                    <hr />
                    </div> */}
                    
                    </div>

                <div className='w-100 text-center rounded-lg pb-10 mt-40  cursor-pointer'>
                    
                      Not Registered yet? <Link to="/register"><b className='text-blue-500'> Register </b>  </Link>
                </div>
                        </div>  
                </div>
                </section>
  )
}

export default Login