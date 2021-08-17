import React, { ReactElement } from 'react';
import { createTheme, ThemeProvider as Provider } from '@material-ui/core';

const getTheme = (darkMode = true) =>
    createTheme({
        palette: {
            primary: {
                main: '#3366ff',
            },
            background: {
                default: darkMode
                    ? 'linear-gradient(#1b1b1b, #000000)'
                    : '#fafafa',
                paper: darkMode ? '#202020' : '#ffffff',
            },
        },
    });

export const ThemeProvider = (props: {
    children?: ReactElement | ReactElement[];
}): ReactElement => <Provider theme={getTheme()}>{props.children}</Provider>;

export default ThemeProvider;
