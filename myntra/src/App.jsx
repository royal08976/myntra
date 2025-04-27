
import './App.css'
import Dashboard from "./Pages/Dashboard"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Login from './Pages/Login'
import { createContext, use } from 'react'
import { useState ,useEffect} from 'react'
import ProductUpload from './Pages/ProductUpload'
import ProductList from './Pages/ProductList'
import { useLocation } from 'react-router-dom'
import Register from './Pages/Register'
import ProductView from './Pages/ProductView'


export const MyContext=createContext()
function App() {
  const [isToggleSidebar,setIsToggleSidebar]=useState(false)
      const [isLogin,setIsLogin]=useState(false)  
      const[loginData,setLoginData]=useState([])
     
      const location=useLocation()
      const path=location.pathname
      
      const pathToHide=["/login","/register"]

      const shouldHide=pathToHide.includes(path)
      

  
const values={
  isToggleSidebar,
  setIsToggleSidebar,
  isLogin,
  setIsLogin,
  loginData,
  setLoginData
  
  
}
// useEffect(()=>{
//   alert(isToggleSidebar)
// },[isToggleSidebar]
// )
  return (
    

<MyContext.Provider value={values}>


{
  !shouldHide  &&
<Header></Header>
}




<div className='main flex  '>



 
  


<div className={`sidebarWrapper  ${isToggleSidebar===true  ?'w-0  ':'w-[20%]'}`}>
  
  
  <Sidebar></Sidebar>
</div>


  

 
 
  <div className={`context  ${isToggleSidebar===true?'w-full':'w-[80%]'} ml-auto` }>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/upload" element={<ProductUpload/>}></Route>
      <Route path="/upload/:id" element={<ProductUpload/>}></Route>

      <Route path="/product_list" element={<ProductList/>}></Route>
      <Route path="/product_view" element={<ProductView/>}></Route>

    </Routes>
  </div>
</div>


</MyContext.Provider>
  
    
  )
}

export default App
