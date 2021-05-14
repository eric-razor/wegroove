import React from 'react';
import useFetch from '../hooks/useFetch'


export default function Login(){

    function redirect() {
        window.location.assign('https://accounts.spotify.com/authorize' +
            '?response_type=code' +
            '&client_id=' + `${process.env.REACT_APP_CLIENT_ID}` +
            (`${process.env.REACT_APP_SCOPES}` ? '&scope=' + encodeURIComponent(`${process.env.REACT_APP_SCOPES}`) : '') +
            '&redirect_uri=' + encodeURIComponent(`${process.env.REACT_APP_REDIRECT_URI}`))
    }

    function getCodeParam() {
        let params = (new URL(document.location)).searchParams;
        let code = params.get('code');
        return code
    }

    function requestTokens() {
        let token = getCodeParam()
        fetch("/api/v1/token",{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({"code": token, "redirect_uri": `${process.env.REACT_APP_REDIRECT_URI}`})      
        })
        .then(resp => resp.json())
        .then(data => {
            console.log('Success: ', data)
        })
        .catch((error) => {
            console.error('Error: ', error)
        })

    }


    return (
        <div>
            <button onClick={redirect}>login</button>
        </div>
    )
}



