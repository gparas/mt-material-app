import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { primary, secondary } from './utils/colors';

// A theme with custom primary and secondary color.
// It's optional.

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#060847',
      paper: primary.main,
    },
    action: {
      selected: primary.main,
      hover: primary.light,
    },
    primary: {
      light: primary.light,
      main: primary.main,
      dark: primary.dark,
    },
    secondary: {
      light: secondary.light,
      main: secondary.main,
      dark: secondary.dark,
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
        backgroundColor: primary.dark,
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
