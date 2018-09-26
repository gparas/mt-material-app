const drawerWidth = 320;
const drawerActionWidth = 48;

const filterStyle = theme => ({
  drawerPaper: {
    width: drawerWidth,
    left: drawerActionWidth,
    zIndex: theme.zIndex.drawer - 1,
    transition: theme.transitions.create('left', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // ...theme.mixins.gutters(),
  },
  drawerPaperClose: {
    transition: theme.transitions.create('left', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    left: -drawerWidth,
  },
  drawerPaperAction: {
    width: drawerActionWidth,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
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
