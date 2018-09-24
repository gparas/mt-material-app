import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { primaryColor, secondaryColor } from './utils/colors';
import { dark } from './utils/theme';

const theme = createMuiTheme({
  palette: {
    background: {
      default: dark.background.default,
    },
    primary: {
      light: primaryColor[300],
      main: primaryColor[700],
      dark: primaryColor[900],
    },
    secondary: {
      light: secondaryColor[300],
      main: secondaryColor[500],
      dark: secondaryColor[700],
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '"Open Sans"',
      '"Helvetica Neue"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    fontWeightMedium: 600,
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 600,
        textTransform: 'capitalize',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: primaryColor[900],
      },
    },
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
