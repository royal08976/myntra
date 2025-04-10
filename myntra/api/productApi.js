async function productApi(){
    const productURL="http://192.168.0.164:5000/api/products"
    const token= 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjEwNWM4ODdiZWQ3Y2M5N2QyODI5NSIsImlhdCI6MTc0NDI3MzcyOSwiZXhwIjoxNzQ0Mjc3MzI5fQ.eUJz-CV4PFNsz4ZwVB5dMXbmvVMYL-4URpUBCRQsjuw"
const options={
    
        
        headers:{
            "Authorization":`Bearer ${token}`,
            "x-api-key":"7ca5b248-d558-419a-a3b0-6226f4e69219",
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