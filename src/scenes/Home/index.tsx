import { useQuery } from '@apollo/client';
import { CircularProgress, makeStyles } from '@material-ui/core';
import {
    BookmarkTwoTone,
    PeopleTwoTone,
    SchoolTwoTone,
} from '@material-ui/icons';
import clsx from 'clsx';
import AppNav from 'components/AppNav';
import { AppTab, AppTabs } from 'components/AppTabs';
import ViewFade from 'components/ViewFade';
import { HomeQuery } from 'graphql/home/setup/query';
import { HomeQueryRes } from 'graphql/home/setup/res';
import React, { ReactElement } from 'react';
import Learn from './components/Learn';
import Projects from './components/Projects';
import Teams from './components/Teams';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    content: {
        width: 800,
        display: 'flex',
        flexFlow: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    header: {
        paddingTop: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(0),
            background: theme.palette.background.paper,
            borderBottom: undefined,
        },
    },
    body: {
        flex: 1,
    },
    centered: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

enum HomeTab {
    Projects = 'Projects',
    Teams = 'Teams',
    Learn = 'Learn',
}

const Home = (): ReactElement => {
    const classes = useStyles();

    const { data, error, loading } = useQuery<HomeQueryRes>(HomeQuery);

    const [state, setState] = React.useState({
        tab: HomeTab.Projects,
    });

    const iconMap: Record<HomeTab, JSX.Element> = {
        [HomeTab.Projects]: <BookmarkTwoTone />,
        [HomeTab.Teams]: <PeopleTwoTone />,
        [HomeTab.Learn]: <SchoolTwoTone />,
    };

    const projects = data ? data.projects : [];
    const teams = data ? data.teams : [];
    const teammates = data ? data.teammates : [];

    return (
        <AppNav>
            <div className={classes.root}>
                <div className={classes.content}>
                    <div className={classes.header}>
                        <AppTabs
                            value={Object.values(HomeTab).indexOf(state.tab)}
                        >
                            {Object.values(HomeTab).map((tab) => (
                                <AppTab
                                    icon={iconMap[tab]}
                                    onClick={() =>
                                        setState((s) => ({ ...s, tab }))
                                    }
                                    label={tab}
                                    key={tab + '_tab'}
                                />
                            ))}
                        </AppTabs>
                    </div>
                    <ViewFade
                        index={
                            loading
                                ? 0
                                : Object.values(HomeTab).indexOf(state.tab) + 1
                        }
                    >
                        <div className={clsx(classes.body, classes.centered)}>
                            <CircularProgress />
                        </div>
                        <div className={classes.body}>
                            <Projects projects={projects} teams={teams} />
                        </div>
                        <div className={classes.body}>
                            <Teams teams={teams} teammates={teammates} />
                        </div>
                        <div className={classes.body}>
                            <Learn />
                        </div>
                    </ViewFade>
                </div>
            </div>
        </AppNav>
    );
};

export default Home;
