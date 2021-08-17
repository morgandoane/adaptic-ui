import React, { ReactElement } from 'react';
import {
    Avatar,
    Button,
    ButtonBase,
    makeStyles,
    Popover,
    Typography,
    useTheme,
} from '@material-ui/core';
import { ReactComponent as Logo } from 'media/Logo.svg';
import { useAuth0 } from '@auth0/auth0-react';
import UserAvatar from './components/UserAvatar';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexFlow: 'column',
        background: theme.palette.background.default,
    },
    header: {
        padding: theme.spacing(1),
        background: theme.palette.background.paper,
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body: {
        flex: 1,
    },
}));

const AppNav = (props: {
    children?: ReactElement | ReactElement[];
}): ReactElement => {
    const classes = useStyles();
    const theme = useTheme();
    const { user } = useAuth0();

    const [anchorEl, setAnchorEl] = React.useState<
        null | (EventTarget & HTMLButtonElement)
    >(null);

    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <ButtonBase>
                    <div
                        style={{
                            display: 'flex',
                            flexFlow: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Logo
                            style={{
                                height: 36,
                                marginRight: theme.spacing(1),
                            }}
                        />
                        <Typography variant="h5" color="textPrimary">
                            Adaptic
                        </Typography>
                    </div>
                </ButtonBase>
                <div>
                    {user ? (
                        <UserAvatar user={user} />
                    ) : (
                        <Button variant="contained" color="primary">
                            Login
                        </Button>
                    )}
                </div>
            </div>
            <div className={classes.body}>{props.children}</div>
        </div>
    );
};

export default AppNav;
