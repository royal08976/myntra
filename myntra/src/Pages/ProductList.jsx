import React, {use, useState,useEffect} from 'react'
import { IoMdHome } from "react-icons/io";
// import SmallDashbox from '../Components/SmallDashbox';
import SmallDashbox from '../Components/SmallDashbox';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { GiShoppingBag, GiStarsStack } from "react-icons/gi";
import Select from '@mui/material/Select';
import { IoMdEye } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { productApi } from '../../api/productApi';
import { categoryApi } from '../../api/categoryApi';
import { pageApi } from '../../api/pageApi';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




const ProductList = () => {

    const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);
       
        const [showBy, setShowBy] =useState('');
        
        const [products, setProducts] = useState([]);
        const [category, setCategory] = useState([]);
        const [loading, setLoading] = useState(true);
        const [currentPage,setCurrentPage]=useState(1)
        const [tempProduct,setTempProduct]=useState({
          id:null,
          item:null
        })


        const [selectedCategory, setSelectedCategory] = useState(null);
        const navigate=useNavigate()
        const location=useLocation()

        // console.log("location is",location)
        // console.log("location.state is",location.state)

        // setTimeout(()=>{

        //   alert(location.state.msg)
        // },5000)
        // const singleUpdatedData=location.state.updateData.data.product
        // console.log("updated data is:",singleUpdatedData)
        

    
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
      
      
    
       
        const handleChange = (event) => {
          setShowBy(event.target.value);
        };
        const handleCategoryChange = (event, value) => {
          setSelectedCategory(value);
        };


        const handleUpdateClick=(item,index)=>{
          console.log("item and its index is:",item,index+1)
        
          setTempProduct({id:index,item:item})
        
        
        
          
        
          navigate(`/upload/${item._id}`)
        
        
        
        }


        useEffect(() => {
            

          const fetchProductsAndCategory = async () => {
            try {
              const [response, categoryResponse,pageResponse] = await Promise.all([
                productApi(),
                categoryApi(),
                pageApi(currentPage)
               
              ]);

              const pageResult=pageResponse.data.products
              console.log("my page result  is ",pageResult)
        
              const mergedProducts = pageResult.map((product) => {
                const category = categoryResponse.data.categories.find(
                  (cat) => cat.uid === product.categoryUid
                );
                return {
                  ...product,
                  category: category ? category.name : 'Unknown',
                };
              });
        
              // Get updated product from navigation state
              const updatedItem = location.state?.updateData?.data?.product;
              console.log("updated item is:",updatedItem)

        
              let finalProducts = mergedProducts;
        
              if (updatedItem) {

                 //  Find matching category
  const updatedCategory = categoryResponse.data.categories.find(
    (cat) => cat.uid === updatedItem.categoryUid
  );

  console.log(" here the new updatedcategory is:", updatedCategory)

  //  Merge category name
  const updatedItemWithCategory = {
    ...updatedItem,
    category: updatedCategory ? updatedCategory.name : 'Unknown',
  };
                // Move updated product to top
                
  finalProducts = [
    updatedItemWithCategory,
    ...mergedProducts.filter((p) => p._id !== updatedItem._id),
  ];
                console.log("Brought updated item to top:", finalProducts);
               setTimeout(()=>{

              })
              
              
            }else{
              console.log("real fetch from api :",mergedProducts)
            }
            
            setProducts(finalProducts);
            setCategory(categoryResponse.data.categories);
            setLoading(false);
            
            
          } catch (error) {
            console.error('Error fetching products:', error);
          }
          finally{
            setTimeout(()=>{

              const updateMsg=location.state?.msg
              if(updateMsg!==undefined){
        
                alert(updateMsg)
              }
            },1000)
          }
        };
        
        fetchProductsAndCategory();
      }, [location.state,currentPage]);
      
     

        useEffect(() => {
          if (location.state?.updateData) {
            console.log("window.history is:", window.history)
            console.log("document.title is :", document.title)
            window.history.replaceState({}, document.title);
          }
        }, [location]);


        // useEffect(()=>{

          

        //     const fetchSinglePageData=async()=>{
        //       try{
        //       const res=await pageApi(currentPage)
        //       const pageResult=res.data.products
        //       console.log(`my data on this page ${currentPage} is :` , pageResult)

        //       // const mergeWithCategory=pageResult.map((product)=>{
        //       //   categories.find((cat)=>cat.uid===product.uid)
        //       // })


        //       setProducts(pageResult)
        //   }catch(err){
        //     console.log(err)
        //   }
          
        // }


         
        //   fetchSinglePageData()
           
        // },[currentPage])
        
        
                  const filter = createFilterOptions();
              
              // const Products = response.data.products;

              const categories = category.map((item) => ({
                title: item.name,
                uid: item.uid,
              }));
  // Get category uid
  const selectedCatUid = selectedCategory?.uid;
  console.log("selectCatUid is",selectedCatUid)
              

              
  // Filter products based on selected uid
  const filteredProducts = selectedCatUid
  ? products.filter(p => p.categoryUid === selectedCatUid)
  : products

  console.log(filteredProducts)



  // useEffect(() => {
  //   const updatedItem = location.state?.updateData;
  //   if (updatedItem) {
  //     setTempProduct({ id: null, item: updatedItem });
  //   }
  // }, [location.state]);
  




const handleDeleteClick=(item)=>{
  console.log(item._id)

  

    const filteredData=products.filter((p)=>p._id!==item._id)
    console.log("filteredData" ,filteredData )
    setProducts([...filteredData])
  
}
  

          
                          // useEffect(()=>{
                            
                          //   const tempItem=tempProduct.item
                          //   console.log("my temporary item is :",tempItem)
                           
                          
                          //     const updatedProduct=products.filter((_,index)=>index!==tempProduct.id) 
                          //   console.log("updated product is:", updatedProduct)
                          //   console.log("temp final product will look like :",[tempProduct.item,...updatedProduct])
                          //   setProducts([tempProduct.item,...updatedProduct])
                            
                            
                            
                          // },
                          // [tempProduct]
                          // )



                          const handlePageChange=(event,value)=>{
                            console.log(value)
                            setCurrentPage(value)
                          }
if (loading){
  console.log("loading is :",loading)
  return(  <div className=" animate-pulse">
      <div className='ml-8 mt-29 w-[94%] h-20 bg-gray-300 rounded-xl drop-shadow-md  flex justify-between '></div>
      <div className='w-full flex ml-8 mt-5 gap-5'>

      <div className='w-[30%] h-20 bg-gray-300 rounded-2xl'></div>
      <div className='w-[30%] h-20 bg-gray-300 rounded-2xl'></div>
      <div className='w-[30%] h-20 bg-gray-300 rounded-2xl'></div>
      </div>
      <div className='card shadow border-0 p-3 mt-5 h-200 ml-8 mr-10 text-left pt-4 rounded-2xl bg-gray-300'> </div>
  </div>)
}
  return (

    <div> 

   
      <div className='ml-8 mt-29 w-[94%] h-20 bg-white rounded-xl drop-shadow-md  flex justify-between '>
          
          
           <div className="pt-6 pl-5 text-xl">
    
            Product View
           </div>
    
           <div className='flex text-sm mt-6 w-[30%]  gap-10 pl-4 '>
    
            <div className='flex w-[35%] bg-gray-100 h-[24px] rounded-[25px]'><span className='pl-0.5 mr-1 -mt-0.5'><IoMdHome size={20} color='gray'/></span>Dashboard</div>/
            <div className='w-[26%] bg-gray-100 h-[23px] rounded-[25px] pl-2'>products</div>
            
           </div>
            
            </div>

            {/* //second portion */}
            
            <div className='w-full flex ml-8 mt-5 gap-5'>
                <div className='w-[30%] h-10'>

            <SmallDashbox   color={["#1da256","#48d483"]} icon={    <FaUserCircle size={70} className='p-2  text-gray-400 opacity-30' />
        } grow={true}></SmallDashbox>
                </div>
                < div className='w-[30%]'>
                

        <SmallDashbox color={["#c012e2","#eb64fe"]} icon={    <FaShoppingCart size={70} className='p-2  text-gray-400 opacity-30' />
        }></SmallDashbox>
         </div>
         <div className='w-[30%]'>
        <SmallDashbox color={["#2c78e5","#60aff5"]} icon={    <GiShoppingBag size={70} className='p-2 text-gray-400 opacity-30' />
        }></SmallDashbox>


</div>
            </div>
            
            {/* third portion */}

            <div className='card shadow border-0 p-3 mt-5 h-auto ml-8 text-left pt-4'> 
      <h3 className='text-gray-600   text-[20px] font-bold'>Best selling Products</h3>
      <div className='flex gap-5 mt-5 flex-wrap'>
            
        <div className='w-full md:w-1/5'>
          <h4 className='text-[15px] font-semibold text-gray-500'>SHOW BY</h4>
        <Select
          value={showBy}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='w-full'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      
        </div>

    

       <div className='w-full md:w-1/5'>
                 <h4 className='text-[15px] font-semibold text-gray-500'>CATEGORY BY</h4>
                 <Autocomplete
                 sx={{ width:"200px !important" }}
             value={selectedCategory}
             onChange={handleCategoryChange}
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


       


        
      <div className=" items overflow-x-auto mt-2 w-full">


        <table className='table-auto border-collapse border border-white w-full '>
          <thead className='bg-black text-white  text-xl '>
           <tr>

            <th>UID</th>
            <th>PRODUCT</th>

            <th>CATEGORY</th>

            <th>BRAND</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>RATING</th>
            <th>ORDER</th>
            <th>SALES</th>
            <th>ACTIONS</th>
           </tr>

          </thead>
          <tbody>
            {filteredProducts.map((item,index) => (
              <tr key={item?._id||index}>
                <td>#{index+1}</td>
                <td><div className='flex items-center w-[150px]'>
                  <div className="imgwrapper mr-2 w-[50%]"><img src={item?.image} alt="img" className='h-20 w-40'  /></div>
                  <div className='info whitespace-nowrap overflow-hidden text-overflow-ellipsis w-[50%]'>
                    <h6 className='font-[13px] text-[14px] truncate'>{item?.title}</h6>
                    <p className='truncate'>{item?.description}</p>

                  </div>
                  
                  </div></td>

                <td>{item?.category}</td>
                <td>{item?.brand}</td>
                <td><span className=''>${item?.price}</span><br />
              </td>
                <td>{item?.stock}</td>
                <td>{item?.rating}</td>
                <td>{item?.order}</td>
                <td>${item?.sales}</td>
                <td><div className='actions flex items-center'>
                  <div className=''>

                  <Button color='secondary' sx={{backgroundColor:"rgba(203,60,231,0.1)"}}><IoMdEye />
                  </Button>
                  </div>
               <Button color='success' sx={{backgroundColor:"rgba(26,159,83,0.1)"}} ><FaPencil onClick={()=>handleUpdateClick(item,index)}/>

                  </Button>
                  <Button color='error' sx={{backgroundColor:"rgba(241,17,51,0.1)"}}> <MdDelete onClick={()=>handleDeleteClick(item)} />
                  </Button>
                  
                  </div></td>
                  </tr>

           )) }
         

            {/* <tr>
              <td>#1</td>
              <td><div className='flex items-center w-[150px]'>
                <div className="imgwrapper mr-2"><img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="img" /></div>
                <div className='info whitespace-nowrap overflow-hidden text-overflow-ellipsis'>
                  <h6 className='font-[13px] text-[14px] truncate'>Tops and skirts for women</h6>
                  <p className='truncate'>womens exclusive tops and skirt sets for female tops and skirt set</p>

                </div>
                
                </div></td>

              <td>women</td>
              <td>Richman</td>
              <td><span className='line-through'>$21</span><br />
              <span className='text-red-600 text-[14px]'>$19</span></td>
              <td>30</td>
              <td>4.9(16)</td>
              <td>380</td>
              <td>$38k</td>
              <td><div className='actions flex items-center'>
                <div className=''>

                <Button color='secondary' sx={{backgroundColor:"rgba(203,60,231,0.1)"}}><IoMdEye />
                </Button>
                </div>
                <Button color='success' sx={{backgroundColor:"rgba(26,159,83,0.1)"}}><FaPencil />

                </Button>
                <Button color='error' sx={{backgroundColor:"rgba(241,17,51,0.1)"}}> <MdDelete />
                </Button>
                
                </div></td>


            </tr> */}

            
          </tbody>



        </table>
        <div className='flex justify-between '>
          <p className='mt-5 ml-3 text-[14px]'>showing <b>{currentPage}</b> out of <b>100</b> pages</p>

        <Pagination 
        count={100} 
        color='secondary'
        page={currentPage}
        onChange={handlePageChange}
        sx={{marginTop:"20px", display:"flex",}} />
        </div>

      </div>

      </div>


     </div>
            
            
            
            
            
            
            
            
          </div>
  )
}

export default ProductList