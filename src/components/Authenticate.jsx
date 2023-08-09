import {useState} from 'react'

export default function Authenticate({token, setToken}) {
    const[successMessage, setSuccessMessage]=useState("")
    const [error, setError]=useState("")

    async function handleClick(){
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", 
             {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );
    
    const result= await response.json()
    console.log(result)
    setSuccessMessage(`Not only is ${result.data.username} ${result.message}, they also have a cute dog.`)
    console.log(successMessage)

    } catch(error) {
    setError(error.message);
    }
}

    return (
        <div>
            <h2>aUtHEnTiCAte!</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error.message}</p>}
            <button onClick={handleClick}>Authenticate Token</button>

        </div>
    )
}