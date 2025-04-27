

async function registerApi(formdata){

    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(formdata),
    }
    const url="http://localhost:5000/api/auth/register"

    try{
        const response=await fetch(url,options)

        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        const data=await response.json()
        console.log(data)
        return {
            status:response.status,
            data:data
        }

    }catch(err){
        console.log(err)
    }
}
export {registerApi}