import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useState } from 'react';
import Loading from './Loading'
import { getPostTime } from '../utils'
import { PostContext } from '../contexts/postContext'
import { Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'





export default function PostDetails(props) {
    const classes = useStyles();
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const { post } = useContext(PostContext)

    const post_id = props.match.params.id

    post.getOnePost(post_id)
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
                        <CardMedia className={classes.cardMedia} image={state.picture} title={state.title} />

                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {state.title}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Last updated: {getPostTime(state.date_updated)}
                                Post by: <Link component={RouterLink} to={`/user/${state.user.username}`}>{state.user.username}</Link>
                            </Typography>
                            <hr />

                            <Typography variant="subtitle1" color="textSecondary">
                                {state.body}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            )}

            <br />
        </Grid>
    );
}


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