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
    backgroundColor: theme.palette.primary.light,
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
    backgroundColor: theme.palette.primary.main,
  },
  toolbar: theme.mixins.toolbar,
  filterContent: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

export default filterStyle;
