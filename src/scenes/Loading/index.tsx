import React, { ReactElement } from 'react';
import {
    CircularProgress,
    LinearProgress,
    makeStyles,
    Typography,
    useTheme,
} from '@material-ui/core';

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

const Loading = (props: { message: string }): ReactElement => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <div
                style={{
                    position: 'absolute',
                    bottom: theme.spacing(1),
                    left: theme.spacing(1),
                    color: theme.palette.text.secondary,
                }}
            >
                <CircularProgress
                    style={{ height: 12, width: 12, marginRight: 8 }}
                />
                <Typography variant="caption">{props.message}</Typography>
            </div>
        </div>
    );
};

export default Loading;
