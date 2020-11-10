import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PostList from './PostList';
import { PostContext } from '../contexts/postContext';
import { createUUID } from '../utils'
import Loading from './loading';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Alert from './Alert'
import { makeStyles } from '@material-ui/core/styles';


export default function Blog() {
    const classes = useStyles();

    const [state, setState] = useState({
        loading: true,
        error: null,
        data: {
            results: []
        }
    })

    const { post } = useContext(PostContext)
    const posts = state.data.results

    post.getPosts()
        .then((data) => {
            if (state.data.results.length !== data.results.length) {
                setState({
                    data: data,
                    error: null,
                    loading: false
                })
            }
        })
        .catch(e => {
            setState({
                ...state,
                loading: false,
                error: "Failed to load posts at this moment. Please try again later!"
            })
        })


    return (
        <>
            <main>
                <br />
                <Typography component="h2" variant="h4">
                    Recent updates
                </Typography>
                <hr />
                <br />
                <br />
                {state.loading ? <Loading /> : (
                    <>
                        <Grid container spacing={4}>
                            {posts.map((post) => (
                                <PostList key={createUUID()} post={post} />
                            ))}
                            
                        </Grid>
                        <br />
                        
                        {/* Pagination */}
                        <Box component="span">
                            <Button variant="contained" className={classes.prevButton} color="primary">Previous</Button>
                            <Button variant="contained" className={classes.nextButton} color="primary">Next</Button>
                        </Box>
                    </>
                )}

                {state.error && (
                    <Alert duration={6000} message={state.error} type="error" />
                )}

            </main>

        </>
    );
}



const useStyles = makeStyles((theme) => ({
   
    prevButton: {
        marginRight: theme.spacing(2),
    },
    nextButton: {
        float: 'right'
    },
}));