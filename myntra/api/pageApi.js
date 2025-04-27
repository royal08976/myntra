async function pageApi(page,limit,token,api){

    const pageApiURL=`http://localhost:5000/api/products?page=${page}&limit=${limit}`


    const options={
    
        
        headers:{
            "Authorization":`Bearer ${token}`,
            "x-api-key":api,
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    }


    try{
        const res=await fetch(pageApiURL,options)
        const data=await res.json()

        return{
            data:data,
            status:res.status
        }

    }catch(err){
        console.log(err)
    }

}

export {pageApi}