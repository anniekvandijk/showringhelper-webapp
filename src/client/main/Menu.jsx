import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home';
import { setSelectedMenuItem } from '../../redux/navigationReducer';

const drawerWidth = 0;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
});

class Menu extends React.PureComponent {
  render() {
    const { classes, selectedMenuItem: selectedItem, setSelected } = this.props;
    return (
      <Drawer
        id="main-menu-drawer"
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <MenuList
          id="main-menu-list"
        >
          <MenuItem
            component={Link}
            to="/home"
            selected={selectedItem === 0}
            onClick={() => setSelected(0, 'Home')}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText inset primary="Home" />
          </MenuItem>
        </MenuList>
      </Drawer>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedMenuItem: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedMenuItem: state.navigation.menu.selectedMenuItem
});

const mapDispatchToProps = dispatch => ({
  setSelected: (index, header) => dispatch(setSelectedMenuItem(index, header))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Menu));
