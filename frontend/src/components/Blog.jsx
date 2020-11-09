import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import PostList from './PostList';
import { PostContext } from '../contexts/postContext';
import { createUUID } from '../utils'
import Loading from './loading';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function Blog() {

    const { data, loading, error } = useContext(PostContext)
    const posts = data.results

    const [err, setErr] = React.useState(true)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErr(false);
    };

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
                    <Snackbar open={err} onClose={handleClose} autoHideDuration={6000}>
                        <Alert onClose={handleClose} severity="error">
                            {error}
                        </Alert>
                    </Snackbar>
                )}

            </main>

        </>
    );
}

