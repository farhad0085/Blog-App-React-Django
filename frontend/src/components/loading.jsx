import { PropagateLoader } from 'react-spinners'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
}));


const Loading = ({ size, color, noClass }) => {

    const classes = useStyles();

    const spinnerColor = color ? color : "#123abc"

    if (noClass) {
        return <PropagateLoader size={size} color={spinnerColor} />
    }
    return (
        <div className={classes.root}>
            <PropagateLoader size={size} color={spinnerColor} />
        </div>
    )
}


export default Loading