import React, { useContext, useState } from 'react';
import { ProfileContext } from '../contexts/profileContext'
import { Card, Grid, CardMedia, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Loading from './loading'
import { getPostTime } from '../utils';



const Profile = (props) => {
    const classes = useStyles();
    const { profile } = useContext(ProfileContext)
    
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)

    const { username } = props.match.params

    profile.getProfileData(username)
        .then(data => {
            if (data.id !== state.id) {
                setState(data)
            }
            setLoading(false)
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
                            </Typography>
                            <Typography component="p" variant="body2">
                                {state.profile.bio}
                            </Typography>
                            <Typography component="h4" variant="h6">
                                About
                            </Typography>
                            <hr/>
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
});