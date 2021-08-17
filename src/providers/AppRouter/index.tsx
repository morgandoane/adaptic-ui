import React, { ReactElement } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

export const AppRouter = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch></Switch>
        </BrowserRouter>
    );
};
