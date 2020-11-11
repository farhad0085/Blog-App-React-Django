import React, { useContext, useState } from 'react';
import { ProfileContext } from '../contexts/profileContext'
import { Card, Grid, Button, CardMedia, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Loading from './Loading'
import { getPostTime } from '../utils';
import ProfileForm from "../forms/ProfileForm";



const Profile = (props) => {
    const classes = useStyles();
    const { profile } = useContext(ProfileContext)

    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [showProfileForm, setShowProfileForm] = useState(false)
    const [currentUser, setCurrentUser] = useState({})

    const { username } = props.match.params

    profile.getProfileData(username)
        .then(data => {
            if (data.id !== state.id) {
                setState(data)
            }
            setLoading(false)
        })
        .catch(err => console.log(err))

    profile.getOwnProfileData()
        .then(data => {
            if (data.pk !== currentUser.pk) {
                setCurrentUser(data)
            }
        })
        .catch(err => console.log(err))


    return (
        <Grid item xs={12} md={12}>
            <br />
            {loading ? <Loading /> : (
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardMedia className={classes.cardMedia} image={state.profile.picture} title={state.username} />

                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {state.username}
                                {currentUser.pk === state.id && (
                                    <Button
                                        onClick={() => setShowProfileForm(!showProfileForm)}
                                        variant="contained"
                                        color="secondary"
                                        className={classes.profileEditButton}
                                    >
                                        {showProfileForm ? "Cancel" : "Edit"}
                                    </Button>
                                )}

                            </Typography>
                            {showProfileForm ? (<ProfileForm />) : (
                                <>
                                    <Typography component="p" variant="body2">
                                        {state.profile.bio}
                                    </Typography>
                                    <Typography component="h4" variant="h6">
                                        About
                                    </Typography>
                                    <hr />
                                    <Typography component="p" variant="body2">
                                        Birthday: {state.profile.birth_date}
                                    </Typography>
                                    <Typography component="p" variant="body2">
                                        Last login: {getPostTime(state.last_login)}
                                    </Typography>
                                    <Typography component="p" variant="body2">
                                        Joined: {getPostTime(state.date_joined)}
                                    </Typography>
                                    <Typography component="p" variant="body2">
                                        Email: {state.email}
                                    </Typography>
                                </>
                            )}

                        </CardContent>
                    </div>
                </Card>
            )}

            <br />
        </Grid>
    )
}

export default Profile


const useStyles = makeStyles({
    card: {
        display: 'flex'
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        height: 400
    },
    profileEditButton: {
        float: "right"
    }
});