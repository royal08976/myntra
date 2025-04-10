async function loginApi(loginData) {

    const loginURL="http://192.168.0.164:5000/api/auth/login"
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(loginData),
    }
    try{
        const response=await fetch(loginURL,options)
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

export {loginApi}