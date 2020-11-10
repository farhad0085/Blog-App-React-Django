import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import PostList from './PostList';
import { PostContext } from '../contexts/postContext';
import { createUUID } from '../utils'
import Loading from './loading';
import Typography from '@material-ui/core/Typography';
import Alert from './Alert'


export default function Blog() {

    const { data, loading, error, getPosts } = useContext(PostContext)
    const posts = data.results
    // getPosts()

    return (
        <>
            <main>
                <br/>
                <Typography component="h2" variant="h4">
                    Recent updates
                </Typography>
                <hr />
                <br/>
                <br/>
                {loading ? <Loading /> : (
                    <Grid container spacing={4}>
                        {posts.map((post) => (
                            <PostList key={createUUID()} post={post} />
                        ))}
                    </Grid>
                )}

                {error && (
                    <Alert duration={6000} message={error} type="error" />
                )}

            </main>

        </>
    );
}

