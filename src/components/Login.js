import React from 'react';
import useFetch from '../hooks/useFetch'


export default function Login(){

    function redirect () {
        window.location.assign('https://accounts.spotify.com/authorize' +
            '?response_type=code' +
            '&client_id=' + `${process.env.REACT_APP_CLIENT_ID}` +
            (`${process.env.REACT_APP_SCOPES}` ? '&scope=' + encodeURIComponent(`${process.env.REACT_APP_SCOPES}`) : '') +
            '&redirect_uri=' + encodeURIComponent(`${process.env.REACT_APP_REDIRECT_URI}`))
    }
    return (
        <div>
            <button onClick={redirect}>login</button>
        </div>
    )
}



