import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
  primaryColor,
  secondaryColor,
  types,
} from './utils/colors';

const theme = createMuiTheme({
  palette: {
    background: {
      default: types.dark.background.default,
    },
    primary: {
      light: primaryColor.light,
      main: primaryColor.main,
      dark: primaryColor.dark,
    },
    secondary: {
      light: secondaryColor.light,
      main: secondaryColor.main,
      dark: secondaryColor.dark,
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
        backgroundColor: primaryColor.dark,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
      },
    },
    MuiListItemText: {
      inset: {
        '&:first-child': {
          paddingLeft: 40,
        },
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
