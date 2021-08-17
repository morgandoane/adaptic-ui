import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core';

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

const AppError = (props: { message: string }): ReactElement => {
    const classes = useStyles();

    return <div className={classes.root}>{`Error: ${props.message}`}</div>;
};

export default AppError;
