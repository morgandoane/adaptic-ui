import React, { ReactElement } from 'react';
import {
    Avatar,
    Button,
    ButtonBase,
    makeStyles,
    Popover,
    useTheme,
} from '@material-ui/core';
import { useAuth0, User } from '@auth0/auth0-react';
import { ExitToAppTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {},
    avatar: {
        background: theme.palette.primary.main,
        height: 36,
        width: 36,
    },
}));

const UserAvatar = (props: { user: User }): ReactElement => {
    const classes = useStyles();
    const theme = useTheme();
    const { logout } = useAuth0();
    const { user } = props;
    const { name, given_name, family_name, picture, email } = user;

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

    const getInitials = (): string => {
        if (given_name && family_name) {
            return given_name[0] + family_name[0];
        } else if (name) {
            return name
                .split(' ')
                .map((t) => t[0])
                .join('');
        } else return '';
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={classes.root}>
            <ButtonBase onClick={(event) => handleClick(event)}>
                <Avatar src={user.picture} className={classes.avatar}>
                    {getInitials()}
                </Avatar>
            </ButtonBase>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div style={{ padding: theme.spacing(2) }}>
                    <Button
                        onClick={() => logout()}
                        startIcon={<ExitToAppTwoTone />}
                    >
                        Logout
                    </Button>
                </div>
            </Popover>
        </div>
    );
};

export default UserAvatar;
