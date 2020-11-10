import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import {Link as RouterLink} from 'react-router-dom'
import { Button } from '@material-ui/core';
import {getPostTime} from '../utils'


const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

export default function PostList(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                <RouterLink to={`/post/${post.id}`}>{post.title}</RouterLink>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Last updated: {getPostTime(post.date_updated)}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.excerpt}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                            <Button component={RouterLink} to={`/post/${post.id}`} color="primary">Read More</Button>
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={post.picture} title={post.title} />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
}

PostList.propTypes = {
    post: PropTypes.object,
};