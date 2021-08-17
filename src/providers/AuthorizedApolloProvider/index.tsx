import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { env } from 'config';
import React, { ReactElement } from 'react';
import { setContext } from '@apollo/link-context';
import Loading from 'scenes/Loading';
import AppError from 'scenes/AppError';

const AuthorizedApolloProvider = (props: {
    children: ReactElement;
}): ReactElement => {
    const { getAccessTokenSilently, isLoading, error } = useAuth0();

    const httpLink = createHttpLink({
        uri: env.REACT_APP_API_URI,
    });

    const authLink = setContext(async () => {
        const token = await getAccessTokenSilently();
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    });

    const apolloClient = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
        connectToDevTools: true,
    });

    if (isLoading) {
        return <Loading message={'Apollo initializing'} />;
    }
    if (error) {
        return <AppError message={error.message} />;
    }

    return (
        <ApolloProvider client={apolloClient}>{props.children}</ApolloProvider>
    );
};

export default AuthorizedApolloProvider;
