import { dark } from '../../utils/theme';

const headerStyle = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  mainMenu: {
    display: 'flex',
    marginLeft: 'auto',
  },
  rightMenu: {
    display: 'flex',
    marginLeft: 'auto',
  },
  // Dropdown menu & mobile drawer style
  paperBackgroundColor: {
    backgroundColor: dark.background.paper,
  },
  listItem: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: dark.action.hover,
    },
    '&$selected, &$selected:hover': {
      backgroundColor: dark.action.selected,
    },
  },
  selected: {},
  listItemDivider: {
    borderBottomColor: dark.divider,
  },
  listItemTextColor: {
    color: dark.text.primary,
  },
  listItemIconColor: {
    color: dark.text.primary,
  },
  buttonActive: {
    backgroundColor: dark.action.selected,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    '&:hover': {
      backgroundColor: dark.action.selected,
    },
  },
});

export default headerStyle;
