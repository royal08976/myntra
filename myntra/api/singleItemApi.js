async function singleItemApi(id,token,api){

const singleItemURL=`http://localhost:5000/api/products/${id}`

    const options={
        method:"GET",
        headers:{
            "Authorization":`Bearer ${token}`,
            "x-api-key":api,
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    }

    try{
        const res=await fetch(singleItemURL,options)
        if(!res.ok){
            throw new Error("network error bro")
        }
        const data=await res.json()
        console.log(data)

        return{
            data:data,
            status:res.status
        }


    }catch(err){
        console.log(err)
    }
}

export{singleItemApi}