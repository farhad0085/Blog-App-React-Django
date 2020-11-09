import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

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

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {/* {post.title} */}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {/* {new Date(post.date_updated).toString()} */}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {/* {post.excerpt} */}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>   
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    );
}
