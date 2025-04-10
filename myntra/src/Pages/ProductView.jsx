import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdBrandingWatermark } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";

import { IoIosPricetags } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";
import user from "../assets/user.png"
import { IoStar } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { Button } from '@mui/material';
import { FaReplyAll } from "react-icons/fa";








const ProductView = () => {
  return (
    <>
    
     <div className='ml-8 mt-29 w-[94%] h-20 bg-white rounded-xl drop-shadow-md  flex justify-between '>
          <div className="pt-6 pl-5 text-xl">
   
           Product View
          </div>
   
          <div className='flex text-sm mt-6 w-[50%]  gap-10 pl-4'>
   
           <div className='flex w-[20%] bg-gray-100 h-[24px] rounded-[25px]'><span className='pl-0.5 mr-1 -mt-0.5'><IoMdHome size={20} color='gray'/></span>Dashboard</div>/
           <div className='w-[14%] bg-gray-100 h-[23px] rounded-[25px] pl-2'>products</div>/
       <div className='w-[24%] bg-gray-100 h-[23px] rounded-[25px] pl-2'>product View</div>
           
          </div>
           
           </div>

            {/* //second portion  */}

            <div className='card shadow border-0 bg-white p-3 mt-5 mr-9 rounded-2xl h-auto ml-8 text-left pt-4'>
            <div className="flex ">

            <div className='w-[50%] flex flex-wrap'>

                <div className='ml-3 font-bold w-full text-gray-500 text-[20px] mt-3'>
                    Product Gallery
                </div>
                <div className='border-2 border-opacity-50 h-90 w-[70%] mt-3 ml-3 border-dashed  border-gray-500'>
                        <img className='h-full w-full' src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" alt="img" />
                </div>
                <div className='flex gap-3 mt-3 ml-3 '>
                    <div className='border-1 border-gray-500 w-20 border-dashed h-20 '>
                    <img className='h-full w-full' src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp" alt="img" />

                    </div>
                    <div className='border-1 border-gray-500 w-20 border-dashed h-20 '>

                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp" 
                        alt=""
                         className="h-full w-full" />
                    </div>
                    <div className='border-1 border-gray-500 w-20 border-dashed h-20 '>

                    <img src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp" 
                        alt=""
                         className="h-full w-full" />
                    </div>
                    <div className='border-1 border-gray-500 w-20 border-dashed h-20 '>

                    <img src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp" 
                        alt=""
                         className="h-full w-full" />
                    </div>
                </div>

            </div>

            <div className='w-[50%] flex flex-wrap'>


            <div className=" mt-3 font-bold text-[20px] w-full text-gray-500">Product Details</div>


            <div className='w-full'>the most demanding gadgets that have higher capacity to do <br />
            work easily and flexibly</div>
            <div className='w-full font-bold flex text-[16px] gap-2 text-gray-500'><span className='text-gray-500 '><MdBrandingWatermark size={22} />
            </span>Brand:</div>
            <div className='w-full font-bold flex text-[16px] gap-2 text-gray-500'>
                <span><IoIosPricetags size={22} />
                </span>
                Price:</div>
            <div className='w-full font-bold flex text-[16px] gap-2 text-gray-500'>
                <span className='text-gray-500'><BsCollectionFill size={22} />
                </span>
                Stock:</div>
            <div className='w-full font-bold flex text-[16px] gap-2 text-gray-500'>
                <span className='text-gray-500'><FaBagShopping size={22} />
                </span>
                sales:</div>
            <div className='w-full font-bold flex text-[16px] gap-2 text-gray-500'>
                <span className='text-gray-500'><FaFilePen size={22}/>
                </span>
                orders:</div>

            </div>  
            </div>
                
                
                
                 {/* third portion */}


                 <div className='flex flex-wrap mt-8 ml-3'>

<div className='font-bold text-[20px] text-gray-500'>

   Product Description 
</div>
<p className='mt-3 text-gray-600'>Lorem
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, incidunt quas. Fugiat soluta doloremque quae omnis distinctio sequi saepe beatae
     deleniti quia magnam dolorem, nulla architecto 
     eaque ratione vel quod. ipsum dolor sit amet, consectetur adipisicing elit. Quidem magnam minima optio, consequatur similique culpa eveniet voluptates ipsa at minus aliquam exercitationem tenetur nihil quibusdam quasi dolore sit provident adipisci!</p>
</div>
                


                {/* rating portion */}
                <div className='flex flex-wrap w-[100%]'>
                <div className="ml-3 mt-5 font-bold text-gray-500 text-[20px] w-full">Rating Analysis</div>
                
                
                </div>
                <div className='ml-3 mt-5 w-[70%] flex '>

                <div className=" w-[10%] ">5 star 
                </div>
                    <div className='w-[30%] h-[6px] rounded-l-2xl  mt-3 ml-2 bg-yellow-500'></div>
                    <div className='w-[10%] h-[6px] rounded-r-2xl  mt-3  bg-gray-300'></div>
                    <div className='ml-2'>(22)</div>
                

                </div>
                <div className='ml-3 mt-5 w-[70%] flex '>

                <div className=" w-[10%] ">4 star 
                </div>
                    <div className='w-[20%] h-[6px] rounded-l-2xl  mt-3 ml-2 bg-yellow-500'></div>
                    <div className='w-[20%] h-[6px] rounded-r-2xl  mt-3  bg-gray-300'></div>
                    <div className='ml-2'>(22)</div>
                

                </div>
                <div className='ml-3 mt-5 w-[70%] flex '>

                <div className=" w-[10%] ">3 star 
                </div>
                    <div className='w-[15%] h-[6px] rounded-l-2xl  mt-3 ml-2 bg-yellow-500'></div>
                    <div className='w-[25%] h-[6px] rounded-r-2xl  mt-3  bg-gray-300'></div>
                    <div className='ml-2'>(22)</div>
                

                </div>
                <div className='ml-3 mt-5 w-[70%] flex '>

                <div className=" w-[10%] ">2 star 
                </div>
                    <div className='w-[17%] h-[6px] rounded-l-2xl  mt-3 ml-2 bg-yellow-500'></div>
                    <div className='w-[23%] h-[6px] rounded-r-2xl  mt-3  bg-gray-300'></div>
                    <div className='ml-2'>(22)</div>
                

                </div>
                <div className='ml-3 mt-5 w-[70%] flex '>

                <div className=" w-[10%] ">1 star 
                </div>
                    <div className='w-[14%] h-[6px] rounded-l-2xl  mt-3 ml-2 bg-yellow-500'></div>
                    <div className='w-[26%] h-[6px] rounded-r-2xl  mt-3  bg-gray-300'></div>
                    <div className='ml-2'>(22)</div>
                

                </div>


                    {/* //review portion  */}

                    <div className='mt-7 ml-3'>

                    <div className='font-bold text-xl text-gray-500'> Customer Reviews</div>

                    <div className='bg-gray-200 h-60 mt-5  rounded-2xl mr-5'>


                    <div className='flex w-full'>

                        <div className='myAcc flex items-center w-[50%] mt-1 ml-5'>
                                  <div className='userImg mt-4'>
                                      <span >
                                          <img src={user} alt="userImg" className='rounded-full w-15 h-15' />
                                  
                                      </span>
                                  </div>
                                  <div className='userInfo ml-2 pr-3 mt-4'>
                                      <h4>Rajesh Swain</h4>
                                      <h2>25 minutes ago!</h2>

                                      
                                  </div>
                               </div>
                               

                               <div className="w-[50%]" relative>
                                <Button variant='contained' 
                                sx={{
                                    textTransform:"capitalize",
                                    
                                }}
                                className='absolute top-10 left-80 ' >
                                    <span className='mr-3'><FaReplyAll  size={30}/>
                                    </span>Reply</Button>
                               </div>
                               
                               </div>
                        
                        <div className='flex mt-4 ml-6 gap-1'>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoIosStarHalf size={20} />
                            </span>
                        </div>

                        <p className='ml-5 text-gray-500 mt-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eaque consequuntur facilis fugit, quo autem sint sed quisquam totam delectus,
                             necessitatibus nostrum vitae illo, ipsam maxime tempora reprehenderit! Sint,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem rerum quis corporis nam dolor sit ratione incidunt ex, natus, nemo mollitia earum sequi recusandae illum magni voluptatum, dignissimos unde laborum.
                              neque.</p>
                    </div>

                    <div className='bg-gray-200 h-70 mt-5   ml-40 rounded-2xl mr-5'>


                    <div className='flex w-full'>

                        <div className='myAcc flex items-center w-[50%] mt-1 ml-5'>
                                  <div className='userImg mt-4'>
                                      <span >
                                          <img src={user} alt="userImg" className='rounded-full w-15 h-15' />
                                  
                                      </span>
                                  </div>
                                  <div className='userInfo ml-2 pr-3 mt-4'>
                                      <h4>Rajesh Swain</h4>
                                      <h2>25 minutes ago!</h2>

                                      
                                  </div>
                               </div>
                               

                               <div className="w-[50%]" relative>
                                <Button variant='contained' 
                                sx={{
                                    textTransform:"capitalize",
                                    
                                }}
                                className='absolute top-10 left-60 ' >
                                    <span className='mr-3'><FaReplyAll  size={30}/>
                                    </span>Reply</Button>
                               </div>
                               
                               </div>
                        
                        <div className='flex mt-4 ml-6 gap-1'>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoIosStarHalf size={20} />
                            </span>
                        </div>

                        <p className='ml-5 text-gray-500 mt-2 pb-4 pr-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eaque consequuntur facilis fugit, quo autem sint sed quisquam totam delectus,
                             necessitatibus nostrum vitae illo, ipsam maxime tempora reprehenderit! Sint,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem rerum quis corporis nam dolor sit ratione incidunt ex, natus, nemo mollitia earum sequi recusandae illum magni voluptatum, dignissimos unde laborum.
                              neque.</p>
                    </div>

                    <div className='bg-gray-200 h-auto mt-5  ml-40 rounded-2xl mr-5'>


                    <div className='flex w-full'>

                        <div className='myAcc flex items-center w-[50%] mt-1 ml-5'>
                                  <div className='userImg mt-4'>
                                      <span >
                                          <img src={user} alt="userImg" className='rounded-full w-15 h-15' />
                                  
                                      </span>
                                  </div>
                                  <div className='userInfo ml-2 pr-3 mt-4'>
                                      <h4>Rajesh Swain</h4>
                                      <h2>25 minutes ago!</h2>

                                      
                                  </div>
                               </div>
                               

                               <div className="w-[50%]" relative>
                                <Button variant='contained' 
                                sx={{
                                    textTransform:"capitalize",
                                    
                                }}
                                className='absolute top-10 left-60 ' >
                                    <span className='mr-3'><FaReplyAll  size={30}/>
                                    </span>Reply</Button>
                               </div>
                               
                               </div>
                        
                        <div className='flex mt-4 ml-6 gap-1'>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoIosStarHalf size={20} />
                            </span>
                        </div>

                        <p className='ml-5 text-gray-500 mt-2 pb-3 pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eaque consequuntur facilis fugit, quo autem sint sed quisquam totam delectus,
                             necessitatibus nostrum vitae illo, ipsam maxime tempora reprehenderit! Sint,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem rerum quis corporis nam dolor sit ratione incidunt ex, natus, nemo mollitia earum sequi recusandae illum magni voluptatum, dignissimos unde laborum.
                              neque.</p>
                    </div>

                    <div className='bg-gray-200 h-60 mt-5 rounded-2xl mr-5'>


                    <div className='flex w-full'>

                        <div className='myAcc flex items-center w-[50%] mt-1 ml-5'>
                                  <div className='userImg mt-4'>
                                      <span >
                                          <img src={user} alt="userImg" className='rounded-full w-15 h-15' />
                                  
                                      </span>
                                  </div>
                                  <div className='userInfo ml-2 pr-3 mt-4'>
                                      <h4>Rajesh Swain</h4>
                                      <h2>25 minutes ago!</h2>

                                      
                                  </div>
                               </div>
                               

                               <div className="w-[50%]" relative>
                                <Button variant='contained' 
                                sx={{
                                    textTransform:"capitalize",
                                    
                                }}
                                className='absolute top-10 left-80 ' >
                                    <span className='mr-3'><FaReplyAll  size={30}/>
                                    </span>Reply</Button>
                               </div>
                               
                               </div>
                        
                        <div className='flex mt-4 ml-6 gap-1'>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoStar size={20} />
                            </span>
                            <span className='text-yellow-500'><IoIosStarHalf size={20} />
                            </span>
                        </div>

                        <p className='ml-5 text-gray-500 mt-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eaque consequuntur facilis fugit, quo autem sint sed quisquam totam delectus,
                             necessitatibus nostrum vitae illo, ipsam maxime tempora reprehenderit! Sint,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem rerum quis corporis nam dolor sit ratione incidunt ex, natus, nemo mollitia earum sequi recusandae illum magni voluptatum, dignissimos unde laborum.
                              neque.</p>
                    </div>
                    </div>



                    {/* reply portion */}
                    <div className="mt-6 ml-5">

                    <label htmlFor="review" className='font-bold text-xl text-gray-500'>Review Reply form</label>
                    <textarea name="review" placeholder='write here'  id="review" className='w-[98%]  pl-6 pt-3 focus:outline-none h-50  mt-3 bg-gray-200 rounded-2xl'></textarea>
                    </div>

                    <Button variant='contained'
                    sx={{
                       marginTop:"20px",
                       marginLeft:"20px"
                        
                    }}
                    className='w-242 '> Drop Your Replies</Button>
                   

                 </div>

                
    </>
  )
}

export default ProductView