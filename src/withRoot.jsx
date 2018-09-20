import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { primaryColor, secondaryColor } from './utils/colors';

// A theme with custom primary and secondary color.
// It's optional.

const theme = createMuiTheme({
  palette: {
    brand: {
      paper: primaryColor[700],
      action: {
        hover: primaryColor[500],
        selected: primaryColor[700],
      },
    },
    background: {
      default: '#060847',
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
  mixins: {
    toolbar: {
      minHeight: 56,
    },
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
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
