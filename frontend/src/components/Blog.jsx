import React, { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PostList from './PostList';
import { PostContext } from '../contexts/postContext';
import { createUUID } from '../utils'
import Loading from './loading';
import Typography from '@material-ui/core/Typography';
import Alert from './Alert'
import Pagination from './Pagination'


export default function Blog(props) {

    const [state, setState] = useState({
        error: null,
        data: {
            results: []
        }
    })

    const [loading, setLoading] = useState(true)

    const { post } = useContext(PostContext)
    const posts = state.data.results

    const pageNumber = props.match.params.pageNumber || 1

    function getPosts(pageNumber) {
        post.getPosts(pageNumber)
            .then((data) => {
                if (JSON.stringify(state.data.results) !== JSON.stringify(data.results)) {
                    setState({
                        data: data,
                        error: null
                    })
                    setLoading(false)
                }
            })
            .catch(e => {
                    setState({
                        ...state,
                        error: "Failed to load posts at this moment. Please try again later!"
                    })
                    setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true)
    }, [pageNumber])

    getPosts(pageNumber)

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
                {loading ? <Loading /> : (
                    <>
                        <Grid container spacing={4}>
                            {posts.map((post) => (
                                <PostList key={createUUID()} post={post} />
                            ))}

                        </Grid>
                        <br />

                        <Pagination />

                    </>
                )}
                {state.error && (
                    <Alert duration={6000} message={state.error} type="error" />
                )}

            </main>

        </>
    );
}
