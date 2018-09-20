const drawerWidth = 320;
const drawerActionWidth = 56;

const filterStyle = theme => ({
  drawerPaper: {
    width: drawerWidth,
    left: drawerActionWidth,
    zIndex: theme.zIndex.drawer - 1,
    transition: theme.transitions.create('left', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    ...theme.mixins.gutters(),
  },
  drawerPaperClose: {
    transition: theme.transitions.create('left', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    left: -drawerWidth,
  },
  drawerPaperAction: {
    boxSizing: 'content-box',
    width: drawerActionWidth,
    backgroundColor: theme.palette.primary.dark,
  },
  drawerPaperActionIcon: {
    color: theme.palette.primary.contrastText,
  },
  toolbar: theme.mixins.toolbar,
  filterContent: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export default filterStyle;
