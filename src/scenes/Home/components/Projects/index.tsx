import React, { ReactElement } from 'react';
import { Button, Fab, makeStyles, Typography } from '@material-ui/core';
import { Project, Team } from 'graphql/home/setup/res';
import Br from 'components/Br';
import { Add } from '@material-ui/icons';

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

const NoProjects = (props: { onClick: () => void }) => {
    const classes = useStyles();
    return (
        <div className={classes.noData}>
            <Typography
                color="textPrimary"
                variant="h5"
                style={{ maxWidth: 240 }}
            >
                Projects are the home for your components
            </Typography>
            <Br />
            <Fab {...props} variant="extended" color="primary">
                <Add />
                Setup a project
            </Fab>
            <Br />
            <Button size="small" color="primary">
                Learn more about projects
            </Button>
            <Br space={8} />
        </div>
    );
};

const Projects = (props: {
    teams: Team[];
    projects: Project[];
}): ReactElement => {
    const classes = useStyles();
    const { teams, projects } = props;

    return (
        <div className={classes.root}>
            {projects.length == 0 ? (
                <NoProjects onClick={() => null} />
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Projects;
