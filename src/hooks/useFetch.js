import { useState, useEffect } from 'react'

function useFetch() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState({user: ''});
    
    useEffect(() => {
        fetch("api/v1/login")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    // setUser(result)
                    console.log(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
                )
            }, [])
            
            if (error) {
                return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else {
                return (
                <ul>
                    {user}
                </ul>
        );
    }
}


export default useFetch;