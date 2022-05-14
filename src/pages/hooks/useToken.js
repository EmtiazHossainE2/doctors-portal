import { useEffect, useState } from "react"

const useToken = user => {
    const [token , setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email 
        const creationTime = user?.user?.metadata?.creationTime
        const lastLogin = user?.user?.metadata?.lastSignInTime
        const currentUser = {
            email , 
            creationTime,
            lastLogin 
        }
        if(email){
            fetch(`http://localhost:5000/user/${email}` , {
                method: "PUT",
                headers: {
                    "content-type" : 'application/json'
                },
                body: JSON.stringify(currentUser)
            })  
            .then(res => res.json())
            .then(data => {
                console.log('inside useToken' ,  data)
                const accessToken = data.token 
                localStorage.setItem('accessToken' , accessToken)
                setToken(accessToken) 
            })
        }

    },[user])
    return [token , setToken]
}
export default useToken ; 