import { createSlice } from '@reduxjs/toolkit';

const initialState = {username: '', href: '', spotify_url: '', uri: ''}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: state => {
            debugger
            state.user = "test"
        }

    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer;

export const selectUser = state => state.user


export async function fetchUser(){
    // const resp = await fetch("/api/v1/profile")
    // const user = await resp.json();
    // console.log(resp)
    fetch("/api/v1/profile", {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                setUser(user)
            }
        })
}
