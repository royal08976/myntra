async function  categoryApi(token,api){
    const categoryURL=" http://localhost:5000/api/categories"





const options ={
        method:"GET",
        headers:{
            "Authorization":`Bearer ${token}`,
            "x-api-key":api,
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    }

    try{
        const res=await fetch(categoryURL,options)
        if(!res.ok){
            throw new Error(
                "network error bro"
            )
        }
        const data=await res.json()
        console.log(data)
        return{
            status:res.status,
            data:data
        }
    }catch(err){
        console.log(err)
    }   
}

export {categoryApi}