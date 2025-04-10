import React  from 'react'
import { IoMdHome } from "react-icons/io";
import Rating    from '../Components/Rating';
import { TiDelete } from "react-icons/ti";
import { FaImages } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useLocation, useParams } from 'react-router-dom';
import { singleItemApi } from '../../api/singleItemApi';
import { useEffect, useState,useContext } from "react";
import { patch } from '@mui/material';
import { PatchItems } from '../../api/PatchItems';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { categoryApi } from '../../api/categoryApi';




const ProductUpload = () => {
    const {id}=useParams()
    console.log(id)
    const navigate=useNavigate()
    const location=useLocation()
    const [value, setValue] =useState(null);
    const[category,setCategory]=useState([])



    //fetching single item data

    // const {data,status}=singleItemApi(id)
    // console.log(data)
    const [productData,setProductData]=useState({
        title:"",
        description:"",
        category:"",
        brand:"",
        price:"",
        sales:"",
        stock:"",
        order:"",
        rating:"",
        categoryUid:""
    })
    const [loading,setLoading]=useState(true)

    // const {product,setUpdateProduct}=location.state
   
    useEffect(()=>{
        const fetchData=async(id)=>{
            const res=await singleItemApi(id)
            const categoryRes=await categoryApi()
            setCategory(categoryRes.data.categories)
            
            // console.log(res)
            
            // console.log("res.data",res.data)
            const item=res.data.product
            setProductData(res.data.product);
          
        }
        fetchData(id)
    },[id])

    const categories = category.map((item) => ({
        title: item.name,
        uid: item.uid,
      }));

      const categoryName=categories.find((item)=>item.uid==productData.categoryUid)
      const selectedCategory = categoryName || null;

      console.log("my category name is :",selectedCategory)
  
    console.log("my category name is :",productData.category)
    console.log("my category is :",  categories)
  
    console.log("my product  is :",  productData)
    console.log("my product  category is :",  productData.categoryUid)
    // console.log("type of product data is :",typeof productData)
    
    const handleSubmit=async(e)=>{
        console.log("submitted")
        e.preventDefault()

        // setProductData((prev)=>{
        //   return{
        //     ...prev,
        //     categoryUid:selectedCategory?.uid
        //   }
        // })
        // const updatedData={
        //   ...productData,
        //   categoryUid:selectedCategory?.uid
        // }
        // setProductData(updatedData)
        // console.log("sending this to backend :",updatedData)
        try{

          const data=await PatchItems(id,productData)
          console.log("my data is ",data)
          
          navigate("/product_list", { state: { updateData: data,msg:"your product updated successfully" } });
        }
        catch(err){
          console.log(err)
        }


      

        // setProductData((updatedVersion)=>{
        //     const filteredData=updatedVersion.filter((item)=>item.id!==id)
        //     return[updatedData,...filteredData]
        // })


        
        
                
        

    }

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

      const filter = createFilterOptions();

      
  return (
    <div>

    <div className='ml-8 mt-29 w-[94%] h-20 bg-white rounded-xl drop-shadow-md  flex justify-between '>
       <div className="pt-6 pl-5 text-xl">

        ProductUpload
       </div>

       <div className='flex text-sm mt-6 w-[50%]  gap-10 pl-4'>

        <div className='flex w-[20%] bg-gray-100 h-[24px] rounded-[25px]'><span className='pl-0.5 mr-1 -mt-0.5'><IoMdHome size={20} color='gray'/></span>Dashboard</div>/
        <div className='w-[14%] bg-gray-100 h-[23px] rounded-[25px] pl-2'>products</div>/
    <div className='w-[24%] bg-gray-100 h-[23px] rounded-[25px] pl-2'>product Upload</div>
        
       </div>
        
        </div>

        <div className='ml-8 mt-7 w-[94%] h-auto bg-white rounded-xl drop-shadow-md'>
            <div className='pt-5 pl-4 font-bold text-gray-500 text-xl' >Basic information </div>
            <form  >
                <div className='mt-5 '>

                <label htmlFor="pname" className='pt-10 ml-4 text-[15px]'>Product Name </label>

           <input type="text"
            
              value={productData.title}
            onChange={(e)=>setProductData({...productData,title:e.target.value})}
           className='bg-gray-100 ml-4 mt-2 w-[95%] h-[50px] border-1 focus:border-transparent focus:outline-none border-gray-300 rounded pl-5'/>
                </div>
            <div className='mt-5 ml-4'>
                <label htmlFor="description">
                    Description 
                </label><br />
                <textarea name="Description"  
                value={productData.description}
                onChange={(e)=>setProductData({...productData,description:e.target.value})}
                id="des" className='w-[96%] mt-2 pl-5 pt-2 focus:border-transparent focus:outline-none bg-gray-100 border-1 border-gray-300 rounded h-[100px]'></textarea>
            </div>

            <div className='flex flex-wrap w-full '>

            <div className='mt-5 w-[30%] ml-4 '>
                 <h4 className='text-[15px] font-semibold text-gray-500'>CATEGORY BY</h4>
                 <Autocomplete
                 sx={{ width:"300px !important",
                    marginTop:"5px"
                  }}
             value={selectedCategory}
             onChange={(event, newValue) => {
                if (newValue) {
                  setProductData({ ...productData, categoryUid: newValue.uid });
                }
              }}

             filterOptions={(options, params) => {
               const filtered = filter(options, params);
       
               const { inputValue } = params;
               // Suggest the creation of a new value
               const isExisting = options.some((option) => inputValue === option.title);
               if (inputValue !== '' && !isExisting) {
                 filtered.push({
                   inputValue,
                   title: `Add "${inputValue}"`,
                 });
               }
       
               return filtered;
             }}
             selectOnFocus
             clearOnBlur
             handleHomeEndKeys
             id="free-solo-with-text-demo"
             options={categories}
             getOptionLabel={(option) => {
               // Value selected with enter, right from the input
               if (typeof option === 'string') {
                 return option;
               }
               // Add "xxx" option created dynamically
               if (option.inputValue) {
                 return option.inputValue;
               }
               // Regular option
               return option.title;
             }}
             renderOption={(props, option) => {
               const { key, ...optionProps } = props;
               return (
                 <li key={key} {...optionProps}>
                   {option.title}
                 </li>
               );
             }}
           
             freeSolo
             renderInput={(params) => (
               <TextField {...params} label="category" />
             )}
           />
             
               </div>
             
                <div className='mt-5 ml-4 w-[30%]'>

<label htmlFor="brand" className='pt-10 ml-4 text-[15px]'>Brand </label>

<input type="text"
value={productData.brand}
onChange={(e)=>setProductData({...productData,brand:e.target.value})}
className='bg-gray-100 ml-4 mt-2 w-[100%] h-[50px] pl-4 border-1 focus:border-transparent focus:outline-none border-gray-300 rounded '/>
</div>

<div className='mt-5 ml-7 w-[30%] '>

<label htmlFor="brand" className='pt-10 ml-4 text-[15px]'>Price </label>

<input type="text" 
value={productData.price}
onChange={(e)=>setProductData({...productData,price:e.target.value})}
className='bg-gray-100 ml-4 mt-2 w-[100%] h-[50px] pl-4 border-1 focus:border-transparent focus:outline-none border-gray-300 rounded '/>
</div>


<div className='mt-5 w-[30%] '>

<label htmlFor="brand" className='pt-10 ml-4 text-[15px]'> sales </label>

<input type="text"
value={productData.sales}
onChange={(e)=>setProductData({...productData,sales:e.target.value})}    
className='bg-gray-100 ml-4 mt-2 w-[100%] h-[50px] pl-4 border-1 focus:border-transparent focus:outline-none border-gray-300 rounded '/>
</div>


<div className='mt-5 ml-7 w-[30%]'>

<label htmlFor="brand" className='pt-10 ml-4 text-[15px]'>Product Stock </label>

<input type="text"
value={productData.stock}
onChange={(e)=>setProductData({...productData,stock:e.target.value})}
className='bg-gray-100 ml-4 mt-2 w-[100%] h-[50px] pl-4 border-1 focus:border-transparent focus:outline-none border-gray-300 rounded '/>
</div>

<div className='mt-5 ml-7 w-[30%]'>

<label htmlFor="brand" className='pt-10 ml-4 text-[15px]'>Order </label>

<input type="text"
value={productData.order}
onChange={(e)=>setProductData({...productData,order:e.target.value})}
className='bg-gray-100 ml-4 mt-2 w-[100%] h-[50px] pl-4 border-1 focus:border-transparent focus:outline-none border-gray-300 rounded '/>
</div>
        
        <div className='mt-5 ml-7 w-[30%] '><Rating totalStars={5} rating={Math.floor(productData.rating)}></Rating></div>


        
        
            </div>

            </form>
        </div>

        <div className='ml-8 mt-7 w-[94%] h-100 bg-white rounded-xl drop-shadow-md ' >
            <h4 className='pt-7 ml-8 text-xl text-gray-500 font-bold'>Media and Published</h4>
            <div className='flex w-[50%] gap-7 mt-10 ml-10'>
                <div className='h-40 w-40 border-2 border-gray-400 border-dashed relative'>
                    <div className='absolute z-10 pl-35.5 -mt-3.5 ' >

                    <TiDelete size={26} color='red'/>

                    </div>
                    <div>
                        <img src={productData.image} alt="" />
                    </div>
                </div>
                <div className='h-40 w-40 border-2 border-gray-400 border-dashed'>
               
                {/* <p className='text-center text-gray-500'>image upload</p>
                
                */}
                
                <Button
                disableRipple disableElevation
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
 sx={
    {
        backgroundColor:"white",
        color:"gray",
        border:'none',
        boxShadow:"none",
        textTransform:"capitalize",
        // marginLeft:"20px",
        height:"155px",
        width:"100%",
        
        // marginTop:"50px"
        
    display:"block  "


    }
 }
> <div className='pl-5 pt-5 mb-3  '>



<FaImages size={80} color='gray'  className='opacity-39'/>
</div>
<div className='pl-5 opacity-55 font-semibold'>

  Upload files
</div>
  <VisuallyHiddenInput
    type="file"
    onChange={(event) => console.log(event.target.files)}
    multiple
  />

 
</Button>
                    </div>

            </div>
            { id ===null ?  <Button    variant="contained"
                    sx={{
                        marginTop:"60px",
                        marginLeft:"30px",
                        width:"94%",
                        marginRight:"30px",
                        type:"submit",

                    }}
                    
                    ><span className='mr-3 '><FaCloudUploadAlt size={30}/>
</span>Publish and view</Button>:  <Button    variant="contained"   
                    sx={{
                        marginTop:"60px",
                        marginLeft:"30px",
                        width:"94%",
                        marginRight:"30px",
                        type:"submit",

                    }}
                    onClick={handleSubmit} 
                  
                    ><span className='mr-3 '><FaCloudUploadAlt size={30}/>
</span>Update and view</Button>

}
                  
        </div>

    </div>
  )
}

export default ProductUpload