async function singleItemApi(id){
    const token=
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjEwNWM4ODdiZWQ3Y2M5N2QyODI5NSIsImlhdCI6MTc0NDI3MzcyOSwiZXhwIjoxNzQ0Mjc3MzI5fQ.eUJz-CV4PFNsz4ZwVB5dMXbmvVMYL-4URpUBCRQsjuw"
const singleItemURL=`http://192.168.0.164:5000/api/products/${id}`

    const options={
        method:"GET",
        headers:{
            "Authorization":`Bearer ${token}`,
            "x-api-key":"7ca5b248-d558-419a-a3b0-6226f4e69219",
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