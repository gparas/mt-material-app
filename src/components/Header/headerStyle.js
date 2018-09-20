const headerStyle = theme => ({
  appBar: {
    zIndex: theme.zIndex.modal,
  },
  mainMenu: {
    display: 'flex',
    marginLeft: 'auto',
  },
  rightMenu: {
    display: 'flex',
    marginLeft: 'auto',
  },
  dropDownMenu: {
    backgroundColor: theme.palette.brand.paper,
  },
  dropDownMenuItem: {
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.brand.action.hover,
    },
    '&.selected': {
      backgroundColor: theme.palette.brand.action.selected,
    },
  },
});

export default headerStyle;
