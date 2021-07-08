import React from 'react'
import { useSelector } from 'react-redux'
import { fetchUser, selectUser } from './userSlice'
document.addEventListener("DOMContentLoaded", async () => {
    fetchUser()
})


export const UserProfile = () => {
    const user = useSelector(selectUser)

    const profile = (
        <>
        <h1>{user.username}</h1>
        </>
    )

    return (
        <section className="profile-data">
            {profile}
        </section>

    )
}
