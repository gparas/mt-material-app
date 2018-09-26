import common from '@material-ui/core/colors/common';
import grey from '@material-ui/core/colors/grey';

export const primaryColor = {
  light: '#6f83c6',
  main: '#173c9a',
  dark: '#002179',
  hover: '#294eaf',
};

export const secondaryColor = {
  light: '#4fc7ff',
  main: '#00aeff',
  dark: '#058ddb',
};

export const types = {
  dark: {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: primaryColor.main,
      default: '#060847',
    },
    action: {
      active: common.white,
      hover: primaryColor.hover,
      hoverOpacity: 0.1,
      selected: primaryColor.main,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  light: {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: common.white,
      default: grey[50],
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
};
