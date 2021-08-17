import React, { ReactElement } from 'react';
import AuthProvider from 'providers/AuthProvider';
import AuthorizedApolloProvider from 'providers/AuthorizedApolloProvider';
import { AppRouter } from 'AppRouter';
import ThemeProvider from 'providers/Theme';
import { BrowserRouter } from 'react-router-dom';

const App = (): ReactElement => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <AuthProvider>
                    <AuthorizedApolloProvider>
                        <AppRouter />
                    </AuthorizedApolloProvider>
                </AuthProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
