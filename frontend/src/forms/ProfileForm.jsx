import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Edit as EditIcon } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { PostContext } from '../contexts/postContext'
import { Input, Grid } from '@material-ui/core';
import Loading from '../components/Loading'
import { AuthContext } from '../contexts/authContext';



export default function ProfileForm(props) {
    const classes = useStyles();
    const { user } = useContext(AuthContext)

    if (!user.isAuthenticated) {
        props.history.push('/')
    }

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
                setLoading(false)
                props.history.push(`/post/${data.id}`)
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
                    <EditIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Update Profile
                </Typography>
                <form className={classes.form} onSubmit={submitHandler}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={changeHandler}
                                variant="outlined"
                                required
                                fullWidth
                                name="first_name"
                                label="First Name"
                                id="first_name"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={changeHandler}
                                variant="outlined"
                                required
                                fullWidth
                                name="last_name"
                                label="First Name"
                                id="last_name"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                onChange={changeHandler}
                                variant="outlined"
                                required
                                fullWidth
                                name="email"
                                label="Email"
                                id="email"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                onChange={changeHandler}
                                variant="outlined"
                                required
                                fullWidth
                                name="birth_date"
                                type="date"
                                id="birth_date"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                onChange={changeHandler}
                                variant="outlined"
                                multiline
                                fullWidth
                                rows={5}
                                name="bio"
                                label="Bio"
                                id="bio"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input
                                onChange={handleImageChange}
                                variant="outlined"
                                fullWidth
                                label="Profile Picture"
                                name='picture'
                                type='file'
                            />
                        </Grid>
                    </Grid>
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