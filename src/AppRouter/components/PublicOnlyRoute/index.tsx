import React, { ReactElement } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PublicOnlyRoute = (props: RouteProps): ReactElement | null => {
    const { isAuthenticated } = useAuth0();
    if (isAuthenticated) return <Redirect to="/home" />;
    return <Route {...props} />;
};
export default PublicOnlyRoute;
