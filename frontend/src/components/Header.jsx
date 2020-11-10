import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom'
import { AuthContext } from '../contexts/authContext';



export default function Header(props) {
    const classes = useStyles();
    const { sections, title } = props;
    const { user } = useContext(AuthContext)

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Button color="inherit" to="/" component={RouterLink}>{title}</Button>
                    </Typography>
                    {sections.map(section => <Button component={RouterLink} to={section.url} key={section.title} color="inherit">{section.title}</Button>)}
                    
                    {user.isAuthenticated ? (
                        <>
                            <Button component={RouterLink} to="/posts/new" color="inherit">Create new post</Button>
                            <Button onClick={user.logout}  color="inherit">Logout</Button>
                        </>
                    ) : (
                            <>
                                <Button component={RouterLink} to="/signin" color="inherit">Sign in</Button>
                                <Button component={RouterLink} to="/signup" color="inherit">Sign up</Button>
                            </>
                        )}

                </Toolbar>
            </AppBar>
        </div>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));