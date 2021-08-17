import React, { ReactElement } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from 'scenes/Loading';

const PrivateRoute = (props: RouteProps): ReactElement | null => {
    const { component, ...args } = props;
    if (!component)
        throw new Error(
            "PrivateRoute requires that 'component' prop be provided."
        );

    return (
        <Route
            component={withAuthenticationRequired(component, {
                onRedirecting: function redirecting() {
                    return <Loading message="Auth0 initializing" />;
                },
            })}
            {...args}
        />
    );
};
export default PrivateRoute;
