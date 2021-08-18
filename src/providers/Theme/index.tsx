import React, { ReactElement } from 'react';
import { createTheme, ThemeProvider as Provider } from '@material-ui/core';

const getTheme = (darkMode = true) =>
    createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
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
        overrides: {
            MuiFab: {
                root: {
                    textTransform: 'none',
                    '& svg': {
                        fontSize: '1.3rem',
                    },
                },
            },
            MuiButton: {
                root: {
                    textTransform: 'none',
                    borderRadius: 24,
                },
                sizeLarge: {
                    height: 64,
                    fontSize: 18,
                },
            },
            MuiTab: {
                root: {
                    fontSize: '1rem',
                    textTransform: 'none',
                    color: darkMode
                        ? '#fff !important'
                        : 'rgba(0, 0, 0, 0.87) !important',
                },
            },
            MuiInputBase: {
                inputAdornedStart: {
                    marginLeft: 8,
                },
            },
            MuiAvatar: {
                colorDefault: {
                    fontSize: '1rem',
                    color: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)',
                    backgroundColor: darkMode
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'rgba(0, 0, 0, 0.04)',
                },
            },
            MuiFilledInput: {
                root: {
                    borderRadius: '12px !important',
                },
            },
        },
        props: {
            MuiFilledInput: {
                disableUnderline: true,
            },
            MuiButton: {
                disableElevation: true,
            },
        },
    });

export const ThemeProvider = (props: {
    children?: ReactElement;
}): ReactElement => <Provider theme={getTheme()}>{props.children}</Provider>;

export default ThemeProvider;
