import React from 'react';

function getRedirectUrl() {
    let url = 'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + 
        `${process.env.REACT_APP_CLIENT_ID}` +
        (`${process.env.REACT_APP_SCOPES}` ? 
        '&scope=' + 
        encodeURIComponent(`${process.env.REACT_APP_SCOPES}`) : '') +
        '&redirect_uri=' + 
        encodeURIComponent(`${process.env.REACT_APP_REDIRECT_URI}`)

    return url;
}

function clearCodeQuery(){
    window.history.pushState("", "", process.env.REACT_APP_REDIRECT_URI)
}

function onPageLoad() {
    if (window.location.search.length > 0) {
        clearCodeQuery()
    }
}

function Login(){
    onPageLoad();
    return (
        <a className="nav-route-link" href={getRedirectUrl()}>Login</a>
    )
}

export default Login;
