import React, { ReactElement } from 'react';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import About from 'scenes/About';
import AppError from 'scenes/AppError';
import Home from 'scenes/Home';
import Login from 'scenes/Login';
import Logout from 'scenes/Logout';
import PrivateRoute from './components/PrivateRoute';
import PublicOnlyRoute from './components/PublicOnlyRoute';

type AppRoute = RouteProps & {
    key: string;
    access?: 'Private' | 'PublicOnly';
};

const routes: AppRoute[] = [
    {
        access: 'PublicOnly',
        path: '/login',
        component: function login() {
            return <Login />;
        },
        exact: true,
        key: 'login',
    },
    {
        path: '/about',
        component: function about() {
            return <About />;
        },
        exact: true,
        key: 'about',
    },
    {
        access: 'Private',
        path: '/home',
        component: function about() {
            return <Home />;
        },
        exact: true,
        key: 'home',
    },

    {
        access: 'Private',
        path: '/logout',
        component: function logout() {
            return <Logout />;
        },
        exact: true,
        key: 'logout',
    },
];

export const AppRouter = (): ReactElement => {
    return (
        <Switch>
            {routes.map((route) => {
                const { access, key, ...props } = route;
                const Component = !access
                    ? Route
                    : access === 'Private'
                    ? PrivateRoute
                    : PublicOnlyRoute;

                return <Component key={key} {...props} />;
            })}
            <Route path="/" exact>
                <Redirect to="/login" />
            </Route>
            <Route path="*" exact>
                <AppError message="404" />
            </Route>
        </Switch>
    );
};
