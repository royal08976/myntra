async function PatchItems(id,updatedData,token,api){

    console.log("updated data is ",updatedData)
const PatchItemsURL=`http://localhost:5000/api/products/${id}`

    const options={
        method:"PATCH",
        headers:{
            "Authorization":`Bearer ${token}`,
            "x-api-key":api,
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(updatedData),

    }

    try{
        const res=await fetch(PatchItemsURL,options)
        if(!res.ok){
            throw new Error("network error bro")
        }
        const data=await res.json()
        console.log("after patch the data is:",data)

        return{
            data:data,
            status:res.status
        }


    }catch(err){
        console.log(err)
    }
}

export{PatchItems}