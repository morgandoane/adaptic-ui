import { useQuery } from '@apollo/client';
import AppNav from 'components/AppNav';
import { ProjectsQuery } from 'graphql/projects/query';
import { ProjectsRes } from 'graphql/projects/res';
import React, { ReactElement } from 'react';

const Home = (): ReactElement => {
    const { data, error, loading } = useQuery<ProjectsRes>(ProjectsQuery);

    return (
        <AppNav>
            <div>{JSON.stringify(data)}</div>
        </AppNav>
    );
};

export default Home;
