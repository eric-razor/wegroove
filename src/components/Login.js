import React from 'react';
import useFetch from '../hooks/useFetch'


export default function Login(){

    function redirect () {
        window.location.assign("https://accounts.spotify.com/authorize/")
    }
    return (
        <div>
            <button onClick={redirect}>login</button>
        </div>
    )
}



