import React, { ReactElement } from 'react';
import {
    Button,
    Fab,
    IconButton,
    makeStyles,
    TextField,
    Typography,
} from '@material-ui/core';
import { Team, Teammate } from 'graphql/home/setup/res';
import { Add, ChevronLeft, ChevronRight, Close } from '@material-ui/icons';
import Br from 'components/Br';
import ResponsiveDialog from 'components/ResponsiveDialog';
import ViewFade from 'components/ViewFade';
import EditTeam from './components/EditTeam';
import CreateTeam from './components/CreateTeam';
import { useMutation } from '@apollo/client';
import { CreateTeamMutation } from 'graphql/home/teams/create/mutation';
import { CreateTeamRes } from 'graphql/home/teams/create/res';
import { CreateTeamArgs } from 'graphql/home/teams/create/args';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    noData: {
        height: '100%',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
}));

const NoTeams = (props: { onClick: () => void }) => {
    const classes = useStyles();
    return (
        <div className={classes.noData}>
            <Typography
                color="textPrimary"
                variant="h5"
                style={{ maxWidth: 240 }}
            >
                Teams build and share components
            </Typography>
            <Br />
            <Fab {...props} variant="extended" color="primary">
                <Add />
                Rally the squad
            </Fab>
            <Br />
            <Button size="small" color="primary">
                Learn more about teams
            </Button>
            <Br space={8} />
        </div>
    );
};

export interface TeamEdit {
    type: 'edit';
    id: string;
    name: string;
    save?: true;
}

export interface TeamCreate {
    type: 'create';
    name: string;
    emails: string[];
    save?: true;
}

const Teams = (props: {
    teams: Team[];
    teammates: Teammate[];
}): ReactElement => {
    const classes = useStyles();
    const { teams, teammates } = props;

    const [
        createTeam,
        {
            data: createData,
            error: createError,
            loading: createLoading,
            called: createCalled,
        },
    ] = useMutation<CreateTeamRes, CreateTeamArgs>(CreateTeamMutation);

    const [state, setState] = React.useState<{
        edits: null | (TeamCreate | TeamEdit);
    }>({
        edits: null,
    });

    React.useEffect(() => {
        if (
            state.edits &&
            state.edits.type == 'create' &&
            state.edits.save &&
            !createCalled
        ) {
            createTeam({
                variables: {
                    data: {
                        name: state.edits.name,
                        emails: state.edits.emails,
                    },
                },
            });
        }
    }, [state.edits, createTeam, createCalled]);

    React.useEffect(() => {
        if (createData) {
            setState((s) => ({ ...s, edits: null }));
        }
    }, [createData]);

    const handleEdits = (data: null | true | (TeamCreate | TeamEdit)) => {
        if (data == true)
            setState((s) => ({
                ...s,
                edits: { type: 'create', name: '', emails: [] },
            }));
        else setState((s) => ({ ...s, edits: data }));
    };

    return (
        <div className={classes.root}>
            {teams.length == 0 ? (
                <NoTeams onClick={() => handleEdits(true)} />
            ) : (
                <div></div>
            )}
            <EditTeam
                handleEdits={(data: TeamEdit | null) => handleEdits(data)}
                edits={
                    state?.edits && state.edits.type == 'edit'
                        ? state.edits
                        : null
                }
            />
            <CreateTeam
                loading={createLoading}
                teammates={teammates}
                handleEdits={(data: TeamCreate | null) => handleEdits(data)}
                edits={
                    state?.edits && state.edits.type == 'create'
                        ? state.edits
                        : null
                }
            />
        </div>
    );
};

export default Teams;
