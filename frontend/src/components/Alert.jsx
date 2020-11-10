import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';


function MainAlert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Alert = ({message, type, duration}) => {


    const [err, setErr] = React.useState(true)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErr(false);
    };


    return (
        <Snackbar open={err} onClose={handleClose} autoHideDuration={duration}>
            <MainAlert onClose={handleClose} severity={type}>
                {message}
            </MainAlert>
        </Snackbar>
    )
}


export default Alert