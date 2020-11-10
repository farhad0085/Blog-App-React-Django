import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Add as AddIcon } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { PostContext } from '../contexts/postContext'
import { Input } from '@material-ui/core';
import Loading from '../components/loading'



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();

    const [state, setState] = useState({
        title: '',
        body: '',
        picture: null
    })

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState({
        title: null,
        body: null,
        picture: null
    })

    const { post } = useContext(PostContext)

    const submitHandler = (e) => {
        e.preventDefault()

        setLoading(true)

        post.createPost(state)
            .then(data => {
                console.log(data);
                setLoading(false)
            })
            .catch(err => {
                setError({
                    title: err.response.data.title || '',
                    body: err.response.data.body || '',
                    picture: err.response.data.picture || ''
                })
                setLoading(false)
            })
        console.log("Error state", error);
    }

    const changeHandler = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleImageChange = (e) => {
        setState({
            ...state,
            picture: e.target.files[0]
        })
    };

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AddIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create new post
                </Typography>
                <form className={classes.form} onSubmit={submitHandler}>
                    <TextField
                        onChange={changeHandler}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="title"
                        label="Post title"
                        name="title"
                        autoFocus
                    />
                    <TextField
                        onChange={changeHandler}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        rows={10}
                        name="body"
                        label="Post content"
                        id="body"
                    />
                    <Input
                        onChange={handleImageChange}
                        variant="outlined"
                        fullWidth
                        label="Featured Image"
                        name='picture'
                        type='file'
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {loading ? <Loading color="#ffffff" size='10px' /> : "Create Post"}
                    </Button>

                </form>
            </div>
        </Container>
    );
}