import { Auth0Provider } from '@auth0/auth0-react';
import { env } from 'config';
import React, { ReactElement } from 'react';

const AuthProvider = (props: {
    children: ReactElement | ReactElement[];
}): ReactElement => (
    <Auth0Provider
        domain={env.REACT_APP_AUTH0_DOMAIN}
        clientId={env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={`${window.location.origin}/home`}
        audience={env.REACT_APP_AUTH0_AUDIENCE}
    >
        {props.children}
    </Auth0Provider>
);

export default AuthProvider;
