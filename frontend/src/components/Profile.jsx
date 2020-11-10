import React, { useContext } from 'react';
import { ProfileContext } from '../contexts/profileContext'


const Profile = (props) => {

    const { profile, getProfileData } = useContext(ProfileContext)
    const { username } = props.match.params
    getProfileData(username)

    return (
        <h1>Profile - {profile.username}</h1>
    )
}

export default Profile