import React from 'react';
import { getUserProfile } from './Profile';
export {onPageLoad, }

function redirect() {
    // accept scopes
    let url = 'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + `${process.env.REACT_APP_CLIENT_ID}` +
        (`${process.env.REACT_APP_SCOPES}` ? '&scope=' + encodeURIComponent(`${process.env.REACT_APP_SCOPES}`) : '') +
        '&redirect_uri=' + encodeURIComponent(`${process.env.REACT_APP_REDIRECT_URI}`)

    window.location.href = url
}

function getCodeParam() {
    let code = null
    const queryString = window.location.search;
    if (queryString.length > 0 ){
        const urlParams = new URLSearchParams(queryString)
        code = urlParams.get('code');
    }
    return code
}

function handleRedirect(){
    let code = getCodeParam() 
    fetchAccessToken(code)
    // remove code param from URL
    window.history.pushState("", "", process.env.REACT_APP_REDIRECT_URI)
}

function fetchAccessToken(code){
    let code_params = { 'code': code, 'redirect_uri': `${process.env.REACT_APP_REDIRECT_URI}` }

    fetch("/api/v1/token", {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(code_params)
    })
    .then(resp => resp.json())
    .then(data => {
        handleAuthTokens(data)
    })
    .catch((error) => {
        console.error('Error: ', error)
    })
}

function handleAuthTokens(code){
    if(code.access_token !== undefined || code.refresh_token !== undefined){
        let access_token = code.access_token
        let refresh_token = code.refresh_token
        localStorage.setItem("access_token", access_token)
        localStorage.setItem("refresh_token", refresh_token)
    } else {
        // 
    }
}


// exports
function onPageLoad() {
    if (window.location.search.length > 0) {
        handleRedirect()
    }
}

function Login(){
    return (
        <div>
            <button onClick={redirect}>login</button>
        </div>
    )
}

export default Login;
