import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { PostContext } from '../contexts/postContext';


export default function Pagination() {

    const classes = useStyles();
    const { post } = useContext(PostContext)


    return (
        <Box component="span">

            <Button
                disabled={!post.hasPrev}
                to={`/page/${parseInt(post.currentPage) - 1}`}
                component={RouterLink}
                variant="contained"
                className={classes.prevButton}
                color="primary"
            >
                Previous
            </Button>

            <Button
                component={RouterLink}
                to={`/page/${parseInt(post.currentPage) + 1}`}
                disabled={!post.hasNext}
                variant="contained"
                className={classes.nextButton}
                color="primary"
            >
                Next
            </Button>

        </Box>
    )
}




const useStyles = makeStyles((theme) => ({
    prevButton: {
        marginRight: theme.spacing(2),
    },
    nextButton: {
        float: 'right'
    },
}));