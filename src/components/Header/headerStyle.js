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
  buttonActive: {
    backgroundColor: theme.palette.brand.action.selected,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    '&:hover': {
      backgroundColor: theme.palette.brand.action.selected,
    },
  },
  dropDownMenu: {
    backgroundColor: theme.palette.brand.paper,
  },
  dropDownMenuItem: {
    color: theme.palette.primary.contrastText,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.brand.action.hover,
    },
    '&.selected': {
      backgroundColor: theme.palette.brand.action.selected,
    },
  },
  dropDownMenuItemDivider: {
    borderBottomColor: 'rgba(255, 255, 255, 0.12)',
  },
  dropDownMenuIcon: {
    color: 'inherit',
    marginRight: 0,
  },
  dropDownMenuTextInset: {
    '&:first-child': {
      paddingLeft: theme.spacing.unit * 5,
    },
  },
});

export default headerStyle;
