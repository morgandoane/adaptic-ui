import { useAuth0 } from '@auth0/auth0-react';
import { Fab, makeStyles, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.background.default,
    },
}));

const Login = (): ReactElement => {
    const classes = useStyles();

    const { loginWithPopup } = useAuth0();

    return (
        <div className={classes.root}>
            <div>
                <Typography color="textPrimary" variant="h3">
                    Adaptic
                </Typography>
                <Typography color="textSecondary" variant="caption">
                    Collaborative design automation
                </Typography>
                <Typography color="textPrimary" variant="body1">
                    Adaptic allows engineering teams to seamlessly coordinate
                    their design practice.
                </Typography>
                <Fab
                    onClick={loginWithPopup}
                    color="primary"
                    variant="extended"
                >
                    Login to Adaptic
                </Fab>
            </div>
        </div>
    );
};

export default Login;
