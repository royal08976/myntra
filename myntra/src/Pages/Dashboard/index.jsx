import React,{useEffect, useState} from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { GiShoppingBag, GiStarsStack } from "react-icons/gi";
import { RxTimer } from "react-icons/rx";
import DashboardBox from '../../Components/DashboardBox';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useNavigate,useLocation } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import { productApi } from "../../../api/productApi";
import { categoryApi } from "../../../api/categoryApi";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';






const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
   
    const [showBy, setShowBy] =useState('');
    const [showByCategory, setShowByCategory] = useState('');
    const [value, setValue] =useState(null);
      
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate=useNavigate()
    const location=useLocation()


    

  //  useEffect(()=>{
  //   fetchData();
    


   
   
  // },[])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

   
    const handleChange = (event) => {
      setShowBy(event.target.value);
    };

    
  
   
    
    const ITEM_HEIGHT = 48;
    const filter = createFilterOptions();

    const handleCategoryChange = (event, value) => {
      setSelectedCategory(value);
    };

    const handleUpdateClick=(item)=>{
      console.log(item)

      
    
      navigate(`/upload/${item._id}`)
     
    
  }

  const options=[
   " Lastweek",
    "LastMonth",
    "LastYear"
  ]
  const token=localStorage.getItem("token")
  const api=localStorage.getItem("api")

    useEffect(() => {
        const fetchProductsAndCategory = async () => {
            try {
                const [response,categoryResponse] = await Promise.all([
                    productApi(token,api),
                    categoryApi(token,api)])
                
              
                console.log(categoryResponse);
                console.log(response);
                // console.log(response.data.products[2]);

                    const mergedProducts = response.data.products.map((product) => {
                        const category = categoryResponse.data.categories.find((cat) => cat.uid === product.categoryUid);
                        return {
                            ...product,
                            category: category ? category.name : 'Unknown',
                        };
                      });
                      console.log(mergedProducts);
                      setProducts(mergedProducts);

               
                setCategory(categoryResponse.data.categories);
                setLoading(false);
              } catch (error) {
                console.error('Error fetching products:', error);
              }

              // console.log("this shows me :",location.state?.updateData)

              
            };
            
            fetchProductsAndCategory();
          }
          , []);

          
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

    
    
  return (
    <div className='pt-20 ml-5 pb-85'>
     <div className=" flex">
      <div className='w-full md:w-2/3'>
      <div className='flex gap-5 w-[100%] flex-wrap'>
       <div className='w-[48%] h-[200px]'>

        <DashboardBox  text="Total users" color={["#1da256","#48d483"]} icon={    <FaUserCircle size={70} className='p-2  text-gray-400 opacity-30' />
        } grow={true}></DashboardBox>
       </div>
       
       <div className='w-[48%] h-[200px]'>

        <DashboardBox text="Total orders" color={["#c012e2","#eb64fe"]} icon={    <FaShoppingCart size={70} className='p-2  text-gray-400 opacity-30' />
        }></DashboardBox>
       
       </div>
       <div className='w-[48%] h-[200px]'>


        <DashboardBox text="Total stocks"  width={"48%"} height={"200px"}color={["#2c78e5","#60aff5"]} icon={    <GiShoppingBag size={70} className='p-2 text-gray-400 opacity-30' />
        }></DashboardBox>

</div>
<div className='w-[48%] h-[200px]'>

        <DashboardBox text="Total rating"  width={"48%"} height={"200px"}color={["#e1950e","#f3cd29"]} icon={    <GiStarsStack size={70} className='p-2  text-gray-400 opacity-30' />
        }></DashboardBox>
</div>



      </div>
      </div>
      <div className='w-full md:w-1/3  '>
      <div className=' w-[100%] h-[100%]  rounded-lg flex '
      style={{backgroundImage:`linear-gradient( #1e5dd0 , #125be8)`}}
      >
        <div className='flex w-[100%] h-30'>
        <h4 className='text-white text-xl pl-5 pt-4'>
          Total sales
        </h4>
        <div className='ml-auto mt-3 mr-2 relative z-10'>
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
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            <span className='ml-2 mr-3'><RxTimer /></span> {option}
          </MenuItem>
        ))}
      </Menu>

  
      </div>

      

  </div>
  



      
         
      <h3 className='absolute text-white pt-20 pl-10 pr-6 text-4xl font-bold'>$5,334,444,556.00</h3>
      <h6 className='text-white absolute pt-34 pl-10 opacity-50'>last month $43,555,444.00</h6>
      </div>

      </div>
     </div>

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
              <tr key={item._id||index}>
                <td>#{index+1}</td>
                <td><div className='flex items-center w-[150px]'>
                  <div className="imgwrapper mr-2 w-[50%]"><img src={item.image} alt="img" className='h-20 w-40'  /></div>
                  <div className='info whitespace-nowrap overflow-hidden text-overflow-ellipsis w-[50%]'>
                    <h6 className='font-[13px] text-[14px] truncate'>{item.title}</h6>
                    <p className='truncate'>{item.description}</p>

                  </div>
                  
                  </div></td>

                <td>{item.category}</td>
                <td>{item.brand}</td>
                <td><span className=''>${item.price}</span><br />
              </td>
                <td>{item.stock}</td>
                <td>{item.rating}</td>
                <td>{item.order}</td>
                <td>${item.sales}</td>
                <td><div className='actions flex items-center'>
                  <div className=''>

                  <Button color='secondary' sx={{backgroundColor:"rgba(203,60,231,0.1)"}}><IoMdEye />
                  </Button>
                  </div>
               <Button color='success' sx={{backgroundColor:"rgba(26,159,83,0.1)"}} ><FaPencil onClick={()=>handleUpdateClick(item)}/>

                  </Button>
                  <Button color='error' sx={{backgroundColor:"rgba(241,17,51,0.1)"}}> <MdDelete />
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

            <tr>
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


            </tr>

            <tr>
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


            </tr>
            <tr>
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


            </tr>
            <tr>
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


            </tr>
            <tr>
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


            </tr>
            <tr>
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


            </tr>
            <tr>
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


            </tr>
            <tr>
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


            </tr>
          </tbody>



        </table>
        <div className='flex justify-between '>
          <p className='mt-5 ml-3 text-[14px]'>showing <b>12</b> out of <b>100</b> results</p>

        <Pagination count={100} color='secondary' sx={{marginTop:"20px", display:"flex",}} />
        </div>

      </div>

      </div>


     </div>
      </div>
  )
}

export default Dashboard