import React, { ReactElement } from 'react';
import {
    Button,
    Fade,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    TextField,
    Typography,
} from '@material-ui/core';
import { TeamCreate, TeamEdit } from '../../index';
import ResponsiveDialog from 'components/ResponsiveDialog';
import { ChevronLeft, ChevronRight, Clear, Close } from '@material-ui/icons';
import clsx from 'clsx';
import ViewFade from 'components/ViewFade';
import Br from 'components/Br';
import { Autocomplete } from '@material-ui/lab';
import { Teammate } from 'graphql/home/setup/res';
import AppButton from 'components/AppButton';

const useStyles = makeStyles((theme) => ({
    root: {},
    body: {
        height: 84,
        transition: theme.transitions.create('height', { duration: 250 }),
    },
    expanded: {
        height: 300,
    },
}));

const CreateTeam = (props: {
    edits: null | TeamCreate;
    handleEdits: (data: TeamCreate | null) => void;
    teammates: Teammate[];
    loading: boolean;
}): ReactElement => {
    const classes = useStyles();
    const { edits, teammates, loading, handleEdits } = props;

    const [state, setState] = React.useState({ confirmed: false, input: '' });

    const next = () => {
        if (!state.confirmed) setState((s) => ({ ...s, confirmed: true }));
        else if (edits) {
            handleEdits({ ...edits, save: true });
        }
    };

    React.useEffect(() => {
        setState((s) => ({ ...s, input: '' }));
    }, [edits]);

    return (
        <ResponsiveDialog
            open={edits !== null}
            onClose={() => handleEdits(null)}
        >
            <div className={classes.root}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h5">Create team</Typography>
                    <IconButton onClick={() => handleEdits(null)}>
                        <Close />
                    </IconButton>
                </div>
                <div
                    className={clsx(classes.body, {
                        [classes.expanded]: state.confirmed,
                    })}
                >
                    <ViewFade index={state.confirmed ? 1 : 0}>
                        <div>
                            <Br space={1} />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Name"
                                value={edits ? edits.name : ''}
                                onChange={(e) => {
                                    if (edits)
                                        handleEdits({
                                            ...edits,
                                            name: e.target.value,
                                        });
                                }}
                            />
                        </div>
                        <div>
                            <Button
                                startIcon={<ChevronLeft />}
                                onClick={() =>
                                    setState((s) => ({
                                        ...s,
                                        confirmed: false,
                                    }))
                                }
                            >
                                {edits ? edits.name : 'back'}
                            </Button>
                            <Br />
                            <Autocomplete
                                freeSolo
                                clearOnBlur
                                clearOnEscape
                                onClose={() =>
                                    setState((s) => ({ ...s, input: '' }))
                                }
                                options={teammates.map(
                                    (option) => option.email
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Add teammates by email"
                                        variant="filled"
                                        fullWidth
                                    />
                                )}
                                onChange={(event, newValue) => {
                                    if (
                                        edits &&
                                        newValue &&
                                        !edits.emails.includes(newValue)
                                    ) {
                                        handleEdits({
                                            ...edits,
                                            emails: [...edits.emails, newValue],
                                        });
                                    }
                                }}
                                inputValue={state.input}
                                onInputChange={(e, value) =>
                                    setState((s) => ({ ...s, input: value }))
                                }
                            />
                            {edits && (
                                <div
                                    style={{ maxHeight: 155, overflow: 'auto' }}
                                >
                                    <List>
                                        {edits.emails.map((email) => (
                                            <ListItem key={email}>
                                                <ListItemText primary={email} />
                                                <ListItemSecondaryAction>
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => {
                                                            if (edits) {
                                                                handleEdits({
                                                                    ...edits,
                                                                    emails: edits.emails.filter(
                                                                        (e) =>
                                                                            e !==
                                                                            email
                                                                    ),
                                                                });
                                                            }
                                                        }}
                                                    >
                                                        <Clear />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        ))}
                                    </List>
                                </div>
                            )}
                        </div>
                    </ViewFade>
                </div>
                <AppButton
                    loading={loading}
                    disabled={!edits || edits.name.length == 0}
                    onClick={next}
                    fullWidth
                    variant="contained"
                    color="primary"
                    endIcon={<ChevronRight />}
                >
                    {teammates.length == 0 || state.confirmed
                        ? 'Save!'
                        : 'Next'}
                </AppButton>
            </div>
        </ResponsiveDialog>
    );
};

export default CreateTeam;
