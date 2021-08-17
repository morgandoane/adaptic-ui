import React, { ReactElement } from 'react';
import AuthProvider from 'providers/AuthProvider';
import AuthorizedApolloProvider from 'providers/AuthorizedApolloProvider';
import { AppRouter } from 'providers/AppRouter';
import ThemeProvider from 'providers/Theme';

const App = (): ReactElement => {
    return (
        <AuthProvider>
            <AuthorizedApolloProvider>
                <ThemeProvider>
                    <AppRouter />
                </ThemeProvider>
            </AuthorizedApolloProvider>
        </AuthProvider>
    );
};

export default App;
