import React from 'react'
import { CiStar } from "react-icons/ci";
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { useEffect } from 'react';




const Rating = ( {totalStars,rating}) => {
  console.log("rating",rating)
  const [ratings,setRating]=useState(rating)
  // const [toggleRating,setToggleRating]=useState(false)

  useEffect(() => {
    if (rating) {
      setRating(rating);  // Update when prop changes
    }
  }, [rating]);

  const handleRating=(i)=>{
    setRating(i+1)
    // setToggleRating(!toggleRating)
    // console.log(i)
  }
  return (
<>
    <h6>Rating:</h6>
    <div className='flex gap-2 mt-2 mb-5'>{
      [...Array(totalStars)].map((_,i)=>{
        const ratingValue=i+1;
        
        return(
          <FaStar
          size={25}

          key={i}
          onClick={()=>handleRating(i)}
          
          color={ratings>=ratingValue ?"gold":"gray"}
          />
          
          
        )
      })
      
    }
      
      </div>

    </>
  )
}
export default Rating