



async function productApi(token,api){
    console.log("token i got in product api is",token)
    console.log("api i got in product api is",api)
    const productURL="http://localhost:5000/api/products"

const options={
    
        
        headers:{
            "Authorization":`Bearer ${token}`,
            "x-api-key":api,
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    }
    try{
        const response=await fetch(productURL,options)
        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        const data=await response.json()
        console.log(data)
        // console.log(data.products[2])
        return {
            status:response.status,
            data:data
        }
} catch(err){   
        console.log(err)
    }
}
export {productApi}