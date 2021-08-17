import React, { ReactElement } from 'react';
import { env } from 'config';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

const AuthProvider = (props: { children: ReactElement }): ReactElement => {
    const history = useHistory();

    const onRedirectCallback = (appState: AppState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={env.REACT_APP_AUTH0_DOMAIN}
            clientId={env.REACT_APP_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
            audience={env.REACT_APP_AUTH0_AUDIENCE}
            onRedirectCallback={onRedirectCallback}
        >
            {props.children}
        </Auth0Provider>
    );
};

export default AuthProvider;
